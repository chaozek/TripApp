import { AiOutlinePlus } from "react-icons/ai";
import { ButtonIcon, YellowButtonLink } from "../GlobalStyles";
import { CleevioContext } from "../context/CleevioState_";
import { GiHamburgerMenu } from "react-icons/gi";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import clock_black from "../imgs/clock_black.png";
import clock_gray from "../imgs/clock_gray.png";
import logo from "../imgs/logo.png";
import styled from "styled-components";

function LeftSideBar() {
  const { width } = useContext(CleevioContext);
  const [isMobile, setIsMobile] = useState(false);
  const handleClick = () => {
    setIsMobile(!isMobile);
  };

  const getLocation = window.location.pathname;
  return (
    <LeftSideBarDiv>
      <Link to="/">
        <LogoDiv src={logo} alt="" />
      </Link>
      <MobileMenu onClick={handleClick}>
        <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
          <GiHamburgerMenu />
        </IconContext.Provider>
      </MobileMenu>
      {isMobile && width < 550 ? (
        <PhoneMenuLinks>
          <MobileDiv>
            <Link to="/" onClick={handleClick}>
              <LogoDiv src={logo} alt="" />
            </Link>
          </MobileDiv>
          <MobileMenu onClick={handleClick}>X</MobileMenu>
          <YellowButtonLink size="5rem" to="/trip" onClick={handleClick}>
            <p>New Trip</p>
            <p>+</p>
          </YellowButtonLink>
          <ClockButton
            white="white"
            disabled={getLocation === "/trip" ? false : true}
            onClick={handleClick}
          >
            {getLocation === "/trip" ? (
              <Clock src={clock_black} alt="clock" />
            ) : (
              <Clock src={clock_gray} alt="clock" />
            )}
            Your Trips
          </ClockButton>
        </PhoneMenuLinks>
      ) : (
        <MenuLinks>
          <YellowButtonLink to="/trip" onClick={handleClick}>
            <p>New Trip</p>
            <ButtonIcon>
              <AiOutlinePlus />
            </ButtonIcon>
          </YellowButtonLink>
          <Link to="/">
            {" "}
            <ClockButton disabled={getLocation === "/trip" ? false : true}>
              {getLocation === "/trip" ? (
                <Clock src={clock_black} alt="clock" />
              ) : (
                <Clock src={clock_gray} alt="clock" />
              )}
              Your Trips
            </ClockButton>
          </Link>
        </MenuLinks>
      )}
    </LeftSideBarDiv>
  );
}
type ContainerType = {
  white?: string;
};
export default LeftSideBar;
const LeftSideBarDiv = styled.div`
  background-color: #f9f9fa;
  grid-area: leftSidebar;
  padding: 1rem 2rem;
  z-index: 2;
  @media (max-width: 550px) {
    display: flex;
    height: 30px;
    background-color: white;
  }
`;
const MobileMenu = styled.button`
  vertical-align: bottom;
  background-color: #f1f1f2;
  font-weight: bold;
  font-size: 1.33rem;
  color: #76787b;
  display: none;

  @media (max-width: 550px) {
    border-radius: 10px;
    border: none;
    display: inline;
    height: 40px;
    width: 40px;
    cursor: pointer;
    padding: 0;
  }
`;
const LogoDiv = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3rem;
  @media (max-width: 550px) {
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
  }
`;
const MenuLinks = styled.div`
  flex-direction: column;
  @media (max-width: 550px) {
    display: none;
    height: 30px;
  }
`;
const MobileDiv = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;
const Clock = styled.img`
  margin-right: 0.5rem;
`;
const ClockButton = styled.button<ContainerType>`
  margin-top: 2rem;
  border: none;
  background-color: ${(props: ContainerType) =>
    props.white === "white" ? "white" : "#f9f9fa"};
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
`;

const PhoneMenuLinks = styled.div`
  @media (max-width: 550px) {
    display: relative;
    position: absolute;
    padding-left: inherit;
    padding-right: inherit;
    position: fixed;
    padding-top: 1rem;
    right: 0;
    list-style: none;
    background-color: white;
    left: 0;
    top: 0;
    transition: all 0.5 ease-out;
    height: 100vh;
  }
`;
