import { Globe2Icon } from "lucide-react";

export function BrandLogo(){
    return (
        <span className="flex items-center gap-2 font-sembiold flex-shrink-0 mr-auto text-lg">
            <Globe2Icon className="size-8" />
            <span>Deal Breaker</span>
        </span>

    )
}