import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Movie from '../pages/Movie';
import SharedLayout from './SharedLayout/SharedLayout';
import { MovieDetails } from '../pages/MovieDetails';
import { Actors } from './AdditionalInfo/Actors';
import { Reviews } from './AdditionalInfo/Reviews';

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

        <Route path="*" />
      </Route>
    </Routes>
  );
}
