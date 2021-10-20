import { LeftSideBar } from "./LeftSideBar";
import { RightSideBar } from "./RightSideBar";
import { Route } from "react-router-dom";

import { theme } from "../GlobalStyles";
import styled from "styled-components";

export const RegularRoute = ({
  component: Component,
  layout: Container,
  ...rest
}: any) => (
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

  @media (max-width: ${theme.sizes.desktop}px) {
    grid-template-columns: 1fr 2fr 0fr;
    grid-template-areas:
      "leftSidebar main"
      "leftSidebar main";
  }
  @media (max-width: ${theme.sizes.tablet}px) {
    grid-template-areas:
      "leftSidebar  main main"
      "leftSidebar rightSidebar rightSidebar";
  }
  @media (max-width: ${theme.sizes.mobile}px) {
    grid-template-columns: 1fr;
    height: auto;
    grid-template-areas:
      "leftSidebar"
      "main"
      "rightSidebar";
  }
`;
