import Image from "next/image";

interface ImageRoundedCardProps {
    source: string
    orientation?: "horizontal" | "vertical"
}
export default function ImageRoundedCard({
    source,
    orientation = "horizontal"
}: ImageRoundedCardProps) {
    const containerStyle = {
        horizontal: "relative h-full w-full rounded-3xl overflow-hidden",
        vertical: "relative h-full w-full rounded-3xl overflow-hidden"
    }[orientation];
    
    return (
        <div className={containerStyle}>
            <Image
                src={source}
                alt=""
                fill
                style={{ objectFit: "cover" }}
                priority
            />
        </div>
    )
}