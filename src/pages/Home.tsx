import { ShowAnimalsHome } from "../components/ShowAnimalsHome"
import { useUpdateAnimalStatus } from "../hooks/useUpdateAnimalStatus"

export const Home = () => {
    const { animalsInState } = useUpdateAnimalStatus(4, 3)

    return (
        <div className="wrapper__home">
            <h1>The Zoo</h1>
            <ShowAnimalsHome animalsInState={animalsInState} />
        </div>
    )
}