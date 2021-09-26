import { CleevioContext } from "../context/CleevioState";
import Loading from "../imgs/Loading.gif";
import React, { useContext, useEffect } from "react";
import SingleTrip from "./SingleTrip";
import styled from "styled-components";
const Home = () => {
  const { trips } = useContext(CleevioContext);
  return (
    <HomeDiv>
      <PageName>Your trips</PageName>

      {trips ? (
        trips.map((trip) => <SingleTrip key={trip.id} {...trip} />)
      ) : (
        <LoadingDiv src={Loading} alt="" />
      )}
    </HomeDiv>
  );
};

export default Home;

export const PageName = styled.h2`
  padding-bottom: 2.3rem;
  border-bottom: 1px solid #f1f1f2;
`;

const HomeDiv = styled.div`
  grid-area: main;
  padding: 1rem 2rem;
`;
const LoadingDiv = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;
