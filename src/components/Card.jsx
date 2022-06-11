import '../styles/components/Card.css'
import CardTitle from './CardTitle'
import CardButton from './CardButton'

const Card = ({ title, image, description, buttonText}) => {
  return(
    <div className='Card'>
      <CardTitle title={title} />
      {/* <img src="" alt="" /> */}
      <p>{description}</p>
      <CardButton url='/contact' buttonText={buttonText} />
    </div>
  )
}

export default Card