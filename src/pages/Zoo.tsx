import { Outlet, useLocation } from "react-router-dom"
import { useEffect } from "react"
import { ShowAnimals } from "../components/ShowAnimals"
import { ContextType } from "../hooks/useOutletContextType"
import { useUpdateAnimalStatus } from "../hooks/useUpdateAnimalStatus"

export const Zoo = () => {

    const location = useLocation()

    const { animals, animalsInState, setAnimalsInState } = useUpdateAnimalStatus(4, 3)


    animals?.map((animal) => (
        animal.lastFed = new Date(animal.lastFed).toLocaleString()
    ))
    if (!animalsInState?.length)
        setAnimalsInState(JSON.parse(localStorage.getItem('animals') as string))
    useEffect(() => {
        localStorage.setItem('animals', JSON.stringify(animalsInState))
    }, [animalsInState])

    return (
        <div className="wrapper">
            {animalsInState && setAnimalsInState && <Outlet key={location.pathname} context={[animalsInState, setAnimalsInState] satisfies ContextType} />}
            {location.pathname === '/animals' && animalsInState && <ShowAnimals animalsInState={animalsInState} />}
        </div>
    )
}
