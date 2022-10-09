import '../styles/components/Contact.css'
import SectionTitle from './SectionTitle'
import PresentationCard from './PresentationCard'
import profilePhoto from '../assets/images/Profile2022comprimida.png'

const Contact = () => {
  return(
    <div className='Contact'>
      <SectionTitle title="CONTACTO" />
      <PresentationCard
        image={profilePhoto} 
        name="Daniel Ruiz" 
        caption="Voy a entender tu proyecto y te mostraré las opciones que tienes para mejorar tu presencia en linea."
        phone="3225836645"
        mail="habladaru@gmail.com"
      />
    </div>
  )
}

export default Contact