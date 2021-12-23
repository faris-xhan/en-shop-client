import Nav from 'react-bootstrap/Nav';
import { Link, useLocation } from 'react-router-dom';
import ShoppingCartItem from './ShoppingCart';

const routes = [
  {
    path: '/login',
    label: 'LOGIN',
  },

  {
    path: '/register',
    label: 'REGISTER',
  },
];

const Navlinks = (props) => {
  const location = useLocation();
  const navItems = routes.map((route) => (
    <NavItem key={route.path} path={route.path} label={route.label} />
  ));

  return (
    <Nav className="me-auto" activeKey={location.pathname}>
      {navItems}
      <Nav.Item>
        <Link to="/cart">
          <ShoppingCartItem />
        </Link>
      </Nav.Item>
    </Nav>
  );
};

const NavItem = (props) => {
  const { path, label } = props;
  return (
    <Nav.Item>
      <Nav.Link as={Link} to={path} eventKey={path}>
        {label}
      </Nav.Link>
    </Nav.Item>
  );
};

export default Navlinks;
