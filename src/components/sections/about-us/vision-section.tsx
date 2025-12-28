import VerticalFadeIn from "@/components/animations/vertical-fade-in";
import EightPointStarIcon from "@/components/icons/eight-point-star-icon";
import FlowerIcon from "@/components/icons/flower-icon";
import SparkleIcon from "@/components/icons/sparkle-icon";

export default function VisionSection() {
    return (
        <div className="relative bg-white">
            <div className="absolute inset-0 blur-3xl"
                style={{
                    background: 'radial-gradient(circle at center, var(--secondary) 0%, transparent 70%)'
                }}
            />
            <div className="relative w-screen container flex flex-col items-center text-primary py-20">
                <VerticalFadeIn className="flex flex-col w-full gap-2">
                    <h1 className="font-medium">We believe</h1>
                    <h1 className="uppercase">Great Projects</h1>
                </VerticalFadeIn>
                <VerticalFadeIn delay={0.1} className="flex flex-col w-full items-end gap-2">
                    <h1 className="font-medium">are built through</h1>
                    <h1 className="underline">strong collaboration.</h1>
                </VerticalFadeIn>

                <VerticalFadeIn delay={0.2}>
                    <h1 className="uppercase text-7xl py-20 text-center">Our Vision Is</h1>
                </VerticalFadeIn>

                <VerticalFadeIn className="relative w-full" delay={0.1}>
                    <EightPointStarIcon className="absolute left-48" />
                    <EightPointStarIcon className="absolute bottom-16 right-32" />
                    <VerticalFadeIn className="w-full" delay={0.3}>
                        <svg viewBox="0 0 946 400" className="w-full h-full" aria-hidden >
                            <ellipse
                                cx="473"
                                cy="200"
                                rx="460"
                                ry="160"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                            />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center px-54 text-center">
                            <h1 className="font-medium text-center">
                                To create a network of <u>trusted partners</u> that share the same goal, delivering <u>outstanding result</u> with integrity and efficiency.
                            </h1>
                        </div>
                    </VerticalFadeIn>

                    <SparkleIcon className="absolute right-64 top-16 text-primary" width={120} height={120} />
                    <SparkleIcon className="absolute left-64 bottom-16 text-primary" width={120} height={120} />
                    <FlowerIcon className="absolute left-32 top-24 -rotate-20" width={120} height={120} />
                    <FlowerIcon className="absolute -right-5 top-72" width={80} height={80} />
                </VerticalFadeIn>
            </div>
        </div>
    );
}
