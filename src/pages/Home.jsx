import { useEffect, useState } from 'react';

import { getDate } from 'movies-api/movies';
import { MovieList } from 'components/MovieList/MovieList';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getDate()
      .then(({ data: { results } }) => setData(results))
      .catch(err => new Error(err));
  }, []);
  return <MovieList items={data} />;
};

export default Home;
