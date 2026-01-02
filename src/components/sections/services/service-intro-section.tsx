import FlowerIcon from "@/components/icons/flower-icon";
import StarLongIcon from "@/components/icons/star-long-icon";

export default function ServicesIntroSection() {
    return (
        <div className="container">
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                From private residences to large-scale commercial builds, we turn{" "}

                <span className="inline-flex items-baseline text-2xl sm:text-3xl md:text-4xl text-[#3A4A30]">
                    <span className="relative mr-1 inline-block h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 self-center">
                        <FlowerIcon className="w-full" />
                    </span>
                    ideas
                </span>{" "}

                into

                <span className="inline-flex items-baseline text-2xl sm:text-3xl md:text-4xl text-[#3A4A30]">
                    <span className="relative mx-1 inline-block h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 self-center">
                        <FlowerIcon className="w-full" />
                    </span>
                    structures
                </span>{" "}

                that last. Our team delivers end-to-end construction solutions
                with precision, transparency, and a deep commitment to quality, so
                every project becomes{" "}

                <span className="block mt-2 text-2xl sm:text-3xl md:text-4xl text-[#3A4A30] underline decoration-[#3A4A30] underline-offset-4 sm:underline-offset-6 md:underline-offset-8 md:inline md:mt-0">
                    a space worth living, working, and investing in.
                </span>
            </p>
            <div className="relative w-screen -mx-[calc((100vw-100%)/2)] mt-4 sm:mt-6 md:mt-8">
                <StarLongIcon className="object-contain absolute right-0 sm:right-4 md:right-8 text-primary" width={200} height={200} />
            </div>
        </div>
    )
}