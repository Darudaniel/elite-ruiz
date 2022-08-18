import '../styles/components/ButtonLink.css'
import { registerEvent } from '../firebase'

const ButtonLink = ({title, link, color}) => {

  const handleButtonLink = () => {
    registerEvent(title)
    // const analytics = getAnalytics();
    // logEvent(analytics, '')
      // ReactGA.event({
      //     category: 'Button',
      //     action: `Link to ${title}`
      //   })
      // Algo asi se veria la implementacion de google analytics.
      console.log("Proximamente aqui se puede poner un recolector de datos de google analytics.")
  }

  return (
      <a href={link}>
          <button 
              className={`${color}-button button-link`} 
              type="button"
              onClick={handleButtonLink}
          >{title}
          </button>
      </a>
  )
}

export default ButtonLink