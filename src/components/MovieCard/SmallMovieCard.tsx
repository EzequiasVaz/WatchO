import { Info, PlayCircle, Star } from "phosphor-react";
import { Link } from "react-router-dom";
import { MovieDetails } from "../../interfaces";
import { SmallButtonGenre } from "../Buttons/GenreIDs/SmallButtonGenre";



export function SmallMovieCard({ id, backdrop_path, title, vote_average, genre_ids, poster_path }: MovieDetails) {
    return (
        <Link
            to={{ pathname: `movie-description/${id}` }}
            style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path ? backdrop_path : poster_path})` }}
            className="flex text-left items-end px-3 pb-4 h-[10.7rem] min-w-[18.75rem] bg-cover bg-center rounded-[1rem] shadow-cardBigEffect hover:scale-110 transition-transform">
            <div className="flex flex-row items-center w-full">
                <div className="flex flex-col items-start gap-2 w-[70%]">
                    <h4 className="truncate w-[100%] text-lg leading-5" style={{ textShadow: '1px 1px 2px black' }}>{title}</h4>
                    <div className="truncate flex gap-2 max-w-[100%]">
                        <div className='flex gap-[0.125rem]'>
                            <SmallButtonGenre genreID={genre_ids[0]} />
                            {
                                genre_ids[1] && <SmallButtonGenre genreID={genre_ids[1]} />
                            }
                        </div>
                        <span className="flex gap-[0.125rem] justify-end items-center text-[1rem] max-w-[30%]">
                            <Star weight="fill" className="text-ownYellow-900 text-[1rem]" />
                            {vote_average}
                        </span>
                    </div>
                </div>
                <div className="flex flex-row gap-1 w-[30%] justify-end">
                    <Link to={{ pathname: `movie-description/${id}` }}><Info weight="regular" className=" text-[2.25rem] max-w-[100%] hover:animate-bounce transition-all" /></Link>
                    <Link to={{ pathname: `play-movie/${id}` }}><PlayCircle weight="regular" className=" text-[2.25rem] max-w-[100%] hover:animate-bounce transition-all" /></Link>
                </div>
            </div>
        </Link>
    )
}