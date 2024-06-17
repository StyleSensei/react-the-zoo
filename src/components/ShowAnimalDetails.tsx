import { Link } from "react-router-dom"
import { IAnimal } from "../models/IAnimal"
import { Alert } from "./Alert"
import { Img } from "./Img"
import { ImgFallback } from "./ImgFallback"

interface IAnimalDetails {
    animal: IAnimal
    animals: IAnimal[]
    setAnimalsInState: (animals: IAnimal[]) => void
}
export const ShowAnimalDetails = ({ animal, animals, setAnimalsInState }: IAnimalDetails) => {

    const setAlertOrHungryClass = () => {
        if(!animal.isFed && !animal.alert) return 'hungry'
        if(animal.alert) return 'alert'
        return
    }

    const handleClick = () => {
        const currentDate = new Date()

        setAnimalsInState(animals.map((a) => {
            if (a.id === animal.id) {
                return {
                    ...a, lastFed: currentDate.toLocaleString(),
                    isFed: true, alert: false
                }
            }
            return a;
        }))
    }

    return (
        <>
                <Link to={'/animals'}>Tillbaka</Link>
            <div className={`${setAlertOrHungryClass()} animal__card--details`}>
                <picture>
                {animal.alert && <Alert />}
                    <Img src={animal.imageUrl} alt={animal.name} fallback={<ImgFallback animal={animal} />} />
                </picture>
                <h1 id="name">{animal.name}</h1>
                <p id="latin">{animal.latinName}</p>
                <h3 id="about-name">Om {animal.name}</h3>
                <p id="short-description">{animal.shortDescription}</p>
                <h3 id="about-species">Rasbeskrivning</h3>
                <p id="long-description">{animal.longDescription}</p>
                <p id="medicine">Mediciner: {animal.medicine}</p>
                {animal.isFed && <p id="is-fed">Är matad :D</p>}
                <p id="last-fed">Senast matad: {animal.lastFed}</p>
                <p id="birth">Födelseår: {animal.yearOfBirth}</p>
                <button className={!animal.isFed ? 'alert--btn': ''} onClick={handleClick} disabled={animal.isFed}>Mata {animal.name}</button>
                {/* {!animal.isFed && <button className="alert--btn" onClick={handleClick}>Mata nu</button>} */}
            </div>
        </>
    )
}