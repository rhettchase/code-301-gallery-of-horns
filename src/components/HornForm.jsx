// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

export default function HornForm(props) {
  const handleChange = (event) => {
    props.onSelect(event.target.value);
  };
  return (
    <div>
      <Container>
        <h2>Select how many horns you want your beast to have</h2>
        <Form.Select onChange={handleChange} className='custom-margin'>
          <option value='All'>All</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='100'>100</option>
        </Form.Select>
      </Container>
    </div>
  );
}
