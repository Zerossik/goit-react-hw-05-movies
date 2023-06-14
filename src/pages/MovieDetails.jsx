import { movieDetailsApi } from '../movies-api/movies';
import { useEffect, useRef, useState } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { MovieDetailsWrap, MovieInfo, StyledLink } from './Pages.styled';

import { AdditionalInfo } from 'components/AdditionalInfo/AdditionalInfo';
import { Section } from 'components/Section/Section';

const MovieDetails = () => {
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
      <StyledLink to={goBack.current}>{'<- Go Back'}</StyledLink>
      {Object.keys(data).length !== 0 ? (
        <Section title="">
          <MovieDetailsWrap>
            <img src={basePath + data.poster_path} alt={data.original_title} />
            <MovieInfo>
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
            </MovieInfo>
          </MovieDetailsWrap>
          <AdditionalInfo />
          <Outlet />
        </Section>
      ) : (
        <h2>{error}</h2>
      )}
    </>
  );
};
export default MovieDetails;
