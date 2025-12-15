import { Timeline } from "@/components/ui/timeline";
import { processData } from "@/data/process";

export default function OurProcess() {
    return (
        <div className="container flex flex-col gap-10 items-center">
            <h1 className="text-primary">Our Construction Process</h1>
            <div>
                <Timeline data={processData} />
            </div>
        </div>
    )
}