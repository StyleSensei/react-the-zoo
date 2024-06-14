import { useOutletContext, useParams } from "react-router-dom"
import { ShowAnimalDetails } from "../components/ShowAnimalDetails"
import { IAnimal } from "../models/IAnimal"
import { useEffect, useState } from "react"
import { getAnimal } from "../services/animalsService"

interface IAnimalContext {
    animals: IAnimal[]
    setAnimalsInState: (animals: IAnimal[]) => void
}

export const Animal = () => {

    const { id } = useParams()
    // const [animal, setAnimal] = useState<IAnimal>()
    const [loading, setLoading] = useState(false)
    const [animals, setAnimalsInState] = useOutletContext<IAnimalContext>()

    const animal:IAnimal = animals.find((a:IAnimal) => a.id.toString() === id)


    // useEffect(() => {
    //     // if(animal) return
    //     // setAnimal(JSON.parse(localStorage.getItem('animal')||''))

    //     if (loading) return;
    //     const getAnimalData = async () => {

    //         const data = await getAnimal(id)
    //         setAnimal(data)
    //         setLoading(true)
    //         // localStorage.setItem('animal', JSON.stringify(data))
    //     }
    //     getAnimalData()
    // })

    return (
        <>
            <div className="wrapper">
                <h2>Detaljer</h2>
                {animal && <ShowAnimalDetails animal={animal} animals={animals} setAnimalsInState={setAnimalsInState} />}
            </div>
        </>
    )
}