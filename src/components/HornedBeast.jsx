import Container from 'react-bootstrap/Container';
import BeastImage from './BeastImage';

function HornedBeast(props) {
  return (
    <div>
      <Container>
      <h2>{props.title}</h2>
      <div className='d-flex justify-content-center'>
        <BeastImage imgUrl={props.imgUrl} />
      </div>
      <p>{props.description}</p>
      </Container>
    </div>
  );
}

export default HornedBeast;
