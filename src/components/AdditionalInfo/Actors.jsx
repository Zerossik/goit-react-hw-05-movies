import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getActors } from 'movies-api/movies';
import avatar from '../../img/avatar.jpg';
import { ActorsList } from './AdditionalInfo.styled';

export const Actors = () => {
  const [actors, setActors] = useState([]);
  const { id } = useParams();
  const basePath = 'https://image.tmdb.org/t/p/w200';

  useEffect(() => {
    getActors(id)
      .then(({ data: { cast } }) => setActors(cast))
      .catch(err => console.log(err.message));
  }, [id]);

  return (
    <>
      <ActorsList>
        {actors.map(({ original_name, profile_path, id }) => {
          return (
            <li key={id}>
              <img
                src={!profile_path ? avatar : basePath + profile_path}
                alt={original_name}
                width={200}
              />
              <p>{original_name}</p>
            </li>
          );
        })}
      </ActorsList>
    </>
  );
};
