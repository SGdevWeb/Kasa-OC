import { useState } from 'react';
import './Collapse.css';

function Collapse(props) {
    const [isOpen, setIsOpen] = useState(false);

    return isOpen ? (
        <>
            <div className='dropdown' onClick={() => setIsOpen(false)}>
                <p>{props.title}</p><i className="fa-solid fa-chevron-up fa-lg arrow"></i>
            </div>
            <div className='collapseDescription'>
                { 
                Array.isArray(props.content) ? ( 
                    props.content.map((element) => (
                        <p key={element}>{element}</p>
                    ))
                ) : (
                    <p>{props.content}</p>
                )
                }
            </div>
        </>
    ) : (   
        <div className='dropdown' onClick={() => setIsOpen(true)}>
            <p>{props.title}</p><i className="fa-solid fa-chevron-down fa-lg arrow"></i>
        </div>
    )
}

export default Collapse;