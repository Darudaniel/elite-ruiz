import '../styles/components/Card.css'
import CardTitle from './CardTitle'
import CardButton from './CardButton'

const Card = ({ title, img, description, buttonText}) => {
  return(
    <div className='Card'>
      <div className='Card-content'>
        <CardTitle title={title} />
        <div className='Card-image--container'>
          <img className='Card-image' src={img} alt="service graphic description" />
        </div>
        <p>{description}</p>
      </div>
      <CardButton url='https://wa.link/qyj0gw' buttonText={buttonText} />
    </div>
  )
}

export default Card