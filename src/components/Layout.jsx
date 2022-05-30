import '../styles/components/Layout.css'
import Header from './Header'
import Footer from './Footer'
import Banner from '../assets/images/Banner Elite Ruiz.png'

const Layout = ({ children }) => {
  return (
    <div className="Main">
      <Header image={Banner} />
      <div className="layout-content-container">
        {children}
      </div>
      <Footer />
    </div>    
  )
}

export default Layout