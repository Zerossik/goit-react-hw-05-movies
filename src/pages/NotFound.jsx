import {
  StatusCode,
  ErrorWrap,
  DescriptionError,
  ErrorHomeLink,
} from './Pages.styled';

const NotFound = () => {
  return (
    <ErrorWrap>
      <StatusCode>404</StatusCode>
      <DescriptionError>Page not found</DescriptionError>
      <ErrorHomeLink to="/">Go Home</ErrorHomeLink>
    </ErrorWrap>
  );
};
export default NotFound;
