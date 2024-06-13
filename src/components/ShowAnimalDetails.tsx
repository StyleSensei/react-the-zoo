import { IAnimal } from "../models/IAnimal"

interface IAnimalDetails {
    animal: IAnimal
}
export const ShowAnimalDetails = ({ animal }: IAnimalDetails) => {
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
                {animal.isFed && <p id="is-fed">Är matad :D{animal.isFed}</p>}
                <p id="last-fed">Senast matad: {animal.lastFed}</p>
                <p id="birth">Födelseår: {animal.yearOfBirth}</p>
                <button>Mata</button>
            </div>
        </>
    )
}