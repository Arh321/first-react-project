import './card.css'

const Header = ({headText}) => {
    return(
        <div className='card-header--text'>
            {headText}
        </div>
    )
}

export default Header;