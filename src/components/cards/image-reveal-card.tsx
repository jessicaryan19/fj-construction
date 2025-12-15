import { Icon } from "@iconify/react";
import { Card } from "../ui/card";

interface ImageRevealCardProps {
    image: string;
    title: string;
    description?: string;
}

export default function ImageRevealCard({ image, title, description }: ImageRevealCardProps) {
    return (
        <Card
            className="group rounded-3xl overflow-hidden relative h-64 bg-cover bg-center p-0"
            style={{ backgroundImage: `url(/services/${image})` }}
        >
            <div
                className="
                    absolute inset-0 bg-cover bg-center 
                    scale-110 group-hover:scale-100
                    transition-transform duration-500
                "
                style={{ backgroundImage: `url(/services/${image})` }}
            />
            <div className="absolute inset-0 bg-black/60"/>

            <div className="absolute flex flex-col justify-between py-6 px-16 text-white h-full">
                <h3 className="text-center">
                    {title}
                </h3>
                <div className="flex flex-col gap-2 items-center">
                    <Icon
                        icon="iconamoon:arrow-up-6-circle-light"
                        className="text-3xl transform transition-all duration-500 translate-y-12
                            group-hover:-translate-y-0 rotate-180 group-hover:rotate-0"
                    />

                    {description && (
                        <p
                            className="
                                text-center opacity-0 
                                translate-y-4
                                transition-all duration-500
                                group-hover:opacity-100 
                                group-hover:translate-y-1
                            "
                        >
                            {description}
                        </p>
                    )}
                </div>
            </div>
        </Card>
    );
}
