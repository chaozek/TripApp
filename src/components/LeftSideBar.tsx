import { AiOutlinePlus } from "react-icons/ai";
import { ButtonIcon, YellowButtonLink } from "../GlobalStyles";
import { GiHamburgerMenu } from "react-icons/gi";
import { IconContext } from "react-icons";
import { Link, useLocation } from "react-router-dom";
import { TripAppContext } from "../Context";
import { theme } from "../GlobalStyles";
import { tripUrl } from "../config";
import { useContext, useState } from "react";
import clock_black from "../imgs/clock_black.png";
import clock_gray from "../imgs/clock_gray.png";
import logo from "../imgs/logo.png";
import styled from "styled-components";
export const LeftSideBar = () => {
  const context = useContext(TripAppContext);
  const [isMobile, setIsMobile] = useState(false);
  const handleClick = () => {
    setIsMobile(!isMobile);
  };
  let location = useLocation();
  const getLocation = location.pathname;
  return (
    <LeftSideBarDiv>
      <HeaderLink to="/">
        <H2>[PK]</H2>
      </HeaderLink>
      <MobileMenu onClick={handleClick}>
        <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
          <GiHamburgerMenu />
        </IconContext.Provider>
      </MobileMenu>
      {isMobile && context.width < theme.sizes.mobile ? (
        <PhoneMenuLinks>
          <MobileDiv>
            <Link to="/" onClick={handleClick}>
              <H2>[PK]</H2>
            </Link>
          </MobileDiv>
          <MobileMenu onClick={handleClick}>X</MobileMenu>
          <YellowButtonLink size="5rem" to={`${tripUrl}`} onClick={handleClick}>
            <p>New Trip</p>
            <p>+</p>
          </YellowButtonLink>
          <ClockButton
            white="white"
            disabled={getLocation === `${tripUrl}` ? false : true}
            onClick={handleClick}
          >
            {getLocation === `${tripUrl}` ? (
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
            <ClockButton disabled={getLocation === `${tripUrl}` ? false : true}>
              {getLocation === `${tripUrl}` ? (
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
};
type ContainerType = {
  white?: string;
};
const LeftSideBarDiv = styled.div`
  background-color: ${theme.color.gray};
  grid-area: leftSidebar;
  padding: 1rem 2rem;
  z-index: 2;
  @media (max-width: ${theme.sizes.mobile}px) {
    display: flex;
    height: 30px;
    background-color: ${theme.color.white};
  }
`;
const MobileMenu = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.color.white};
  font-weight: bold;
  font-size: 1.33rem;
  color: ${theme.color.darkGray};
  display: none;

  @media (max-width: ${theme.sizes.mobile}px) {
    border: none;
    display: block;
    height: 30px;
    cursor: pointer;
    padding: 3px;
    z-index: 10;
  }
`;
const LogoDiv = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3rem;
  @media (max-width: ${theme.sizes.mobile}px) {
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
  }
`;
const MenuLinks = styled.div`
  flex-direction: column;
  @media (max-width: ${theme.sizes.mobile}px) {
    display: none;
    height: 30px;
  }
`;
const MobileDiv = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;
const HeaderLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const H2 = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  @media (max-width: ${theme.sizes.mobile}px) {
    margin: 0px !important;
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
  }
`;
const Clock = styled.img`
  flex-wrap: nowrap;
  margin-right: 0.5rem;
`;
const ClockButton = styled.button<ContainerType>`
  display: flex;
  margin-top: 2rem;
  border: none;
  background-color: ${(props: ContainerType) =>
    props.white === "white" ? `${theme.color.white}` : `${theme.color.gray}`};
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none !important;
`;

const PhoneMenuLinks = styled.div`
  @media (max-width: ${theme.sizes.mobile}px) {
    display: relative;
    position: absolute;
    padding-left: inherit;
    padding-right: inherit;
    position: fixed;
    padding-top: 1rem;
    right: 0;
    list-style: none;
    background-color: ${theme.color.white};
    left: 0;
    top: 0;
    transition: all 0.5 ease-out;
    height: 100vh;
  }
`;
