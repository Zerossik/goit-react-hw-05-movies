import { Link } from 'react-router-dom';
export const AdditionalInfo = () => {
  return (
    <ul>
      <li>
        <Link to="Cast">Cast</Link>
      </li>
      <li>
        <Link to="Reviews">Reviews</Link>
      </li>
    </ul>
  );
};
