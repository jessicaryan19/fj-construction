import { whyPartnerWithUsData } from "@/data/services"
import MergeIconCard from "../../cards/merge-icon-card"

export default function WhyPartnerSection() {
    

    return (
        <div className="container flex flex-col gap-20">
            <h1 className="text-primary text-center">Why Partner with Us?</h1>
            <div className="grid grid-cols-4 gap-8">
                {
                    whyPartnerWithUsData.map((reason) => (
                        <MergeIconCard
                            key={reason.title}
                            icon={reason.icon}
                            title={reason.title}
                            description={reason.description}
                        />
                    ))
                }
            </div>
        </div>
    )
}