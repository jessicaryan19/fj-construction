"use client";
import Image from "next/image";
import FeatureCard from "../common/feature-card";

export default function WhyUsSection() {
    const reasons = [
        { icon: "tdesign:time-filled", title: "Reliable Timeline and Budget Control" },
        { icon: "material-symbols-light:chat-rounded", title: "Transparent Communication" },
        { icon: "mdi:tools", title: "Strong Procurement System" },
        { icon: "material-symbols:trophy", title: "High-Quality Finishing" },
        { icon: "solar:tag-price-bold", title: "Competitive and Flexible Pricing" },
    ];

    return (
        <div className="relative bg-primary w-full flex items-center justify-center p-20">
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
                    {reasons.map((reason) => (
                        <FeatureCard
                            key={reason.title}
                            icon={reason.icon}
                            title={reason.title}
                            orientation="vertical"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
