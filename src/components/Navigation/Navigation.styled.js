import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  font-size: 36px;
  text-decoration: none;
  display: inline-block;
  padding: 40px;

  &.active {
    color: red;
  }
`;
