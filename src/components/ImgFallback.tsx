import { useEffect, useState } from "react"
import { IAnimal } from "../models/IAnimal"
import { getImgFallback } from "../services/animalsService"

interface ImgFallbackProps {
    animal: IAnimal
}

export const ImgFallback = ({ animal }: ImgFallbackProps) => {

    const [fallbackImg, setFallBackImg] = useState<string>()
    
    useEffect(() => {
        
        const getData = async () => {
            try{
                const response = await getImgFallback(animal.latinName)

                const imgUrl = response?.hits[0].largeImageURL
                setFallBackImg(imgUrl)
            } catch (error){
                console.error('fallback error',error);
                setFallBackImg('/404.png')
                
            }
        }
        getData()
    }, [animal])
    return (
        <img src={fallbackImg} />
    )
}
