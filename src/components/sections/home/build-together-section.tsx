import SlidingButton from "../../buttons/sliding-button";
import { socialsData } from "@/data/routes";
import ImageCTE from "../../cards/image-cte";
import FlowerIcon from "@/components/icons/flower-icon";

export default function BuildTogetherSection() {
    return (
        <ImageCTE image="/about/image-2.jpg">
            <div className="flex flex-row gap-4 items-center">
                <FlowerIcon type="white"/>
                <h2 className="text-white text-center uppercase">Lets Build Together</h2>
                <FlowerIcon type="white"/>
            </div>
            <div className="flex flex-col gap-2">
                <h4 className="text-white">Join us in shaping Bali’s</h4>
                <h4 className="text-white">future developments.</h4>
            </div>
            <SlidingButton text="Start Your Project" href={socialsData.whatsapp.link} />
        </ImageCTE>
    )
}