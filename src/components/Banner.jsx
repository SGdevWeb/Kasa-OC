import './Banner.css'
import image from '../assets/IMG.jpg'

function Banner() {
    return (
    <div className="bannerContainer">
        <img src={image} alt='paysage eric muhr'/>
        <p>Chez vous, partout et ailleurs</p>
    </div>
    )
}

export default Banner;