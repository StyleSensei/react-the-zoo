import { useLoaderData } from "react-router-dom"
import { IAnimalsLoader } from "../loaders/animalsLoader"
import { useState } from "react"
import { ShowAnimal } from "../components/ShowAnimal"

export const Zoo = () => {

    const { animals } = useLoaderData() as IAnimalsLoader
    const [animalsInState, setAnimalsInState] = useState(animals)
    const [loading, setLoading] = useState(false)

    return (
        <div>
            <h1>The Zoo</h1>
            {animals.map((animal)=>(
                <ShowAnimal animal={animal} key={animal.id} />
            ))}
        </div>
    )
}