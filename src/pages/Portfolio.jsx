import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faLink } from "@fortawesome/free-solid-svg-icons";
import data from '../datas/datas.json';

import Error from "../pages/Error";
/**
  * Composant de la page du portfolio.
  *
  * @returns {JSX.Element} Élément JSX du composant Home.
*/

function Portfolio(){
    // Récupère les paramètres de recherche de l'URL.
    let [searchParams] = useSearchParams();
    // Récupère la valeur du paramètre "id" dans les paramètres de recherche.
    const id = searchParams.get("id");
    // Trouve le logement dans le tableau logements qui a l'id correspondant.
    const projetItem = data.find( projet =>projet.id === id);
    // Si aucun logement ne correspond à l'id, affiche la page d'erreur.
    if (!projetItem) {
        return <Error />;
    }
    return (
        <div className="portfolio">
            <img className="portfolio__slide" src={projetItem.pictures} alt={projetItem.description}></img>
            <div className="portfolio__container">
                <p className="portfolio__container__description">{projetItem.description}</p>
                <div className="portfolio__container__sider">
                    <ul className="portfolio__container__sider__tagblock"> {projetItem.tags.map((stuff)=>(
                            <li className="portfolio__container__sider__tagblock__tag" key={stuff}><FontAwesomeIcon icon={faStar} className="portfolio__container__sider__tagblock__tag__icon"/>{stuff}</li>
                    ))}</ul>
                    <Link className="portfolio__container__sider__link" to={projetItem.repo}>
                    <FontAwesomeIcon icon={faLink} className="portfolio__container__sider__tagblock__tag__icon"/><p>lien vers le repo gitHub</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;