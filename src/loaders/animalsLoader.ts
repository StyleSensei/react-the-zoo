import { IAnimal } from '../models/IAnimal';
import { getAnimals } from '../services/animalsService';

export interface IAnimalsLoader {
  animals: IAnimal[];
}
export const animalsLoader = async () => {
  if (!localStorage.getItem('animals')) {
    const data: IAnimalsLoader = { animals: await getAnimals() };
    return data;
  }
  else{
    const data: IAnimalsLoader = { animals : JSON.parse(localStorage.getItem('animals') as string)}
    return data
  }
};
