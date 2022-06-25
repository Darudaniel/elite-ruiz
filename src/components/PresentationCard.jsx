import '../styles/components/PresentationCard.css'
import CardButton from './CardButton'

const PresentationCard = ({ image, name, caption, phone, mail }) => {
  return(
    <div className='PresentationCard'>
      <div className='portait-container'>
        <img className='portait' src={image} alt={`Portrait of ${name}`} />
      </div>
      <h3 className='name'>{name}</h3>
      <p className='caption'>{caption}</p>
      <h3 className='phone'>{phone}</h3>
      <p className='mail'>{mail}</p>
      <CardButton url='https://wa.link/qyj0gw' buttonText='Contactar' />      
    </div>
  )
}

export default PresentationCard