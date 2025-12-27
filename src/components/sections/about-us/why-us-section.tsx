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
            <div className="relative bg-primary w-full flex items-center justify-center py-20">
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

                <div className="relative container">
                    <div className="text-secondary opacity-60 text-8xl px-30">Why Us?</div>
                    <div className="grid grid-cols-5 gap-6 h-80">
                        {reasons.map((reason, index) => (
                            <VerticalFadeIn key={reason.title} delay={index * 0.1} className="h-full">
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
