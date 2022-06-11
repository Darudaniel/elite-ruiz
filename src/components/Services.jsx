import '../styles/components/Services.css'
import SectionTitle from './SectionTitle'
import Card from './Card'
import "react-multi-carousel/lib/styles.css";
import CardsCarousel from './CardsCarousel';

const Services = () => {

  return(
    <div className='Services'>
      <SectionTitle title="NUESTROS SERVICIOS" />
      <section className='cards-contaMercadeoiner--slider'>
        <CardsCarousel>
          <Card 
              className="card-container" 
              title="Publicidad"
              description="Pensamos, grabamos, editamos,  lanzamos y mantenemos campañas de publicidad."
              buttonText='Detalles'
            /> 
            <Card 
              className="card-container" 
              title="Estudios"
              description="Pensamos, grabamos, editamos,  lanzamos y mantenemos campañas de publicidad."
              buttonText='Detalles'
            /> 
            <Card 
              className="card-container" 
              title="Consultoria"
              description="Pensamos, grabamos, editamos,  lanzamos y mantenemos campañas de publicidad."
              buttonText='Detalles'
            /> 
        </CardsCarousel>
      </section>
    </div>
  )
}

export default Services