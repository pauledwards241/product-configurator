import styled, { css } from 'styled-components';

export const List = styled.dl`
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-size: 0.9rem;
`;

const sharedStyles = css`
  border-top: 2px solid #dadada;
  margin: 0;
  padding: 0.8rem 0;

  &:first-of-type {
    margin-top: 0.8rem;
  }
`;

export const Name = styled.dt`
  ${sharedStyles}
  grid-column: 1;
`;

export const Value = styled.dd`
  ${sharedStyles}
  grid-column: 2;
`;
