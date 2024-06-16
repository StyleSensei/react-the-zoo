import { useNavigate } from "react-router-dom"
import { IAnimal } from "../models/IAnimal"
import { Alert } from "./Alert"
import { Img } from "./Img"
import { ImgFallback } from "./ImgFallback"

interface IShowAnimalProps {
    animal: IAnimal

}
export const ShowAnimal = ({ animal,}: IShowAnimalProps) => {
const navigate = useNavigate()
    const handleClick = () => {
        navigate("/animals/" + animal.id)
        scrollTo({top:0, left:0, behavior:'smooth'})
      
    }
    return (
        <li>
            <div className="animal__card">
                {animal.alert && <Alert/>}
                <h2>{animal.name}</h2>
                <p>{animal.shortDescription}</p>
                <picture>
                    
                <Img src={animal.imageUrl} alt={animal.name} fallback={<ImgFallback animal={animal}/>}/>
                </picture>
               <button onClick={handleClick}>Läs mer</button>
            </div>
        </li>
    )
}