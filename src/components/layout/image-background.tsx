import Image from "next/image";
import { ReactNode } from "react";

interface ImageBackgroundProps {
    image?: string
    opacity?: number
    children?: ReactNode
}
export default function ImageBackground({
    image = "/hero-section.png",
    opacity = 50,
    children
}: ImageBackgroundProps) {
    return (
        <div className="relative w-full" id="hero-section">
            <Image
                src={image}
                alt="Background"
                fill
                style={{ objectFit: "cover" }}
                priority
            />
            <div
                className="absolute inset-0 bg-black"
                style={{ opacity: opacity / 100 }}
            />
            <div className="relative z-10">
                {children}
            </div>
        </div>
    )
}