import { CartFill } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const IconButton = styled(Button)`
  color: ${(props) =>
    props.color === 'primary' ? 'var(--bs-primary)' : 'var(--bs-white)'};

  &:hover {
    color: ${(props) =>
      props.color !== 'primary' ? 'var(--bs-primary)' : 'var(--bs-white)'};
  }
`;

const ShoppingCartItem = (props) => {
  const location = useLocation();
  return (
    <IconButton
      variant="none"
      color={location.pathname === '/cart' ? 'primary' : 'white'}
    >
      <CartFill />
      {!!0 && <Badge bg="danger" pill></Badge>}
    </IconButton>
  );
};

export default ShoppingCartItem;
