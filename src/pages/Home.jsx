import avatar from '../assets/avatar.jpg';
import CardLocker from '../components/CardLocker';
/**
  * Composant de la page d'accueil.
  *
  * @returns {JSX.Element} Élément JSX du composant Home.
*/

function Home(){
    return (
        <div className="home">
            <div className='home__banner'>
                <div className='home__banner__hello'>
                    <img className='home__banner__hello__avatar' src={avatar} alt="Ma petite banniere"></img>
                    <h1 className='home__banner__hello__text'>Bonjour et bienvenue, <span> je suis Jerôme Fernandes</span></h1>
                </div>
                <p className='home__banner__description'>Venant de terminer ma formation en développement web, j'ai acquis de solides connaissances en HTML, CSS et JavaScript ainsi que dans le MERN stack (MongoDB, Express, React, Node.js). J'ai également eu l'opportunité de mettre en pratique mes compétences lors de projets en autodidacte. Je suis actuellement à la recherche d'un premier poste afin de continuer à me développer dans ce domaine passionnant et aussi entrer dans le milieu professionnel.</p>
            </div>
            <CardLocker></CardLocker>
        </div>
    )
}

export default Home;