import { House, MagnifyingGlass, PlayCircle } from "phosphor-react";

export function Header() {
    return (
        <header className="flex flex-row gap-2 items-center justify-between ml-[5.2%] mb-7 h-20  text-white font-bold text-sm
        max-header600:flex-col max-header600:h-fit max-header600:pt-1 max-header600:mb-3 max-header600:ml-0 max-header800:max-w-[664px] header1024:max-w-[89%] header1280:max-w-[996px] header1440:max-w-[1293px] header2560:max-w-[89.5%]">
            <div className="flex gap-12">
                <a href='/' className="text-[2rem] leading-10 font-['Berkshire_Swash']">WatchO</a>
                <ul className='flex items-center gap-8 max-header600:hidden'>
                    <li>
                        <a href="/" className="flex items-center gap-1 text-sm font-bold leading-6 hover:text-ownYellow-900 transition-all max-header800:hidden"><House weight="fill" size={15} />Início</a>
                    </li>
                    <li>
                        <a href="/" className="flex items-center gap-1 text-sm font-bold leading-6 hover:text-ownYellow-900 transition-all max-header800:hidden"><PlayCircle weight="fill" size={15} />Onde assistir os melhores filmes?</a>
                    </li>
                </ul>
            </div>
            <div className="flex items-center gap-3">
                <form action="GET" className="flex items-center justify-center gap-2 text-background-400 px-6 py-2 border-2 rounded-[20px] border-solid border-background-400 group hover:border-white hover:text-white ">
                    <button type="submit"><MagnifyingGlass weight="bold" size={15} /></button>
                    <input type="text" placeholder="Pesquise por título ou gênero" className="bg-transparent min-w-[12.75rem] outline-none font-bold text-white placeholder-background-400 group-hover:placeholder-white" />
                </form>
            </div>
        </header>
    )
}