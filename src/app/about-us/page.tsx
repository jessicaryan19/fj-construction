import AboutUsSection from "@/components/sections/about-us/about-us-section";
import WhyUsSection from "@/components/sections/about-us/why-us-section";
import YourProjectDeserveTheBest from "@/components/sections/about-us/your-project-deserve-the-best";

export default function AboutUs() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="min-h-screen w-full flex flex-col gap-32 pt-40 pb-10 items-center bg-white dark:bg-black">
                <div className="container flex flex-col gap-20">
                    <h1 className="text-primary">About Us</h1>
                    <AboutUsSection/>
                </div>
                <WhyUsSection/>
                <YourProjectDeserveTheBest/>
            </main>
        </div>
    )
}