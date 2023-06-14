import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieDetailsWrap = styled.div`
  display: flex;
  gap: 20px;
`;

export const MovieInfo = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  padding: 4px 8px;
  margin-bottom: 10px;
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
