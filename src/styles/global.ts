import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html,
  body {
    font-size: 62.5%;
    min-height: 100vh;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    --red: #EB333F;
    --blue: #4853FA;
    --black: #09090a;
    --white: #fff;
  }
`;