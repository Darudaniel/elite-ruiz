import '../styles/components/Layout.css'
import Header from './Header'
import Footer from './Footer'
import Banner from '../assets/images/EliteRuizBanner.png'
import { Icon } from '@iconify/react';

const Layout = ({ children }) => {
  const whatsapp = <Icon icon="logos:whatsapp-icon" style={{ fontSize: '5.5rem'}}/>

  return (
    <div className="Layout">
      <Header image={Banner} />
      <div className="layout-content-container">
        {children}
        <div className="whatsapp-container">
          <a href="https://wa.link/qyj0gw">
            {whatsapp}
          </a>
        </div>
      </div>
      <Footer />
    </div>    
  )
}

export default Layout