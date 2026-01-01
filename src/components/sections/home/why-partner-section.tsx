import { whyPartnerWithUsData } from "@/data/services"
import MergeIconCard from "../../cards/merge-icon-card"
import VerticalFadeIn from "@/components/animations/vertical-fade-in"

export default function WhyPartnerSection() {


    return (
        <div className="container flex flex-col gap-20">
            <h4 className="text-primary text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Why Partner with Us?</h4>
            <div className="grid grid-cols-4 gap-8">
                {
                    whyPartnerWithUsData.map((reason, index) => (
                        <VerticalFadeIn key={reason.title} delay={index * 0.1}>
                            <MergeIconCard
                                icon={reason.icon}
                                title={reason.title}
                                description={reason.description}
                            />
                        </VerticalFadeIn>
                    ))
                }
            </div>
        </div>
    )
}