import Image from "next/image";

export default function BuildTogetherSection() {
    return (
        <div className="relative container w-full h-144 rounded-3xl overflow-hidden">
            <Image
                src="/about/image-2.jpg"
                alt="Construction site showing building dreams"
                fill
                style={{ objectFit: "cover" }}
                priority
            />
            <div className="absolute inset-0 bg-black/50" />

            <div className="absolute inset-0 flex flex-col justify-center items-center z-10 gap-8">
                <div className="flex flex-row gap-4">
                    <Image src="/star-white.svg" alt="Star" width={40} height={40} />
                    <h1 className="text-white text-7xl uppercase">Lets Build Together</h1>
                    <Image src="/star-white.svg" alt="Star" width={40} height={40} />
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-white">Join us in shaping Bali’s</h1>
                    <h1 className="text-white">future developments.</h1>
                </div>
            </div>
        </div>
    )
}