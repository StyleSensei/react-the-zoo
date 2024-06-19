import { useEffect, useState } from "react"
import { IAnimal } from "../models/IAnimal"
import { IPixabayResponse } from "../models/IPixabayResponse"
import { getImgFallback } from "../services/animalsService"

interface ImgFallbackProps {
    animal: IAnimal
}

export const ImgFallback = ({ animal }: ImgFallbackProps) => {

    const [fallbackImg, setFallBackImg] = useState<IPixabayResponse>()

    useEffect(() => {

        const getData = async () => {

            const fallback = await getImgFallback(animal.latinName)
            const imgUrls = fallback
            setFallBackImg(imgUrls)
        }
        getData()
    }, [animal])
    return (

        <img src={fallbackImg?.hits[0].largeImageURL} />

    )
}