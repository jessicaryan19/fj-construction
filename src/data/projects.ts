import { RichText } from "@/components/ui/rich-text"

export type ProjectContentBlock = {
    type: "text" | "text-primary" | "two-image-one-desc" | "image-text-left" | "image-text-right" | "three-image" | "two-image" | "two-image-flip" | "one-image" | "circle-text";
    images: string | string[];
    text: RichText;
    className?: string;
}
export type Project = {
    id: string,
    name: string,
    landingCover: string,
    location: string,
    shortDesc: string,
    bedrooms: number | string,
    landSize: number,
    buildingSize: number,
    finishedIn: number,
    content: ProjectContentBlock[]
}

export const projectsData: Project[] = [
    {
        id: "villa-radja",
        name: "Villa Radja",
        landingCover: "overview.png",
        location: "Umalas, Bali",
        shortDesc: "A modern, tropical aesthetic design located in Umalas, Bali.",
        bedrooms: 3,
        landSize: 660,
        buildingSize: 530,
        finishedIn: 2023,
        content: [
            {
                type: "two-image-one-desc",
                images: ["slideshow-secondary.png", "dining-room.png"],
                text: [
                    { text: "Villa Radja captures the essence of" },
                    { text: "modern tropical design.", underline: true }
                ]
            },
            {
                type: "image-text-left",
                images: "living-room.png",
                text: [
                    { text: "Floor-to-ceiling glass panels slide open to" },
                    { text: "blur the line", underline: true },
                    { text: "between indoor comfort and lush outdoor living." }
                ]
            },
            {
                type: "image-text-right",
                images: "slideshow-main.png",
                text: [
                    { text: "Clean flat roofs, sharp angles, and a refined palette of dark bespoke wood, crisp whites, and cool stone create a space that feels both" },
                    { text: "luxurious and grounded.", underline: true }
                ]
            },
            {
                type: "text-primary",
                images: "",
                text: [
                    { text: "The open-plan living area looks out to a private garden and resort-style pool, while the gourmet kitchen serves as a sleek, functional centerpiece." }
                ]
            },
            {
                type: "two-image",
                images: ["dining-room.png", "kitchen.png"],
                text: []
            },
            {
                type: "image-text-left",
                images: "bedroom-1.png",
                text: [
                    { text: "Each master suite is designed as a" },
                    { text: "quiet retreat", underline: true },
                    { text: "with direct pool access," },
                ]
            },
            {
                type: "image-text-right",
                images: "bedroom-2.png",
                text: [
                    { text: "perfect", underline: true },
                    { text: "for beginning and ending the day in calm." },
                ]
            },
            {
                type: "text",
                images: "",
                text: [
                    { text: "With", bold: true },
                    { text: "premium finishes", underline: true, bold: true },
                    { text: "and integrated", bold: true },
                    { text: "smart-home", underline: true, bold: true },
                    { text: "features,", bold: true },
                ]
            },
            {
                type: "circle-text",
                images: "",
                text: [
                    { text: "Villa Radja is a testament to disciplined construction, precise craftsmanship, and a commitment to delivering a " },
                    { text: "sophisticated living in a truly serene setting.", underline: true }
                ]
            }
        ]
    },
    {
        id: "villa-goa-gong",
        name: "Villa Goa Gong",
        landingCover: "slideshow-secondary.png",
        location: "Jimbaran, Bali",
        shortDesc: "A clean design with dramatic horizontal lines located in Jimbaran, Bali.",
        bedrooms: 8,
        landSize: 2700,
        buildingSize: 880,
        finishedIn: 2025,
        content: [
            {
                type: "two-image-one-desc",
                images: ["building-1.jpg", "building-2.jpg"],
                text: [
                    { text: "Villa Goa Gong brings a grand, architectural presence to tropical living." },
                ]
            },
            {
                type: "text",
                images: "",
                text: [
                    { text: "Clean horizontal lines and expansive black-framed glass façade create a" },
                    { text: "bold architectural statement.", underline: true },
                ]
            },
            {
                type: "image-text-right",
                images: "living-room.jpg",
                text: [
                    { text: "Inside, the double-height living spaces, polished concrete floors, textured stone walls, and warm wood paneling create a" },
                    { text: "refined balance of strength and elegance.", underline: true },
                ]
            },
            {
                type: "text-primary",
                images: "",
                text: [
                    { text: "The floating wooden staircase and recessed show kitchen highlight the villa’s" },
                    { text: "bespoke craftsmanship.", underline: true },
                ]
            },
            {
                type: "one-image",
                images: "dining-room.jpg",
                text: []
            },
            {
                type: "two-image",
                images: ["tv-room.jpg", "bedroom.jpg"],
                text: []
            },
            {
                type: "text-primary",
                images: "",
                text: [
                    { text: "The outdoor area delivers a" },
                    { text: "true resort experience:", underline: true },
                    { text: "a vast lawn, extended sun deck, and a striking pool anchored by a sunken, shaded lounge." },
                    { text: "Perfect", underline: true },
                    { text: "for slow mornings or sunset gatherings." },
                ]
            },
            {
                type: "one-image",
                images: "pool.jpg",
                text: []
            },
            {
                type: "text",
                images: "",
                text: [
                    { text: "Wrapped in floor-to-ceiling glass, the villa" },
                    { text: "blends seamlessly", underline: true },
                    { text: "with its tropical surroundings. From the open dining area to the spacious lounge, every space feels bright, connected, and designed for" },
                    { text: "effortless large-scale living.", underline: true },
                ]
            },
            {
                type: "circle-text",
                images: "",
                text: [
                    { text: "A grand, modern tropical estate built for those who seek scale, sophistication, and unforgettable spaces.", bold: true },
                ]
            },
        ]
    },
    {
        id: "villa-kost-adeva",
        name: "Villa & Kost Adeva",
        landingCover: "slideshow-secondary.png",
        location: "Jimbaran, Bali",
        shortDesc: "A functional, tropical modernism design located in Jimbaran, Bali.",
        bedrooms: "16+",
        landSize: 642.47,
        buildingSize: 708.3,
        finishedIn: 2025,
        content: [
            {
                type: "two-image-one-desc",
                images: ["exterior-1.jpg", "exterior-2.jpg"],
                text: [
                    { text: "Adeva Villa & Kost is a" },
                    { text: "smart, efficient approach", underline: true },
                    { text: "to mixed-use residential living." },
                ]
            },
            {
                type: "image-text-right",
                images: "exterior-3.jpg",
                text: [
                    { text: "The architecture embraces multi-story, stacked structures, maximizing space while maintaining a clean, modern aesthetic." },
                ]
            },
            {
                type: "image-text-left",
                images: "exterior-4.jpg",
                text: [
                    { text: "White façades are sharply framed by dark windows and balconies, softened by tropical landscaping and a signature vertical green wall that" },
                    { text: "adds warmth to the geometry.", underline: true },
                    { text: "to the geometry." },
                ]
            },
            {
                type: "text",
                images: "",
                text: [
                    { text: "The layout is centered around a practical courtyard and driveway, creating" },
                    { text: "smooth circulation", underline: true },
                    { text: "to the geometry.for vehicles and residents while connecting the Kost units and villas within" },
                    { text: "one cohesive environment", underline: true },
                ]
            },
            {
                type: "one-image",
                images: "map.jpg",
                text: [],
                className: "aspect-video"
            },
            {
                type: "one-image",
                images: "exterior-5.jpg",
                text: []
            },
            {
                type: "three-image",
                images: ["park-1.jpg", "park-2.jpg", "park-3.jpg"],
                text: []
            },
            {
                type: "text-primary",
                images: "",
                text: [{ text: "This development blends two accommodation types seamlessly." }]
            },
            {
                type: "image-text-right",
                images: "slideshow-main.png",
                text: [{ text: "16 functional Kost units designed for long-term rentals," }]
            },
            {
                type: "image-text-left",
                images: "building.jpg",
                text: [{ text: "and 2 private villas crafted for a more premium stay." }]
            },
            {
                type: "text",
                images: "",
                text: [{ text: "Wrapped in modern simplicity and tropical accents,", bold: true }]
            },
            {
                type: "circle-text",
                images: "",
                text: [
                    { text: "Adeva Villa & Kost stands as a thoughtful, well-executed solution for high-density living that still feels", bold: true },
                    { text: "bright,", bold: true, underline: true },
                    { text: "modern,", bold: true, underline: true },
                    { text: "and", bold: true },
                    { text: "welcoming.", bold: true, underline: true },

                ]
            },
        ]
    },
    {
        id: "kost-marlboro",
        name: "Kost Marlboro",
        landingCover: "slideshow-secondary.png",
        location: "Marlboro, Bali",
        shortDesc: "A design focused on efficiency and clean lines, utilizing a simple multi-level structure.",
        bedrooms: 6,
        landSize: 201.8,
        buildingSize: 304,
        finishedIn: 2025,
        content: [
            {
                type: "two-image-one-desc",
                images: ["slideshow-main.png", "building-1.png"],
                text: [
                    { text: "Marlboro Kost is designed with one clear purpose: to deliver" },
                    { text: "a profitable, durable, and efficient rental property.", underline: true },
                ]
            },
            {
                type: "image-text-right",
                images: "terrace.png",
                text: [
                    { text: "The architecture uses a" },
                    { text: "straightforward multi-level structure,", underline: true },
                    { text: "defined by clean lines, strong geometry," },
                ]
            },
            {
                type: "image-text-left",
                images: "balcony.png",
                text: [
                    { text: "and a high-contrast palette of white façades, dark-framed windows, and a dark roof—creating a sharp, modern look ideal for commercial use." },
                ]
            },
            {
                type: "two-image",
                images: ["garage.png", "interior.png"],
                text: []
            },
            {
                type: "image-text-right",
                images: "bedroom-1.png",
                text: [
                    { text: "Built specifically for the" },
                    { text: "long-term rental market,", underline: true },
                    { text: "this development consists of 16 individual Kost units," },
                ]
            },
            {
                type: "image-text-left",
                images: "bedroom-2.png",
                text: [
                    { text: "each crafted to offer privacy, comfort, and functionality." },
                ]
            },
            {
                type: "text-primary",
                images: "",
                text: [
                    { text: "The focused unit count allows the property to maximize plot efficiency while supporting stable rental yields, making it a" },
                    { text: "strategic investment", underline: true },
                    { text: "for its owner." },
                ]
            },
            {
                type: "one-image",
                images: "slideshow-secondary.png",
                text: []
            },
            {
                type: "two-image-flip",
                images: ["front-view.png", "building-5.png"],
                text: []
            },
            {
                type: "two-image",
                images: ["living-room-1.png", "living-room-2.png"],
                text: []
            },
            {
                type: "circle-text",
                images: [],
                text: [
                    {text: "Marlboro Kost stands as a"},
                    {text: "practical, contemporary asset:", underline: true},
                    {text: "Built to perform, built to last, and built to meet the growing demand for modern, reliable rental housing."},
                ]
            },
        ]
    }
]