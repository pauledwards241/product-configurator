import styled from 'styled-components';

// This should not just be added into this one file...
const largeBreakpoint = '768px';

export const Container = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem;

  @media (min-width: ${largeBreakpoint}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr max-content;
    column-gap: 1.75rem;
  }
`;

export const PageTitle = styled.h1`
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  font-weight: normal;

  @media (min-width: ${largeBreakpoint}) {
    grid-column: 2;
  }
`;

export const Image = styled.img`
  width: 100%;
  margin-bottom: 1rem;

  @media (min-width: ${largeBreakpoint}) {
    grid-row: 2;
  }
`;
