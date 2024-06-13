import { useParams } from "react-router-dom"
import { ShowAnimalDetails } from "../components/ShowAnimalDetails"
import { IAnimal } from "../models/IAnimal"
import { useEffect, useState } from "react"
import { getAnimal, getAnimals } from "../services/animalsService"

export const Animal = () => {

const {id} = useParams()
const [animal, setAnimal] = useState<IAnimal>()
const [loading, setLoading] = useState(false)

useEffect(()=>{

    if(loading) return;
    const getAnimalData = async () => {

        const data = await getAnimal(id)
    setAnimal(data)
    setLoading(true)
    }
    getAnimalData()
})

    return (
       <>
       <div className="wrapper">
       <h2>Detaljer</h2>
       {animal && <ShowAnimalDetails animal={animal}/>}
       </div>
       </>
    )
}