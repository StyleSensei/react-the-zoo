import { useState } from "react"
import { IAnimal } from "../models/IAnimal"
import { CustomCursor } from "./CustomCursor"
import { ShowAnimal } from "./ShowAnimal"
import { Link } from "react-router-dom"

interface IShowAnimalsHomeProps {
    animalsInState: IAnimal[] | undefined
}

export const ShowAnimalsHome = ({ animalsInState }: IShowAnimalsHomeProps) => {

    const [cursorActive, setCursorActive] = useState(false)
    const isFed = (animal: IAnimal) => animal.isFed
    return (<>
        {!animalsInState?.every(isFed) && <h2>Alla hungriga djur</h2>}
        {animalsInState?.every(isFed) && <><h2>Alla djur är för tillfället mätta!</h2>
        
            <Link to={'/animals'}><button className="hero-cta">Läs mer om djuren</button></Link></>}
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