import './Lodging.css';
import { useParams } from "react-router-dom";
import Slideshow from "../components/Slideshow";
import lodging from '../data/lodging.json';
import Collapse from '../components/Collapse';
import Tag from '../components/Tag';
import Rating from '../components/Rating';
import Navigate from '../components/Navigate';

function Lodging() {

    const lodgingId = useParams().id
    const currentLodging = lodging.find((element) => element.id === lodgingId)

    return (currentLodging === undefined) ? (<Navigate />):(
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
                        <div>{currentLodging.host.name.split(' ')[0]}</div>
                        <div>{currentLodging.host.name.split(' ')[1]}</div>
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
                />
            </div>
            <div>
                <Collapse 
                    title='Equipements'
                    content={currentLodging.equipments}
                />
            </div>

        </div>
    </div>
    )
}

export default Lodging;