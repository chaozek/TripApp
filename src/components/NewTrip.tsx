import "./style.css";
import { AiOutlineCheck } from "react-icons/ai";
import { ButtonIcon } from "../GlobalStyles";
import { CleevioContext } from "../context/CleevioState_";
import { PageName, WrapperDiv } from "./Home";
import { YellowButton } from "../GlobalStyles";
import { useContext, useState } from "react";
import FadeIn from "react-fade-in";
import ReactFlagsSelect from "react-flags-select";
import buttonLoading from "../imgs/buttonLoading.gif";
import styled from "styled-components";
export default function NewTrip() {
  const {
    handleChange,
    countries,
    newTrip,
    formHandleSubmit,
    loading,
    getCountries,
    setNewTrip,
    inputError,
    flagStatus,
    setFlagStatus,
    setInputError,
  } = useContext(CleevioContext);
  const [selected, setSelected] = useState("");
  const countriesPlug = [
    "NL",
    "GR",
    "FR",
    "PT",
    "ES",
    "IT",
    "SK",
    "SE",
    "CN",
    "AT",
    "GB",
  ];

  const onSelect = (code) => {
    setSelected(code);
    setInputError({ name: "", error: "" });

    setFlagStatus(code);
    findCountry(countries, code);
  };
  if (countries.length === 0) {
    getCountries();
  }
  const findCountry = (countries, code) => {
    if (code === "NL") {
      code = "AW";
    }
    if (countries && countries !== undefined) {
      let foundCountry = countries.filter(
        (c) => c.value.toLowerCase() === code.toLowerCase()
      );
      if (foundCountry[0] === undefined && code === "GB") {
        setNewTrip((p) => ({
          ...p,
          address: { ...p.address, country: "United Kingdom" },
        }));
      } else {
        setNewTrip((p) => ({
          ...p,
          address: { ...p.address, country: foundCountry[0].label },
        }));
      }
    }
  };

  return (
    <WrapperDiv>
      <div>
        <PageName>New Trip</PageName>
        <NewTripDiv>
          <Form onSubmit={formHandleSubmit}>
            <Section>
              <label htmlFor="country">Where do you want to go</label>
              {flagStatus.length <= 0 ? (
                <div>
                  <p style={{ color: "red", margin: "20px 0px 0px 0px" }}>
                    {inputError.error}
                  </p>
                </div>
              ) : undefined}
              <ReactFlagsSelect
                className={`selectFlag ${
                  selected === "" ? "date-input--has-value" : ""
                }
                 ${inputError.name === "flag" ? "error" : ""}`}
                selectButtonClassName="menu-flags-button"
                selected={selected}
                onSelect={onSelect}
                countries={countriesPlug}
              />
            </Section>
            <Section>
              <label htmlFor="start_date">Start date</label>
              <br />
              {inputError.name === "start_date" ? (
                <div>
                  <p style={{ margin: "0", color: "red" }}>
                    {inputError.error}
                  </p>
                </div>
              ) : undefined}
              <input
                type="date"
                name="start_date"
                min="2020-01-01"
                max="2022-12-31"
                className={newTrip.start_date ? "date-input--has-value" : ""}
                value={newTrip.start_date}
                style={
                  inputError.name === "start_date"
                    ? { border: "1px solid red" }
                    : undefined
                }
                onChange={(e) => {
                  handleChange(e);
                }}
              />{" "}
              <br />
              <label htmlFor="end_date">End date</label>
              <br />
              {inputError.name === "end_date" ? (
                <div>
                  <p style={{ margin: "0", color: "red" }}>
                    {inputError.error}
                  </p>
                </div>
              ) : undefined}
              <input
                type="date"
                name="end_date"
                value={newTrip.end_date}
                min={newTrip.start_date}
                className={newTrip.end_date ? "date-input--has-value" : ""}
                max="2022-12-31"
                style={
                  inputError.name === "end_date"
                    ? { border: "1px solid red" }
                    : undefined
                }
                onChange={(e) => {
                  handleChange(e);
                }}
              />{" "}
            </Section>
            <Section>
              <label htmlFor="company_name" placeholder="Type here...">
                Company name
              </label>
              <br />
              {inputError.name === "company_name" ? (
                <div>
                  <p style={{ margin: "0", color: "red" }}>
                    {inputError.error}
                  </p>
                </div>
              ) : undefined}

              <input
                type="text"
                onChange={(e) => {
                  handleChange(e);
                }}
                placeholder="Type here..."
                name="company_name"
                style={
                  inputError.name === "company_name"
                    ? { border: "1px solid red" }
                    : undefined
                }
                value={newTrip.company_name}
              />
              <br />

              <label htmlFor="city">City</label>
              <br />
              {inputError.name === "city" ? (
                <div>
                  <p style={{ margin: "0", color: "red" }}>
                    {inputError.error}
                  </p>
                </div>
              ) : undefined}
              <input
                type="text"
                style={
                  inputError.name === "city"
                    ? { border: "1px solid red" }
                    : undefined
                }
                onChange={(e) => {
                  handleChange(e);
                }}
                placeholder="Type here..."
                name="city"
                value={newTrip.address.city}
              />
              <br />
              <label htmlFor="street_num">Street Number</label>
              <br />
              {inputError.name === "street_num" ? (
                <div>
                  <p style={{ margin: "0", color: "red" }}>
                    {inputError.error}
                  </p>
                </div>
              ) : undefined}
              <input
                value={newTrip.address.street_num}
                type="number"
                onChange={(e) => {
                  handleChange(e);
                }}
                placeholder="Type here..."
                name="street_num"
                min="0"
                style={
                  inputError.name === "street_num"
                    ? { border: "1px solid red" }
                    : undefined
                }
              />
              <br />
              <label htmlFor="street">Street</label>
              <br />
              {inputError.name === "street" ? (
                <div>
                  <p style={{ margin: "0", color: "red" }}>
                    {inputError.error}
                  </p>
                </div>
              ) : undefined}
              <input
                value={newTrip.address.street}
                type="text"
                onChange={(e) => {
                  handleChange(e);
                }}
                placeholder="Type here..."
                name="street"
                style={
                  inputError.name === "street"
                    ? { border: "1px solid red" }
                    : undefined
                }
              />
              <br />

              <label htmlFor="zip">Zip code</label>
              <br />
              {inputError.name === "zip" ? (
                <div>
                  <p style={{ margin: "0", color: "red" }}>
                    {inputError.error}
                  </p>
                </div>
              ) : undefined}
              <input
                type="text"
                onChange={(e) => {
                  handleChange(e);
                }}
                placeholder="Type here..."
                name="zip"
                style={
                  inputError.name === "zip"
                    ? { border: "1px solid red" }
                    : undefined
                }
                value={newTrip.address.zip}
              />
            </Section>
            <Section>
              <label htmlFor="covid">
                Have you been recently tested for COVID-19?
              </label>
              <br />
              <Item>
                <RadioInput
                  type="radio"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  name="covid"
                  value="true"
                />
                Yes
                <br />
              </Item>
              <Item>
                <RadioInput
                  type="radio"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  name="covid"
                  defaultChecked
                  value="false"
                />
                No
              </Item>
              {newTrip.covid === true ? (
                <FadeIn>
                  <Hr />

                  <label htmlFor="covidDate">
                    Date of receiving test results
                  </label>
                  <br />
                  <input
                    type="date"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    id="start"
                    name="covid_test_date"
                    value={newTrip.covid_test_date}
                    className={
                      newTrip.covid_test_date ? "date-input--has-value" : ""
                    }
                    min="2020-01-01"
                    max="2022-12-31"
                  />
                </FadeIn>
              ) : null}

              <br />
            </Section>
            <div>
              <Hr />
              <AlignButton>
                <YellowButton
                  disabled={loading ? true : false}
                  type="submit"
                  width="300px"
                >
                  <p>Save</p>
                  <ButtonIcon>
                    {loading ? (
                      <ButtonLoading src={buttonLoading} alt="loading" />
                    ) : (
                      <AiOutlineCheck />
                    )}
                  </ButtonIcon>
                </YellowButton>
              </AlignButton>
            </div>
          </Form>
        </NewTripDiv>
      </div>
    </WrapperDiv>
  );
}
const Form = styled.form`
  @media (min-width: 1200px) {
    width: 50%;
  }
  @media (max-width: 1200px) {
    width: 80%;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;
const NewTripDiv = styled.div`
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 500px) {
    padding: 0rem 0rem;
  }
`;

const Section = styled.div`
  border-radius: 10px;
  font-size: 14px;
  padding: 16px 1.5rem;
  margin-top: 1rem;
  background-color: #f9f9fa;
  color: black;
  label {
  }
  @media (max-width: 900px) {
    width: 90%;
  }
  @media (max-width: 500px) {
    width: 86%;
  }
`;
const RadioInput = styled.input`
  color: #76787b;
  font-weight: 600;
  font-size: 3rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;
const AlignButton = styled.div`
  display: flex;
  justify-content: center;
`;
const ButtonLoading = styled.img`
  width: 20px;
`;
const ErrorTag = styled.p`
  margin: "1rem 0rem 0rem 0rem";
  color: "red";
`;
const Item = styled.div`
  background-color: #f1f1f2;
  display: inline-block;
  padding: 0.6rem 1rem;
  margin: 0rem 0.5rem 0rem 0rem;
  border-radius: 10px;
`;
const Hr = styled.hr`
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #e5e5e5;
  padding: 0;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;
