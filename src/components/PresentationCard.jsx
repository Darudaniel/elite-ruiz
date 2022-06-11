import '../styles/components/PresentationCard.css'
import CardTitle from './CardTitle'
import CardButton from './CardButton'

const PresentationCard = ({ image, name, caption, phone, mail }) => {
  return(
    <div className='PresentationCard'>
      <div className='portait-container'>
        <img className='portait' src={image} alt={`Portrait of ${name}`} />
      </div>
      <CardTitle title={name} />
      <p className='caption'>{caption}</p>
      <h3 className='phone'>{phone}</h3>
      <p className='mail'>{mail}</p>
      <CardButton url='/contact' buttonText='Contactar' />      
    </div>
  )
}

export default PresentationCard