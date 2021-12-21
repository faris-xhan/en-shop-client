import Container from 'react-bootstrap/Container';
import { Outlet } from 'react-router-dom';
import Announcements from '../Announcements';
import Navbar from '../Navbar';

const Layout = (props) => {
  return (
    <Container fluid className="p-0">
      <Announcements />
      <Navbar />
      <Container>
        <Outlet />
      </Container>
    </Container>
  );
};

export default Layout;
