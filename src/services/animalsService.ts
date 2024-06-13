import { IAnimal } from "../models/IAnimal";
import { get } from "./serviceBase";

export const getAnimals = async (): Promise<IAnimal[]> => {
    const url = 'https://animals.azurewebsites.net/api/animals'

    const data = await get<IAnimal[]>(url)
    return data
};

export const getAnimal = async (id:string | undefined): Promise<IAnimal> => {
    const url = 'https://animals.azurewebsites.net/api/animals/' + id

    const data = await get<IAnimal>(url)
    return data
};
