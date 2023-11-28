function HornedBeast(props) {
  return (
    <>
      <h2>{props.title}</h2>
      <img src={props.imgUrl} alt={props.title} />
      <p>{props.description}</p>
      <p>Keyword: {props.keyword}</p>
      <p>Horns: {props.horns}</p>
    </>
  );
}

export default HornedBeast;

