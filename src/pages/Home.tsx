import { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ActionMovies } from "../components/pages/Home/ActionMovies";
import { AdventureMovies } from "../components/pages/Home/AdventureMovies";
import { AnimationMovies } from "../components/pages/Home/AnimationMovies";
import { ComedyMovies } from "../components/pages/Home/ComedyMovies";
import { Documentary } from "../components/pages/Home/Documentary";
import { DramaMovies } from "../components/pages/Home/DramaMovies";
import { ForYou } from "../components/pages/Home/ForYou";
import { PopularContent } from "../components/pages/Home/PopularContent";
import { RomanceMovies } from "../components/pages/Home/RomanceMovies";
import { ScienceFiction } from "../components/pages/Home/ScienceFiction";
import { ThrillerMovies } from "../components/pages/Home/ThrillerMovies";
import { WarMovies } from "../components/pages/Home/WarMovies";

export default function Home() {
    const [scroll, setScroll] = useState(0)

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if (entries.some(entry => entry.isIntersecting)) {
                setScroll((currentScrollInsideState) => currentScrollInsideState + 1)
            }
        })
        const footer = document.getElementById('footer')
        footer && observer.observe(footer)
    }, [])


    return (
        <>
            <Header />

            {/* implementar o scroll infinito, carregando de 4 em 4*/}

            <div className="pb-7 shadow-mainInnerShadow" id="movie-sections">
                <PopularContent />
                <ForYou />
                <ActionMovies />
                <ScienceFiction />
                {scroll >= 1 && <>
                    <AnimationMovies />
                </>
                }
                {scroll >= 2 && <>

                    <ComedyMovies />
                    <WarMovies />
                    <ThrillerMovies />
                </>
                }
                {scroll >= 3 && <>
                    <RomanceMovies />
                    <AdventureMovies />
                    <DramaMovies />
                    <Documentary />
                </>
                }

            </div>

            <Footer />
        </>
    )
}