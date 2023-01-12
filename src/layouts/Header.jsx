import * as React from "react";
import logo from '../assets/headerLogo.png';
import Burger from '../components/BurgerMenu';
/**
  * Composant représentant l'entête de page de l'application
  * @returns {JSX.Element} Élément JSX du composant Header
*/

function Header(){
    return(
        <div className='header'>
            <img src={logo} className='header__logo' alt='Mon logo provisoire' />
            <Burger/>
        </div>
    )
}

export default Header;