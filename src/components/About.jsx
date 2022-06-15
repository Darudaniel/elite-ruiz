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
          title="¿Como empezamos?"
          img="https://images.unsplash.com/photo-1635144432103-47f3a18bae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          description="Las empresas estan moviendose más rapido que nunca y nos dimos cuenta de que les faltaba algo."
          buttonText='Seguir leyendo'
        /> 
        <Card 
          className="card-container" 
          title="¿Donde estamos?"
          img="https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          description="Llevamos un año haciendo crecer la economia, potenciando negocios y construyendo marcas."
          buttonText='Seguir leyendo'
        /> 
        <Card 
          className="card-container" 
          title="¿Hacia donde vamos?"
          img="https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
          description="Este año queremos finalizar con una infraestructura digital automatizada y evergreen."
          buttonText='Seguir leyendo'
        /> 
      </CardsCarousel>
    </div>
  )
}

export default About