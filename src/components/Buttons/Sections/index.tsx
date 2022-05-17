import { ArrowCircleRight, Key } from "phosphor-react";

interface SectionInfo {
    title: string
}

export function ButtonSection({ title }: SectionInfo) {
    return (
        <a href="/section" className="flex items-center max-w-fit gap-1 text-white font-bold text-xl pl-0.5/10 leading-6 group">{title}<ArrowCircleRight size={12} className='text-ownYellow-900 opacity-0 group-hover:opacity-100 transition-opacity' weight="fill" /></a>
    )
}