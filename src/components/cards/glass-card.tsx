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
        <GlassContainer className="p-5">
            <VerticalFadeIn className="h-full flex flex-1 flex-col justify-between items-end gap-4">
                <div className="bg-white p-3 rounded-full w-fit">
                    <Icon icon={icon} className="text-primary text-3xl" />
                </div>
                <div className="flex flex-col w-full py-5">
                    {link && <Link href={link} className="underline text-xl">{linkName}</Link>}
                    <p>{description}</p>
                    <h2>{title}</h2>
                </div>
            </VerticalFadeIn>
        </GlassContainer>
    )
}