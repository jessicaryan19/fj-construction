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
            "bg-linear-to-r from-white/8 via-white/24 to-white/8 backdrop-blur-lg",
            className
        )}>
            {children}
        </div>
    )
}