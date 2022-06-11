import '../styles/components/Newsletter.css'
import SectionTitle from './SectionTitle'
import LeadForm from './LeadForm'

const Newsletter = () => {
  return(
    <div className='Newsletter'>
      <SectionTitle title="SUSCRIBETE AL NEWSLETTER" color="white" />
      <LeadForm />
    </div>
  )
}

export default Newsletter