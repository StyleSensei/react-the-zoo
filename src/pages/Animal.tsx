import { useParams } from "react-router-dom"
import { ShowAnimalDetails } from "../components/ShowAnimalDetails"
import { IAnimal } from "../models/IAnimal"
import { useOutletContextType } from "../hooks/useOutletContextType"


export const Animal = () => {

    const { id } = useParams()
    const [animalsInState, setAnimalsInState] = useOutletContextType()
    

    const animal = animalsInState.find((a: IAnimal) => a.id.toString() === id) as IAnimal

    return (
        <>
            <div className="wrapper">
                <h2>Detaljer</h2>
                {animal && <ShowAnimalDetails animal={animal} animals={animalsInState} setAnimalsInState={setAnimalsInState} />}
            </div>
        </>
    )
}