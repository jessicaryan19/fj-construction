import VerticalFadeIn from "@/components/animations/vertical-fade-in"
import { partnershipModelData } from "@/data/partnership"
import Image from "next/image"

export default function PartnershipModels() {
    return (
        <div className="container flex flex-col gap-20 items-center">
            <h1 className="text-primary">Our Partnership Models</h1>

            <div className="grid grid-cols-3 gap-10 w-full">
                {partnershipModelData.map((data, index) => (
                    <VerticalFadeIn
                        key={data.title}
                        delay={index * 0.1}
                        className="relative w-full h-[420px] cursor-pointer"
                    >
                        <div className="absolute top-0 left-0 w-full h-2/3 overflow-hidden rounded-3xl">
                            <Image
                                src={data.image}
                                alt={data.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5/6 h-60 bg-primary text-white rounded-3xl p-8 z-10 flex flex-col gap-4 items-center justify-center text-center">
                            <h3>{data.title}</h3>
                            <p>{data.description}</p>
                        </div>
                    </VerticalFadeIn>
                ))}
            </div>
        </div>
    )
}
