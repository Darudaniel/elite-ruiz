import '../styles/components/CardButton.css'

const CardButton = ({ url, buttonText }) => {
  return(
    <div className="Card-button--container">
      <a href={url}>
          <button className='Card-button' type="button">
            {buttonText}
          </button>
      </a>  
    </div>
  )
}

export default CardButton