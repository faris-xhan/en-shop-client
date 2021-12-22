import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import FormControl from 'react-bootstrap/FormControl';

const FormItem = (props) => {
  const { label, controlId, ...rest } = props;
  const ctrId = controlId || label.replace(' ', '-').toLowerCase();
  return (
    <FormGroup className="mb-3" controlId={ctrId}>
      {label && <FormLabel>{label}</FormLabel>}
      {props.children || <FormControl {...rest} />}
    </FormGroup>
  );
};

export default FormItem;
