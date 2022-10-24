import '../styles/components/Services.css'
import SectionTitle from './SectionTitle'
import Card from './Card'
import CardsCarousel from './CardsCarousel';

const Services = () => {

  return(
    <div className='Services'>
      <SectionTitle title="SERVICIOS" />
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
              title="Video"
              img="https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              description="Realizaré un video para tu marca personal, incluye guion con storytelling y copywritting"
              buttonText='Detalles'
              buttonUrl="blog/nJ8aGoyxOBT6bc2gWlr5"
            />
            <Card 
              className="card-container" 
              title="Planeación"
              img="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGxhbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60"
              description="Diseñaré un plan de marketing para aumentar la visibilidad de tu marca con las herramientas publicitarias de google y facebook"
              buttonText='Detalles'
              buttonUrl="blog/l0KMfNWVP9tzgZMpgJ7s"
            />
            <Card 
              className="card-container" 
              title="Todo en uno"
              img="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              description="Crearé un equipo dedicado exclusivamente al crecimiento de tu empresa. Haremos todas las labores de un departamento de marketing."
              buttonText='Detalles'
              buttonUrl="blog/RM1J4EP86gtJby7lnzem"
            /> 
        </CardsCarousel>
      </section>
    </div>
  )
}

export default Services