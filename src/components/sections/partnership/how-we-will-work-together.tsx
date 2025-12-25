import { Timeline } from "@/components/ui/timeline";
import { partnershipData } from "@/data/partnership";

export default function HowWeWillWorkTogether() {
    return (
        <div className="container flex flex-col gap-10 items-center">
            <h1 className="text-primary">How We Will Work Together</h1>
            <div>
                <Timeline data={partnershipData} />
            </div>
        </div>
    )
}