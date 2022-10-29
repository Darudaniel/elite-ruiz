import '../styles/components/Services.css'
import SectionTitle from './SectionTitle'
import Card from './Card'
import CardsCarousel from './CardsCarousel';

const Services = () => {

  return(
    <div className='Services'>
      <SectionTitle title="¿EN QUE TE PUEDO AYUDAR?" />
      <section className='carousel-container '>
        <CardsCarousel>
          <Card 
              className="card-container" 
              title="Asesoría"
              img="https://cdn.pixabay.com/photo/2017/12/21/12/08/consulting-3031678_960_720.jpg"
              description="Voy a entender tu negocio y te recomendaré varias opciones para mejorar tu presencia en linea."
              buttonText='Detalles'
              buttonUrl="blog/OudjnoZIc7VibopFLVV1"
            /> 
            <Card 
              className="card-container" 
              title="Contenido"
              img="https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              description="Si creas contenido en redes sociales, voy a entender tu voz de marca y te brindaré ideas creativas."
              buttonText='Detalles'
              buttonUrl="blog/nJ8aGoyxOBT6bc2gWlr5"
            />
            <Card 
              className="card-container" 
              title="Equipos"
              img="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              description="Si lideras un equipo, la cultura empresarial y la automatizacion de procesos son tus mejores aliados."
              buttonText='Detalles'
              buttonUrl="blog/RM1J4EP86gtJby7lnzem"
            /> 
            <Card 
              className="card-container" 
              title="Mindset"
              img="https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              description="Si eres trader o quieres enfocarte en algun proyecto, tu mindset determinará tus resultados."
              buttonText='Detalles'
              buttonUrl="blog/ICMtp8pvi7SNAz3qQhmq"
            />
        </CardsCarousel>
      </section>
    </div>
  )
}

export default Services