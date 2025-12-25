import { Icon } from "@iconify/react"
import GlassContainer from "../ui/glass-container"
import Link from "next/link"

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
        <GlassContainer className="gap-4 p-5 justify-between items-end aspect-video">
            <div className="bg-white p-3 rounded-full w-fit">
                <Icon icon={icon} className="text-primary text-3xl" />
            </div>
            <div className="flex flex-col w-full py-5">
                {link && <Link href={link} className="underline text-xl">{linkName}</Link>}
                <p>{description}</p>
                <h2>{title}</h2>
            </div>
        </GlassContainer>
    )
}