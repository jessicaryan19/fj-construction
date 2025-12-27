import { cn } from "@/lib/utils"
import { ReactNode } from "react"
import { ClassNameValue } from "tailwind-merge"

interface GlassContainerProps {
    children: ReactNode,
    className: ClassNameValue
}

export default function GlassContainer({
    children,
    className
}: GlassContainerProps) {
    return (
        <div className={cn(
            "relative rounded-3xl text-white border border-white/50 flex flex-1 flex-col h-full",
            "bg-linear-to-br from-white/5 via-white/24 to-white/5 backdrop-blur-sm",
            className
        )}>
            {children}
        </div>
    )
}