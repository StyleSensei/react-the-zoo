import { useState } from "react"
import { IAnimal } from "../models/IAnimal"
import { CustomCursor } from "./CustomCursor"
import { ShowAnimal } from "./ShowAnimal"

interface IShowAnimalsHomeProps {
    animalsInState: IAnimal[]
}

export const ShowAnimalsHome = ({ animalsInState }: IShowAnimalsHomeProps) => {

    const [cursorActive, setCursorActive] = useState(false)
    const isFed = (animal: IAnimal) => animal.isFed
    return (<>
        {!animalsInState.every(isFed) && <h2>Alla hungriga djur</h2>}
        {animalsInState.every(isFed) && <><h2>Alla djur är för tillfället mätta!</h2>
            <button className="hero-cta">Läs mer om djuren</button></>}
        <ul className="animal__list--home" onMouseEnter={() => setCursorActive(true)} onMouseLeave={() => setCursorActive(false)}>
            {animalsInState?.map((animal) => (
                !animal.isFed ?
                    <ShowAnimal animal={animal} key={animal.id} />
                    : ''))}
        </ul>
        {cursorActive && <CustomCursor />}

    </>
    )
}