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
        title="Presencia en línea para tu empresa"
        buttonTitle="Ir al blog"
        buttonLink="/blog"
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