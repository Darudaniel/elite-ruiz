import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
 

const Footer = () => {
  const instagram = <FontAwesomeIcon icon={faInstagram} size="4x"/>
  const github = <FontAwesomeIcon icon={faGithub} size="4x"/>
  const linkedin = <FontAwesomeIcon icon={faLinkedin} size="4x"/>
  const twitter = <FontAwesomeIcon icon={faTwitter} size="4x"/>
  
  const handleClick = () => {
    console.log('Aqui se va a poner google ads en un futuro')
  //   ReactGA.event({
  //       category: 'Icon',
  //       action: `Social network visited`
  //     })
  }
  // Aqui se va a poner google ads en un futuro
  return(
    <footer className="Footer">
      <div className="social-networks">
        <a onClick={handleClick} className="network-icon" href="https://www.instagram.com/danielruizen/?igshid=146eqhcu1h6ok">
            {instagram}
        </a>
        <a onClick={handleClick} className="network-icon" href="https://github.com/Darudaniel">
          {github}
        </a>
        <a onClick={handleClick} className="network-icon" href="https://www.linkedin.com/in/daniel-ruiz-9343521b8/">
          {linkedin}
        </a>
        <a onClick={handleClick} className="network-icon" href="https://twitter.com/Darubeat">
          {twitter}
        </a>
      </div>
    </footer>
  )
}

export default Footer