import { movieDetailsApi } from '../movies-api/movies';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import {
  MovieDetailsWrap,
  MovieInfo,
  StyledLink,
  MovieInfoText,
  MovieInfoDesc,
} from './Pages.styled';

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
                <MovieInfoText>
                  popularity:
                  <MovieInfoDesc>{data.popularity}</MovieInfoDesc>
                </MovieInfoText>
              </li>
              <li>
                <MovieInfoText>
                  overview :<MovieInfoDesc>{data.overview}</MovieInfoDesc>
                </MovieInfoText>
              </li>
              <li>
                <MovieInfoText>
                  genres :
                  <MovieInfoDesc>
                    {Array.isArray(data.genres) && data.genres.length > 0
                      ? data.genres.map(({ name }) => name).join(', ')
                      : 'no genre info'}
                  </MovieInfoDesc>
                </MovieInfoText>
              </li>
            </MovieInfo>
          </MovieDetailsWrap>
          <AdditionalInfo />
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </Section>
      ) : (
        <h2>{error}</h2>
      )}
    </>
  );
};
export default MovieDetails;
