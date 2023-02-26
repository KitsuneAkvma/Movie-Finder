import { createGlobalStyle } from 'styled-components';
import { colors, textColors } from './styleVariables';


const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;

    list-style:none;      


    color:${textColors.primary};
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
  }
 body {
  background: ${colors.primary};

  }
 a{
    text-decoration:none;
    cursor:pointer;
  }
  .active{color:${colors.accent};}
`;

export default GlobalStyle;
