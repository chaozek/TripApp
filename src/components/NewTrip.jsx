import { CleevioContext } from "../context/CleevioState";
import { PageName } from "./Home";
import France from "../imgs/France.png";
import Loading from "../imgs/Loading.gif";
import React, { useContext, useEffect } from "react";
import Select from "react-select";
import styled from "styled-components";

export default function NewTrip() {
  const { handleChange, country, setCountry, newTrip, trips, handleSubmit } =
    useContext(CleevioContext);

  return (
    <>
      <div>
        <PageName padding>New Trip</PageName>
        <NewTripDiv>
          <Form onSubmit={handleSubmit}>
            <Section>
              <label htmlFor="country">Where do you want to go</label>
              <br />

              <select
                onChange={(e) => {
                  handleChange(e);
                }}
                type="text"
                name="country"
                value={newTrip.address.country}
              >
                {country ? (
                  country.map((data, i) => (
                    <option key={i} value={data.url} required>
                      {data.label}
                    </option>
                  ))
                ) : (
                  <option required>loading...</option>
                )}
              </select>
            </Section>
            <Section>
              <label htmlFor="start_date">Start date</label>
              <br />
              <input
                type="date"
                name="start_date"
                defaultValue="2020-07-22"
                min="2020-01-01"
                max="2022-12-31"
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
                defaultValue="2020-07-22"
                min="2020-01-01"
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
                value={newTrip.company_name}
              />
              <br />
              <label htmlFor="city">City</label>
              <br />
              <input
                type="text"
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
                onChange={(e) => {
                  handleChange(e);
                }}
                name="covid"
                defaultValue="false"
                value="false"
              />{" "}
              YES
              <input
                type="radio"
                onChange={(e) => {
                  handleChange(e);
                }}
                name="covid"
                defaultValue="true"
                value="true"
              />{" "}
              NO
              <br />
              <label htmlFor="covidDate">Date of receiving test results</label>
              <br />
              <input
                type="date"
                onChange={(e) => {
                  handleChange(e);
                }}
                id="start"
                name="covid_test_date"
                defaultValue="2020-07-22"
                value={newTrip.covid_test_date}
                min="2020-01-01"
                max="2022-12-31"
              />{" "}
              <br />
            </Section>
            <input type="submit" value="POST" />
          </Form>
        </NewTripDiv>
      </div>
    </>
  );
}
const Form = styled.form``;
const NewTripDiv = styled.div`
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Section = styled.div`
  border-radius: 10px;
  font-size: 14px;
  padding: 1rem 1.5rem;
  margin-top: 1rem;
  width: 600px;
  background-color: #f9f9fa;
  color: black;
  label {
  }
  @media (max-width: 900px) {
    width: 80%;
  }
  @media (max-width: 500px) {
    width: 85%;
  }
`;
