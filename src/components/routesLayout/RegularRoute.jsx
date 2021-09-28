import { Route } from "react-router-dom";
import LeftSideBar from "../LeftSideBar";
import RightSideBar from "../RightSideBar";
import styled from "styled-components";
export const RegularRoute = ({
  component: Component,
  layout: Container,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => (
      <Container>
        <LeftSideBar />
        <RightSideBar {...props} />
        <Component {...props} />
      </Container>
    )}
  />
);
export const HomeLayout = styled.div`
  display: grid;
  height: calc(100vh);
  grid-template-columns: 1fr 4fr 1.5fr;
  grid-template-areas: "leftSidebar main rightSidebar";

  @media (max-width: 1200px) {
    grid-template-areas:
      "leftSidebar main main"
      "leftSidebar rightSidebar rightSidebar ";
  }
  @media (max-width: 850px) {
    grid-template-columns: 2fr;
    grid-template-areas:
      "leftSidebar main"
      "leftSidebar rightSidebar ";
  }
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "leftSidebar"
      "main"
      "rightSidebar";
  }
`;
