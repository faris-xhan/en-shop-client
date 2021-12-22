import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import Alert from 'react-bootstrap/Alert';
import { useState } from 'react';
import FormItem from '../components/FormItem';
import { Link } from 'react-router-dom';

const BackgroundContainer = styled(Container)`
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/Flagship_100_Blog_2880x1800_Apparel.jpg')
      center;
  background-size: cover;
`;

const SubmitButton = styled(Button)`
  width: 200px;
  font-size: 1.2rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
`;

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
    <BackgroundContainer
      fluid
      className="d-flex align-items-center justify-content-center h-100 "
    >
      <Container
        className="p-5 rounded rounded-5 text-dark"
        style={{
          maxWidth: '600px',
          backgroundColor: '#0002',
        }}
      >
        <h1 className="text-center display-1 fw-bold mb-2">Register</h1>
        {error && (
          <Alert variant="danger" onClose={() => setError('')} dismissible>
            {error}
          </Alert>
        )}
        <Form onSubmit={handleFormSubmit} noValidate>
          <FormItem
            label="Full Name"
            type="text"
            name="fullname"
            placeholder="Enter full name"
            required
          />

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
          <div className="d-flex justify-content-center align-items-center">
            <SubmitButton variant="primary" type="submit">
              Register
            </SubmitButton>
          </div>
        </Form>
        <Link to="/login" className="mx-1 text-dark">
          Already have an account?
        </Link>
      </Container>
    </BackgroundContainer>
  );
};

export default Register;
