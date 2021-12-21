import BootstrapNavbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Brand } from './Brand';

const Navbar = (props) => {
  return (
    <BootstrapNavbar bg="dark" variant="dark">
      <Container>
        <Brand />
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
