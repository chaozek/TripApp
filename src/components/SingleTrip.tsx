import { CleevioContext } from "../context/CleevioState_";
import { Link } from "react-router-dom";

import { useContext } from "react";
import Empty from "../imgs/Flags/empty.png";
import styled from "styled-components";
export default function SingleTrip(props) {
  let renderCountry = "";
  const { width, countries, getCountries, getTrips, setError } =
    useContext(CleevioContext);

  const { id, end_date, start_date, company_name } = props;
  const { street, city, street_num, country } = props.address;

  const getCountry = (country: string) => {
    try {
      if (countries !== undefined) {
        let foundCountry = countries.filter((c) => c.label === country);
        let specificCountry = foundCountry[0];
        if (specificCountry.value === "uk") {
          specificCountry.value = "gb";
          renderCountry = specificCountry.value;
        } else if (specificCountry.value === "aw") {
          specificCountry.value = "NL";
          renderCountry = specificCountry.value;
        } else if (specificCountry) renderCountry = specificCountry.value;
      }
    } catch (error) {
      let errorMessage = "Failed to load";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      setError(errorMessage);
    }
  };
  getCountry(country);
  return (
    <>
      <LinkDiv to={`/trip/${id}`}>
        {(width > 930 && window.location.pathname === "/trip") ||
        width < 930 ? (
          <SingleTripDiv>
            <Country>
              {renderCountry.length > 0 ? (
                <ImgFlag
                  src={`https://www.countryflags.io/${renderCountry}/flat/64.png`}
                  alt=""
                />
              ) : (
                <ImgFlag src={Empty} alt="" />
              )}

              <h3>{country}</h3>
            </Country>
            <Content>
              <Header>Company</Header>
              <h3>{company_name}</h3>
              <p>
                {street} {street_num}, {props.address.street.zip} {city}
              </p>
              <Header>Date </Header>
              <p>
                {start_date} –⁠ {end_date}
              </p>
            </Content>
          </SingleTripDiv>
        ) : (
          <SingleTripDiv flex="flex">
            <Left>
              {renderCountry.length > 0 ? (
                <ImgFlag
                  src={`https://www.countryflags.io/${renderCountry}/flat/64.png`}
                  alt=""
                />
              ) : (
                <ImgFlag src={Empty} alt="" />
              )}
            </Left>
            <Right>
              <Align>
                <h3>{country}</h3>
                <Spacer>|</Spacer>
                <p>
                  {start_date} –⁠ {end_date}
                </p>
              </Align>
              <Align>
                <h3>{company_name}</h3> <Spacer>|</Spacer>
                <p style={{ fontSize: "14px" }}>
                  {street} {street_num}, {props.address.street.zip} {city}
                </p>
              </Align>
            </Right>
          </SingleTripDiv>
        )}
      </LinkDiv>
    </>
  );
}
type ContainerType = {
  flex?: string;
};
const SingleTripDiv = styled.div<ContainerType>`
  background-color: #f9f9fa;
  display: ${(props: ContainerType) =>
    props.flex === "flex" ? "flex" : "block"};
  align-items: center;
  flex-wrap: wrap;
  border-radius: 10px;
  margin-top: 1rem;

  p {
    color: #97999b;
  }
  p,
  h3 {
    margin: 0;
    padding: 0;
    font-size: 14px;
  }
`;
const ImgFlag = styled.img`
  width: 48px;
  padding: 1rem;
  height: 48px;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  flex: 11;
`;
const Left = styled.div`
  flex: 1;
`;
const LinkDiv = styled(Link)`
  text-decoration: none;
`;
const Align = styled.div`
  display: flex;
  margin: 0.3rem 0rem;
`;
const Header = styled.h4`
  color: #97999b;
  font-size: 12px;
  font-weight: normal;
  margin: 0;
  padding-top: 1rem;
`;
const Spacer = styled.div`
  margin: 0rem 1rem;
  color: #97999b;
`;
const Country = styled.div`
  display: flex;
  align-items: center;
  flex: 12;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 12;
  padding: 0rem 1rem 1rem 1rem;
`;
