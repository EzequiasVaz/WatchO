import { useEffect, useState } from "react"
import { ButtonSection } from "../../Buttons/Sections"
import { SmallMovieCard } from "../../MovieCard/SmallMovieCard"
import { MovieDetails } from "../../../interfaces"
import { Loading } from "../../Loadings/Cards"


export function WarMovies() {
    const [movieList, setMovieList] = useState<MovieDetails[]>([])
    const sectionInfo = {
        title: 'Guerra'
    }
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch(import.meta.env.VITE_GET_WAR_MOVIES).then(response => response.json()).then(data => {
            setMovieList(data.results)
        })
        setIsLoaded(true)
    }, [])


    return (

        <>

            {
                !isLoaded ? <Loading /> :
                    <>
                        <header>
                            <ButtonSection {...sectionInfo} />
                        </header>
                        <ul className="flex flex-row w-full overflow-x-scroll scrollbar-none gap-8 text-white font-bold pl-0.5/10 pb-10 pt-5 scroll-smooth">
                            {movieList.map((movie: MovieDetails) => (
                                <SmallMovieCard {...movie} key={movie.id} />
                            ))}
                        </ul>
                    </>
            }

        </>

    )
}