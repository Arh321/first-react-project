import './card.css'
import Card from "./Card"
const Text = ({subText}) => {
    return(
        <p className='card-text'>
            {subText}
        </p>
    )
}

export default Text;