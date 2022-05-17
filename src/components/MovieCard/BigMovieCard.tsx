import { Info, PlayCircle, Star } from "phosphor-react";
import { Link } from "react-router-dom";
import { MovieDetails } from "../../interfaces";
import { BigButtonGenre } from "../Buttons/GenreIDs/BigButtonGenre";

export function BigMovieCard({ id, backdrop_path, title, vote_average, genre_ids }: MovieDetails) {
    return (
        <Link to={{ pathname: `movie-description/${id}` }}
            style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})` }}
            className="flex text-left items-end px-6 pb-8 h-[22.5rem] min-w-[39.5rem]  bg-cover bg-center rounded-[1.25rem] shadow-cardBigEffect hover:scale-105 transition-transform">
            <div className="flex flex-row items-center w-full">
                <div className="flex flex-col items-start gap-[1.1rem] w-[65%] ">
                    <h4 className="truncate max-w-[100%] text-2xl leading-7" style={{ textShadow: '1px 1px 2px black' }}>{title}</h4>
                    <div className="flex gap-[1rem]">
                        <div className='flex gap-[0.875rem]'>
                            <BigButtonGenre genreID={genre_ids[0]} />
                            {
                                genre_ids[1] && <BigButtonGenre genreID={genre_ids[1]} />
                            }
                        </div>
                        <span className="flex gap-[0.125rem] justify-end items-center ">
                            <Star weight="fill" className="text-ownYellow-900" />
                            {vote_average}
                        </span>
                    </div>
                </div>
                <div className="flex flex-row gap-3 w-[35%] justify-end">
                    <Link to={{ pathname: `movie-description/${id}` }}><Info weight="regular" className="text-[6rem] max-h-fit max-w-[100%] hover:animate-bounce transition-all" /></Link>
                    <Link to={{ pathname: `play-movie/${id}` }}><PlayCircle weight="regular" className=" text-[6rem] max-h-fit max-w-[100%] hover:animate-bounce transition-all" /></Link>
                </div>
            </div>
        </Link>
    )
}