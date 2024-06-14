import { useNavigate } from "react-router-dom"
import { IAnimal } from "../models/IAnimal"

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
                <h2>{animal.name}</h2>
                <p>{animal.shortDescription}</p>
                <picture>
                <img src={animal.imageUrl} alt={animal.name}/>
                </picture>
               <button onClick={handleClick}>Läs mer</button>
            </div>
        </li>
    )
}