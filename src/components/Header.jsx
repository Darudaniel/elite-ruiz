import '../styles/components/Header.css'
import { Link } from 'react-router-dom'
// import ButtonLink from '../components/ButtonLink'
// import BurgerMenu from './BurgerMenu'

const Header = ({ image }) => {
  return(
    <div className='Header'>
      <Link to="/home" className="logo-container">
        <img className="logo-image" src={image} alt="Banner de la marca" />
      </Link>
      {/* <BurgerMenu /> */}
      {/* <ButtonLink title="Blog" link="/blog" color="elite" /> */}
    </div>
  )
}

export default Header