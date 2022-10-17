import { Link } from 'react-router-dom';
import './Card.css'

function Card(props) {
    return (
        <div className="cardContainer">
            <Link to={`/lodging/${props.id}`}>
                <img src={props.image} alt="logement" />
                <p>{props.title}</p>
            </Link>
        </div>
    )
}

export default Card;