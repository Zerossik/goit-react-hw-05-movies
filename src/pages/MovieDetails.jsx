import { movieDetailsApi } from '../movies-api/movies';
import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { Button } from '../components/Button/Button';
import { AdditionalInfo } from 'components/AdditionalInfo/AdditionalInfo';
import { Section } from 'components/Section/Section';

export const MovieDetails = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  const basePath = 'https://image.tmdb.org/t/p/w400';

  useEffect(() => {
    movieDetailsApi(id)
      .then(({ data }) => setData(data))
      .catch(() => new Error('Ошибка ответа от сервера'));
  }, [id]);
  console.log(data);
  return (
    <>
      <Button text={'<- Go Back'} onClick={() => console.log('Клик')} />
      <Section title="">
        <img src={basePath + data.poster_path} alt={data.original_title} />
        <div>
          <h2>{data.original_title}</h2>
          <p style={{ fontWeight: 700 }}>
            popularity:
            <span style={{ fontWeight: 500 }}>{data.popularity}</span>
          </p>
          <p style={{ fontWeight: 700 }}>
            overview :<span style={{ fontWeight: 500 }}>{data.overview}</span>
          </p>
          <p style={{ fontWeight: 700 }}>
            genres :
            <span style={{ fontWeight: 500 }}>
              {Array.isArray(data.genres) && data.genres.length > 0
                ? data.genres.map(({ name }) => name).join(', ')
                : 'no genre info'}
            </span>
          </p>
        </div>
        <AdditionalInfo />
        <Outlet />
      </Section>
    </>
  );
};
