import '../styles/components/ButtonLink.css'
import { registerEvent } from '../firebase'

const ButtonLink = ({title, link, color}) => {

  const handleButtonLink = () => {
    registerEvent(title)
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