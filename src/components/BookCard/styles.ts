import styled from 'styled-components';

export const Container = styled.ul`
  display: grid;

  max-width: 60rem;

  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.25rem;

  li {
    display: flex;
    flex-direction: column;

    justify-content: space-between;
    font-family: 'Oswald', sans-serif;

    font-size: 1.25rem;

    min-height: 10rem;

    padding: 1rem 1.5rem 0.5rem 1.5rem;

    background-color: var(--card-background);
    border: 1px solid var(--card-border);
    border-radius: 5px;
  }

  & [data-title] {
    color: var(--orange);
  }

  & [data-pages] {
    font-size: 1rem;
    padding-top: 0.5rem;
  }

  .switch-button {
    position: relative;
    left: 13rem;
    bottom: 1rem;
  }

  .delete-book {
    width: 1rem;
    position: relative;
    left: 15rem;

    border: 0;
    background: transparent;

    transition: filter 0.2s;
    cursor: pointer;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
