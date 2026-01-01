import VerticalFadeIn from "../animations/vertical-fade-in";
import SlidingButton from "../buttons/sliding-button";
import ImageBackground from "../layout/image-background";

export default function HeroSection() {
    return (
        <ImageBackground image="/projects/villa-radja/overview.png">
            <div className="flex flex-col items-center justify-end h-screen pb-32 md:pb-64 px-4">
                <div className="container">
                    <VerticalFadeIn className="flex flex-col gap-6 md:gap-10">
                        <h1 className="text-white md:text-6xl lg:text-7xl w-full md:w-3/4 leading-tight">
                            Your Partner in Reliable Constructions.
                        </h1>
                        <SlidingButton text="View Projects" href="/projects" />
                    </VerticalFadeIn>
                </div>
            </div>
        </ImageBackground>
    );
}