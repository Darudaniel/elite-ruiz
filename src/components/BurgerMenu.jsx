import '../styles/components/BurgerMenu.css'
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPhoneFlip } from '@fortawesome/free-solid-svg-icons'
import { Icon } from '@iconify/react';


const BurgerMenu = () => {
  const bars = <Icon icon="bi:justify" style={{ fontSize: '4rem' }}/>
  const homeIcon = <FontAwesomeIcon icon={faHome} size="1x"/>
  const phoneIcon = <FontAwesomeIcon icon={faPhoneFlip} size="1x" />

  const handleClick = () => {
    // ReactGA.event({
    //   category: 'Menu',
    //   action: `Burger menu`
    // })
    // Algo asi se veria la implementacion de google analytics.
    console.log("Proximamente aqui se puede poner un recolector de datos de google analytics.")
  }

  return (
    <Dropdown className="burger-menu" onClick={handleClick}>
      <Dropdown.Toggle className="burger-button" variant="Secondary" id="dropdown-basic">
        {bars}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item><Link to="/home" className="item-menu-button">{homeIcon} Inicio</Link></Dropdown.Item>
        <Dropdown.Item><Link to="/home" className="item-menu-button">{phoneIcon} Contacto</Link></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default BurgerMenu