import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Alert } from 'react-bootstrap';
import { useState } from 'react';

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
    <Container className="d-flex align-items-center justify-content-center h-100 ">
      <Container>
        <h1 className="text-center display-1 fw-bold mb-2">Login</h1>
        {error && (
          <Alert variant="danger" onClose={() => setError('')} dismissible>
            {error}
          </Alert>
        )}
        <Form onSubmit={handleFormSubmit} noValidate>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="remember">
            <Form.Check type="checkbox" name="remember" label="Remember" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Container>
    </Container>
  );
};

export default Login;
