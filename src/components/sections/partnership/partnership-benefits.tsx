import VerticalFadeIn from "@/components/animations/vertical-fade-in";
import ImageRevealCard from "@/components/cards/image-reveal-card";
import { partnershipBenefitsData } from "@/data/partnership";

export default function PartnershipBenefits() {
    return (
        <div className="container flex flex-col gap-20 items-center">
            <h4 className="text-primary">The Benefits You Will Get</h4>
            <div className="grid grid-cols-2 gap-8 w-full">
                {
                    partnershipBenefitsData.map((item, index) => (
                        <VerticalFadeIn key={item.title} delay={index * 0.1}>
                            <ImageRevealCard
                                image={item.image}
                                title={item.title}
                                description={item.description}
                            />
                        </VerticalFadeIn>
                    ))
                }
            </div>
        </div>
    )
}