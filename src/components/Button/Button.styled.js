import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 8px 16px;
  cursor: pointer;
  font-size: 20px;
  border: none;
  border-radius: 4px;

  &:hover,
  &:focus {
    background-color: grey;
    color: #fff;
  }
`;
