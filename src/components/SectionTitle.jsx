import '../styles/components/SectionTitle.css'

const SectionTitle = ({ title, color }) => {
  return(
    <title className='title-container'>
      <h2 className={`title title-${color}`}>{title}</h2>
    </title>
  )
}

export default SectionTitle