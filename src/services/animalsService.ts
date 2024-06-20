import { IAnimal } from '../models/IAnimal';
import { IPixabayResponse } from '../models/IPixabayResponse';
import { get } from './serviceBase';

export const getAnimals = async (): Promise<IAnimal[] | undefined> => {


    const url = 'https://animals.azurewebsites.net/api/animals';
    
    const data = await get<IAnimal[]>(url);
    return data;
};

export const getImgFallback = async (
  query: string
): Promise<IPixabayResponse | undefined> => {
  const url = `https://pixabay.com/api/?key=${
    import.meta.env.VITE_API_KEY
  }&q=${query}`;
  const data = await get<IPixabayResponse>(url);
  return data;
};
