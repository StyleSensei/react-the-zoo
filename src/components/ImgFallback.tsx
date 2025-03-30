import { useEffect, useState } from "react";
import type { IAnimal } from "../models/IAnimal";
import { getImgFallback } from "../services/animalsService";

interface ImgFallbackProps {
	animal: IAnimal;
}

export const ImgFallback = ({ animal }: ImgFallbackProps) => {
	const [fallbackImg, setFallBackImg] = useState<string>();
	const [isPixabayFallback, setIsPixabayFallback] = useState(false);

	useEffect(() => {
		const getData = async () => {
			try {
				const response = await getImgFallback(animal.latinName);

				const imgUrl = response?.hits[0].largeImageURL;
				setFallBackImg(imgUrl);
				setIsPixabayFallback(true);
			} catch (error) {
				console.error("fallback error", error);
				setFallBackImg("/404.png");
			}
		};
		getData();
	}, [animal]);
	return (
		<>
			<img src={fallbackImg} alt={animal.latinName} />{" "}
			<span className="fallback-label">
				{isPixabayFallback
					? "Fallback från Pixabay"
					: "Fallback från lokal lagring"}
			</span>
		</>
	);
};
