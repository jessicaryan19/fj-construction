import SlidingButton from "@/components/buttons/sliding-button";
import ImageCTE from "@/components/cards/image-cte";

export default function YourProjectDeserveTheBest() {
    return (
        <ImageCTE image="/about/image-2.jpg">
            <h1 className="text-white text-7xl">Your Project Deserves The Best</h1>
            <h1 className="text-white">See how we can support your next build.</h1>
            <SlidingButton text="Explore Our Services" href="/services" />
        </ImageCTE>
    )
}