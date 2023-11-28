import HornedBeast from './HornedBeast';
import jsonData from '../assets/HornedBeast.json'

function Gallery() {
  return (
    <>
    {jsonData.map((item) => ( // map over the jsonData array
        <HornedBeast
        key={item._id}
        imgUrl={item.image_url}
        title={item.title}
        description={item.description}
        keyword={item.keyword}
        horns={item.horns}
        />
    ))}
    </>
  );
}

export default Gallery;
