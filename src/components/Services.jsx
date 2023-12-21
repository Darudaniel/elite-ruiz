import '../styles/components/Services.css'
import { Fade } from 'react-reveal';

const Services = () => {

  const servicesJs = [
    {
      serviceName: "Asesoría",
      serviceDescription: "La comprensión de tu negocio es el centro de la consultoría, saber que necesitas para crecer es nuestra especialidad.",
      serviceImage: "https://cdn.pixabay.com/photo/2017/12/21/12/08/consulting-3031678_960_720.jpg",
      serviceImageDescription: "Dos empresarios dandose la mano"
    },
    {
      serviceName: "Creacion de marca",
      serviceDescription: "La creación de una marca y la presencia en redes sociales es el primer paso para potenciar tu negocio, deja que nuestro equipo se encargue de poner en alto el nombre de tu compañia en internet.",
      serviceImage: "https://images.pexels.com/photos/7147720/pexels-photo-7147720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      serviceImageDescription: "Persona diseñando el branding de una empresa"
    },
    {
      serviceName: "Publicidad",
      serviceDescription: "Tu marca merece más visibilidad, alcance y reconocimiento. Somos tus aliados expertos en inbound y outbound marketing.",
      serviceImage: "https://images.pexels.com/photos/802024/pexels-photo-802024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      serviceImageDescription: "Foto de Times Square de noche"
    },
    {
      serviceName: "Contenido para redes sociales",
      serviceDescription: "Lleva tu contenido en redes sociales a otro nivel. Nuestro equipo realizará material multimedia especifico para tu audiencia. Aporta valor a tu comunidad por medio de contenido de calidad.",
      serviceImage: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      serviceImageDescription: "Drone blanco volando"
    },
    {
      serviceName: "Pagina web para tu empresa",
      serviceDescription: "Potencia la presencia en linea de tu compañia, con un sitio web diseñado a medida y preservando la esencia de tu marca.",
      serviceImage: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      serviceImageDescription: "Persona comprando en una pagina web desde su celular."
    },
    {
      serviceName: "Mantenimiento de tu sitio web",
      serviceDescription: "Conserva tu pagina web segura y actualizada con nuestro servicio de mantenimiento mensual.",
      serviceImage: "https://images.pexels.com/photos/442152/pexels-photo-442152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      serviceImageDescription: "Persona realizando mantenimiento tecnico a un servidor web"
    },
    
  ]

  return(
    <div className='Services'>
      {
        servicesJs.map(({serviceName, serviceDescription, serviceImage, serviceImageDescription}, index) => {
          const duration = 3000;
          return (
            <Fade duration={duration} >
              <div className='service'>
                <h3 className='service-name' >{serviceName}</h3>
                <p>{serviceDescription}</p>
                <div className='service-image--container'>
                  <img className='service-image' src={serviceImage} alt={serviceImageDescription} />
                </div>
              </div>
            </Fade>
          )
        })
      }
    </div>
  )
}

export default Services