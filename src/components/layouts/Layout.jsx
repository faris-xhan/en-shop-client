import Container from 'react-bootstrap/Container';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';

const Layout = (props) => {
  return (
    <Container fluid className="p-0">
      <Navbar />
      <Outlet />
    </Container>
  );
};

export default Layout;
