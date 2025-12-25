import Image from "next/image";
import { ReactNode } from "react";

interface ImageCTEProps {
    children: ReactNode,
    image: string,
}
export default function ImageCTE({
    children,
    image
}: ImageCTEProps) {
    return (
        <div className="group relative container w-full h-144 rounded-3xl overflow-hidden">
            <Image
                src={image}
                alt=""
                fill
                style={{ objectFit: "cover" }}
                className="group-hover:scale-105 transition-all duration-500"
                priority
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 flex flex-col justify-center items-center z-10 gap-8">
                {children}
            </div>
        </div>
    )
}