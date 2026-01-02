import SlidingButton from "../../buttons/sliding-button";
import { socialsData } from "@/data/routes";
import ImageCTE from "../../cards/image-cte";
import FlowerIcon from "@/components/icons/flower-icon";

export default function BuildTogetherSection() {
    return (
        <ImageCTE image="/about/image-2.jpg">
            <div className="flex items-center gap-2">
                <FlowerIcon type="white" className="hidden sm:block"/>
                <h2 className="text-white text-center uppercase w-fit">Lets Build Together</h2>
                <FlowerIcon type="white" className="hidden sm:block"/>
            </div>
            <div className="flex flex-col gap-2">
                <h4 className="text-white text-center">Join us in shaping Bali’s future developments.</h4>
            </div>
            <SlidingButton text="Start Your Project" href={socialsData.whatsapp.link} />
        </ImageCTE>
    )
}