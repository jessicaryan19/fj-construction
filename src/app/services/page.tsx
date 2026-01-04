import VerticalFadeIn from "@/components/animations/vertical-fade-in";
import ServiceClosing from "@/components/sections/services/service-closing";
import ServicesIntroSection from "@/components/sections/services/service-intro-section";
import ServiceItem from "@/components/sections/services/service-item";
import { servicesData } from "@/data/services";

export default function Services() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="min-h-screen w-full flex flex-col gap-10 lg:gap-20 pt-40 pb-10 items-center bg-white dark:bg-black">
                <VerticalFadeIn className="container flex flex-col gap-10 px-4">
                    <h4 className="text-primary">Services</h4>
                    <ServicesIntroSection />
                </VerticalFadeIn>

                <div className="flex flex-col gap-10">
                    {servicesData.map((service, index) => (
                        <ServiceItem key={service.title} service={service} index={index} />
                    ))}
                </div>

                <ServiceClosing/>
            </main>
        </div>
    );
}