import { FilmSlate, PlayCircle, Star } from "phosphor-react";
import { Link } from "react-router-dom";
import { MovieDetails } from "../../../interfaces";

export function Description({ title, overview, genres, backdrop_path, release_date, vote_average }: MovieDetails) {

    return (
        <div className="flex flex-col gap-6 w-full h-[calc(100vh-80px)] text-white bg-cover bg-center bg-no-repeat mt-[-1.75rem] justify-center pl-0.5/10 shadow-descriptionInnerShadow
         max-header600:px-4 max-header600:items-start max-header:h-[calc(100vh-100px)] max-header600:mt-0 max-header600:justify-center max-header600:shadow-responsiveDescriptionInnerShadow
        " style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path}`, textShadow: '1px 1px 10px black' }}>
            <h1 className="text-7xl font-bold max-w-[60%]
            max-header600:max-w-[100%] max-header600:text-4xl
            ">{title}</h1>
            <div className="flex flex-row gap-8 mt-[-12px]
            max-header600:text-xs max-header600:gap-2 max-header600:flex-col
            max-header600:self-start">
                <div className='flex gap-2'>
                    <span>Data de Lançamento:</span>
                    <span>{parseData(release_date)}</span>
                </div>
                <div className="flex gap-2">
                    <span>Nota da galera:</span>
                    <span className="flex gap-[0.125rem] justify-end items-center">
                        <Star weight="fill" className="text-ownYellow-900" />
                        {vote_average}
                    </span>
                </div>
            </div>
            <p className="max-w-[60%] text-lg font-thin
            max-header600:max-w-[100%] max-header600:text-xs">{overview}</p>
            <div className="flex gap-8 text-2xl max-w-fit
            max-header600:w-full max-header600:justify-center
            max-header600:text-lg">
                <Link to={'/'} className='flex items-center gap-2 px-6 py-2 rounded-sm border-2 shadow-md hover:scale-110 transition-all group'>Trailer <FilmSlate className="group-hover:animate-bounce transition-all" /> </Link>
                <Link to={'/'} className='flex items-center gap-2 px-6 py-2 rounded-sm border-2 shadow-md hover:scale-110 transition-all group'>Filme <PlayCircle className="group-hover:animate-bounce transition-all" /></Link>
            </div>
            <div className="absolute bottom-3 right-5 flex flex-row gap-1
            ">
                <span className="text-[0.7rem]" >Gêneros:</span>
                {genres.map(genre => {
                    return <span key={genre.id} className="flex items-center uppercase text-[0.5rem] font-bold">{genre.name}</span>
                })}
            </div>
        </div>
    )
}

function parseData(data: string) {
    let ano = data.split("-")[0]
    let mes = data.split('-')[1]
    let dia = data.split('-')[2]
    return `${dia}-${mes}-${ano}`
}