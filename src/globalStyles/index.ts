import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul, ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    all: unset;
    cursor: pointer;
  }

  body {
    font-family: Arial, sans-serif;
    line-height: 1.5;
  }
`;

export default GlobalStyles;
