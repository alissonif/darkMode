import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.darkMode ? '#282c34' : '#fff'};
    color: ${props => props.darkMode ? '#fff' : '#282c34'};
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  }
`;
