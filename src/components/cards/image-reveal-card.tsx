import { Icon } from "@iconify/react";
import { Card } from "../ui/card";
import { ReactNode } from "react";

interface ImageRevealCardProps {
    image: string;
    title: string;
    description?: string | ReactNode;
}

export default function ImageRevealCard({ image, title, description }: ImageRevealCardProps) {
    return (
        <Card
            className="group rounded-3xl overflow-hidden relative aspect-video bg-cover bg-center p-0 cursor-pointer"
            style={{ backgroundImage: `url(${image})` }}
        >
            <div
                className="
                    absolute inset-0 bg-cover bg-center 
                    scale-110 group-hover:scale-100
                    transition-transform duration-500
                "
                style={{ backgroundImage: `url(${image})` }}
            />
            <div className="absolute inset-0 bg-black/60"/>

            <div className="absolute flex flex-col justify-between py-6 px-10 md:px-16 text-white h-full w-full">
                <h6 className="text-center">
                    {title}
                </h6>
                
                <div className="flex flex-col gap-2 items-center">
                    <Icon
                        icon="iconamoon:arrow-up-6-circle-light"
                        className="text-3xl transform transition-all duration-500 translate-y-12
                            group-hover:-translate-y-0 rotate-180 group-hover:rotate-0"
                    />

                    {description && (
                        <div
                            className="
                                text-center opacity-0 
                                translate-y-4
                                max-h-12 overflow-hidden
                                transition-all duration-500
                                w-full
                                group-hover:opacity-100 
                                group-hover:translate-y-1
                                group-hover:max-h-40
                                text-sm sm:text-md
                            "
                        >
                            {description}
                        </div>
                    )}
                </div>
            </div>
        </Card>
    );
}
