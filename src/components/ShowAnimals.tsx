import { IAnimal } from "../models/IAnimal"
import { ShowAnimal } from "./ShowAnimal"

interface IShowAnimalsProps {
    animalsInState : IAnimal[]
}

export const ShowAnimals = ({animalsInState}:IShowAnimalsProps) => {
    return (<>
        <h1>Alla djur</h1>
        <ul className="animal__list">
            {animalsInState?.map((animal) => (
                <ShowAnimal animal={animal} key={animal.id} />
                ))}
        </ul>
            </>
    )
}