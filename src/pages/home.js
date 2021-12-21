import Container from 'react-bootstrap/Container';
import Slider from '../components/Slider';
import Categories from '../components/Categories';

const Home = (props) => {
  return (
    <Container fluid className="p-0">
      <Slider />

      <Categories />
    </Container>
  );
};

export default Home;
