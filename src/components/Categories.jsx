import Container from 'react-bootstrap/Container';
import useMediaQuery from '../hooks/useMediaQuery';
import { categories } from '../mock';
import CategoryItem from './CategoryItem';

const Categories = (props) => {
  const isDesktop = useMediaQuery('(min-width: 980px)');
  return (
    <Container fluid className={`d-flex p-0 ${isDesktop ? '' : 'flex-column'}`}>
      {categories.map((item) => (
        <CategoryItem key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default Categories;
