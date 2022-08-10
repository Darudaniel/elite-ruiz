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
          subtitle="Consigue ahora mismo consultoría gratis para tu negocio." 
          buttonTitle="Obtener consultoría" 
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