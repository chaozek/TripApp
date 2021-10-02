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
-webkit-appearance: none;

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
  border: 1px solid #F1F1F2;
  border-radius: 10px;
  margin: 1rem 0rem;
  width: 100%;
  height: 48px;
}
input[type="date"]::-webkit-datetime-edit-text,
input[type="date"]::-webkit-datetime-edit-month-field,
input[type="date"]::-webkit-datetime-edit-day-field,
input[type="date"]::-webkit-datetime-edit-year-field {
  color: #D0D0CE;
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
export const YellowButtonLink = styled(Link)`
  margin-top: ${(props) => props.size};
  background-color: #f8d964;
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
export const YellowButton = styled.button`
  margin-top: ${(props) => props.size};
  margin-top: 1rem;
  background-color: #f8d964;
  display: flex;
  align-items: center;
  cursor: pointer;
  border: none;
  justify-content: space-between;
  border-radius: 10px;
  padding: 0rem 0.1rem;
  text-decoration: none;
  color: black;
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
