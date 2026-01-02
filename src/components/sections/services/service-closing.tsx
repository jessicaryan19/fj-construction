import SlidingButton from "@/components/buttons/sliding-button";
import ImageCTE from "@/components/cards/image-cte";

export default function ServiceClosing() {
    return (
        <ImageCTE image="/about/image-2.jpg">
            <h2 className="text-white text-center">See how we turn your <u>vision</u> into <u>reality</u>.</h2>
            <SlidingButton text="View Projects" href="/projects" />
        </ImageCTE>
    )
}