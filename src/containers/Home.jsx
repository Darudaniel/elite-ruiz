import '../styles/containers/Home.css'
import heroImage from '../assets/images/HeaderHomeImage.jpg'
import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import Contact from '../components/Contact'

const Home = () => {

  return(
    <div className="Home">
      <Hero 
          image={heroImage} 
          alt="Grey background" 
          title="Si estas aqui es porque eres diferente a los demás."
          subtitle="Aprende a crear o potenciar un negocio con el metodo freelancer" 
          buttonTitle="Obtener consultoría gratis"
          buttonLink="https://wa.link/qyj0gw"
          buttonColor="elite"
      />
      <section className="services-section">
        <Services />
      </section>
      <section className="about-section">
        <About />
      </section>
      <section className='contact-section'>
        <Contact />
      </section>
    </div>
  )
}

export default Home