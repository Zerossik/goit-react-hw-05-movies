import { StyledLink } from './MovieList.styled';
export const MovieList = ({ items }) => {
  return (
    <ul>
      {items.map(({ id, title, name }) => (
        <li key={id}>
          <StyledLink to={`movies/${id}`}>{title ? title : name}</StyledLink>
        </li>
      ))}
    </ul>
  );
};
