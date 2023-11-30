// reference: chatGPT
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function SelectedBeast(props) {
  return (
    <Modal show={props.show} onHide={props.onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src={props.imgUrl}
          alt={props.title}
          style={{ maxWidth: '25rem', maxHeight: '400px', objectFit: 'cover' }}
        />
        <p>{props.description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={props.onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
