import { useOutletContext, useParams } from "react-router-dom"
import { ShowAnimalDetails } from "../components/ShowAnimalDetails"
import { IAnimal } from "../models/IAnimal"

interface IAnimalContext {
    animals: IAnimal[]
    setAnimalsInState: (animals: IAnimal[]) => void
}

export const Animal = () => {

    const { id } = useParams()
    const [animals, setAnimalsInState] = useOutletContext<IAnimalContext>()

    const animal:IAnimal = animals.find((a:IAnimal) => a.id.toString() === id)


    return (
        <>
            <div className="wrapper">
                <h2>Detaljer</h2>
                {animal && <ShowAnimalDetails animal={animal} animals={animals} setAnimalsInState={setAnimalsInState} />}
            </div>
        </>
    )
}