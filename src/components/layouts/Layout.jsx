import Container from 'react-bootstrap/Container';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';

const Layout = (props) => {
  return (
    <Container fluid className="p-0">
      <Navbar />
      <Container className="vh-100 pt-5">
        <Outlet />
      </Container>
    </Container>
  );
};

export default Layout;
