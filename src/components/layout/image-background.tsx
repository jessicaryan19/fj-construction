import Image from "next/image";
import { ReactNode } from "react";

interface ImageBackgroundProps {
    image?: string,
    children?: ReactNode
}
export default function ImageBackground({
    image = "/hero-section.png",
    children
}: ImageBackgroundProps) {
    return (
        <div className="relative w-full">
            <Image
                src={image}
                alt="Background"
                fill
                style={{ objectFit: "cover" }}
                priority
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10">
                {children}
            </div>
        </div>
    )
}