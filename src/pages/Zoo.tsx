import { Outlet, useLoaderData, useLocation } from "react-router-dom"
import { IAnimalsLoader } from "../loaders/animalsLoader"
import { useEffect, useState } from "react"
import { ShowAnimal } from "../components/ShowAnimal"

export const Zoo = () => {

    const { animals } = useLoaderData() as IAnimalsLoader
    const [animalsInState, setAnimalsInState] = useState(animals)
    const location = useLocation()

    useEffect(() => {

        setAnimalsInState(animals.map((animal) => {
            const lastFed = new Date(animal.lastFed)
            const currentTime = new Date(Date.now())
            const diff = currentTime.getTime() - lastFed.getTime()
            const hoursInMs = 60 * 60 * 1000
            if (diff > 4 * hoursInMs) {
                console.log(animal.name + ' är utsvulten')
                return {
                    ...animal,
                    alert: true,
                    isFed: false
                }
            }
            if (diff < 4 * hoursInMs && diff > 3 * hoursInMs) {
                console.log(animal.name + ' är hungrig')
                return {
                    ...animal,
                    alert: false,
                    isFed: false
                }
            }
            if (diff < 3 * hoursInMs) {
                console.log(animal.name + ' är hungrig')
                return {
                    ...animal,
                    isFed: true,
                    alert: false
                }
            }
            return animal;
        }))
    }, [animals])


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
            <h1>Alla djur</h1>
            <ul className="animal__list">
                {animalsInState.map((animal) => (
                    <ShowAnimal animal={animal} key={animal.id} />
                ))}
            </ul>
        </div>
    )
}