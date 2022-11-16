import '../styles/components/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { registerEvent } from '../firebase'

const Footer = () => {
  const instagram = <FontAwesomeIcon icon={faInstagram} size="4x"/>
  const github = <FontAwesomeIcon icon={faGithub} size="4x"/>
  const linkedin = <FontAwesomeIcon icon={faLinkedin} size="4x"/>
  const youtube = <FontAwesomeIcon icon={faYoutube} size="4x"/>

  const handleClick = () => {
    registerEvent('social_network_button')
  }
  
  return(
    <footer className="Footer">
      <div className='footer-text-container'></div>
        <h3 className='footer-text'>¿Que estas esperando para llevar tu proyecto al siguiente nivel?</h3>
      <div className="social-networks">
        <a onClick={handleClick} className="network-icon" href="https://www.youtube.com/channel/UCH7ttLbujQSj2TXVuiSbogg">
          {youtube}
        </a>
        <a onClick={handleClick} className="network-icon" href="https://www.instagram.com/elite.ruiz/">
            {instagram}
        </a>
        <a onClick={handleClick} className="network-icon" href="https://www.linkedin.com/in/daniel-ruiz-9343521b8/">
          {linkedin}
        </a>
        <a onClick={handleClick} className="network-icon" href="https://github.com/Darudaniel">
          {github}
        </a>
      </div>
    </footer>
  )
}

export default Footer