import { useOutletContext } from 'react-router-dom';
import { IAnimal } from '../models/IAnimal';

export type ContextType = [
  animalsInState: IAnimal[],
  setAnimalsInState: (animals: IAnimal[]) => void
];

export const useOutletContextType = () => {
  return useOutletContext<ContextType>();
};
