import { Link } from "react-router-dom";
import { YellowButton } from "../GlobalStyles";
import React, { useState } from "react";
import logo from "../imgs/logo.png";
import styled from "styled-components";
function LeftSideBar() {
  const [isMobile, setIsMobile] = useState(false);

  const handleClick = () => {
    setIsMobile(!isMobile);
  };
  return (
    <LeftSideBarDiv>
      <Link to="/">
        <LogoDiv src={logo} alt="" />
      </Link>
      {isMobile ? (
        <PhoneMenuLinks>
          <Cancel onClick={handleClick}>X</Cancel>
          <li>
            <a href="">NEW TRIP</a>
          </li>
          <li>
            <a href="">Your Trips</a>
          </li>
        </PhoneMenuLinks>
      ) : (
        <MenuLinks>
          <YellowButton to="/trip">
            <p>New Trip</p>
            <p>+</p>
          </YellowButton>
        </MenuLinks>
      )}
      <MobileMenu onClick={handleClick}>Klikni</MobileMenu>
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
  }
`;
const MobileMenu = styled.button`
  background-color: green;
  display: none;
  @media (max-width: 550px) {
    display: block;
    height: 30px;
  }
`;
const LogoDiv = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3rem;
  text-align: center;
`;
const MenuLinks = styled.div`
  flex-direction: column;
  @media (max-width: 550px) {
    display: none;
    height: 30px;
  }
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
    display: block;
    list-style: none;
    background-color: yellow;
    left: 0;
    top: 0;
    transition: all 0.5 ease-out;
    height: 100vh;
    width: 100%;
  }
`;
