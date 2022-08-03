import '../styles/components/EntryCard.css'
import CardTitle from './CardTitle'
import CardButton from './CardButton'

const EntryCard = ({ title, img, description, buttonText, buttonUrl}) => {
  return(
    <div className='entry-card'>
      <div className='entry-card-content'>
        <CardTitle title={title} />
        <div className='entry-card-image--container'>
          <img className='entry-card-image' src={img} alt="service graphic description" />
        </div>
        <p>{description}</p>
      </div>
      <CardButton buttonUrl={buttonUrl} buttonText={buttonText} />
    </div>
  )
}

export default EntryCard