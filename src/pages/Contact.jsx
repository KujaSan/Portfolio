import avatar from '../assets/avatar.jpg';

/**
  * Composant de la page d'informations.
  *
  * @returns {JSX.Element} Élément JSX du composant Home.
*/

function Contact(){
    return (
        <div className="contact">
            <img className='contact__avatar' src={avatar} alt="Mon petit avatar"></img>
            <form className="contact__form">
                <div className='contact__form__names'>
                    <label for="lastname">Nom:</label>
                    <input className="contact__form__names__item" id="lastname" type="text" name="lastname" />

                    <label for="firstname">Prénom:</label>
                    <input className="contact__form__names__item" id="firstname" type="text" name="firstname" />
                </div>
                <label for="email">Email:</label>
                <input className="contact__form__item" id="email" type="email" name="email"/>

                <label for="pitch">La raison de votre prise de contact:</label>
                <textarea className="contact__form__item" id="pitch" name="story">
                La raison de votre prise de contact:
                </textarea>
                <input className="contact__form__button" type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Contact;