import { useEffect, useState } from "react"
import { MovieDetails } from "../../../interfaces"
import { ButtonSection } from "../../Buttons/Sections"
import { Loading } from "../../Loadings/Cards"
import { BigMovieCard } from "../../MovieCard/BigMovieCard"


export function PopularContent() {
    const [movieList, setMovieList] = useState<MovieDetails[]>([])
    const sectionInfo = {
        title: 'Em Alta'
    }


    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch(import.meta.env.VITE_GET_LATEST_MOVIES).then(response => response.json()).then(data => {
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
                                <BigMovieCard {...movie} key={movie.id} />
                            ))}
                        </ul>
                    </>
            }
        </>
    )
}






/*

<li key={i}
                        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})` }}
                        className="flex items-end px-6 pb-8 h-[22.5rem] min-w-[43.83%] bg-cover bg-center rounded-[1.25rem] shadow-cardBigEffect">
                        <div className="flex flex-row justify-between items-center w-full   ">

                            <div className="flex flex-col items-start gap-[1.1rem]">
                                <h4 className="truncate w-[22rem] text-2xl leading-7" style={{ textShadow: '1px 1px 2px black' }}>{movie.title}</h4>
                                <div className="flex gap-[1rem]">
                                    <div className='flex gap-[0.875rem]'>
                                        <BigButtonGenre genreID={movie.genre_ids[0]} />
                                        {
                                            movie.genre_ids[1] && <BigButtonGenre genreID={movie.genre_ids[1]} />
                                        }
                                    </div>
                                    <span className="flex gap-[0.125rem] justify-end items-center">
                                        <Star weight="fill" className="text-ownYellow-900" />
                                        {movie.vote_average}
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-row gap-3">
                                <button><Info weight="regular" size={92} /></button>
                                <button><PlayCircle weight="regular" size={92} /></button>
                            </div>
                        </div>
                    </li>
*/
