import ServiceClosing from "@/components/sections/services/service-closing";
import ServicesIntroSection from "@/components/sections/services/service-intro-section";
import ServiceItem from "@/components/sections/services/service-item";
import { services } from "@/data/services";

export default function Services() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="min-h-screen w-full flex flex-col gap-20 pt-40 pb-10 items-center bg-white dark:bg-black">

                <div className="container flex flex-col gap-10">
                    <h1 className="text-primary">Services</h1>
                    <ServicesIntroSection />
                </div>

                <div className="flex flex-col gap-10">
                    {services.map((service, index) => (
                        <ServiceItem key={service.title} service={service} index={index} />
                    ))}
                </div>

                <ServiceClosing/>
            </main>
        </div>
    );
}