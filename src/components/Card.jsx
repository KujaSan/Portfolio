import banner from '../assets/web-design-banner.jpg';
function Card(){
    return(
        <div className="cardlocker__card">
            <img className='cardlocker__card__img' src={banner} alt="Ma petite banniere"></img>
            <p className='cardlocker__card__title'>ici un petit paragraphe</p>
        </div>
    )
}

export default Card;