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
        caption="Dos años de experiencia creando contenido para marcas."
        phone="3225836645"
        mail="habladaru@gmail.com"
      />
    </div>
  )
}

export default Contact