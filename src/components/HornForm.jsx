// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function HornForm(props) {

  const handleChange = (event) => {
    props.onSelect(event.target.value);
    
  }
  return (
    <Form.Select onChange={handleChange}>
      <option value='All'>All</option>
      <option value='1'>1</option>
      <option value='2'>2</option>
      <option value='3'>3</option>
      <option value='100'>100</option>
    </Form.Select>
  );
}



