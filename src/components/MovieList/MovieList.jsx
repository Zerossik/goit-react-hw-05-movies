import { useLocation } from 'react-router-dom';
import { StyledLink } from './MovieList.styled';

export const MovieList = ({ items }) => {
  const location = useLocation();

  return (
    <ul>
      {items.map(({ id, title, name }) => (
        <li key={id}>
          <StyledLink to={`/movies/${id}`} state={{ from: location }}>
            {title ? title : name}
          </StyledLink>
        </li>
      ))}
    </ul>
  );
};
