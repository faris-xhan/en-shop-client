import BootstrapNavbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Brand } from './Brand';
import Searchbar from './Searchbar';

const Navbar = (props) => {
  return (
    <BootstrapNavbar bg="dark" variant="dark">
      <Container>
        <Brand />
        <Searchbar />
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
