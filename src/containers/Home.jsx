import '../styles/containers/Home.css'
import heroImage from '../assets/images/HeaderHomeImage.jpg'
import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import Contact from '../components/Contact'
import Newsletter from '../components/Newsletter'

const Home = () => {
  return(
    <div className="Home">
      <Hero 
          image={heroImage} 
          alt="Foto de mujer investigando un planeta virtual" 
          title="Si estas aqui es porque eres diferente al resto."
          subtitle="Consigue ahora mismo consultoría gratis para tu negocio." 
          buttonTitle="Obtener consultoría" 
          buttonLink="/contact"
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
        <Newsletter />
      </section>
    </div>
  )
}

export default Home