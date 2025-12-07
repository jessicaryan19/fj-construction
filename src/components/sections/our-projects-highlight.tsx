import { Icon } from "@iconify/react";
import Image from "next/image";
import Line from "../ui/line";

export default function OurProjectsHighlight() {
    return (
        <div className="flex flex-col gap-20 w-full items-center py-20">
            <div className="flex gap-4 items-center container">
                <Image src="/star.svg" alt="Star" width={40} height={40} />
                <h1 className="text-primary">Our Projects</h1>
                <Line />
            </div>
            <div className="w-full h-full flex">
                <div className="relative bg-primary w-2/3">
                    <div className="absolute inset-0 opacity-20">
                        <Image
                            src="/texture.jpg"
                            alt="Texture background"
                            className="object-cover object-center"
                            fill
                            priority
                        />
                        <div className="absolute inset-0 bg-primary mix-blend-lighten"></div>
                    </div>

                    <div className="flex flex-col gap-10 w-full pe-12">
                        <div className="flex justify-between items-center gap-6 p-6">
                            <Icon
                                icon="iconamoon:arrow-left-6-circle-light"
                                className="text-4xl text-white z-10"
                            />
                            <Icon
                                icon="iconamoon:arrow-right-6-circle-light"
                                className="text-4xl text-white z-10"
                            />
                        </div>

                        <div className="text-right">
                            <h1 className="text-secondary font-medium">Umalas Bali</h1>
                            <div className="text-7xl text-secondary uppercase">Villa Radja</div>
                        </div>

                        <div className="relative min-h-128 rounded-tr-3xl overflow-hidden">
                            <Image
                                src="/project-highlight/secondary-1.png"
                                alt="Villa Radja Umalas Bali"
                                className="object-cover object-bottom"
                                fill
                                priority
                            />
                        </div>
                    </div>
                </div>

                <div className="flex-1 relative">
                    <Image
                        src="/project-highlight/main-1.png"
                        alt="Villa Radja Umalas Bali"
                        className="object-cover object-center"
                        fill
                        priority
                    />
                </div>
            </div>
        </div>
    )
}