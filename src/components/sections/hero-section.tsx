import Image from "next/image";

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
            <div className="relative z-10 flex flex-col justify-center h-full">
                <h1 className="text-white w-1/2 leading-tight">Your Partner in Reliable Constructions.</h1>
            </div>
        </div>
    );
}
