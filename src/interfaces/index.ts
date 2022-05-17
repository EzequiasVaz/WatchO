


export interface MovieDetails {
    id: number,
    title: string,
    overview: string,
    genre_ids: number[],
    genres: [{ id: number, name: string }],
    backdrop_path: string,
    release_date: string,
    vote_average: number,
    poster_path: string,
    original_language: string,
    status: string
}

export interface Genres {
    id: number,
    name: string
}