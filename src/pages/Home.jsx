import './Home.css'
import Banner from "../components/Banner";
import Gallery from '../components/Gallery';

function Home() {
    return (
    <div className="homeContainer">
        <Banner />
        <Gallery />
    </div>
    )
}

export default Home;