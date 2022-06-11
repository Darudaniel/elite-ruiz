import '../styles/components/Layout.css'
import Header from './Header'
import Footer from './Footer'
import Banner from '../assets/images/EliteRuizBanner.png'

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <Header image={Banner} />
      <div className="layout-content-container">
        {children}
      </div>
      <Footer />
    </div>    
  )
}

export default Layout