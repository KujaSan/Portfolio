import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
/**
  * Composant représentant le pied de page de l'application
  * @returns {JSX.Element} Élément JSX du composant Footer
*/

function Footer(){
    const credit = '© 2023 Jérôme Fernandes';
    return(
        <div>
            <footer className='footer'>
                <FontAwesomeIcon icon={faCode} className="footer__logo" />
                <p className='footer__credit'>{credit}</p>
            </footer>
        </div>
    )
}

export default Footer;