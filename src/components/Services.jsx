import '../styles/components/Services.css'
import SectionTitle from './SectionTitle'
import Card from './Card'
import CardsCarousel from './CardsCarousel';

const Services = () => {

  return(
    <div className='Services'>
      <SectionTitle title="NUESTROS SERVICIOS" />
      <section className='carousel-container '>
        <CardsCarousel>
          <Card 
              className="card-container" 
              title="Asesoría"
              img="https://cdn.pixabay.com/photo/2017/12/21/12/08/consulting-3031678_960_720.jpg"
              description="Nos esforzamos por entender tu idea y diseñamos un plan estrategico que logre los resultados más costoefectivos."
              buttonText='Detalles'
              buttonUrl="blog/UIxCrpARSpUbgTPX2ZRy"
            /> 
            <Card 
              className="card-container" 
              title="Planeación"
              img="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGxhbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60"
              description="Planeamos una campaña publicitaria para tu marca. Basados en el presupuesto y los objetivos de tu empresa."
              buttonText='Detalles'
              buttonUrl="blog/UIxCrpARSpUbgTPX2ZRy"
            /> 
            <Card 
              className="card-container" 
              title="Producción"
              img="https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              description="Grabamos material audiovisual para tu marca en calidad HD y 4k, contamos con el equipo y el talento necesario."
              buttonText='Detalles'
              buttonUrl="blog/UIxCrpARSpUbgTPX2ZRy"
            />
            <Card 
              className="card-container" 
              title="Todo en uno"
              img="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              description="Nos encargamos del crecimiento de tu empresa. Hacemos todas las labores de un departamento de marketing."
              buttonText='Detalles'
              buttonUrl="blog/UIxCrpARSpUbgTPX2ZRy"
            /> 
        </CardsCarousel>
      </section>
    </div>
  )
}

export default Services