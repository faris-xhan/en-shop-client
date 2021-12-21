import BootstrapNavbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Brand } from './Brand';
import Searchbar from './Searchbar';
import Navlinks from './Navlinks';

const Navbar = (props) => {
  return (
    <BootstrapNavbar bg="dark" variant="dark">
      <Container>
        <Brand />
        <Searchbar />
        <Navlinks />
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
