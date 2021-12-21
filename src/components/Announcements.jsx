import { useState } from 'react';
import { CloseButton } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import styled from 'styled-components';

const StyledAlert = styled(Alert)`
  padding: 5px;
  display: flex;
`;
const Announcements = (props) => {
  const [show, setShow] = useState(true);
  return (
    <StyledAlert
      className="m-0 text-center"
      variant="success"
      show={show}
      style={{
        padding: '5px',
      }}
    >
      <h6 className="text-center flex-grow-1 fw-bold">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus,
        reprehenderit.
      </h6>
      <CloseButton onClick={() => setShow(false)} />
    </StyledAlert>
  );
};

export default Announcements;
