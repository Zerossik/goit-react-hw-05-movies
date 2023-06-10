import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  color: grey;

  &:hover,
  &:focus {
    color: tomato;
  }
`;
