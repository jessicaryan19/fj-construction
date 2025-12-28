"use client";
import Image from "next/image";
import FeatureCard from "../../cards/feature-card";
import { Carousel, CarouselContent, CarouselItem } from "../../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Line from "../../ui/line";
import VerticalFadeIn from "@/components/animations/vertical-fade-in";
import FlowerIcon from "@/components/icons/flower-icon";

export default function AboutUsSection() {
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
                <VerticalFadeIn className="w-full h-full">
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
                </VerticalFadeIn>

            </div>

            <div className="flex-1 flex flex-col gap-12 text-primary h-full">
                <div className="flex flex-col gap-4">
                    <div className="flex gap-4 items-center">
                        <FlowerIcon/>
                        <h1>FJ Constructions</h1>
                        <Line />
                    </div>
                    <p>is a Bali-based construction company providing reliable, high-quality, and design-driven construction services for residential, villa, and commercial projects.</p>
                </div>

                <h3>Our Core Strengths:</h3>
                <div className="grid grid-cols-2 gap-8">
                    {
                        coreStrengths.map((strength, index) => (
                            <VerticalFadeIn key={strength.title} delay={index * 0.1}>
                                <FeatureCard
                                    icon={strength.icon}
                                    title={strength.title}
                                    description={strength.description}
                                />
                            </VerticalFadeIn>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}