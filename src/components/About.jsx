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
          title="¿Como empezó?"
          img="https://images.unsplash.com/photo-1635144432103-47f3a18bae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          description="Las empresas en latinoamerica estan moviendose más rapido que nunca y me di cuenta de que les faltaba algo."
          buttonText='Seguir leyendo'
          buttonUrl="blog/AUb2KOUUccH4Qgzo3dOp"
        /> 
        <Card 
          className="card-container" 
          title="Experiencia"
          img="https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          description="Dos años de experiencia haciendo crecer la economia, potenciando negocios y construyendo marcas."
          buttonText='Seguir leyendo'
          buttonUrl="blog/JBr676WXu3jTrgW8wjXD"
        /> 
        <Card 
          className="card-container" 
          title="Visión"
          img="https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
          description="Latinoamerica tiene mucho talento por explotar, solo hace falta que la informacion llegue a los oidos correctos."
          buttonText='Seguir leyendo'
          buttonUrl="blog/5TjhGGR43Jw1FnHEy4GC"
        /> 
      </CardsCarousel>
    </div>
  )
}

export default About