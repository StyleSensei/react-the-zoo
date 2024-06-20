import { useLoaderData } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IAnimalsLoader } from '../loaders/animalsLoader';

export const useUpdateAnimalStatus = (
  alertHours?: number,
  hungryHours?: number
) => {
  const { animals } = useLoaderData() as IAnimalsLoader;
  const [animalsInState, setAnimalsInState] = useState(animals);

  useEffect(() => {
    if (alertHours && hungryHours)
      setAnimalsInState(
        animals?.map((animal) => {
          const lastFed = new Date(animal.lastFed);
          const currentTime = new Date(Date.now());
          const diff = currentTime.getTime() - lastFed.getTime();
          const hoursInMs = 60 * 60 * 1000;
          if (diff > alertHours * hoursInMs) {
            return {
              ...animal,
              alert: true,
              isFed: false,
            };
          }
          if (diff < alertHours * hoursInMs && diff > hungryHours * hoursInMs) {
            return {
              ...animal,
              alert: false,
              isFed: false,
            };
          }
          if (diff < hungryHours * hoursInMs) {
            return {
              ...animal,
              isFed: true,
              alert: false,
            };
          }
          return animal;
        })
      );
  }, [animals, alertHours, hungryHours]);
  return { animals, animalsInState, setAnimalsInState };
};
