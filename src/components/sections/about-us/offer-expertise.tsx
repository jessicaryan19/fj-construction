import { servicesData } from "@/data/services"
import ImageRevealCard from "../../cards/image-reveal-card"

export default function OfferExpertise() {
    return (
        <div className="container flex flex-col gap-20">
            <h1 className="text-primary text-center">We Offer Construction Expertise Accross:</h1>
            <div className="grid grid-cols-3 gap-8">
                {
                    servicesData.map((item) => (
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