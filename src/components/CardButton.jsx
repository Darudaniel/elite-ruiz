import { Link } from 'react-router-dom'
import '../styles/components/CardButton.css'

const CardButton = ({ buttonText, buttonUrl }) => {
  return(
    <div className="Card-button--container">
      <Link to={`/${buttonUrl}`}>
          <button className='Card-button' type="button">
            {buttonText}
          </button>
      </Link>  
    </div>
  )
}

export default CardButton