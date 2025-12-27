import Image from "next/image";
import SlidingButton from "../../buttons/sliding-button";
import { socialsData } from "@/data/routes";
import ImageCTE from "../../cards/image-cte";

export default function BuildTogetherSection() {
    return (
        <ImageCTE image="/about/image-2.jpg">
            <div className="flex flex-row gap-4">
                <Image src="/star-white.svg" alt="Star" width={40} height={40} />
                <h1 className="text-white text-7xl uppercase">Lets Build Together</h1>
                <Image src="/star-white.svg" alt="Star" width={40} height={40} />
            </div>
            <div className="flex flex-col gap-2">
                <h1 className="text-white">Join us in shaping Bali’s</h1>
                <h1 className="text-white">future developments.</h1>
            </div>
            <SlidingButton text="Start Your Project" href={socialsData.whatsapp.link} />
        </ImageCTE>
    )
}