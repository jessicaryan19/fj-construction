import ImageRevealCard from "@/components/cards/image-reveal-card";
import WhatTheySay from "@/components/sections/home/what-they-say";
import HowWeWillWorkTogether from "@/components/sections/partnership/how-we-will-work-together";
import OurPartnershipModels from "@/components/sections/partnership/our-partnership-model";
import PartnershipSection from "@/components/sections/partnership/partnership-section";
import PartnershipForm from "@/components/sections/partnership/partnership-form";
import { benefits } from "@/data/services";

export default function Partnership() {
    
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="min-h-screen w-full flex flex-col gap-32 pt-40 pb-10 items-center bg-white dark:bg-black">

                <div className="container flex flex-col gap-20">
                    <h1 className="text-primary">Partnership</h1>
                    <PartnershipSection />
                </div>

                <div className="container flex flex-col gap-20 items-center">
                    <h1 className="text-primary">The Benefits You Will Get</h1>
                    <div className="grid grid-cols-2 gap-8 w-full">
                        {
                            benefits.map((item) => (
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
                <OurPartnershipModels/>
                <HowWeWillWorkTogether/>
                <WhatTheySay/>
                <PartnershipForm/>
            </main>
        </div>
    )
}