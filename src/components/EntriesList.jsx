import '../styles/components/EntriesList.css'

const EntriesList = ({ children }) => {
  return(
    <div className='entries-list'>
      {children}
    </div>
  )
}

export default EntriesList