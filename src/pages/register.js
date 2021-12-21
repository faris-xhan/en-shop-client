import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Alert } from 'react-bootstrap';
import { useState } from 'react';

const Register = (props) => {
  const [error, setError] = useState('');
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!e.currentTarget.checkValidity()) {
      setError('Make sure you provide all the fields correctly.');
    } else {
      const formData = new FormData(e.currentTarget);
      alert(
        JSON.stringify(
          {
            fullName: formData.get('fullname'),
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
        <h1 className="text-center display-1 fw-bold mb-2">Register</h1>
        {error && (
          <Alert variant="danger" onClose={() => setError('')} dismissible>
            {error}
          </Alert>
        )}
        <Form onSubmit={handleFormSubmit} noValidate>
          <Form.Group className="mb-3" controlId="fullname">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              name="fullname"
              placeholder="Enter full name"
              required
            />
          </Form.Group>
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
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Container>
    </Container>
  );
};

export default Register;
