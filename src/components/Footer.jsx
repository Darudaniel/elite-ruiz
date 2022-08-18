import '../styles/components/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { registerEvent } from '../firebase'

const Footer = () => {
  const instagram = <FontAwesomeIcon icon={faInstagram} size="4x"/>
  const github = <FontAwesomeIcon icon={faGithub} size="4x"/>
  const linkedin = <FontAwesomeIcon icon={faLinkedin} size="4x"/>
  const twitter = <FontAwesomeIcon icon={faTwitter} size="4x"/>

  const handleClick = () => {
    registerEvent('social_network_button')
  }
  
  return(
    <footer className="Footer">
      <div className='footer-text-container'></div>
        <h3 className='footer-text'>Somos expertos en publicidad digital, llevamos un año haciendo crecer la economia.</h3>
      <div className="social-networks">
        <a onClick={handleClick} className="network-icon" href="https://www.instagram.com/elite.ruiz/">
            {instagram}
        </a>
        <a onClick={handleClick} className="network-icon" href="https://github.com/Darudaniel">
          {github}
        </a>
        <a onClick={handleClick} className="network-icon" href="https://www.linkedin.com/in/daniel-ruiz-9343521b8/">
          {linkedin}
        </a>
        <a onClick={handleClick} className="network-icon" href="https://twitter.com/eliteruizdotcom">
          {twitter}
        </a>
      </div>
    </footer>
  )
}

export default Footer