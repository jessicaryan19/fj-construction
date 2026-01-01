import SlidingButton from "@/components/buttons/sliding-button";
import ImageCTE from "@/components/cards/image-cte";

export default function ProjectClosing() {
    return (
        <ImageCTE image="/services/handshake.jpg">
            <h2 className="text-white">Your Vision, Our Expertise.</h2>
            <h4 className="text-white">Strong foundations start with strong partnerships.</h4>
            <SlidingButton text="Explore Partnership Opportunities" href="/partnership" />
        </ImageCTE>
    )
}