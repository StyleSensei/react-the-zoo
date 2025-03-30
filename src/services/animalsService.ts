import type { IAnimal } from "../models/IAnimal";
import type { IPixabayResponse } from "../models/IPixabayResponse";
import { get } from "./serviceBase";

export const getAnimals = async (): Promise<IAnimal[] | undefined> => {
	const url = "https://animals.azurewebsites.net/api/animals";

	const data = await get<IAnimal[]>(url);
	return data;
};

interface CachedResponse<T> {
	data: T;
	timestamp: number;
}

const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

export const getImgFallback = async (
	query: string,
): Promise<IPixabayResponse | undefined> => {
	const cacheKey = `pixabay_${query}`;
	const cachedDataString = localStorage.getItem(cacheKey);

	if (cachedDataString) {
		const cachedData = JSON.parse(
			cachedDataString,
		) as CachedResponse<IPixabayResponse>;
		const now = new Date().getTime();
		if (now - cachedData.timestamp < CACHE_DURATION) {
			console.log("Using cached data");
			return cachedData.data;
		}
		localStorage.removeItem(cacheKey);
		console.log("Cache expired, fetching new data");
	}

	const url = `https://pixabay.com/api/?key=${
		import.meta.env.VITE_PIXABAY_API_KEY
	}&q=${query}`;
	try {
		const data = await get<IPixabayResponse>(url);
		if (data) {
			const cachedData: CachedResponse<IPixabayResponse> = {
				data,
				timestamp: new Date().getTime(),
			};
			localStorage.setItem(cacheKey, JSON.stringify(cachedData));
		}
		return data;
	} catch (error) {
		return undefined;
	}
};
