import styled from 'styled-components';

// Utils
import { hslToCss } from '../utils/style';

export const RadioContainer = styled.div`
  flex: 1 1 0;
  margin-right: 1rem;
`;

export const Label = styled.label`
  display: block;
  box-sizing: border-box;
  width: 100%;
  text-align: center;
  padding: 0.5rem 1rem;
  border: 2px solid #d0d0d0;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: ${(props) => hslToCss(props.theme.colour.highlight)};
  }
`;

export const Input = styled.input`
  position: absolute;
  overflow: hidden;
  height: 1px;
  width: 1px;
  margin: 0;
  padding: 0;
  clip-path: inset(50%);

  &:checked + ${Label}, &:focus + ${Label} {
    border-color: ${(props) => hslToCss(props.theme.colour.highlight)};
  }
`;
