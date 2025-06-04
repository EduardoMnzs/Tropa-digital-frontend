import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font-family: 'Inter', sans-serif;
    line-height: 1.5;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  input, button {
    font-family: inherit;
  }
`;

export default GlobalStyles;