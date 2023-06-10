import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Movie from '../pages/Movie';
import SharedLayout from './SharedLayout/SharedLayout';
import { MovieDetails } from './MovieDetails/MovieDetails';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movie />} />
        <Route path="movies/:id" element={<MovieDetails />} />

        <Route path="*" />
      </Route>
    </Routes>
  );
}
