import FeatureCard from "../common/feature-card";

export default function WhyUsSection() {
    const reasons = [{
        icon: "tdesign:time-filled",
        title: "Reliable Timeline and Budget Control"
    }, {
        icon: "material-symbols-light:chat-rounded",
        title: "Transparent Communication"
    }, {
        icon: "mdi:tools",
        title: "Strong Procurement System"
    }, {
        icon: "material-symbols:trophy",
        title: "High-Quality Finishing"
    }, {
        icon: "solar:tag-price-bold",
        title: "Competitive and Flexible Pricing"
    }]
    return (
        <div className="bg-primary w-full flex items-center justify-center p-20">
            <div className="container">
                <div className="text-secondary opacity-60 text-8xl">Why Us?</div>
                <div className="grid grid-cols-5 gap-6 h-60">
                    {
                        reasons.map((reason) => (
                            <FeatureCard
                                key={reason.title}
                                icon={reason.icon}
                                title={reason.title}
                                orientation="vertical"
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}