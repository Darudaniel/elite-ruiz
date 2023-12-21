import '../styles/components/About.css'
import SectionTitle from './SectionTitle'
import CardsCarousel from './CardsCarousel'
import Card from './Card'

const About = () => {
  return(
    <div className='About'>
      <SectionTitle title="SOBRE ELITE RUIZ" color="white" />
      <CardsCarousel>
        <Card 
          className="card-container" 
          title="Historia"
          img="https://images.unsplash.com/photo-1635144432103-47f3a18bae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          description="Las empresas en latinoamerica estan moviendose más rapido que nunca, y estar en linea se ha vuelto indispensable para crecer."
          buttonText='Seguir leyendo'
          buttonUrl="blog/ShVhR5EMsASW0EoeW8uV"
        /> 
        <Card 
          className="card-container" 
          title="Experiencia"
          img="https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          description="Tres años de experiencia haciendo crecer compañias, potenciando negocios y construyendo marcas."
          buttonText='Seguir leyendo'
          buttonUrl="blog/ybRayKn5cHfyR6QFLEyn"
        /> 
        <Card 
          className="card-container" 
          title="Visión"
          img="https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
          description="Preparamos a las empresas para el futuro. Por medio de soluciones tecnologicas, pondremos a tu compañia un paso adelante del resto del mercado."
          buttonText='Seguir leyendo'
          buttonUrl="blog/FJgmdjXP2CHIOp2jTDp6"
        /> 
      </CardsCarousel>
    </div>
  )
}

export default About