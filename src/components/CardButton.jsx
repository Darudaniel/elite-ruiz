import { Link } from 'react-router-dom'
import '../styles/components/CardButton.css'

const CardButton = ({ buttonText, buttonUrl, buttonExtraUrl }) => {
  return(
    <div className="Card-button--container">
      {buttonUrl ?
        <Link to={`/${buttonUrl}`}>
          <button className='Card-button' type="button">
            {buttonText}
          </button>
        </Link>  
        :
        <a href={buttonExtraUrl}>
          <button className='Card-button' type="button">
            {buttonText}
          </button>
        </a>
      }
    </div>
  )
}

export default CardButton