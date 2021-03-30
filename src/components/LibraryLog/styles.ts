import styled from 'styled-components';

export const Container = styled.div`
  height: 420px;
  width: 290px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  background: var(--card-background);
  border-radius: 5px;
  border: 1px solid var(--card-border);

  margin-top: 40px;

  font-family: 'Oswald', sans-serif;

  padding: 2rem 2rem 2rem 2rem;

  header {
    font-size: 24px;
    font-weight: 700;

    text-align: center;
  }

  .data-container::after,
  .data-container::before {
    display: inline-block;

    position: relative;

    content: '';
    height: 1px;
    width: 200px;

    background: #a0a0a0;

    margin: 20px 0 15px 0;
  }

  .data-container div {
    display: flex;

    justify-content: space-between;
    padding: 10px;
  }

  button {
    border: none;
    cursor: pointer;

    height: 60px;
    width: 60px;

    position: relative;
    left: 82px;

    img {
      height: 60px;
      width: 60px;
    }

    &:hover {
      opacity: 0.85;
    }
  }
`;
