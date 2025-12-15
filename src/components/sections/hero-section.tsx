import Image from "next/image";
import SlidingButton from "../buttons/sliding-button";

export default function HeroSection() {
    return (
        <div className="w-full h-screen container" id="hero-section">
            <Image
                src="/hero-section.png"
                alt="Construction site showing building dreams"
                fill
                style={{ objectFit: "cover" }}
                priority
            />

            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10 flex flex-col justify-end h-full gap-10 pb-64">
                <h1 className="text-white text-7xl w-3/4 leading-tight">Your Partner in Reliable Constructions.</h1>
                <SlidingButton text="View Projects" href="/projects"/>
            </div>
        </div>
    );
}
