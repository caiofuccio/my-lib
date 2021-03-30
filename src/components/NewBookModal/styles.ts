import styled from 'styled-components';

export const Container = styled.form`
  font-family: 'Oswald', sans-serif;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1rem;
    height: 4rem;
    border-radius: 0.24rem;

    border: 1px solid var(--card-border);
    background-color: #e7e9ee;

    font-size: 1rem;

    &::placeholder {
      color: var(--dark-gray);
      opacity: 0.6;
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type='submit'] {
    width: 100%;
    height: 4rem;

    padding: 0 1.5rem;
    border-radius: 0.25rem;
    border: 1px solid var(--card-border);
    margin-top: 1rem;

    background-color: var(--orange);
    color: #fff;

    font-size: 1rem;
    font-weight: bold;

    cursor: pointer;
  }
`;
