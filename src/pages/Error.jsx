import './Error.css';
import { Link } from 'react-router-dom';

function ErrorPage() {
    return (
    <div className="errorPageContainer">
        <h1>404</h1>
        <p>
            Oups! La page que vous demandez n'existe pas.
        </p>
        <Link className='homeLink' to="/">Retourner sur la page d'accueil</Link>
    </div>
    )
}

export default ErrorPage;