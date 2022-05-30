import '../styles/components/ButtonLink.css'
import { Link } from 'react-router-dom'

const ButtonLink = ({title, link, color}) => {

  const handleButtonLink = () => {
      // ReactGA.event({
      //     category: 'Button',
      //     action: `Link to ${title}`
      //   })
      // Algo asi se veria la implementacion de google analytics.
      console.log("Proximamente aqui se puede poner un recolector de datos de google analytics.")
  }

  return (
      <Link to={link}>
          <button 
              className={`${color}-button button-link`} 
              type="button"
              onClick={handleButtonLink}
          >{title}
          </button>
      </Link>
  )
}

export default ButtonLink