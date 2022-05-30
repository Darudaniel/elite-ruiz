import ButtonLink from '../components/ButtonLink'
import '../styles/components/Hero.css'

const Hero = ({image, alt, title, subtitle, buttonTitle, buttonLink, buttonColor}) => {
  return(
    <div className="hero-container">
      <div className="text-container">
        <h1 className="hero-title">{title}</h1>
        <h3 className="hero-subtitle">{subtitle}</h3>
      </div>
    <div className="hero-button">
      <ButtonLink
        className="hero-button" 
        title={buttonTitle} 
        link={buttonLink}
        color={buttonColor}
      />
    </div>
  </div>
  )
}

export default Hero