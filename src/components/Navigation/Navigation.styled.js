import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavList = styled.ul`
  display: flex;
  gap: 20px;
  margin-left: 20px;
`;
export const Link = styled(NavLink)`
  font-size: 36px;
  text-decoration: none;
  display: inline-block;
  padding: 15px;
  color: black;
  outline: none;
  border-radius: 8px;

  &.active {
    color: red;
    background-color: grey;
  }

  &:hover,
  &:focus {
    background-color: grey;
    color: #fff;
  }
`;
