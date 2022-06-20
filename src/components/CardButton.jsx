import '../styles/components/CardButton.css'
import { Link } from 'react-router-dom'

const CardButton = ({ url, buttonText }) => {
  return(
    <div className="Card-button--container">
      <Link to={url}>
          <button className='Card-button' type="button">
            {buttonText}
          </button>
      </Link>  
    </div>
  )
}

export default CardButton