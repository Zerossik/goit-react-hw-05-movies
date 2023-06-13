import { MovieInput } from 'components/AdditionalInfo/MovieInput/MovieInput';
import { useEffect, useState } from 'react';
import { searchMovie } from 'movies-api/movies';
import { useSearchParams } from 'react-router-dom';
import { MovieList } from 'components/MovieList/MovieList';

const Movie = () => {
  const [movieData, setMovieData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  useEffect(() => {
    if (query === '') {
      setSearchParams({});
      return;
    }
    searchMovie(query).then(({ data: { results } }) => setMovieData(results));
  }, [query, setSearchParams]);

  const handlerChange = query => {
    setSearchParams({ query: query });
  };

  return (
    <>
      <MovieInput query={query} handlerChange={handlerChange} />
      <MovieList items={movieData} />
    </>
  );
};
export default Movie;
