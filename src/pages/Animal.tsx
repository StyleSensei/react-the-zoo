import { useNavigate, useParams } from "react-router-dom"
import { ShowAnimalDetails } from "../components/ShowAnimalDetails"
import { IAnimal } from "../models/IAnimal"
import { useOutletContextType } from "../hooks/useOutletContextType"
import { useEffect } from "react"


export const Animal = () => {

    const { id } = useParams()
    const [animalsInState, setAnimalsInState] = useOutletContextType()
    const navigate = useNavigate()

    const animal = animalsInState.find((a: IAnimal) => a.id.toString() === id);

    const checkId = () => {
        if (!location.pathname.includes('/animals/' + animal?.id.toString())) {
            const redirect = true
            return redirect
            }
    }
            useEffect(()=>{
                
                if(checkId())
                navigate('/animals')  
    
            },[checkId])
     

    return (
        <>
            <div className="wrapper">
                <h2>Detaljer</h2>
                {animal && <ShowAnimalDetails animal={animal} animals={animalsInState} setAnimalsInState={setAnimalsInState} />}
            </div>
        </>
    )
}