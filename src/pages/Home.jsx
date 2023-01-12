import avatar from '../assets/avatar.jpg';

/**
  * Composant de la page d'accueil.
  *
  * @returns {JSX.Element} Élément JSX du composant Home.
*/

function Home(){
    return (
        <div className="home">
            <h1 className='home__text'>Bonjour et bienvenue, <span> je suis Jerôme Fernandes</span></h1>
            <img className='home__avatar' src={avatar} alt="Mon petit avatar"></img>
            
        </div>
        
    )
}

export default Home;