import './Lodging.css';
import { useParams } from "react-router-dom";
import Slideshow from "../components/Slideshow";
import lodging from '../data/lodging.json';
import Collapse from '../components/Collapse';
import Tag from '../components/Tag';
import Rating from '../components/Rating';

function Lodging() {

    const lodgingId = useParams().id
    const currentLodging = lodging.find((element) => element.id === lodgingId)
    const [firstName, lastName] = currentLodging.host.name.split(' ')

    return (
    <div className="lodgingContainer">
        <Slideshow currentLodging={currentLodging}/>
        <div className='lodgingDescription'>
            <div className='leftContent'>
                <h2 className='lodgingTitle'>{currentLodging.title}</h2>
                <p className='lodgingLocation'>{currentLodging.location}</p>
                <Tag 
                    tags={currentLodging.tags}
                />
            </div>
            <div className='rightContent'>
                <div className='host'>
                    <div className='hostName'>
                        <div>{firstName}</div>
                        <div>{lastName}</div>
                    </div>
                    <img className='hostPicture' src={currentLodging.host.picture} alt="host" />
                </div>
                <Rating 
                    lodgingRating={currentLodging.rating}
                />
            </div>
        </div>
        <div className='collapsesContainer'>
            <div>
                <Collapse 
                    title='Description'
                    content={currentLodging.description}
                    height='52px'
                    fontSize='18px'
                />
            </div>
            <div>
                <Collapse 
                    title='Equipements'
                    content={currentLodging.equipments}
                    height='52px'
                    fontSize='18px'
                />
            </div>

        </div>
    </div>
    )
}

export default Lodging;