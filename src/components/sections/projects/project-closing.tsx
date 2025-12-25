import SlidingButton from "@/components/buttons/sliding-button";
import ImageCTE from "@/components/cards/image-cte";

export default function ProjectClosing() {
    return (
        <ImageCTE image="/services/handshake.jpg">
            <h1 className="text-white text-7xl">Your Vision, Our Expertise.</h1>
            <h1 className="text-white">Strong foundations start with strong partnerships.</h1>
            <SlidingButton text="Explore Partnership Opportunities" href="/partnership" />
        </ImageCTE>
    )
}