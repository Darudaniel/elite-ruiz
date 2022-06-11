import '../styles/components/About.css'
import SectionTitle from './SectionTitle'
import CardsCarousel from './CardsCarousel'
import Card from './Card'

const About = () => {
  return(
    <div className='About'>
      <SectionTitle title="QUIENES SOMOS" color="white" />
      <CardsCarousel>
        <Card 
          className="card-container" 
          title="Publicidad"
          description="Pensamos, grabamos, editamos,  lanzamos y mantenemos campañas de publicidad."
          buttonText='Seguir leyendo'
        /> 
        <Card 
          className="card-container" 
          title="Estudios"
          description="Pensamos, grabamos, editamos,  lanzamos y mantenemos campañas de publicidad."
          buttonText='Seguir leyendo'
        /> 
        <Card 
          className="card-container" 
          title="Consultoria"
          description="Pensamos, grabamos, editamos,  lanzamos y mantenemos campañas de publicidad."
          buttonText='Seguir leyendo'
        /> 
      </CardsCarousel>
    </div>
  )
}

export default About