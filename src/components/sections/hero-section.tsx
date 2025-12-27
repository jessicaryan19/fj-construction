import SlidingButton from "../buttons/sliding-button";
import ImageBackground from "../layout/image-background";

export default function HeroSection() {
    return (
        <ImageBackground image="/projects/villa-radja/overview.png">
            <div className="flex flex-col items-center justify-end h-screen pb-64">
                <div className="container flex flex-col gap-10">
                    <h1 className="text-white text-7xl w-3/4 leading-tight">Your Partner in Reliable Constructions.</h1>
                    <SlidingButton text="View Projects" href="/projects" />
                </div>
            </div>
        </ImageBackground>
    );
}
