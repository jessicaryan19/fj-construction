import SlidingButton from "@/components/buttons/sliding-button";
import ImageCTE from "@/components/cards/image-cte";

export default function YourProjectDeserveTheBest() {
    return (
        <ImageCTE image="/about/image-2.jpg">
            <h2 className="text-white">Your Project Deserves The Best</h2>
            <h4 className="text-white">See how we can support your next build.</h4>
            <SlidingButton text="Explore Our Services" href="/services" />
        </ImageCTE>
    )
}