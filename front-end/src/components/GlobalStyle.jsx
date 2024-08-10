import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  }

  * {
    margin: 0;
  }
  
  a {
    text-decoration: none;
    color: black;
  }
`;

export default GlobalStyle;