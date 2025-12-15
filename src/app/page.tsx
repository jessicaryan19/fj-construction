import SlidingButton from "@/components/buttons/sliding-button";
import AboutSection from "@/components/sections/about-section";
import BuildTogetherSection from "@/components/sections/build-together-section";
import HeroSection from "@/components/sections/hero-section";
import OfferExpertise from "@/components/sections/offer-expertise";
import OurProjectsHighlight from "@/components/sections/our-projects-highlight";
import WhatTheySay from "@/components/sections/what-they-say";
import WhyPartnerSection from "@/components/sections/why-partner-section";
import WhyUsSection from "@/components/sections/why-us-section";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-col items-center bg-white dark:bg-black">
        <HeroSection />
        <AboutSection />
        <WhyUsSection />

        <SlidingButton text="Get to Know Us More" type="primary"/>
        <OfferExpertise />

        <OurProjectsHighlight />

        <WhyPartnerSection />
        <WhatTheySay />
        <BuildTogetherSection />
      </main>
    </div>
  );
}
