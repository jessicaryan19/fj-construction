import ServicesIntroSection from "@/components/sections/services/service-intro-section";

export default function Services() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="min-h-screen w-full flex flex-col gap-32 pt-40 pb-10 items-center bg-white dark:bg-black">
                <ServicesIntroSection />
            </main>
        </div>
    );
}