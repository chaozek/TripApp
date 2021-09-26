import { PageName } from "./Home";
import React from "react";
import styled from "styled-components";

export default function TripDetail() {
  return (
    <TripDiv>
      <PageName>Detail</PageName>
    </TripDiv>
  );
}

const TripDiv = styled.div`
  padding: 1rem 2rem;
`;
