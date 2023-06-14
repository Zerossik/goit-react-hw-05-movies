import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getActors } from 'movies-api/movies';

export const Actors = () => {
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    getActors(id).then(({ data }) => console.log(data));
  }, [id]);

  return <h2>Тут будут Актеры</h2>;
};
