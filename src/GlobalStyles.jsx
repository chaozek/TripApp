import { Link } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
    font-family: 'Open Sans', sans-serif;
    font-size: .75rem;
    line-height: 16px;
color: #63666A;
  }

  ul{
  list-style: none; 
  display: flex;
  text-decoration: none;
  color: black;

  }
  h1,h2,h3,h4{
    color: black;
  }

input[type="text"],input[type="number"],input[type="date"], select{
  border: 1px solid #F1F1F2;
  border-radius: 10px;
  margin: 1rem 0rem;
  width: 100%;
  height: 48px;
}

::placeholder,
  ::-webkit-input-placeholder {
    color: #D0D0CE

  }
  :-ms-input-placeholder {
     color: #D0D0CE

  }
label{
  font-size: 14px;
}
`;
const theme = {
  fg: "palevioletred",
  bg: "#F9F9FA",
};
export const YellowButton = styled(Link)`
  margin-top: ${(props) => props.size};
  background-color: #f8d964;
  display: flex;
  cursor: pointer;
  border: none;
  justify-content: space-between;
  border-radius: 10px;
  padding: 0rem 0.1rem;
  width: 100%;
  text-decoration: none;
  color: black;
  text-align: left;
  p {
    padding: 0rem 1rem;
    font-weight: 600;
  }
`;
