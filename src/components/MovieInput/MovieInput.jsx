export const MovieInput = ({ query, handlerChange }) => {
  return (
    <input
      type="text"
      name="query"
      autoFocus
      value={query}
      onChange={({ target: { value } }) => {
        handlerChange(value);
      }}
    />
  );
};
