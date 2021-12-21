import BootstrapBrand from 'react-bootstrap/NavbarBrand';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export const Brand = (props) => {
  return (
    <BootstrapBrand as={Link} to="/">
      <img
        alt="Our brand official logo. two shopping bags"
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      En-Shop
    </BootstrapBrand>
  );
};
