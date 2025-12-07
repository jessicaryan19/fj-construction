import AboutSection from "@/components/sections/about-section";
import HeroSection from "@/components/sections/hero-section";
import OfferExpertise from "@/components/sections/offer-expertise";
import WhyPartnerSection from "@/components/sections/why-partner-section";
import WhyUsSection from "@/components/sections/why-us-section";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-col items-center bg-white dark:bg-black">
        <HeroSection />
        <AboutSection />
        <WhyUsSection />
        <OfferExpertise />
        <WhyPartnerSection />
      </main>
    </div>
  );
}
