import Image from 'react-bootstrap/Image';
import { useEffect, useState } from 'react';
import Heart from 'react-animated-heart';

export default function BeastImage(props) {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  const [status, setStatus] = useState(false);

  // run the setStatus logic after the count state has been updated. The dependency array [count] ensures that the effect runs whenever count changes.
  // reference: chatGPT

  useEffect(() => {
    setStatus(count > 0);
  }, [count]);

  function add() {
    setCount(count + 1);
  }

  return (
    <section>
      <div style={{ position: 'relative' }}>
        <Image
          onClick={add}
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
    </section>
  );
}
