import '../styles/components/ServiceCard.css'
import CardTitle from './CardTitle'

const ServiceCard = ({ title, image, description}) => {
  return(
    <div className='ServiceCard'>
      <CardTitle title={title} />
      {/* <img src="" alt="" /> */}
      <p>{description}</p>
    </div>
  )
}

export default ServiceCard