import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function Burger(){
    // Initialisation de l'état du dropdown à fermé
    const [isOpen, setIsOpen] = useState(false);
    // Fonction de changement de l'état du burger (ouvert ou fermé)
    const toggleText = () => {
        setIsOpen(!isOpen);
    };
    //declaration des textes
    const acceuil = 'Accueil';
    const propos = 'A Propos';
    // Style à appliquer au lien actif
    let activeStyle = {
        textDecoration: "underline",
    };
    const burgerName = `burger__menu ${isOpen ? "" : "out"}`.trim();
    return(
        <div className="burger">
            {/* Bouton titre du dropdown, qui appelle la fonction toggleText lorsqu'on le clique */}
            <button className="burger__button" onClick={toggleText}>
                {isOpen ? (
                    <FontAwesomeIcon className="burger__button__icon" icon={faXmark} />
                ) : (
                    <FontAwesomeIcon className="burger__button__icon" icon={faBars} />
                )}
            </button>
            {isOpen && (
                // Le contenu de ce bloc ne s'affiche que si isOpen est vrai (true)
                <nav className={burgerName}>
                    <NavLink to="/" style={({ isActive }) =>isActive ? activeStyle : undefined} className='burger__menu__text'>
                        {acceuil}
                    </NavLink>
                
                    <NavLink to="/About" style={({ isActive }) =>isActive ? activeStyle : undefined} className='burger__menu__text'>
                        {propos}
                    </NavLink>
                </nav>
            )}
        </div>
    )
    
}

export default Burger;