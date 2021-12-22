import BootstrapNavbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Brand } from './Brand';
import Searchbar from './Searchbar';
import Navlinks from './Navlinks';
import useMediaQuery from '../hooks/useMediaQuery';

const Navbar = (props) => {
  const isDesktop = useMediaQuery('(min-width: 960px)');
  return (
    <BootstrapNavbar bg="dark" variant="dark" className="flex-column">
      <Container>
        <Brand />
        <div className="flex-grow-1" />
        {isDesktop && <Searchbar />}
        <Navlinks />
      </Container>
      {!isDesktop && <Searchbar width="100%" />}
    </BootstrapNavbar>
  );
};

export default Navbar;
