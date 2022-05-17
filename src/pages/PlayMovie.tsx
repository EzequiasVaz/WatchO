import { ArrowArcLeft } from "phosphor-react"
import { Link } from "react-router-dom"

export function PlayMovie() {

    return (
        <>
            <Link to={'/'}><ArrowArcLeft size={92} /></Link>
        </>
    )
}