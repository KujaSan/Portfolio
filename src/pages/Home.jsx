import banner from '../assets/web-design-banner.jpg';
import CardLocker from '../components/CardLocker';
/**
  * Composant de la page d'accueil.
  *
  * @returns {JSX.Element} Élément JSX du composant Home.
*/

function Home(){
    return (
        <div className="home">
            <h1 className='home__text'>Bonjour et bienvenue, <span> je suis Jerôme Fernandes</span></h1>
            <img className='home__banner' src={banner} alt="Ma petite banniere"></img>
            <p>Féru de developpement web, je suis prêt à vous accompagner et à participer à vous projets</p>
            <CardLocker></CardLocker>
        </div>
    )
}

export default Home;