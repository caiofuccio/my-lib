import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --header-background: #f8f8f8;
    --content-background: #D4D4D4;
    --footer-background: #6b6b6b;

    --card-background: #F0F0F0;
    --card-border: #bbbbbb;

    --black: #000;
    --white: #fff;
    --dark-gray: #333;
    --orange: #f29d16;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  html {
    @media (max-width: 1080px){
      font-size: 93.75%;
    }

    @media (max-width:720px) {
      font-size: 87.5%;
    }
  }

  body{
    background-color: var(--content-background);
  }
`;
