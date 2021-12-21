import Navbar from '../Navbar';
import { Outlet } from 'react-router-dom';
import Announcements from '../Announcements';
import Container from 'react-bootstrap/Container';

const Layout = (props) => {
  return (
    <Container fluid className="p-0">
      <Announcements />
      <Navbar />
      <Container fluid className="p-0 " style={{ height: '80vh' }}>
        <Outlet />
      </Container>
    </Container>
  );
};

export default Layout;
