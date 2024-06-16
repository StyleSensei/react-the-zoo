import { HTMLProps, ReactNode, useState } from "react";

type ImgProps = HTMLProps<HTMLImageElement> & {
    fallback?: ReactNode
}

export const Img = ({fallback, src, alt}:ImgProps) => {
    const [isBroken,setIsBroken] = useState(false)

    const HandleError = () => {
setIsBroken(true)
    }
    if (isBroken) return fallback
return (
    <>
    <img onError={HandleError} src={src} alt={alt}/>
    </>
)
}