import { IAnimal } from "../models/IAnimal"

interface IShowAnimalProps {
   animal: IAnimal
}
export const ShowAnimal = ({animal}: IShowAnimalProps) => {

    return (
        <div>
        <h2>{animal.name}</h2>
        <p>{animal.shortDescription}</p>
        <img src={animal.imageUrl} alt={animal.name}/>
    </div>
    )
}