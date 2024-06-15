import { useState } from "react"
import { IAnimal } from "../models/IAnimal"
import { Alert } from "./Alert"

interface IAnimalDetails {
    animal: IAnimal
    animals: IAnimal[]
    setAnimalsInState: (animals: IAnimal[]) => void
}
export const ShowAnimalDetails = ({ animal, animals, setAnimalsInState }: IAnimalDetails) => {


    const handleClick = () => {
        // setIsFed(true)
        const currentDate = new Date()
        // setLastFed(currentDate.toLocaleString())

        setAnimalsInState(animals.map((a) => {
            if (a.id === animal.id) {
                return { ...a, lastFed: currentDate.toLocaleString(),
                    isFed: true, alert: false
                 }
            }
            return a;
        }))
    }

    return (
        <>
            <div className="animal__card--details">
                <picture>
                    <img src={animal.imageUrl} alt={animal.name} />
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
                <button onClick={handleClick} disabled={animal.isFed}>Mata djur</button>
            {animal.alert && <Alert/>}
            </div>
        </>
    )
}