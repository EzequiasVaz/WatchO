import { useEffect, useState } from "react"
import { genres } from "../../../libs/genreTypes"


export function BigButtonGenre(genreID: any) {
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
        <a href="/genre" className="uppercase py-[0.125rem] px-3 rounded-xl text-[0.75rem] leading-6 font-bold" style={{ backgroundColor: bgColor }}>
            {genreName}
        </a>
    )
}

