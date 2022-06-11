import '../styles/components/LeadForm.css'


const LeadForm = () => {

  const handleSubmit = () => {
    console.log('Formulario enviado')
  }

  return(
    <form className="LeadForm" onSubmit={handleSubmit}>
      <label htmlFor="name">
            Nombre
          </label>
          <input
            id="name"
            type="name" 
            name="name"
          />
          <label htmlFor="email">
            Correo electronico
          </label>
          <input
            id="email"
            type="email" 
            name="email"
          />
          <button className="success-button" type="submit">
            Enviar
          </button>
    </form>
  )
}

export default LeadForm