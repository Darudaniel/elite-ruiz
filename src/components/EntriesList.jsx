import '../styles/components/EntriesList.css'
import { useEffect } from 'react'
import EntryCard from './EntryCard'
import { collection, getDocs } from 'firebase/firestore'
import { useState } from 'react'
import { db } from '../firebase'

const EntriesList = () => {

  const [entries, setEntries] = useState([])
  const entriesCollectionRef = collection(db, "entries")

  

  useEffect(() => {
    const getEntries = async () => {
      const data = await getDocs(entriesCollectionRef)
      setEntries(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    getEntries()
  }, [])  

  return(
    <div className='entries-list'>
      {entries.map((entry) => {
          return (
            <EntryCard
              key={entry.id}
              entryId={entry.id}
              title={entry.title}
              img={entry.img}
              description={entry.opening}
              buttonText="Leer" 
              buttonUrl={`blog/${entry.id}`}
            />
          )
        })}
    </div>
  )
}

export default EntriesList