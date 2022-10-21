import Banner from '../components/Banner';
import Collapse from '../components/Collapse';
import './About.css';
import kasaDescription from '../data/kasaDescription.json'

function About() {
    return (
    <div className="aboutContainer">
        <Banner pathname={window.location.pathname}/>
        {kasaDescription.map((element) => (
            <div key={element.id} className='collapseContainer'>
            <Collapse
                key={element.id}
                title={element.title}
                content={element.description}
            />
            </div>
        ))}
    </div>
    )
}

export default About;