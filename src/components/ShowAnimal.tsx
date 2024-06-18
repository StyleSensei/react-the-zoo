import { useNavigate } from "react-router-dom"
import { IAnimal } from "../models/IAnimal"
import { Alert } from "./Alert"
import { Img } from "./Img"
import { ImgFallback } from "./ImgFallback"

interface IShowAnimalProps {
    animal: IAnimal

}
export const ShowAnimal = ({ animal, }: IShowAnimalProps) => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/animals/" + animal.id)
        scrollTo({ top: 0, left: 0, behavior: 'smooth' })

    }
    return (
        
            <div className={animal.alert ? 'animal__card alert' : 'animal__card'}>
                <h2>{animal.name}</h2>
                {location.pathname === '/animals' && <p>{animal.shortDescription}</p>}
                <picture>
                    {animal.alert && <Alert />}

                    <Img src={animal.imageUrl} alt={animal.name} fallback={<ImgFallback animal={animal} />} />
                </picture>

                {location.pathname === '/animals' && animal.isFed && <button onClick={handleClick}>Läs mer</button>}
                {location.pathname === '/animals' && !animal.isFed && <button className="alert--btn" onClick={handleClick}>Mata nu</button>}

            </div>
        
    )
}