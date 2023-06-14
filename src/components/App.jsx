import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';

import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const Movie = lazy(() => import('../pages/Movie'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Actors = lazy(() => import('./AdditionalInfo/Actors'));
const Reviews = lazy(() => import('./AdditionalInfo/Reviews'));
const NotFound = lazy(() => import('pages/NotFound'));
export function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movie />}></Route>
        <Route path="movies/:id" element={<MovieDetails />}>
          <Route path="Actors" element={<Actors />} />
          <Route path="Reviews" element={<Reviews />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
