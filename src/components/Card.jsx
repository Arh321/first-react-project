import { useState } from "react"
import image1 from './IMG_20230605_215215_766.jpg'
import Header from "./Header";
import Text from "./Text";
import Buttons from "./Buttons";
import Img from "./Img"
import './card.css'


const Card = () => {
    const [list , setList] = useState([
        {image: image1, headText: "Lizard" ,subText: "Chevrolet is an iconic American car brand known for its reliable, dependable, and affordable vehicles. Founded in 1911, Chevy has become one of the most recognizable car brands in the world.",button1:"SHARE",button2:"LEARN MORE" }
    ])
    
    return(
        <div className="card-container">
            <Img image={list[0].image}/>
            <Header headText={list[0].headText}/>
            <Text subText={list[0].subText}/>
            <Buttons button1={list[0].button1} button2={list[0].button2}/>
        </div>
    )
}

export default Card;
