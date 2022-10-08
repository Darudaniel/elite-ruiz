import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db, registerEvent } from '../firebase';
import '../styles/containers/EntryContainer.css'
import EntriesList from '../components/EntriesList';

const EntryContainer = () => {

  const { entryId } = useParams()

  const [myEntry, setMyEntry] = useState({})
  const docRef = doc(db, "entries", entryId)

  useEffect(() => {
    const getEntry = async () => {
      const entry = await getDoc(docRef)
      setMyEntry(entry.data())
      registerEvent(myEntry.title)
    }

    getEntry()
    
  }, [])

    return(
      <div className='EntryContainer'>
        {myEntry.title ?
          <div className='my-entry'>
            <h1 className='entry-title'>{myEntry.title}</h1>
            <img className="entry-img" src={myEntry.img} alt="foto relacionada con el articulo" />
            <p className='entry-opening'>{myEntry.opening}</p>
            <h2 className='entry-sub-header'>{myEntry.firstSubHeader}</h2>
            <p className='entry-content'>{myEntry.firstContent}</p>
            <h2 className='entry-sub-header'>{myEntry.secondSubHeader}</h2>
            <p className='entry-content'>{myEntry.secondContent}</p>
            {myEntry.author ? 
                <p className='entry-opening'>Escrito por: {myEntry.author}</p>
               :
                <p className='entry-opening'>Escrito por: Anónimo</p>
            }
            <h3 className="articles-section-title">Mas artículos</h3>
            <EntriesList />
          </div>
          : 
          console.log('Aun no ha llegado la respuesta de la api')
        }
      </div>
    )
  
}

export default EntryContainer