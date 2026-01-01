import { Timeline } from "@/components/ui/timeline";
import { partnershipTimelineData } from "@/data/partnership";

export default function PartnershipTimeline() {
    return (
        <div className="container flex flex-col gap-10 items-center">
            <h4 className="text-primary">How We Will Work Together</h4>
            <Timeline data={partnershipTimelineData} />
        </div>
    )
}