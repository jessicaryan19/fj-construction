import SlidingButton from "@/components/buttons/sliding-button";
import ImageOverlayCard from "@/components/cards/image-overlay-card";

export default function YourProjectDeserveTheBest() {
    return (
        <ImageOverlayCard image="/about/image-2.jpg">
            <h1 className="text-white text-7xl">Your Project Deserves The Best</h1>
            <h1 className="text-white">See how we can support your next build.</h1>
            <SlidingButton text="Explore Our Services" href="/services" />
        </ImageOverlayCard>
    )
}