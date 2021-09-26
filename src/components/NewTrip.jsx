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
              id="start"
              name="trip-start"
              defaultValue="2020-07-22"
              min="2020-01-01"
              max="2018-12-31"
            />{" "}
            <br />
            <label htmlFor="trip-start">End date</label>
            <br />
            <input
              type="date"
              id="start"
              name="trip-start"
              defaultValue="2020-07-22"
              min="2020-01-01"
              max="2018-12-31"
            />{" "}
          </Section>
          <Section>
            <br />

            <label htmlFor="trip-start">Company name</label>
            <br />
            <input
              type="text"
              name="trip-start"
              min="2020-01-01"
              max="2018-12-31"
            />
            <br />
            <label htmlFor="trip-start">City</label>
            <br />
            <input
              type="text"
              name="trip-start"
              min="2020-01-01"
              max="2018-12-31"
            />
            <br />

            <label htmlFor="trip-start">Street</label>
            <br />
            <input
              type="text"
              name="Street"
              min="2020-01-01"
              max="2018-12-31"
            />
            <br />

            <label htmlFor="trip-start">Street number</label>
            <br />
            <input
              type="number"
              name="Street"
              min="2020-01-01"
              max="2018-12-31"
            />
            <br />

            <label htmlFor="trip-start">Zip code</label>
            <br />
            <input
              type="text"
              name="trip-start"
              min="2020-01-01"
              max="2018-12-31"
            />
          </Section>
          <Section>
            <br />
            <label htmlFor="trip-start">
              Have you been recently tested for COVID-19?
            </label>
            <br />
            <input type="radio" name="question-one" defaultValue="yes" /> YES
            <input type="radio" name="question-one" defaultValue="no" /> NO
            <br />
            <label htmlFor="trip-start">Start date</label>
            <br />
            <input
              type="date"
              id="start"
              name="trip-start"
              defaultValue="2020-07-22"
              min="2020-01-01"
              max="2018-12-31"
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

  padding: 1rem 2rem;
  margin-top: 1rem;
  background-color: #f9f9fa;
  color: black;
  label {
  }
`;
