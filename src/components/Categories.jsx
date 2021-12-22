import Container from 'react-bootstrap/Container';
import { categories } from '../mock';
import CategoryItem from './CategoryItem';

const Categories = (props) => {
  return (
    <Container fluid className="d-flex p-0 ">
      {categories.map((item) => (
        <CategoryItem key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default Categories;
