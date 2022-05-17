import { SpinnerGap } from "phosphor-react";

export function Loading() {
    return (
        <div className="flex w-full h-full items-center justify-center text-white">
            <SpinnerGap className="animate-spin" size={92} />
        </div>
    )
}