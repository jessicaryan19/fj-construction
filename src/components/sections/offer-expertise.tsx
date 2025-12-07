import ImageRevealCard from "../common/image-reveal-card"

export default function OfferExpertise() {
    const expertise = [{
        title: "Residential & Villa Construction",
        description: "Build your dream home with precision, premium materials, and lasting quality.",
        image: "residential.jpg"
    }, {
        title: "Boutique Hotel & Commercial Buildings",
        description: "Create inspiring hotels and business spaces with our proven construction expertise.",
        image: "boutique.jpg"
    }, {
        title: "Architectural Design Execution",
        description: "Bring your design to life through expert, detail-driven execution.",
        image: "design.jpg"
    }, {
        title: "Renovation & Remodeling",
        description: "Transform old spaces into modern, high-quality interiors that endure.",
        image: "renovation.jpg"
    }, {
        title: "Land Search & Support Services",
        description: "Find the right land and build with a partner by your side from start to finish.",
        image: "land-search.jpg"
    }, {
        title: "Project Management & Cost Estimation",
        description: "Stay on schedule and on budget with transparent, reliable project control.",
        image: "project-management.jpg"
    }]

    return (
        <div className="container flex flex-col gap-20 py-20">
            <h1 className="text-primary text-center">We Offer Expertise Accross:</h1>
            <div className="grid grid-cols-3 gap-8">
                {
                    expertise.map((item) => (
                        <ImageRevealCard
                            key={item.title}
                            image={item.image}
                            title={item.title}
                            description={item.description}
                        />
                    ))
                }
            </div>
        </div>
    )
}