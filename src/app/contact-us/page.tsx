import VerticalFadeIn from "@/components/animations/vertical-fade-in";
import GlassCard from "@/components/cards/glass-card";
import ImageBackground from "@/components/layout/image-background";
import ContactForm from "@/components/sections/contact-us/contact-form";
import { socialsData } from "@/data/routes";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us",
    description:
        "Get in touch with FJ Constructions for your villa or construction project in Bali. Request a consultation, discuss your vision, and start building your dream property today.",
    openGraph: {
        title: "Contact Us | FJ Constructions",
        description:
            "Get in touch with FJ Constructions for your villa or construction project in Bali.",
    },
};

export default function ContactUs() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="min-h-screen w-full flex flex-col gap-16 lg:gap-32 pb-10 items-center bg-white dark:bg-black">
                <ImageBackground image="/about/image-2.jpg">
                    <div className="flex flex-col items-center justify-end h-screen pb-20 pt-40 md:pt-64">
                        <div className="container flex flex-col items-center justify-between flex-1">
                            <VerticalFadeIn>
                                <h1 className="text-white text-center">Let&apos;s Connect</h1>
                            </VerticalFadeIn>

                            <div className="w-full grid grid-cols-2 xl:grid-cols-4 gap-4 md:gap-8 px-4">
                                {Object.entries(socialsData).map(([key, value]) => (
                                    <GlassCard key={key} icon={value.icon} link={value.link} linkName={value.name} />
                                ))}
                            </div>
                        </div>
                    </div>
                </ImageBackground>
                <ContactForm />
            </main>
        </div>
    )
}