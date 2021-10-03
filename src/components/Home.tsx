import { CleevioContext } from "../context/CleevioState_";
import Loading from "../imgs/Loading.gif";
import React, { useContext, useEffect } from "react";
import SingleTrip from "./SingleTrip";
import styled from "styled-components";
const Home = () => {
  const { trips, getTrips, loading, error } = useContext(CleevioContext);
  useEffect(() => {
    getTrips();
  }, []);
  return (
    <WrapperDiv>
      <PageName>Your trips</PageName>

      {loading ? (
        <LoadingDiv src={Loading} alt="" />
      ) : (
        trips.map((trip) => <SingleTrip key={trip.id} {...trip} />)
      )}

      {!loading && trips.length === 0 ? "No data, add something" : null}
    </WrapperDiv>
  );
};

export default Home;
type ContainerType = {
  padding?: string;
};
export const PageName = styled.h2<ContainerType>`
  padding: ${(props) => (props.padding ? "1rem 2rem" : "none")};
  padding-bottom: 2.3rem;
  border-bottom: 1px solid #f1f1f2;
  text-align: left !important;
  align-items: flex-start;
`;

export const WrapperDiv = styled.div`
  grid-area: main;
  padding: 1rem 2rem;
`;
export const LoadingDiv = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;