import './Lodging.css';
import { useParams } from "react-router-dom";
import Slideshow from "../components/Slideshow";
import lodging from '../data/lodging.json';

function Lodging() {

    const lodgingId = useParams().id
    const currentLodging = lodging.find((element) => element.id === lodgingId)

    return (
    <div className="lodgingContainer">
        <Slideshow currentLodging={currentLodging}/>
    </div>
    )
}

export default Lodging;