import Container from 'react-bootstrap/Container';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import useMediaQuery from '../hooks/useMediaQuery';

const Home = (props) => {
  const isDesktop = useMediaQuery('(min-width: 980px)');
  return (
    <Container fluid className="p-0">
      {isDesktop && <Slider />}
      <Categories />
      <Products />
      <Newsletter />
    </Container>
  );
};

export default Home;
