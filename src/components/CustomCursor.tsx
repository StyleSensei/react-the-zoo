import { useEffect, useRef, useState } from "react"
import { useWindowListener } from "../hooks/useWindowListener";


export const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const cardPositions = useRef<{ x: number, y: number }>({ x: 1000, y: 300 })
    const [movementX, setMovementX] = useState(0)
    const [movementY, setMovementY] = useState(0)
    const [isMoving, setIsMoving] = useState(false)

    const cards = document.querySelectorAll<HTMLElement>('#stickan')
    const a = useRef(0);
    const n = useRef(0);

    useEffect(() => {
        cards.forEach((card: HTMLElement, i) => {
            if (i < 5) {
                cardPositions.current = { ...cardPositions, y: 300, x: 15 + 350 * i }
                card.style.top = `${cardPositions.current.y}px`
                card.style.left = `${cardPositions.current.x}px`
                card.style.position = 'fixed'
            }
            if (i >= 5 && i <= 10) {
                cardPositions.current = { ...cardPositions, y: 300 + 350, x: 15 + 350 * a.current }
                card.style.top = `${cardPositions.current.y}px`
                card.style.left = `${cardPositions.current.x}px`
                a.current++
            }
            if (i > 10) {
                cardPositions.current = { ...cardPositions, y: 300 + 700, x: 15 + 350 * n.current }
                card.style.top = `${cardPositions.current.y}px`
                card.style.left = `${cardPositions.current.x}px`
                n.current++
            }
        })
        const moveAnimal = () => {
            cardPositions.current.y = position.y
            cardPositions.current.x = position.x
            cards.forEach((card: HTMLElement) => {
                card.style.top = `${cardPositions.current.y - 150}px`
                card.style.left = `${cardPositions.current.x - 150}px`
            })
        }
        moveAnimal()
    }, [cardPositions.current.x, cardPositions.current.y, cards ,position])


    const moveCursor = (e: PointerEvent) => {
        setIsMoving(true)
        setTimeout(() => {
            setPosition({ x: e.clientX - 50, y: e.clientY - 50 });

            if (e.movementX < 60 && e.movementX > -60) {
                setMovementX(e.movementX)
                if (e.movementX < 30 && e.movementX > -30) {
                    setMovementX(e.movementX * 1.8)
                }
            }
            if (e.movementY < 60 && e.movementY > -60) {
                setMovementY(e.movementY)
                if (e.movementY < 30 && e.movementY > -30) {
                    setMovementY(e.movementY * 1.5)
                }
            }
        }, 180);
        // moveAnimal()
    }


    useWindowListener('pointermove', (moveCursor as EventListener));

    return (
        <>
            {location.pathname === '/' && <div className="custom-cursor" style={{
                top: `${position.y}px`,
                left: `${position.x}px`,
                transform: isMoving ? `skew(${movementX}deg, ${movementY}deg) rotate(${movementX * 2}deg)` : `skew(0deg, 0deg) rotate(0deg)`,
                transition: !isMoving ? `transform ease 150ms scale ease-in-out 0.3s` : `scale ease-in-out 0.3s`,
                position: `fixed`
            }
            }>
                <img className='custom-cursor-img' src="/carrot.svg" alt="carrot-cursor" />
            </div>}
        </>
    )
}