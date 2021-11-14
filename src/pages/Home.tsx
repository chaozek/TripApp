import { SingleTrip } from "../components/SingleTrip";
import { TripAppContext } from "../Context";
import { theme } from "../GlobalStyles";
import { useContext, useEffect } from "react";
import FadeIn from "react-fade-in";
import Loading from "../imgs/Loading.gif";
import styled from "styled-components";
export const Home = () => {
  const context = useContext(TripAppContext);
  const { trips } = useContext(TripAppContext);
  useEffect(() => {
    context.getCountries();
    context.getTrips();
  }, []);

  return (
    <WrapperDiv>
      <PageName>Your trips</PageName>

      {context.loading ? (
        <LoadingDiv src={Loading} alt="" />
      ) : (
        trips.map((trip) => (
          <FadeIn key={trip.id}>
            <SingleTrip {...trip} />
          </FadeIn>
        ))
      )}

      {!context.loading && trips.length === 0 ? context.error : null}
    </WrapperDiv>
  );
};

type ContainerType = {
  padding?: string;
};
export const PageName = styled.h2<ContainerType>`
  padding: ${(props) => (props.padding ? "1rem 2rem" : "none")};
  padding-bottom: 2.3rem;
  border-bottom: 1px solid ${theme.color.white};
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
