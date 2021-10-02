import "./style.css";
import { CleevioContext } from "../context/CleevioState";
import { PageName } from "./Home";
import Loading from "../imgs/Loading.gif";
import React, { useContext, useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import styled from "styled-components";
export default function NewTrip() {
  const {
    handleChange,
    countries,
    newTrip,
    handleSubmit,
    loading,
    getCountries,
    setNewTrip,
  } = useContext(CleevioContext);
  const [selected, setSelected] = useState("");
  const countriesPlug =
    ("Countries",
    ["AW", "GR", "FR", "PT", "ES", "IT", "SK", "SE", "CN", "AT", "GB"]);

  const onSelect = (code) => {
    setSelected(code);
    findCountry(countries, code);
  };
  if (countries === undefined) {
    getCountries();
  }
  const findCountry = (countries, code) => {
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
    <>
      <div>
        <PageName padding>New Trip</PageName>
        <NewTripDiv>
          <Form onSubmit={handleSubmit}>
            <Section>
              <label htmlFor="country">Where do you want to go</label>
              <br />
              <ReactFlagsSelect
                className="selectFlag"
                selectButtonClassName="menu-flags-button"
                style={{ display: "flex", flexDirection: "column" }}
                selected={selected}
                onSelect={onSelect}
                countries={countriesPlug}
              />
            </Section>
            <Section>
              <label htmlFor="start_date">Start date</label>
              <br />
              <input
                type="date"
                name="start_date"
                min="2020-01-01"
                max="2022-12-31"
                required
                value={newTrip.start_date}
                onChange={(e) => {
                  handleChange(e);
                }}
              />{" "}
              <br />
              <label htmlFor="end_date">End date</label>
              <br />
              <input
                type="date"
                name="end_date"
                value={newTrip.end_date}
                min={newTrip.start_date}
                required
                max="2022-12-31"
                onChange={(e) => {
                  handleChange(e);
                }}
              />{" "}
            </Section>
            <Section>
              <br />

              <label
                htmlFor="company_name"
                value={newTrip.end_date}
                required
                onChange={(e) => {
                  handleChange(e);
                }}
                placeholder="Type here..."
              >
                Company name
              </label>
              <br />
              <input
                type="text"
                onChange={(e) => {
                  handleChange(e);
                }}
                placeholder="Type here..."
                name="company_name"
                required
                value={newTrip.company_name}
              />
              <br />
              <label htmlFor="city">City</label>
              <br />
              <input
                type="text"
                required
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
              <input
                type="number"
                required
                onChange={(e) => {
                  handleChange(e);
                }}
                placeholder="Type here..."
                name="street_num"
                value={newTrip.address.street_num}
              />
              <br />

              <label htmlFor="street">Street</label>
              <br />
              <input
                type="text"
                required
                onChange={(e) => {
                  handleChange(e);
                }}
                placeholder="Type here..."
                name="street"
                value={newTrip.address.street}
              />
              <br />

              <br />

              <label htmlFor="zip">Zip code</label>
              <br />
              <input
                type="text"
                required
                onChange={(e) => {
                  handleChange(e);
                }}
                placeholder="Type here..."
                name="zip"
                value={newTrip.address.zip}
              />
            </Section>
            <Section>
              <br />
              <label htmlFor="covid">
                Have you been recently tested for COVID-19?
              </label>
              <br />
              <input
                type="radio"
                required
                onChange={(e) => {
                  handleChange(e);
                }}
                name="covid"
                value="false"
              />{" "}
              YES
              <input
                type="radio"
                required
                onChange={(e) => {
                  handleChange(e);
                }}
                name="covid"
                value="true"
              />{" "}
              NO
              <br />
              <label htmlFor="covidDate">Date of receiving test results</label>
              <br />
              <input
                type="date"
                required
                onChange={(e) => {
                  handleChange(e);
                }}
                id="start"
                name="covid_test_date"
                value={newTrip.covid_test_date}
                min="2020-01-01"
                max="2022-12-31"
              />{" "}
              <br />
            </Section>
            <button
              type="submit"
              disabled={loading ? true : false}
              style={{
                width: "100px",
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              {loading ? (
                <div>
                  <p> Save </p>
                  <img
                    src={Loading}
                    style={{
                      width: "20px",
                      position: "absolute",
                      right: "0",
                      top: "25%",
                    }}
                    alt=""
                  />
                </div>
              ) : (
                "Save"
              )}
            </button>
          </Form>
        </NewTripDiv>
      </div>
    </>
  );
}
const Form = styled.form`
  width: 50%;
  @media (max-width: 1200px) {
    width: 90%;
  }
  @media (max-width: 900px) {
    width: 90%;
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
`;
const Option = styled.option`
  background-color: Transparent;
  background: url("../imgs/France.png") no-repeat 0 0;
  padding: 4px;
  line-height: 21px;
  -webkit-appearance: none;
  height: 2rem;
`;
const Section = styled.div`
  width: 100%;
  border-radius: 10px;
  font-size: 14px;
  padding: 1rem 1.5rem;
  margin-top: 1rem;
  background-color: #f9f9fa;
  color: black;
  label {
  }
  @media (max-width: 900px) {
    width: 90%;
  }
  @media (max-width: 500px) {
    width: 85%;
  }
`;
