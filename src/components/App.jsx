import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Movie from '../pages/Movie';
import SharedLayout from './SharedLayout/SharedLayout';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movie />} />

        <Route path="*" />
      </Route>
    </Routes>
  );
}
