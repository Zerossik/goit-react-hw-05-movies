import { Outlet } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import { Container } from 'components/Container/Container';
export const SharedLayout = () => {
  return (
    <>
      <header>
        <Container>
          <Navigation />
        </Container>
      </header>
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
};
export default SharedLayout;
