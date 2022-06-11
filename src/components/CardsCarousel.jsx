import '../styles/components/CardsCarousel.css'

const CardsCarousel = ({ children }) => {
  return(
    <div className='cards-carousel'>
      {children}
    </div>
  )
}

export default CardsCarousel