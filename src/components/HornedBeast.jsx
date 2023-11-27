function HornedBeast(props) {
  return (
    <>
      <h2>{props.title}</h2>
      <img src={props.imgUrl} alt={props.title} />
      <p>{props.description}</p>
    </>
  );
}

export default HornedBeast;
