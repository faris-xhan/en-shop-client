import { useState } from 'react';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

const StyledSearchbar = styled(FormControl)`
  width: ${(props) => (props.width ? '100%' : '230px')};
  opacity: 0.8;
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
    <Form onSubmit={handleSubmit} className="d-flex w-100 justify-content-end">
      <StyledSearchbar
        size="sm"
        type="search"
        className="m-2 "
        placeholder="Search"
        aria-label="Search"
        value={input}
        onChange={handleInputChange}
        {...props}
      />
    </Form>
  );
};

export default Searchbar;
