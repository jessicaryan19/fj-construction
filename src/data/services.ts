export type Service = {
    title: string;
    description: string;
    image: string;
    longDesc: string[];
}

export const servicesData = [{
    title: "Residential & Villa Construction",
    description: "Build your dream home with precision, premium materials, and lasting quality.",
    image: "/services/residential.jpg",
    longDesc: [
        "Designed for",
        "lasting comfort",
        "and",
        "luxury,",
        "our residential and villa builds combine precise craftsmanship, premium materials, and strict",
        "quality control",
        "to ensure every home stands strong for years to come."
    ]
}, {
    title: "Boutique Hotel & Commercial Buildings",
    description: "Create inspiring hotels and business spaces with our proven construction expertise.",
    image: "/services/boutique.jpg",
    longDesc: [
        "With extensive experience in hospitality and commercial development, our team brings boutique hotels and commercial spaces to life with reliable execution and a",
        "proven record",
        "of successful projects."
    ]
}, {
    title: "Architectural Design Execution",
    description: "Bring your design to life through expert, detail-driven execution.",
    image: "/services/design.jpg",
    longDesc: [
        "Your architectural vision is translated into reality by a",
        "skilled team",
        "of engineers, architects, and project managers who execute every detail with professionalism, innovation, and technical accuracy."
    ]
}, {
    title: "Renovation & Remodeling",
    description: "Transform old spaces into modern, high-quality interiors that endure.",
    image: "/services/renovation.jpg",
    longDesc: [
        "Whether refreshing or restructuring an existing space, our renovation work follows the same high standards as new builds, using premium materials and",
        "consistent quality checks",
        "to deliver meaningful upgrades."
    ]
}, {
    title: "Land Search & Support Services",
    description: "Find the right land and build with a partner by your side from start to finish.",
    image: "/services/land-search.jpg",
    longDesc: [
        "From the earliest stage of securing the right land, we guide and support clients through",
        "every step",
        "of development, ensuring a smooth and confident journey toward construction."
    ]
}, {
    title: "Project Management & Cost Estimation",
    description: "Stay on schedule and on budget with transparent, reliable project control.",
    image: "/services/project-management.jpg",
    longDesc: [
        "Transparent cost planning, clear reporting, and disciplined timelines ensure your project runs efficiently, with",
        "dedicated oversight",
        "from start to finish for full confidence and control."
    ]
}]

export const whyBuildWithUsData = [
    {
        title: "Guaranteed Quality",
        image: "/services/quality.jpg",
        description: "Every project we handle is built with precision, premium materials, and strict quality control. Our commitment is to deliver long-lasting results that exceed expectations."
    },
    {
        title: "Expert Team",
        image: "/services/expert.jpg",
        description: "Our team consists of skilled engineers, architects, and project managers with years of experience in the industry. Together, we bring expertise, innovation, and professionalism to every project."
    },
    {
        title: "Reliability & Deadlines",
        image: "/services/reliability.jpg",
        description: "Time is crucial in construction. We take pride in our consistency to deliver on schedule, maintaining efficiency without compromising quality. "
    }
]

export const whyPartnerWithUsData = [
    {
        title: "Developers",
        description: "Reliable execution from concept to completion",
        icon: "mdi:worker"
    }, {
        title: "Architects",
        description: "Turning designs into precise, high-quality builds",
        icon: "ic:baseline-architecture"
    }, {
        title: "Real Estate Agencies",
        description: "Providing trusted contractors for clients",
        icon: "material-symbols:real-estate-agent-rounded"
    }, {
        title: "Property Managers",
        description: "Ensuring smooth renovation and maintenance",
        icon: "icomoon-free:user-tie"
    }
]