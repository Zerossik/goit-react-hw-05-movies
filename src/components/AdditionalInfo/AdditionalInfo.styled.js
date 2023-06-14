import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: inline-block;
  padding: 4px 8px;

  color: black;
  background-color: #ecf1f4;
  font-size: 24px;
  text-decoration: none;

  border-radius: 5px;
  &:hover,
  &:focus {
    background-color: grey;
    color: #fff;
  }
`;

export const StyledAdditionalInfo = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px 0;
`;
