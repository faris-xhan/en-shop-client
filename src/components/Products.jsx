import Container from 'react-bootstrap/Container';
import { popularProducts } from '../mock';
import Product from './Product';

const Products = () => {
  return (
    <Container fluid className="bg-dark text-white pt-4">
      <h1 className="text-center mb-2">Popular Products</h1>
      <Container fluid className="d-flex flex-wrap justify-content-between">
        {popularProducts.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </Container>
    </Container>
  );
};

export default Products;
