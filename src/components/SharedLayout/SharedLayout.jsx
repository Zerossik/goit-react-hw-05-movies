import { Outlet } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import { Container } from 'components/Container/Container';
import { Suspense } from 'react';
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
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </>
  );
};
export default SharedLayout;
