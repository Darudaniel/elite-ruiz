import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db, registerEvent } from '../firebase';
import '../styles/containers/EntryContainer.css'
import EntriesList from '../components/EntriesList';
import ReactMarkdown from 'react-markdown';
import { Helmet } from 'react-helmet';

const EntryContainer = () => {
  const { entryId } = useParams()
  const [myEntry, setMyEntry] = useState({})
  registerEvent(myEntry.title)
  
  useEffect(() => {
    window.scrollTo(0, 0)
    const docRef = doc(db, "entries", entryId)
    const getEntry = async () => {
      const entry = await getDoc(docRef)
      setMyEntry(entry.data())
    }
    getEntry()
  }, [entryId])

    return(
      
       
        <div className='EntryContainer'>
          {myEntry.title ?
            <>
              <Helmet>
                <title>{myEntry.title}</title>
                <meta name="description" content={myEntry.opening} />
                <meta property="og:title" content={myEntry.title} />
                <meta property="og:description" content={myEntry.opening} />
                <meta property="og:image" content={myEntry.img} />
              </Helmet>
              <div className='my-entry'>
                <h1 className='entry-title'>{myEntry.title}</h1>
                <img className="entry-img" src={myEntry.img} alt="foto relacionada con el articulo" />
                <p className='entry-opening'>{myEntry.opening}</p>
                <div className='markdown-container'>
                  <ReactMarkdown>{myEntry.editorContent}</ReactMarkdown>
                </div>
                {myEntry.author ? 
                    <p className='entry-opening'>Escrito por: {myEntry.author}</p>
                    :
                    <p className='entry-opening'>Escrito por: Anónimo</p>
                  }
              </div>
            </>
            : 
            console.log('Aun no ha llegado la respuesta de la api')
          }
          <h3 className="articles-section-title">Mas artículos</h3>
          <EntriesList />
        </div>
      
      )
    }
    
export default EntryContainer