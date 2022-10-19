import './Home.css'
import Banner from "../components/Banner";
import Gallery from '../components/Gallery';

function Home() {
    return (
    <div className="homeContainer">
        <Banner 
            pathname={window.location.pathname}
        />
        <Gallery />
    </div>
    )
}

export default Home;