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
          title="Videos para tu marca personal"
          subtitle="2 años de experiencia editando videos para todo tipo de clientes y redes sociales" 
          buttonTitle="Contactar por whatsapp"
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