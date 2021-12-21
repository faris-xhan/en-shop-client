import Container from 'react-bootstrap/Container';
import { Outlet } from 'react-router-dom';

const Layout = (props) => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

export default Layout;
