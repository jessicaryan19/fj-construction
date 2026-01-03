import { Icon } from "@iconify/react"
import GlassContainer from "../ui/glass-container"
import Link from "next/link"
import VerticalFadeIn from "../animations/vertical-fade-in"

interface GlassCardProps {
    icon: string
    link?: string
    linkName?: string
    title?: string,
    description?: string
}
export default function GlassCard({
    icon,
    link,
    linkName,
    title,
    description,
}: GlassCardProps) {
    return (
        <GlassContainer className="p-3 md:p-5">
            <VerticalFadeIn className="h-full flex flex-1 flex-col justify-between items-end gap-4">
                <div className="bg-white p-3 rounded-full w-fit">
                    <Icon icon={icon} className="text-primary text-xl md:text-3xl" />
                </div>
                <div className="flex flex-col w-full py-2 md:py-5">
                    {link && <Link href={link} className="underline text-sm sm:text-md md:text-lg lg:text-xl break-all">{linkName}</Link>}
                    <p>{description}</p>
                    <h5>{title}</h5>
                </div>
            </VerticalFadeIn>
        </GlassContainer>
    )
}