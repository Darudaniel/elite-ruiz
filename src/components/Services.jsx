import '../styles/components/Services.css'
import SectionTitle from './SectionTitle'
import ServiceCard from './ServiceCard'

const Services = () => {
  return(
    <div className='Services'>
      <SectionTitle title="NUESTROS SERVICIOS" />
      <div className='cards-carousel'>
        <ServiceCard 
          title="Publicidad"
          description="Pensamos, grabamos, editamos,  lanzamos y mantenemos campañas de publicidad."
        />
        <ServiceCard title="Consultoria" />
      </div>
    </div>
  )
}

export default Services