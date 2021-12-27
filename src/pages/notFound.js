import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

const NotFound = (props) => {
  return (
    <Container
      fluid
      className="d-flex flex-column  justify-content-center align-items-center h-100 "
    >
      <article>
        <h1
          className="display-1 fw-bold text-center"
          style={{ letterSpacing: '0.4rem' }}
        >
          NOT FOUND
        </h1>
        <p className="blockquote">
          You didn't break the internet, but we could not find what you are
          looking for :(
        </p>
      </article>
      <Link to="/"> Go back and you might find it.</Link>
    </Container>
  );
};

export default NotFound;
