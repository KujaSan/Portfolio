import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

function Error(){
    return (
        <div className='error'>
            
            <h1 className='error__title'>404</h1>
            <h2 className='error__message'><span> Oups! La page que vous</span> demandez n'existe pas.</h2>
            <div className="error__gears">
                <div className="error__gears__gear">
                    <FontAwesomeIcon icon={faGear}  className="error__gears__gear__item1" />
                </div>
                <div className="error__gears__gear">
                <FontAwesomeIcon icon={faGear}  className="error__gears__gear__item2" />
                </div>
            </div>
            <Link to="/" className='error__link'>
            Retourner sur la page d’accueil
            </Link>
        </div>
    );
}

export default Error;