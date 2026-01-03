import VerticalFadeIn from "@/components/animations/vertical-fade-in";
import EightPointStarIcon from "@/components/icons/eight-point-star-icon";
import FlowerIcon from "@/components/icons/flower-icon";
import SparkleIcon from "@/components/icons/sparkle-icon";

export default function VisionSection() {
    return (
        <section className="relative bg-background overflow-hidden">
            <div className="absolute inset-1/12 blur-3xl opacity-65"
                style={{
                    background: 'radial-gradient(circle at center, var(--secondary) 0%, transparent 70%)'
                }}
            />

            <div className="relative w-screen flex flex-col gap-6 items-center text-primary py-16 md:py-24 px-4">
                <VerticalFadeIn className="flex flex-col w-full gap-1 container">
                    <h4 className="font-sans font-medium tracking-wide">We believe</h4>
                    <h2 className="uppercase tracking-tight">
                        Great Projects
                    </h2>
                </VerticalFadeIn>

                <VerticalFadeIn delay={0.1} className="flex flex-col w-full items-end gap-1 text-right container">
                    <h4 className="font-medium">are built through</h4>
                    <h4 className="underline underline-offset-4">
                        strong collaboration.
                    </h4>
                </VerticalFadeIn>

                <VerticalFadeIn delay={0.2} className="container">
                    <h2 className="font-display uppercase text-center pt-12 tracking-tight">
                        Our Vision Is
                    </h2>
                </VerticalFadeIn>

                <VerticalFadeIn className="relative w-full container" delay={0.3}>
                    <EightPointStarIcon className="absolute h-8 w-8 sm:h-12 sm:w-12 lg:w-20 lg:h-20 left-16 sm:left-24 lg:left-48 top-0 lg:top-16" />
                    <EightPointStarIcon className="absolute right-4 md:right-16 lg:right-32 bottom-8 sm:bottom-4 lg:bottom-8 h-8 w-8 sm:h-16 sm:w-16 lg:w-32 lg:h-32" />

                    <div className="relative w-full aspect-[2/1] min-h-[200px] md:min-h-[280px] lg:min-h-[320px]">
                        <svg
                            viewBox="0 0 800 400"
                            className="absolute inset-0 w-full h-full"
                            preserveAspectRatio="xMidYMid meet"
                            aria-hidden="true"
                        >
                            <ellipse
                                cx="400"
                                cy="200"
                                rx="380"
                                ry="180"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                className="text-primary"
                            />
                        </svg>

                        <div className="absolute inset-0 flex items-center justify-center">
                            <p className="font-sans font-medium text-sm sm:text-xl lg:text-4xl xl:text-5xl text-center leading-relaxed max-w-[70%] md:max-w-[65%] lg:max-w-[60%] px-4">
                                To create a network of{" "}
                                <span className="underline underline-offset-2">trusted partners</span>{" "}
                                that share the same goal, delivering{" "}
                                <span className="underline underline-offset-2">outstanding results</span>{" "}
                                with integrity and efficiency.
                            </p>
                        </div>
                    </div>

                    <SparkleIcon className="absolute right-8 top-6 h-10 w-10 sm:right-16 sm:h-20 sm:w-20 md:h-24 md:w-24 md:right-16 md:top-4 lg:right-24 lg:w-40 lg:h-40 xl:right-64"/>
                    <SparkleIcon className="absolute left-8 bottom-6 h-10 w-10 sm:left-16 sm:h-20 sm:w-20 md:h-24 md:w-24 md:left-16 md:bottom-4 lg:left-24 lg:w-40 lg:h-40 xl:left-64"/>

                    <FlowerIcon className="absolute left-8 sm:left-16 md:left-16 lg:left-24 top-1/4 -translate-y-1/2 -rotate-12 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:w-32 lg:h-32"/>
                    <FlowerIcon className="absolute -right-2 sm:-right-6 md:-right-8 top-2/5 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:w-32 lg:h-32"/>
                </VerticalFadeIn>
            </div>
        </section>
    );
}