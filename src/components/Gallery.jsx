import Card from './Card';
import './Gallery.css';
import data from '../data/data.json';

function Gallery() {
    return (
        <div className='galleryContainer'>
            
                {data.map(element => (
                    <div key={element.id} className='lodging'>
                        <Card 
                            image={element.cover}
                            title={element.title}
                            id={element.id}
                        />
                    </div>
                ))}
            
        </div>
    )
}

export default Gallery;