import { IAnimal } from "../models/IAnimal";
import { getAnimals } from "../services/animalsService";

export interface IAnimalsLoader {
    animals: IAnimal[]
}
export const animalsLoader = async () => {
    const data: IAnimalsLoader = {animals : await getAnimals()}
    return data
}
