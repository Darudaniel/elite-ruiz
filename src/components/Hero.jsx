import ButtonLink from '../components/ButtonLink'
import '../styles/components/Hero.css'
import CardButton from './CardButton'

const Hero = ({image, alt, title, subtitle, buttonTitle, buttonLink, buttonColor}) => {
  return(
    <div className="hero-container">
      <div className="text-container">
        <h1 className="hero-title">{title}</h1>
        <h3 className="hero-subtitle">{subtitle}</h3>
      </div>
    <div className="hero-buttons-container">
      <ButtonLink
        className="hero-button" 
        title={buttonTitle} 
        link={buttonLink}
        color={buttonColor}
      />
      <br />
      <CardButton buttonText="Ir al blog" buttonUrl="/blog" />
    </div>
  </div>
  )
}

export default Hero