import HornedBeast from './HornedBeast';
import jsonData from '../assets/HornedBeast.json';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Gallery() {
  return (
    <Container>
      <Row className='align-items-center'>
        {jsonData.map(
          (
            item // map over the jsonData array; key goes in outermost component
          ) => (
            <Col key={item._id} xs={6} md={4}> 
              <HornedBeast
                imgUrl={item.image_url}
                title={item.title}
                description={item.description}
                keyword={item.keyword}
                horns={item.horns}
              />
            </Col>
          )
        )}
      </Row>
    </Container>
  );
}


export default Gallery;
