import BeastImage from './BeastImage';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function HornedBeast(props) {
  return (
    <Container>
      <CardGroup>
        <Card>
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <div className='d-flex justify-content-center'>
              <BeastImage imgUrl={props.imgUrl} />
            </div>
            <Card.Text>{props.description}</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </Container>
  );
}

export default HornedBeast;
