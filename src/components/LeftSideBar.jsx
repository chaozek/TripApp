import { GiHamburgerMenu } from "react-icons/gi";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { YellowButton } from "../GlobalStyles";
import React, { useState } from "react";
import logo from "../imgs/logo.png";
import styled from "styled-components";

function LeftSideBar(props) {
  const [isMobile, setIsMobile] = useState(false);
  const handleClick = () => {
    setIsMobile(!isMobile);
  };
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
      {isMobile ? (
        <PhoneMenuLinks>
          <MobileDiv>
            <Link to="/">
              <LogoDiv src={logo} alt="" />
            </Link>
          </MobileDiv>
          <MobileMenu onClick={handleClick}>X</MobileMenu>
          <YellowButton size="5rem" to="/trip">
            <p>New Trip</p>
            <p>+</p>
          </YellowButton>
        </PhoneMenuLinks>
      ) : (
        <MenuLinks>
          <YellowButton to="/trip">
            <p>New Trip</p>
            <p>+</p>
          </YellowButton>
        </MenuLinks>
      )}
    </LeftSideBarDiv>
  );
}

export default LeftSideBar;
const LeftSideBarDiv = styled.div`
  background-color: #f9f9fa;
  grid-area: leftSidebar;
  padding: 1rem 2rem;
  @media (max-width: 550px) {
    display: flex;
    height: 30px;
    background-color: white;
  }
`;
const MobileMenu = styled.button`
  vertical-align: bottom;
  background-color: #f1f1f2;
  font-weight: 200;
  font-size: 1.33rem;
  color: #76787b;
  display: none;
  @media (max-width: 550px) {
    border-radius: 10px;
    border: none;
    display: block;
    position: absolute;
    left: 25px;
    height: 40px;
    width: 40px;
    cursor: pointer;
  }
`;
const LogoDiv = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3rem;
  text-align: center;
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
const Cancel = styled.button`
  display: none;
  @media (max-width: 550px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    background-color: aliceblue;
  }
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
