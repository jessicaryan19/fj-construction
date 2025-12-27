import TestimonialsSection from "@/components/sections/home/testimonials-section";
import PartnershipTimeline from "@/components/sections/partnership/partnership-timeline";
import PartnershipModels from "@/components/sections/partnership/partnership-model";
import PartnershipSection from "@/components/sections/partnership/partnership-section";
import PartnershipForm from "@/components/sections/partnership/partnership-form";
import PartnershipBenefits from "@/components/sections/partnership/partnership-benefits";

export default function Partnership() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="min-h-screen w-full flex flex-col gap-32 pt-40 pb-10 items-center bg-white dark:bg-black">
                <div className="container flex flex-col gap-20">
                    <h1 className="text-primary">Partnership</h1>
                    <PartnershipSection />
                </div>

                <PartnershipBenefits/>
                <PartnershipModels/>
                <PartnershipTimeline/>

                <TestimonialsSection/>
                <PartnershipForm/>
            </main>
        </div>
    )
}