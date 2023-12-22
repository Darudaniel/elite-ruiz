import ButtonLink from '../components/ButtonLink'
import '../styles/components/Hero.css'
import { useEffect, useMemo, useState } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group';

const Hero = ({image, alt, title, subtitle, buttonTitle, buttonLink, buttonColor}) => {

  const [currentWord, setCurrentWord] = useState([]);
  
  const words = useMemo(() => {
    return ['marcas', 'redes sociales', 'publicidad', 'paginas web', 'branding', 'consultoría', 'ventas', 'coaching', 'SEO', 'diseño'];
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Get the index of the next word
      const currentIndex = words.indexOf(currentWord);
      const nextIndex = (currentIndex + 1) % words.length;

      // Update the state with the next word
      setCurrentWord(words[nextIndex]);
    }, 2000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [currentWord, words]);

  return(
    <div className="hero-container">
      <div className="text-container">
        <h1 className="hero-title">{title}</h1>
        <div className='hero-subtitle--container'>
          <p className="hero-subtitle">Expertos en</p>
          <SwitchTransition>
            <CSSTransition
              key={currentWord}
              timeout={250}
              addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
              classNames='fade'
            >
              <p className="changing-word">{currentWord}</p>
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
    <div className="hero-buttons-container">
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