import styled from 'styled-components';

export const Container = styled.ul`
  display: grid;

  max-width: 60rem;

  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;

  li {
    display: flex;
    flex-direction: column;

    justify-content: space-around;
    font-family: 'Oswald', sans-serif;

    font-size: 20px;

    height: 135px;

    padding: 1.5rem 1.5rem 0.5rem 1.5rem;

    background-color: var(--card-background);
    border: 1px solid var(--card-border);
    border-radius: 5px;
  }

  & [data-title] {
    color: var(--orange);
  }

  & [data-pages] {
    font-size: 16px;
  }
`;
