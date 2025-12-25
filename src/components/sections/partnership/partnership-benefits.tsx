import ImageRevealCard from "@/components/cards/image-reveal-card";
import { partnershipBenefitsData } from "@/data/partnership";

export default function PartnershipBenefits() {
    return (
        <div className="container flex flex-col gap-20 items-center">
            <h1 className="text-primary">The Benefits You Will Get</h1>
            <div className="grid grid-cols-2 gap-8 w-full">
                {
                    partnershipBenefitsData.map((item) => (
                        <ImageRevealCard
                            key={item.title}
                            image={item.image}
                            title={item.title}
                            description={item.description}
                        />
                    ))
                }
            </div>
        </div>
    )
}