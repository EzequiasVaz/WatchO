import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Loading } from "../components/Loadings/Cards";
import { Description } from "../components/pages/MovieDescription";
import { MovieDetails } from "../interfaces";



export function MovieDescription() {
    const [MovieDetails, setMovieDetails] = useState<MovieDetails | any>()
    const { id } = useParams()
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=ee5f5f555983ddb2828a394b62bd5cc9&language=pt-BR`).then(response => response.json()).then(data => {
            setMovieDetails(data)
        })
        setIsLoaded(true)
    }, [id])

    return (
        <>
            <Header />
            {!isLoaded ? <Loading /> : MovieDetails && <Description {...MovieDetails} />}
            <Footer />
        </>

    )
}