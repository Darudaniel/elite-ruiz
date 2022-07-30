import '../styles/components/ContainerTitle.css'
import '../styles/components/SectionTitle.css'

const SectionTitle = ({ title, color }) => {
  return(
    <title className='container-title-container'>
      <h1 className={`container-title container-title-${color}`}>{title}</h1>
    </title>
  )
}

export default SectionTitle