import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
    height: 100%;
}


* {
    box-sizing: border-box;
    margin :0;
    padding: 0;
    font-family: ${(props) => props.theme.font.family.primary};
    
    /* @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
      font-size: 80%;
    } */
    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
      font-size: 90%;
    }
  }

  body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    height: 100vh;
    overflow-y: scroll;
  }

  button {
    outline: none;
    border: none;
  }

`;

export default GlobalStyle;
