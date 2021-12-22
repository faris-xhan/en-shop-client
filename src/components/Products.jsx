import Container from 'react-bootstrap/Container';
import { popularProducts } from '../mock';
import Product from './Product';

const Products = () => {
  return (
    <Container fluid className=" text-white pt-4 border-bottom ">
      <Container fluid className="d-flex flex-wrap justify-content-between">
        {popularProducts.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </Container>
    </Container>
  );
};

export default Products;
