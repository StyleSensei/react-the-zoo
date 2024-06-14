import { Outlet, useLoaderData, useLocation } from "react-router-dom"
import { IAnimalsLoader } from "../loaders/animalsLoader"
import { useEffect, useState } from "react"
import { ShowAnimal } from "../components/ShowAnimal"

export const Zoo = () => {

    const { animals } = useLoaderData() as IAnimalsLoader
    const [animalsInState, setAnimalsInState] = useState(animals)
    const [loading, setLoading] = useState(false)
    const location = useLocation()

    const checkIfHungry = () => {

        animalsInState.forEach((animal) => {
            const lastFed = new Date(animal.lastFed)
            const currentTime = new Date(Date.now())
            const diff = currentTime.getHours() - lastFed.getHours()
            if (diff >= 3)
                console.log(animal.name + ' är hungrig')


            if (diff >= 4)
                console.log(animal.name + ' är utsvulten')
            // console.log(hungryAnimals)
        })
    }

    checkIfHungry()

    animals.map((animal) => (
        animal.lastFed = new Date(animal.lastFed).toLocaleString()
    ))
    if (!animalsInState.length)
        setAnimalsInState(JSON.parse(localStorage.getItem('animals') as string))
    useEffect(() => {
        localStorage.setItem('animals', JSON.stringify(animalsInState))
    }, [animalsInState])

    return (
        <div className="wrapper">
            {animalsInState && setAnimalsInState && <Outlet key={location.pathname} context={[animalsInState, setAnimalsInState]} />}
            <h1>The Zoo</h1>
            <ul className="animal__list">
                {animalsInState.map((animal) => (
                    <ShowAnimal animal={animal} key={animal.id} />
                ))}
            </ul>
        </div>
    )
}