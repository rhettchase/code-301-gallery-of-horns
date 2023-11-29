import { useState } from 'react';
import Image from 'react-bootstrap/Image';
import Heart from 'react-animated-heart';
import SelectedBeast from './SelectedBeast';

export default function BeastImage(props) {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  const [status, setStatus] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // run the setStatus logic after the count state has been updated. The dependency array [count] ensures that the effect runs whenever count changes.
  // reference: chatGPT

  function add() {
    setCount(count + 1);
    setStatus(true);
  }

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section>
      <div style={{ position: 'relative' }}>
        <Image
          onClick={() => {
            add();
            openModal();
          }}
          src={props.imgUrl}
          alt={props.title}
          roundedCircle
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        ></Image>
        <Heart
          isClick={status}
          onClick={(e) => {
            e.stopPropagation(); // Prevent the click event from propagating to the parent div
            add(); // Increment the count
          }}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
        <p>Number of votes is {count}</p>
      </div>
      {showModal && <SelectedBeast
        show={showModal}
        title={props.title}
        imgUrl={props.imgUrl}
        description={props.description}
        onClose={closeModal}
      />}
    </section>
  );
}


