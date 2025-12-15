import SlidingButton from "@/components/buttons/sliding-button";
import ImageOverlayCard from "@/components/cards/image-overlay-card";

export default function ProjectClosing() {
    return (
        <ImageOverlayCard image="/services/handshake.jpg">
            <h1 className="text-white text-7xl">Your Vision, Our Expertise.</h1>
            <h1 className="text-white">Strong foundations start with strong partnerships.</h1>
            <SlidingButton text="Explore Partnership Opportunities" href="/partnerships" />
        </ImageOverlayCard>
    )
}