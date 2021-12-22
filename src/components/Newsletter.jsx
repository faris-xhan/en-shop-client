import styled from 'styled-components';
import { Send } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

const NewsletterContainer = styled(Container)`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Newsletter = (props) => {
  return (
    <NewsletterContainer>
      <Container>
        <h1 className="text-center display-1 fw-bold">Newsletter</h1>
        <p className="text-center display-6">
          Get timely updates from your favorite products.
        </p>
        <InputGroup className="mb-3" size="lg">
          <FormControl
            placeholder="You're email"
            aria-label="Enter you're email to subscribe and get news about our latest products"
          />
          <Button variant="success">
            <Send />{' '}
          </Button>
        </InputGroup>
      </Container>
    </NewsletterContainer>
  );
};

export default Newsletter;
