import VerticalFadeIn from "@/components/animations/vertical-fade-in";
import GlassCard from "@/components/cards/glass-card";
import ImageBackground from "@/components/layout/image-background";
import ContactForm from "@/components/sections/contact-us/contact-form";
import { socialsData } from "@/data/routes";

export default function ContactUs() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="min-h-screen w-full flex flex-col gap-32 pb-10 items-center bg-white dark:bg-black">

                <ImageBackground image="/about/image-2.jpg">
                    <div className="flex flex-col items-center justify-end h-screen pb-20 pt-64">
                        <div className="container flex flex-col items-center justify-between flex-1">
                            <VerticalFadeIn>
                                <h1 className="text-white text-8xl text-center">Let&apos;s Connect</h1>
                            </VerticalFadeIn>

                            <div className="w-full grid grid-cols-4 gap-8">
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