import MergeIconCard from "../common/merge-icon-card"

export default function WhyPartnerSection() {
    const reasons = [{
        title: "Developers",
        description: "Reliable execution from concept to completion",
        icon: "mdi:worker"
    }, {
        title: "Architects",
        description: "Turning designs into precise, high-quality builds",
        icon: "ic:baseline-architecture"
    }, {
        title: "Real Estate Agencies",
        description: "Providing trusted contractors for clients",
        icon: "material-symbols:real-estate-agent-rounded"
    }, {
        title: "Property Managers",
        description: "Ensuring smooth renovation and maintenance",
        icon: "icomoon-free:user-tie"
    }]

    return (
        <div className="container flex flex-col gap-12 py-20">
            <h1 className="text-primary text-center">Why Partner with Us?</h1>
            <div className="grid grid-cols-4 gap-8">
                {
                    reasons.map((reason) => (
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