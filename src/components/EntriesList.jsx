import '../styles/components/EntriesList.css'
import { useEffect } from 'react'
import EntryCard from './EntryCard'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import { useState } from 'react'
import { db } from '../firebase'

const EntriesList = () => {

  const [entries, setEntries] = useState([])
  
  useEffect(() => {
    const entriesCollectionRef = collection(db, "entries")
    const getEntries = async () => {
      const q = query(entriesCollectionRef, orderBy("createdAt", "desc"));
      const data = await getDocs(q)

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