import './card.css'

 const Img = ({image}) => {
    return(
        <div className='card-image'>
            <img className='card-container--sizing' src={image} alt="car" />
        </div>
    )
}

export default Img;