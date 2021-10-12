import { Link } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
export const theme = {
  white: "#f1f1f2",
  gray: "#f9f9fa",
  darkGray: "#76787b",
  black: "#000000",
  red: "#ff0000",
  yellow: "#f8d964",
};

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
a{
  text-decoration: none !important;

}
  ul{
  list-style: none; 
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: black;

  }
  h1,h2,h3,h4{
    color: black;
  }
input{
  box-sizing: border-box; 
  -webkit-appearance: none;
  padding: 0rem 1rem;
  font-family: 'Open Sans', sans-serif;
letter-spacing: .0rem;

  
}

input:focus,textarea:focus {
    outline : none ;
}
input::-ms-clear {
    display : none ;
}
textarea {
    resize: none ;
}

button{
  -webkit-appearance: none;
-moz-appearance: none;
appearance: none;
}
input[type="text"],input[type="number"],input[type="date"], select{
  border: 1px solid ${theme.gray};
  border-radius: 10px;
  width: 100%;
  height: 48px;
}
input[type="date"]::-webkit-datetime-edit-text,
input[type="date"]::-webkit-datetime-edit-month-field,
input[type="date"]::-webkit-datetime-edit-day-field,
input[type="date"]::-webkit-datetime-edit-year-field {
  color: #${theme.gray};
}
input[type="date"].date-input--has-value::-webkit-datetime-edit-text,
input[type="date"].date-input--has-value::-webkit-datetime-edit-month-field,
input[type="date"].date-input--has-value::-webkit-datetime-edit-day-field,
input[type="date"].date-input--has-value::-webkit-datetime-edit-year-field {
  color: ${theme.black};
}
input[type=checkbox] {
  -webkit-appearance: none;
  -moz-appearance:    none;
  appearance:         none;
}

input[type="radio"]{
    -webkit-appearance: radio !important;
    padding: 0
}

::placeholder,
  ::-webkit-input-placeholder {
    color: ${theme.gray}

  }
  :-ms-input-placeholder {
     color: ${theme.gray}

  }
label{
  display: block;
  font-size: 14px;
  padding: 1rem 0rem 0rem 0rem;

}
`;

type ContainerType = {
  size?: string;
  width?: string;
};

export const YellowButtonLink = styled(Link)<ContainerType>`
  margin-top: ${(props) => props.size};
  background-color: ${theme.yellow};
  display: flex;
  cursor: pointer;
  border: none;
  justify-content: space-between;
  border-radius: 10px;
  padding: 0rem 0.1rem;
  text-decoration: none;
  color: black;
  text-align: left;
  padding: 0rem 1rem;
  font-weight: 600;

  width: ${(props) => (props.width ? props.width : "auto")};
`;
export const YellowButton = styled.button<ContainerType>`
  margin-top: ${(props) => props.size};
  margin-top: 1rem;
  background-color: ${theme.yellow};
  display: flex;
  align-items: center;
  cursor: pointer;
  border: none;
  justify-content: space-between;
  border-radius: 10px;
  padding: 0rem 0.1rem;
  text-decoration: none;
  color: ${theme.black};
  text-align: left;
  font-weight: 600;
  padding: 0rem 1rem;
  width: ${(props) => (props.width ? props.width : "auto")};
  :disabled {
    opacity: 50%;
  }
`;

export const ButtonIcon = styled.div`
  display: flex;
  align-items: center;
`;
