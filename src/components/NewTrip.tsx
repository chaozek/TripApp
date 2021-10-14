import { AW, GB, NL } from "../context/config";
import { AiOutlineCheck } from "react-icons/ai";
import { ButtonIcon } from "../GlobalStyles";
import { CleevioContext } from "../context/CleevioState";
import { PageName, WrapperDiv } from "./Home";
import { Redirect } from "react-router-dom";
import { YellowButton } from "../GlobalStyles";
import { theme } from "../GlobalStyles";
import { useContext, useState } from "react";
import FadeIn from "react-fade-in";
import ReactFlagsSelect from "react-flags-select";
import buttonLoading from "../imgs/buttonLoading.gif";
import styled from "styled-components";

type Iprops = {
  address: {
    street: string;
    street_num: any;
    city: string;
    country: string;
    zip: string;
  };
};
export const NewTrip = () => {
  const context = useContext(CleevioContext);
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

  if (context.redirect === "redirect") {
    return <Redirect push to="/" />;
  }
  const onSelect = (code: string) => {
    setSelected(code);
    context.setInputError({ name: "", error: "" });
    context.setFlagStatus(code);
    findCountry(context.countries, code);
  };
  if (context.countries.length === 0) {
    context.getCountries();
  }
  const findCountry = (
    countries: {
      value: string;
      label: string;
    }[],
    code: string
  ) => {
    if (code === `${NL}`) {
      code = `${AW}`;
    }
    if (countries && countries !== undefined) {
      let foundCountry: { value: string; label: string }[] = countries.filter(
        (c) => c.value.toLowerCase() === code.toLowerCase()
      );
      if (foundCountry[0] === undefined && code === `${GB}`) {
        context.setNewTrip((p: Iprops) => ({
          ...p,
          address: { ...p.address, country: "United Kingdom" },
        }));
      } else {
        context.setNewTrip((p: Iprops) => ({
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
          <Form
            onSubmit={(e) => {
              context.formHandleSubmit(e);
            }}
          >
            <Section>
              <label htmlFor="country">Where do you want to go</label>
              {context.flagStatus.length <= 0 ? (
                <div>
                  <p style={{ color: "red", margin: "20px 0px 0px 0px" }}>
                    {context.inputError.error}
                  </p>
                </div>
              ) : undefined}
              <FlagSelect
                selectButtonClassName="menu-flags-button"
                selected={selected}
                onSelect={onSelect}
                countries={countriesPlug}
                border={context.inputError.name === "flag" ? "border" : ""}
              />
            </Section>
            <Section>
              <label htmlFor="start_date">Start date</label>
              <br />
              {context.inputError.name === "start_date" ? (
                <div>
                  <ErrorTag>{context.inputError.error}</ErrorTag>
                </div>
              ) : (
                ""
              )}
              <Input
                type="date"
                name="start_date"
                min="2020-01-01"
                max="2022-12-31"
                black={context.newTrip.start_date ? "black" : ""}
                value={context.newTrip.start_date}
                border={
                  context.inputError.name === "start_date" ? "border" : ""
                }
                onChange={context.handleChange}
              />{" "}
              <br />
              <label htmlFor="end_date">End date</label>
              <br />
              {context.inputError.name === "end_date" ? (
                <div>
                  <div>
                    <ErrorTag>{context.inputError.error}</ErrorTag>
                  </div>
                </div>
              ) : undefined}
              <Input
                type="date"
                name="end_date"
                value={context.newTrip.end_date}
                min={context.newTrip.start_date}
                black={context.newTrip.end_date ? "black" : ""}
                max="2022-12-31"
                border={context.inputError.name === "end_date" ? "border" : ""}
                onChange={context.handleChange}
              />{" "}
            </Section>
            <Section>
              <label htmlFor="company_name" placeholder="Type here...">
                Company name
              </label>
              <br />
              {context.inputError.name === "company_name" ? (
                <div>
                  <div>
                    <ErrorTag>{context.inputError.error}</ErrorTag>
                  </div>
                </div>
              ) : undefined}

              <Input
                type="text"
                onChange={context.handleChange}
                placeholder="Type here..."
                name="company_name"
                border={
                  context.inputError.name === "company_name" ? "border" : ""
                }
                value={context.newTrip.company_name}
              />
              <br />

              <label htmlFor="city">City</label>
              <br />
              {context.inputError.name === "city" ? (
                <div>
                  <ErrorTag>{context.inputError.error}</ErrorTag>
                </div>
              ) : undefined}
              <Input
                type="text"
                onChange={context.handleChange}
                placeholder="Type here..."
                name="city"
                value={context.newTrip.address.city}
                border={context.inputError.name === "city" ? "border" : ""}
              />
              <br />
              <label htmlFor="street_num">Street Number</label>
              <br />
              {context.inputError.name === "street_num" ? (
                <div>
                  <p style={{ margin: "0", color: "red" }}>
                    {context.inputError.error}
                  </p>
                </div>
              ) : undefined}
              <Input
                value={context.newTrip.address.street_num}
                type="number"
                onChange={context.handleChange}
                placeholder="Type here..."
                name="street_num"
                min="0"
                border={
                  context.inputError.name === "street_num" ? "border" : ""
                }
              />
              <br />
              <label htmlFor="street">Street</label>
              <br />
              {context.inputError.name === "street" ? (
                <div>
                  <ErrorTag>{context.inputError.error}</ErrorTag>
                </div>
              ) : undefined}
              <Input
                value={context.newTrip.address.street}
                type="text"
                onChange={context.handleChange}
                placeholder="Type here..."
                name="street"
                border={context.inputError.name === "street" ? "border" : ""}
              />
              <br />

              <label htmlFor="zip">Zip code</label>
              <br />
              {context.inputError.name === "zip" ? (
                <div>
                  <ErrorTag>{context.inputError.error}</ErrorTag>
                </div>
              ) : undefined}
              <Input
                type="text"
                onChange={context.handleChange}
                placeholder="Type here..."
                name="zip"
                border={context.inputError.name === "zip" ? "border" : ""}
                value={context.newTrip.address.zip}
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
                  onChange={context.handleChange}
                  name="covid"
                  value="true"
                />
                Yes
                <br />
              </Item>
              <Item>
                <RadioInput
                  type="radio"
                  onChange={context.handleChange}
                  name="covid"
                  defaultChecked
                  value="false"
                />
                No
              </Item>
              {context.newTrip.covid === true ? (
                <FadeIn>
                  <Hr />

                  <label htmlFor="covidDate">
                    Date of receiving test results
                  </label>
                  <br />
                  {context.newTrip.covid === true &&
                  context.inputError.name === "covidDate" ? (
                    <div>
                      <ErrorTag>{context.inputError.error}</ErrorTag>
                    </div>
                  ) : undefined}
                  <Input
                    type="date"
                    onChange={context.handleChange}
                    id="start"
                    name="covid_test_date"
                    value={context.newTrip.covid_test_date}
                    black={context.newTrip.covid_test_date ? "black" : ""}
                    min="2020-01-01"
                    max="2022-12-31"
                    border={
                      context.inputError.name === "covidDate" ? "border" : ""
                    }
                  />
                </FadeIn>
              ) : null}

              <br />
            </Section>
            <div>
              <Hr />
              <AlignButton>
                <YellowButton
                  disabled={context.loading ? true : false}
                  type="submit"
                  width="300px"
                >
                  <p>Save</p>
                  <ButtonIcon>
                    {context.loading ? (
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
};
const Form = styled.form`
  @media (min-width: ${theme.sizes.desktop}px) {
    width: 50%;
  }
  @media (max-width: ${theme.sizes.desktop}px) {
    width: 80%;
  }

  @media (max-width: ${theme.sizes.mobile}px) {
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
  background-color: ${theme.color.gray};
  color: ${theme.color.black};
  label {
  }
  @media (max-width: 900px) {
    width: 100%;
  }
  @media (max-width: ${theme.sizes.mobile}px) {
    width: 90%;
  }
`;
const RadioInput = styled.input`
  color: ${theme.color.darkGray};
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
  color: ${theme.color.red};
  margin: 0rem;
`;
const FlagSelect = styled(ReactFlagsSelect)<{
  border?: string;
}>`
  background-color: white;
  border: none;
  border-radius: 10px;
  width: 100%;
  height: 48px;
  font-size: 11px !important;
  margin: 0;
  margin-top: 1rem;
  padding: 0 !important;
  border: ${(props) =>
    props.border === "" ? "none" : "1px solid red"} !important;
  & .ReactFlagsSelect-module_selectOption__3pcgW {
    font-size: 11px;
    padding: 0.5rem 0rem 0.5rem 1rem !important;
    margin: 0 !important;
  }
  & .ReactFlagsSelect-module_fullWidthOptions__1XeR6 {
    margin: 0 !important;
    padding: 0rem 0rem 0rem 0rem !important;
  }
  & #rfs-btn {
    border: none;
    width: 100%;
    height: 45px;
    margin: 0;
    font-size: 13px !important;
  }
  & .error {
    border: 1px red solid;
  }
  & .ReactFlagsSelect-module_selectValue__152eS {
    color: ${theme.color.gray};
    color: ${theme.color.black};
  }
`;
const Item = styled.div`
  background-color: #${theme.color.white};
  display: inline-block;
  padding: 0.6rem 1rem;
  margin: 0rem 0.5rem 0rem 0rem;
  border-radius: 10px;
`;
const Input = styled.input<{ black?: string; border?: string }>`
  color: ${(props) => props.black} !important;
  border: ${(props) =>
    props.border === "" ? "none" : "1px solid red"} !important;

  ::-webkit-datetime-edit-text,
  ::-webkit-datetime-edit-month-field,
  ::-webkit-datetime-edit-day-field,
  ::-webkit-datetime-edit-year-field {
    color: ${(props) => props.black}!important;
  }
`;
const Hr = styled.hr`
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid ${theme.color.gray};
  padding: 0;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;
