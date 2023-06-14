import { cloneElement, useEffect, useState } from 'react';
import { getReviews } from 'movies-api/movies';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getReviews(id)
      .then(({ data: { results } }) => setReviews(results))
      .catch(err => console.log(err.message));
  }, [id]);

  return (
    <ul>
      {!reviews.length
        ? console.log('нет данных')
        : reviews.map(({ author, content }) => {
            return (
              <li>
                <p>{author}</p>
              </li>
            );
          })}
    </ul>
  );
};
