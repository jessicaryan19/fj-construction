import Image from "next/image";

export default function ServicesIntroSection() {
    return (
        <div className="container">
            <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                From private residences to large-scale commercial builds, we turn{" "}

                <span className="inline-flex items-baseline text-4xl text-[#3A4A30]">
                    <span className="relative mr-1 inline-block h-8 w-8 self-center">
                        <Image
                            src="/svg-art/flower.svg"
                            alt="Star"
                            fill
                            className="object-contain"
                        />
                    </span>
                    ideas
                </span>{" "}

                into{" "}

                <span className="inline-flex items-baseline text-4xl text-[#3A4A30]">
                    <span className="relative mx-1 inline-block h-8 w-8 self-center">
                        <Image
                            src="/svg-art/flower.svg"
                            alt="Star"
                            fill
                            className="object-contain"
                        />
                    </span>
                    structures
                </span>{" "}

                that last. Our team delivers end-to-end construction solutions
                with precision, transparency, and a deep commitment to quality, so
                every project becomes{" "}

                <span className="block mt-2 text-4xl text-[#3A4A30] underline decoration-[#3A4A30] underline-offset-8 md:inline md:mt-0">
                    a space worth living, working, and investing in.
                </span>
            </p>
            <div className="relative w-screen -mx-[calc((100vw-100%)/2)]">
                <Image
                    src="/svg-art/star-long.svg"
                    alt="Star"
                    width={300}
                    height={80}
                    className="object-contain absolute right-0"
                />
            </div>
        </div>
    )
}