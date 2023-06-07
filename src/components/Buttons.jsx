import './card.css'


const Buttons = ({button1,button2}) => {
    return (
        <div className='card-buttons-container'>
            <button>{button1}</button>
            <button>{button2}</button>
        </div>
    )
}

export default Buttons;