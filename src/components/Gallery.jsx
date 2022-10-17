import Card from './Card';
import './Gallery.css';
import data from '../data/data.json';

function Gallery() {
    return (
        <div className='galleryContainer'>
            <div className='row row-cols-3'>
                {data.map(element => (
                    <div key={element.id} className='col lodging'>
                        <Card 
                            image={element.cover}
                            title={element.title}
                            id={element.id}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Gallery;