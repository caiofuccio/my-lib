import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  bottom: 0;

  padding: 0 50px 0 50px;

  width: 100%;
  height: 44px;

  background-color: var(--footer-background);

  font-family: 'Oswald', sans-serif;
  color: white;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      padding-right: 24px;
    }

    a {
      padding-top: 4px;

      img {
        height: 28px;
        width: 28px;
      }
    }

    a:hover {
      transition: transform 1s;

      transform-origin: center center;
      transform: rotateY(360deg);
      transform-style: preserve-3d;
    }
  }
`;
