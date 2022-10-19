import { useState } from 'react';
import './Collapse.css';

function Collapse(props) {
    const [isOpen, setIsOpen] = useState(false);

    return isOpen ? (
        <div>
            <div className='dropdown' onClick={() => setIsOpen(false)}>
                <p>{props.title}</p><i className="fa-solid fa-chevron-up fa-lg arrow"></i>
            </div>
            <div className='collapseDescription'>
                <p>{props.description}</p>
            </div>
        </div>
    ) : (   
        <div className='dropdown' onClick={() => setIsOpen(true)}>
            <p>{props.title}</p><i className="fa-solid fa-chevron-down fa-lg arrow"></i>
        </div>
    )
}

export default Collapse;