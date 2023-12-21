import '../styles/components/EntryCard.css'
import CardTitle from './CardTitle'
import CardButton from './CardButton'
import { Link } from 'react-router-dom'

const EntryCard = ({ title, img, description, entryId, buttonText, buttonUrl}) => {
  return(
    <Link to={`/blog/${entryId}`} className='entry-card'>
      <div className='entry-card-content'>
        <CardTitle title={title} />
        <div className='entry-card-image--container'>
          <img className='entry-card-image' src={img} alt="service graphic description" />
        </div>
        <p className='entry-card-description'>{description}</p>
      </div>
      <CardButton buttonUrl={buttonUrl} buttonText={buttonText} />
    </Link>
  )
}

export default EntryCard