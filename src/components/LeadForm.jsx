import { useState } from 'react'
import '../styles/components/LeadForm.css'
import { db, registerEvent } from '../firebase'
import { addDoc, collection } from '@firebase/firestore'
import ThanksMiniMessage from './ThanksMiniMessage'

const LeadForm = () => {
  
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [leadCaptured, setLeadCaptured] = useState(false)
 
  const handleChange = (e) => {
    e.preventDefault()
    if(e.target.name === "name") {
      setName(e.target.value)
    }

    if(e.target.name === "email") {
      setEmail(e.target.value)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = {
      name,
      email
    }

    try {
      const docRef = await addDoc(collection(db, "leads"), formData);
      console.log("Document written with ID: ", docRef.id);
      setLeadCaptured(true)
      registerEvent('lead_register')
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return(
    <>
      {leadCaptured ?
        <ThanksMiniMessage />
        :
        <form className="LeadForm" onSubmit={handleSubmit}>
          <label htmlFor="name">
                Nombre
              </label>
              <input
                id="name"
                type="name" 
                name="name"
                onChange={handleChange}
              />
              <label htmlFor="email">
                Correo electronico
              </label>
              <input
                id="email"
                type="email" 
                name="email"
                onChange={handleChange}
              />
              <button className="success-button" type="submit">
                Enviar
              </button>
        </form>
      }
    </>
  )
}

export default LeadForm