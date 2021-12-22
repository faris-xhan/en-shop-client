import Container from 'react-bootstrap/Container';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';

const Home = (props) => {
  return (
    <Container fluid className="p-0">
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
    </Container>
  );
};

export default Home;
