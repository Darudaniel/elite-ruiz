import '../styles/components/Card.css'
import CardTitle from './CardTitle'
import CardButton from './CardButton'
import { Link } from 'react-router-dom'

const Card = ({ title, img, description, buttonText, buttonUrl, buttonExtraUrl}) => {
  return(
    <Link to={`/${buttonUrl}`} className='Card'>
      <div className='Card-content'>
        <CardTitle title={title} />
        <div className='Card-image--container'>
          <img className='Card-image' src={img} alt="service graphic description" />
        </div>
        <p>{description}</p>
      </div>
      {buttonUrl ?
        <CardButton buttonUrl={buttonUrl} buttonText={buttonText} />
        :
        <CardButton buttonExtraUrl={buttonExtraUrl} buttonText={buttonText} />
      }
    </Link>
  )
}

export default Card