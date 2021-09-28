import { CleevioContext } from "../context/CleevioState";
import { Link } from "react-router-dom";
import { link } from "fs";
import France from "../imgs/France.png";
import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import styled from "styled-components";
export default function SingleTrip(props) {
  const { isEditing, setIsEditing } = useContext(CleevioContext);

  const [width, setWidth] = React.useState(window.innerWidth);
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [width]);
  const { id, end_date, start_date, company_name } = props;
  const { street, city, street_num, country } = props.address;

  return (
    <>
      <LinkDiv to={`/trip/${id}`}>
        {(width > 930 && window.location.pathname === "/trip") ||
        width < 930 ? (
          <SingleTripDiv>
            <Country>
              <ImgFlag src={France} alt="" />
              <h3>{country}</h3>
            </Country>
            <Content>
              <Header>Company</Header>
              <h3>{company_name}</h3>
              <p>
                {street} {street_num}, {props.address.street.zip} {city}
              </p>
              <Header>Date</Header>
              <p>
                {" "}
                {start_date} - {end_date}
              </p>
            </Content>
          </SingleTripDiv>
        ) : (
          <SingleTripDiv flex>
            <Left>
              <ImgFlag src={France} alt="" />
            </Left>
            <Right>
              <Align>
                <h3>{country}</h3>
                <Spacer>|</Spacer>
                <p>
                  {start_date} - {end_date}
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
const SingleTripDiv = styled.div`
  background-color: #f9f9fa;
  display: ${(props) => (props.flex ? "flex" : "block")};
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
  height: 48px;
  padding: 1rem;
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
