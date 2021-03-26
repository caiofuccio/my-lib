import styled from 'styled-components';

export const Container = styled.header`
  background: var(--header-background);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;

  padding: 0.5rem 0 1rem 4rem;

  img {
    height: 125px;
  }
`;
