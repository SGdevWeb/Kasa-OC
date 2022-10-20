import { useState } from 'react';
import './Slideshow.css';

function Slideshow(props) {

    const [index, setIndex] = useState(0)

    function previous() {
        index === 0 ? setIndex(props.currentLodging.pictures.length -1) : setIndex(index -1)
        console.log(index)
    }

    function next() {
        index === props.currentLodging.pictures.length -1 ? setIndex(0) : setIndex(index +1)
        console.log(index)
    }

  return props.currentLodging.pictures.length > 1 ? (
    <div className='slideshowContainer'>
        <img src={props.currentLodging.pictures[index]} alt="logement" />
        <i onClick={previous} className="fa-solid fa-chevron-left previous"></i>
        <i onClick={next} className="fa-solid fa-chevron-right next"></i>
        <div className='slideNumber'> {index + 1}/{props.currentLodging.pictures.length}</div>
    </div>
  ) : (
    <div className='slideshowContainer'>
      <img src={props.currentLodging.pictures[index]} alt="logement" />
    </div>
  )
}

export default Slideshow