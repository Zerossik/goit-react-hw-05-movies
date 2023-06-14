import { StyledInput } from './MovieInput.styled';
export const MovieInput = ({ query, handlerChange }) => {
  return (
    <StyledInput
      type="text"
      name="query"
      autoFocus
      placeholder="Search movie..."
      value={query}
      onChange={({ target: { value } }) => {
        handlerChange(value);
      }}
    />
  );
};
