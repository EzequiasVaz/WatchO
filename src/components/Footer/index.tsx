import { BehanceLogo, GithubLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";

export function Footer() {
    return (
        <footer className="flex flex-col items-center text-white pt-10 bg-[#12151f]
        max-header600:px-4" id="footer">
            <a href='/' className="text-[2rem] leading-10 font-['Berkshire_Swash']">WatchO</a>
            <p className="font-light text-lg leading-6 max-w-[47.875rem] text-center mt-3">Projeto fictício, apenas para estudo de consumo de API no front-end, utilizando o TheMovieDB.
                Foi desenvolvido a UI no figma com inspirações na Disney+, Netflix e TopFlix.</p>
            <p className="mt-6">Me segue nas redes sociais:</p>
            <div className="flex flex-row gap-6 mt-3 mb-5">
                <a href="https://github.com/EzequiasVaz"><GithubLogo size={32} /></a>
                <a href="https://www.linkedin.com/in/ezequias-vaz-190a781bb/"><LinkedinLogo size={32} /></a>
                <a href="https://www.behance.net/ezequiavazdos"><BehanceLogo size={32} /></a>
                <a href="https://www.instagram.com/zeca_vaz/"><InstagramLogo size={32} /></a>
            </div>
        </footer>
    )
}