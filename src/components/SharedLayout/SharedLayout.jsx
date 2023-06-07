import { Outlet } from 'react-router-dom';
import { Link } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
              <Link to="/movies">Movies</Link>
            </li>
            <li></li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default SharedLayout;
