import { movieDetailsApi } from 'movies-api/movieDetailsAPI';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const { id } = useParams();

  useEffect(() => {
    console.log('Выполнен Эффект');
    movieDetailsApi(id)
      .then(({ data }) => console.log(data))
      .catch(() => new Error('Ошибка ответа от сервера'));
  }, [id]);
  return <h2>Hi</h2>;
};
