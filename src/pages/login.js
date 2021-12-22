import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Alert } from 'react-bootstrap';
import { useState } from 'react';
import styled from 'styled-components';
import FormItem from '../components/FormItem';

const BackgroundContainer = styled(Container)`
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('https://www.netsafe.org.nz/wp-content/uploads/2019/11/Online-Shopping_WebHeader_1141x641.jpg')
      center;
  background-size: cover;
`;

const LoginButton = styled(Button)`
  width: 200px;
  font-size: 1.2rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
`;

const Login = (props) => {
  const [error, setError] = useState('');
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!e.currentTarget.checkValidity()) {
      setError('Email or password is incorrect.');
    } else {
      const formData = new FormData(e.currentTarget);
      alert(
        JSON.stringify(
          {
            email: formData.get('email'),
            password: formData.get('password'),
          },
          null,
          2
        )
      );
    }
  };
  return (
    <BackgroundContainer
      fluid
      className="d-flex align-items-center justify-content-center h-100 bg-transparent"
    >
      <Container
        className="p-5 rounded rounded-5"
        style={{
          maxWidth: '600px',
          backgroundColor: '#0002',
        }}
      >
        <h1 className="text-center display-1 fw-bold mb-2">Login</h1>
        {error && (
          <Alert variant="danger" onClose={() => setError('')} dismissible>
            {error}
          </Alert>
        )}
        <Form onSubmit={handleFormSubmit} noValidate>
          <FormItem
            label="Email address"
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
          <FormItem
            label="Password"
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <FormItem controlId="remember">
            <Form.Check type="checkbox" name="remember" label="Remember Me" />
          </FormItem>
          <div className="d-flex justify-content-center align-items-center">
            <LoginButton variant="primary" type="submit" size="lg">
              Login
            </LoginButton>
          </div>
        </Form>
      </Container>
    </BackgroundContainer>
  );
};

export default Login;
