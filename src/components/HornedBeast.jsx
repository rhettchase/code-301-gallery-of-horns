import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import BeastImage from './BeastImage';


function HornedBeast(props) {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h2>{props.title}</h2>
            <div className='d-flex justify-content-center'>
              <BeastImage imgUrl={props.imgUrl} />
            </div>
            <p>{props.description}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HornedBeast;
