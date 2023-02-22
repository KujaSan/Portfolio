import { Link } from "react-router-dom";

function Card(props){
    return(
        <div className="cardlocker__card">
            <Link to={`/Portfolio?id=${props.id}`}>
                <img className='cardlocker__card__img' src={props.cover} alt="Ma petite banniere"></img>
                <p className='cardlocker__card__title'>{props.id}</p>
            </Link>
        </div>
    )
}

export default Card;