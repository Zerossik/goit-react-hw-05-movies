import { Outlet } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';

export const SharedLayout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default SharedLayout;
