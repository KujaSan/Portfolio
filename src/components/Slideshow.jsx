import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


/**
  * Affiche un diaporama d'images avec des flèches de navigation.
  *
  * @param {Array} props - Tableau d'URL d'images à afficher dans le diaporama.
  * @returns {JSX.Element} Élément JSX du diaporama.
*/

const Slideshow = ({ props }) => {
    // État de l'image actuellement affichée dans le diaporama.
    const [current, setCurrent] = useState(0);

    // Passe à l'image suivante dans le diaporama.
    const nextSlide = () => {
        // Si current est déjà égal à la dernière slide (props.length - 1), on remet current à 0 pour recommencer le diaporama à partir du début
        // Sinon, on incrémente current de 1 pour passer à la slide suivante
        setCurrent(current === props.length - 1 ? 0 : current + 1);
    };

    // Passe à l'image précédente dans le diaporama.
    const prevSlide = () => {
        // Si current est déjà égal à la première slide (0), on remet current à la dernière slide (props.length - 1) pour continuer à partir de la fin du diaporama
        // Sinon, on décrémente current de 1 pour retourner à la slide précédente
        setCurrent(current === 0 ? props.length - 1 : current - 1);
    };
    console.log(props);

    return (
        <div className='slideshow'>
            {/* Affiche les flèches de navigation seulement s'il y a plus d'une image dans le diaporama */}
            {props.length > 1 &&
                <div className="slideshow__arrows">
                    <FontAwesomeIcon className="slideshow__arrows__item" onClick={prevSlide} icon={faChevronLeft} />
                    <FontAwesomeIcon className="slideshow__arrows__item" onClick={nextSlide} icon={faChevronRight} />
                </div>
            }
            {/* Affiche chaque image du diaporama. */}
            {props.map((slide,index) => (
                <div key={index}>
                    {/* Affiche l'image et l'indice actuel si l'image est l'image actuelle du diaporama. */}
                    {index === current 
                        && <div>
                            <p className="slideshow__text">{index + 1} / {props.length}</p>
                            <img className="slideshow__slide" src={slide.cover} alt=""></img>
                        </div>
                    }
                </div>
                ))
            }
        </div>
    );
};

export default Slideshow;