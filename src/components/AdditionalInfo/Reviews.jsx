import { useEffect, useState } from 'react';
import { getReviews } from 'movies-api/movies';
import { useParams } from 'react-router-dom';
import { StyledAuthorText, StyledList } from './AdditionalInfo.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getReviews(id)
      .then(({ data: { results } }) => setReviews(results))
      .catch(err => console.log(err.message));
  }, [id]);

  return (
    <StyledList>
      {!reviews.length ? (
        <h2>no reviews</h2>
      ) : (
        reviews.map(({ author, content }) => {
          return (
            <li>
              <StyledAuthorText>Author: {author}</StyledAuthorText>
              <p>{content}</p>
            </li>
          );
        })
      )}
    </StyledList>
  );
};
export default Reviews;
