import { movieDetailsApi } from '../movies-api/movies';
import { useEffect, useRef, useState } from 'react';
import { Outlet, useParams, Link, useLocation } from 'react-router-dom';

import { AdditionalInfo } from 'components/AdditionalInfo/AdditionalInfo';
import { Section } from 'components/Section/Section';

export const MovieDetails = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState('');
  const { id } = useParams();
  const location = useLocation();
  const goBack = useRef(location.state?.from ?? '/');
  const basePath = 'https://image.tmdb.org/t/p/w400';

  useEffect(() => {
    movieDetailsApi(id)
      .then(({ data }) => setData(data))
      .catch(err => setError(err.message));
  }, [id]);

  return (
    <>
      <Link to={goBack.current}>{'<- Go Back'}</Link>
      {Object.keys(data).length !== 0 ? (
        <Section title="">
          <img src={basePath + data.poster_path} alt={data.original_title} />
          <div>
            <ul>
              <li>
                <h2>{data.original_title}</h2>
              </li>
              <li>
                <p style={{ fontWeight: 700 }}>
                  popularity:
                  <span style={{ fontWeight: 500 }}>{data.popularity}</span>
                </p>
              </li>
              <li>
                <p style={{ fontWeight: 700 }}>
                  overview :
                  <span style={{ fontWeight: 500 }}>{data.overview}</span>
                </p>
              </li>
              <li>
                <p style={{ fontWeight: 700 }}>
                  genres :
                  <span style={{ fontWeight: 500 }}>
                    {Array.isArray(data.genres) && data.genres.length > 0
                      ? data.genres.map(({ name }) => name).join(', ')
                      : 'no genre info'}
                  </span>
                </p>
              </li>
            </ul>
          </div>
          <AdditionalInfo />
          <Outlet />
        </Section>
      ) : (
        <h2>{error}</h2>
      )}
    </>
  );
};
