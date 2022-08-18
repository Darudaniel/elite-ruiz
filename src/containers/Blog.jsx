import { useState, useEffect } from 'react'
import { db } from '../firebase'
import { collection, getDocs } from 'firebase/firestore'
import '../styles/containers/Blog.css'
import CardsCarousel from '../components/CardsCarousel'
import EntryCard from "../components/EntryCard"
import ContainerTitle from '../components/SectionTitle'

const Blog = () => {

  const [entries, setEntries] = useState([])
  const entriesCollectionRef = collection(db, "entries")

  useEffect(() => {
    const getEntries = async () => {
      const data = await getDocs(entriesCollectionRef)
      setEntries(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    getEntries()
  }, [])

  return (
    <div className="Blog">
      <ContainerTitle title="BLOG"/>
      <CardsCarousel>
        
        {entries.map((entry) => {
          return (
            <EntryCard
              key={entry.id}
              title={entry.title}
              img={entry.img}
              description={entry.opening}
              buttonText="Leer" 
              buttonUrl={`blog/${entry.id}`}
            />
          )
        })}

      </CardsCarousel>
    </div>
  )
}

export default Blog