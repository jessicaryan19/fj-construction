import { whyBuildWithUsData } from "@/data/services"
import ImageRevealCard from "../../cards/image-reveal-card"
import VerticalFadeIn from "@/components/animations/vertical-fade-in"

export default function WhyBuildWithUs() {
    return (
        <div className="container flex flex-col gap-12 sm:gap-16 md:gap-20 px-4">
            <h4 className="text-primary text-center">Why Build with Us?</h4>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-8">
                {
                    whyBuildWithUsData.map((item, index) => (
                        <VerticalFadeIn key={item.title} delay={index * 0.1} className="h-full">
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