import { StyledLink, StyledAdditionalInfo } from './AdditionalInfo.styled';
export const AdditionalInfo = () => {
  return (
    <StyledAdditionalInfo>
      <li>
        <StyledLink to="Actors">Actors</StyledLink>
      </li>
      <li>
        <StyledLink to="Reviews">Reviews</StyledLink>
      </li>
    </StyledAdditionalInfo>
  );
};
