import '../styles/components/Newsletter.css'
import SectionTitle from './SectionTitle'
import LeadForm from './LeadForm'

const Newsletter = () => {
  return(
    <div className='Newsletter'>
      <h2 className='newsletter-cta'>SUSCRIBETE AL NEWSLETTER</h2>
      <LeadForm />
    </div>
  )
}

export default Newsletter