"use client";
import Image from "next/image";
import FeatureCard from "../../cards/feature-card";
import { Carousel, CarouselContent, CarouselItem } from "../../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Line from "../../ui/line";
import { whyPartnerWithUsData } from "@/data/services";
import MergeIconCard from "@/components/cards/merge-icon-card";

export default function PartnershipSection() {
    const coreStrengths = [{
        icon: "mingcute:building-6-fill",
        title: "Proven track record",
        description: "of completed villas & hospitality projects."
    }, {
        icon: "mdi:worker",
        title: "Experienced",
        description: "project management & engineering team."
    }, {
        icon: "mdi:eye",
        title: "Transparent operations",
        description: "with clear reporting system."
    }, {
        icon: "mingcute:checkbox-fill",
        title: "Commitment",
        description: "to deadlines, quality, and client satisfaction."
    }]

    return (
        <div className="flex gap-14 w-full container">
            <div className="flex-none w-1/3 rounded-3xl overflow-hidden bg-white">
                <Carousel
                    className="h-full w-full"
                    opts={{ loop: true }}
                    plugins={[
                        Autoplay({
                            delay: 2500,
                            stopOnInteraction: false,
                        }),
                    ]}
                >
                    <CarouselContent className="h-full">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index} className="p-0 h-full">
                                <div className="relative w-full h-full">
                                    <Image
                                        src={`/about/image-${index + 1}.jpg`}
                                        alt={`About ${index + 1}`}
                                        className="object-cover object-center"
                                        priority={index === 0}
                                        fill
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>

            <div className="flex-1 flex flex-col gap-12 text-primary h-full">
                <h1>Why You Should Partner With Us</h1>
                <div className="grid grid-cols-2 gap-10">
                    {
                        whyPartnerWithUsData.map((reason) => (
                            <MergeIconCard
                                key={reason.title}
                                icon={reason.icon}
                                title={reason.title}
                                description={reason.description}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}