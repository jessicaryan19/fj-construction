import SlidingButton from "@/components/buttons/sliding-button";
import ImageCTE from "@/components/cards/image-cte";

export default function ServiceClosing() {
    return (
        <ImageCTE image="/about/image-2.jpg">
            <h1 className="text-white text-7xl">See how we turn your <u>vision</u> into <u>reality</u>.</h1>
            <SlidingButton text="View Projects" href="/projects" />
        </ImageCTE>
    )
}