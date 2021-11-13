import { CleevioContext } from "../CleevioState";
import { SingleTrip } from "./SingleTrip";
import { theme } from "../GlobalStyles";
import { useContext, useEffect } from "react";
import FadeIn from "react-fade-in";
import Loading from "../imgs/Loading.gif";
import styled from "styled-components";
export const RightSideBar = (props: any) => {
  const context = useContext(CleevioContext);

  useEffect(() => {
    context.getTrips();
  }, []);
  return (
    <RightSideBarDiv>
      {props.location.pathname === "/trip" ? <h2>Your Trips</h2> : null}
      {props.location.pathname === "/trip" ? (
        context.trips ? (
          context.trips.map((trip) => (
            <FadeIn key={trip.id}>
              <SingleTrip layout="rightSideBar" {...trip} />
            </FadeIn>
          ))
        ) : (
          <LoadingDiv src={Loading} alt="loading" />
        )
      ) : (
        <>
          {" "}
          <h2>Tips & tricks</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo rerum
            molestiae facilis magni voluptas quam labore quod nemo eligendi
            dolores, ex voluptatem temporibus necessitatibus inventore.
            Obcaecati dolorem aspernatur voluptatibus, enim blanditiis dolore a
            velit odit excepturi animi culpa. Eos quae corrupti molestias et
            fugit, eveniet vel ullam eaque, reiciendis quas assumenda!
            Recusandae, beatae eos at harum aperiam aliquam nisi asperiores vero
            placeat impedit, debitis, ratione officia fugiat quibusdam in
            architecto!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo rerum
            molestiae facilis magni voluptas quam labore quod nemo eligendi
            dolores, ex voluptatem temporibus necessitatibus inventore.
            Obcaecati dolorem aspernatur voluptatibus, enim blanditiis dolore a
            velit odit excepturi animi culpa. Eos quae corrupti molestias et
            fugit, eveniet vel ullam eaque, reiciendis quas assumenda!
            Recusandae, beatae eos at harum aperiam aliquam nisi asperiores vero
            placeat impedit, debitis, ratione officia fugiat quibusdam in
            architecto!
          </p>
        </>
      )}
    </RightSideBarDiv>
  );
};

const RightSideBarDiv = styled.div`
  border-left: 2px solid ${theme.color.gray};
  grid-area: rightSidebar;
  padding: 1rem 2rem;

  overflow-x: hidden;
  @media (max-width: ${theme.sizes.desktop}px) {
    border-left: none;
    display: none;
  }
  @media (max-width: 850px) {
    border-left: none;
    display: none;
  }
`;
const LoadingDiv = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;
