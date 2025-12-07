"use client";
import Image from "next/image";
import FeatureCard from "../common/feature-card";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Line from "../ui/line";

export default function AboutSection() {
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
        <div className="flex gap-14 w-full container py-20">
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
                                        fill
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>

            <div className="flex-1 flex flex-col gap-12 text-primary h-full">
                <div className="flex flex-col gap-4">
                    <div className="flex gap-4 items-center">
                        <Image src="/star.svg" alt="Star" width={40} height={40} />
                        <h1>FJ Constructions</h1>
                        <Line />
                    </div>
                    <p>is a Bali-based construction company providing reliable, high-quality, and design-driven construction services for residential, villa, and commercial projects.</p>
                </div>

                <h3>Our Core Strengths:</h3>
                <div className="grid grid-cols-2 gap-8">
                    {
                        coreStrengths.map((strength) => (
                            <FeatureCard
                                key={strength.title}
                                icon={strength.icon}
                                title={strength.title}
                                description={strength.description}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}