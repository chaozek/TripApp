import { PageName } from "./Home";
import React from "react";
import styled from "styled-components";
export default function NewTrip() {
  return (
    <>
      <NewTripDiv>
        <PageName>NewTrip</PageName>

        <form>
          <Section>
            <label htmlFor="country">Where do you want to go</label>
            <br />
            <select type="text" name="country" />
          </Section>
          <Section>
            <label htmlFor="trip-start">Start date</label>
            <br />
            <input
              type="date"
              name="trip-start"
              defaultValue="2020-07-22"
              min="2020-01-01"
              max="2022-12-31"
            />{" "}
            <br />
            <label htmlFor="trip-end">End date</label>
            <br />
            <input
              type="date"
              name="trip-end"
              defaultValue="2020-07-22"
              min="2020-01-01"
              max="2022-12-31"
            />{" "}
          </Section>
          <Section>
            <br />

            <label htmlFor="company" placeholder="Type here...">
              Company name
            </label>
            <br />
            <input type="text" placeholder="Type here..." name="company" />
            <br />
            <label htmlFor="city">City</label>
            <br />
            <input type="text" placeholder="Type here..." name="city" />
            <br />

            <label htmlFor="street">Street</label>
            <br />
            <input type="text" placeholder="Type here..." name="street" />
            <br />

            <label htmlFor="streetNum">Street number</label>
            <br />
            <input type="number" placeholder="Type here..." name="streetNum" />
            <br />

            <label htmlFor="zipCode">Zip code</label>
            <br />
            <input type="text" placeholder="Type here..." name="zipCode" />
          </Section>
          <Section>
            <br />
            <label htmlFor="question-one">
              Have you been recently tested for COVID-19?
            </label>
            <br />
            <input type="radio" name="question-one" defaultValue="yes" /> YES
            <input type="radio" name="question-two" defaultValue="no" /> NO
            <br />
            <label htmlFor="covidDate">Date of receiving test results</label>
            <br />
            <input
              type="date"
              id="start"
              name="covidDate"
              defaultValue="2020-07-22"
              min="2020-01-01"
              max="2022-12-31"
            />{" "}
            <br />
          </Section>
        </form>
      </NewTripDiv>
    </>
  );
}

const NewTripDiv = styled.div`
  padding: 1rem 2rem;
`;

const Section = styled.div`
  border-radius: 10px;
  font-size: 14px;
  width: 50%;
  margin: 0 auto;
  padding: 1rem 2rem;
  margin-top: 1rem;
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
