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

  .react-modal-overlay {
    background-color: rgba(255, 255, 255, 0.7);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;

    background: var(--card-background);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;

    transition: filter 0.2s;
    cursor: pointer;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
