import { whyBuildWithUs } from "@/data/services"
import ImageRevealCard from "../../cards/image-reveal-card"

export default function WhyBuildWithUs() {
    return (
        <div className="container flex flex-col gap-20">
            <h1 className="text-primary text-center">Why Build with Us?</h1>
            <div className="grid grid-cols-3 gap-8">
                {
                    whyBuildWithUs.map((item) => (
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