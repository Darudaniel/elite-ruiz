import '../styles/components/Services.css'
import SectionTitle from './SectionTitle'
import Card from './Card'
import CardsCarousel from './CardsCarousel';

const Services = () => {

  return(
    <div className='Services'>
      <SectionTitle title="NUESTROS SERVICIOS" />
      <section className='cards-contaMercadeoiner--slider'>
        <CardsCarousel>

          <Card 
              className="card-container" 
              title="Asesoría"
              img="https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzaW9uYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60"
              description="Escuchamos las necesidades de tu negocio, y establecemos un plan de acción para obtener los resultados más costoefectivos."
              buttonText='Detalles'
            /> 
            <Card 
              className="card-container" 
              title="Planeación"
              img="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGxhbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60"
              description="Planearemos una campaña publicitaria para tu marca. Basados en el presupuesto y los objetivos de tu empresa."
              buttonText='Detalles'
            /> 
            <Card 
              className="card-container" 
              title="Producción"
              img="https://images.unsplash.com/photo-1520390138845-fd2d229dd553?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtZXJhJTIwaGFuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60"
              description="Grabaremos un video para tu marca en una excelente calidad tanto en la produccion como en la post-producción."
              buttonText='Detalles'
            />
            <Card 
              className="card-container" 
              title="Campaña completa"
              img="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNhbXBhaWdufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
              description="Nos encargamos de todo para crear y lanzar una campaña publicitaria desde cero, hecho todo a la medida de tu empresa."
              buttonText='Detalles'
            /> 
            <Card 
              className="card-container" 
              title="¿Buscando trabajo?"
              img="https://images.unsplash.com/photo-1598257006626-48b0c252070d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dHJhYmFqb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60"
              description="Estamos abiertos a recibir personas de valor en nuestro equipo, contactanos para mas información."
              buttonText='Enviar mensaje'
            /> 
        </CardsCarousel>
      </section>
    </div>
  )
}

export default Services