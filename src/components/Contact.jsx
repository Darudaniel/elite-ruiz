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
        caption="Amo el marketing, y estare feliz de asesorarte en el siguiente paso para tu negocio."
        phone="3225836645"
        mail="habladaru@gmail.com"
      />
    </div>
  )
}

export default Contact