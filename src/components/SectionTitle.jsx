import '../styles/components/SectionTitle.css'

const SectionTitle = ({ title }) => {
  return(
    <title className='title-container'>
      <h2 className='title'>{title}</h2>
    </title>
  )
}

export default SectionTitle