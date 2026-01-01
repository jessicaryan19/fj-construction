"use client";
import Image from "next/image";
import FeatureCard from "../../cards/feature-card";
import VerticalFadeIn from "@/components/animations/vertical-fade-in";

export default function WhyUsSection() {
    const reasons = [
        { icon: "tdesign:time-filled", title: "Reliable Timeline and Budget Control" },
        { icon: "material-symbols-light:chat-rounded", title: "Transparent Communication" },
        { icon: "mdi:tools", title: "Strong Procurement System" },
        { icon: "material-symbols:trophy", title: "High-Quality Finishing" },
        { icon: "solar:tag-price-bold", title: "Competitive and Flexible Pricing" },
    ];

    return (
        <VerticalFadeIn>
            <div className="relative bg-primary w-full flex items-center justify-center py-12 md:py-20">
                <div className="absolute inset-0 opacity-20">
                    <Image
                        src="/texture.jpg"
                        alt="Texture background"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                    <div className="absolute inset-0 bg-primary mix-blend-lighten"></div>
                </div>

                <div className="relative container px-4">
                    <div className="text-secondary opacity-60 text-4xl sm:text-5xl md:text-6xl lg:text-8xl px-0 md:px-30 mb-8 md:mb-0">
                        Why Us?
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                        {reasons.map((reason, index) => (
                            <VerticalFadeIn 
                                key={reason.title} 
                                delay={index * 0.1}
                                className="w-[calc(50%-0.5rem)] md:w-[calc(33.333%-1rem)] md:h-54 xl:w-[calc(20%-1.2rem)] xl:h-80"
                            >
                                <FeatureCard
                                    icon={reason.icon}
                                    title={reason.title}
                                    orientation="vertical"
                                />
                            </VerticalFadeIn>
                        ))}
                    </div>
                </div>
            </div>
        </VerticalFadeIn>
    );
}