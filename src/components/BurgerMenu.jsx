import '../styles/components/BurgerMenu.css'
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHome } from '@fortawesome/free-solid-svg-icons'


const BurgerMenu = () => {
  const bars = <FontAwesomeIcon icon={faBars} size="4x"/>
  const homeIcon = <FontAwesomeIcon icon={faHome} size="1x"/>

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
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default BurgerMenu