import '../styles/components/CardButton.css'
import { Link } from 'react-router-dom'
import { registerEvent } from '../firebase'

const CardButton = ({ buttonText, buttonUrl, buttonExtraUrl }) => {

  const handleClick = () => {
    registerEvent(buttonText)
  }

  return(
    <div className="Card-button--container">
      {buttonUrl ?
        <Link to={`/${buttonUrl}`}>
          <button className='Card-button' type="button">
            {buttonText}
          </button>
        </Link>  
        :
        <a onClick={handleClick} href={buttonExtraUrl}>
          <button className='Card-button' type="button">
            {buttonText}
          </button>
        </a>
      }
    </div>
  )
}

export default CardButton