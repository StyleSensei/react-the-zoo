import { useLoaderData } from "react-router-dom"
import { IAnimalsLoader } from "../loaders/animalsLoader"
import { useState } from "react"
import { ShowAnimal } from "../components/ShowAnimal"

export const Zoo = () => {

    const { animals } = useLoaderData() as IAnimalsLoader
    const [animalsInState, setAnimalsInState] = useState(animals)
    const [loading, setLoading] = useState(false)

    return (
        <div className="wrapper">
            <h1>The Zoo</h1>
            <ul className="animal__list">
            {animals.map((animal)=>(
                <ShowAnimal animal={animal} key={animal.id} />
            ))}
            </ul>
        </div>
    )
}