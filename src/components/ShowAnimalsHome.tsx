import { IAnimal } from "../models/IAnimal"
import { ShowAnimal } from "./ShowAnimal"

interface IShowAnimalsHomeProps {
    animalsInState : IAnimal[]
}

export const ShowAnimalsHome = ({animalsInState}:IShowAnimalsHomeProps) => {
    return (<>
    <h2>Alla hungriga djur</h2>
        <ul className="animal__list--home">
            {animalsInState?.map((animal) => (
                !animal.isFed ?
                <ShowAnimal animal={animal} key={animal.id} />
                : ''))}
        </ul>
            </>
    )
}