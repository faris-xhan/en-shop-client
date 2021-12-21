import { CartFill } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import styled from 'styled-components';

const IconButton = styled(Button)`
  color: white;
  &:hover {
    color: var(--bs-primary);
  }
`;

const ShoppingCartItem = (props) => {
  return (
    <IconButton variant="none">
      <CartFill />
      {!!0 && <Badge bg="danger" pill></Badge>}
    </IconButton>
  );
};

export default ShoppingCartItem;
