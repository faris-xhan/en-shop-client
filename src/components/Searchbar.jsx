import { useState } from 'react';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

const StyledSearchbar = styled(FormControl)`
  width: 230px;
  opacity: 0.97;
  transition: opacity 260ms ease-in-out;
  &:focus {
    opacity: 1;
  }
`;

const Searchbar = (props) => {
  const [input, setInput] = useState('');
  const handleInputChange = (event) => setInput(event.target.value);
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(input);
  };

  return (
    <Form onSubmit={handleSubmit} className="d-flex">
      <StyledSearchbar
        size="sm"
        type="search"
        className="me-2"
        placeholder="Search"
        aria-label="Search"
        value={input}
        onChange={handleInputChange}
      />
    </Form>
  );
};

export default Searchbar;
