import { useEffect, useState } from "react"
import { Genres } from "../../../interfaces"
import { genres } from "../../../libs/genreTypes"


export function SmallButtonGenre(genreID: any) {
    const [bgColor, setBgColor] = useState<string>('')
    const [genreName, setGenreName] = useState<string>('')
    useEffect(() => {
        genres.map(genre => {
            if (genreID.genreID == genre.id) {
                setGenreName(genre.name)
                setBgColor(genre.color)
            }
        })
    }, [])
    return (
        <a href="/genre" className="flex items-center truncate uppercase px-2 rounded-xl text-[0.5rem] py-[0.125rem] font-bold" style={{ backgroundColor: bgColor }}>
            {genreName}
        </a>
    )
}