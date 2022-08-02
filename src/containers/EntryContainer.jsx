import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import '../styles/containers/EntryContainer.css'

const EntryContainer = () => {

  const { entryId } = useParams()

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
      <div className='EntryContainer'>
        {entries.length > 0 ?
          <div>
            <h1>{entries[0].title}</h1>
            <img className="entry-img" src={entries[entryId].img} alt="foto relacionada con el articulo" />
            <p>{entries[entryId].opening}</p>
            <h2>{entries[entryId].firstSubHeader}</h2>
            <p>{entries[entryId].firstContent}</p>
            <h2>{entries[entryId].secondSubHeader}</h2>
            <p>{entries[entryId].secondContent}</p>
          </div>
          : 
          console.log('Aun no ha llegado la respuesta de la api')
        }
      </div>
    )
  
}

export default EntryContainer