import Nav from 'react-bootstrap/Nav';
import { Link, useLocation } from 'react-router-dom';

const routes = [
  {
    path: '/login',
    label: 'Login',
  },

  {
    path: '/register',
    label: 'Register',
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