import { CleevioContext } from "../CleevioState";
import { GB, UIBreakPoint, UK, flagConfig, tripUrl } from "../config";
import { Link } from "react-router-dom";
import { theme } from "../GlobalStyles";
import { useContext } from "react";
import Empty from "../imgs/Flags/empty.png";
import styled from "styled-components";
export type singleTripType = {
  id?: string;
  start_date: string;
  end_date: string;
  company_name: string;
  address: {
    street: string;
    street_num: any;
    city: string;
    country: string;
    zip: string;
  };
  covid: boolean;
  covid_test_date: string;
  layout?: string;
};

export const SingleTrip: React.FC<singleTripType> = (props: singleTripType) => {
  let renderCountry = "";
  const context = useContext(CleevioContext);
  const getCountry = (country: string) => {
    try {
      if (context.countries !== undefined) {
        let foundCountry = context.countries.filter((c) => c.label === country);
        let specificCountry = foundCountry[0];
        if (specificCountry.value === `${UK}`.toLowerCase()) {
          specificCountry.value = `${GB}`;
          renderCountry = specificCountry.value;
        } else if (specificCountry) renderCountry = specificCountry.value;
      }
    } catch (error) {
      context.setError(error.message);
    }
  };
  getCountry(props.address.country);
  return (
    <>
      <LinkDiv to={`${tripUrl}/${props.id}`}>
        {(context.width > UIBreakPoint &&
          window.location.pathname === `${tripUrl}`) ||
        context.width < UIBreakPoint ? (
          <SingleTripDiv>
            <Country>
              {renderCountry.length > 0 ? (
                <ImgFlag
                  src={`${process.env.REACT_APP_FLAG_URL}${renderCountry}${flagConfig}`}
                  alt=""
                  width="20px"
                />
              ) : (
                <ImgFlag src={Empty} alt="" />
              )}

              <h3>{props.address.country}</h3>
            </Country>
            <Content>
              <Header>Company</Header>
              <h3>{props.company_name}</h3>
              <p>
                {props.address.street} {props.address.street_num},{" "}
                {props.address.zip} {props.address.city}
              </p>
              <Header>Date </Header>
              <p>
                {props.start_date} –⁠ {props.end_date}
              </p>
            </Content>
          </SingleTripDiv>
        ) : (
          <SingleTripDiv flex="flex">
            <Left>
              {renderCountry.length > 0 ? (
                <ImgFlag
                  src={`${process.env.REACT_APP_FLAG_URL}${renderCountry}${flagConfig}`}
                  alt=""
                  width="30px"
                />
              ) : (
                <ImgFlag src={Empty} alt="emptyflag" />
              )}
            </Left>
            <Right>
              <Align>
                <h3>{props.address.country}</h3>
                <Spacer>|</Spacer>
                <p>
                  {props.start_date} –⁠ {props.end_date}
                </p>
              </Align>
              <Align>
                <h3>{props.company_name}</h3> <Spacer>|</Spacer>
                <p>
                  {props.address.street} {props.address.street_num},{" "}
                  {props.address.zip} {props.address.city}
                </p>
              </Align>
            </Right>
          </SingleTripDiv>
        )}
      </LinkDiv>
    </>
  );
};
type ContainerType = {
  flex?: string;
};
type ImgType = {
  width?: string;
};
const SingleTripDiv = styled.div<ContainerType>`
  background-color: ${theme.color.gray};
  display: ${(props: ContainerType) =>
    props.flex === "flex" ? "flex" : "block"};
  align-items: center;
  flex-wrap: wrap;
  border-radius: 10px;
  margin-top: 1rem;

  p {
    color: ${theme.color.darkGray};
  }
  p,
  h3 {
    margin: 0;
    padding: 0;
    font-size: 14px;
  }
`;
const ImgFlag = styled.img<ImgType>`
  width: ${(props) => props.width};
  margin: 10px;
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
  color: ${theme.color.darkGray};
  font-size: 12px;
  font-weight: normal;
  margin: 0;
  padding-top: 1rem;
`;
const Spacer = styled.div`
  margin: 0rem 1rem;
  color: ${theme.color.darkGray};
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
