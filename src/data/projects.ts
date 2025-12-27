import { RichText } from "@/components/ui/rich-text"

export type ProjectContentBlock = {
    type: "text" | "text-primary" | "two-image-one-desc" | "image-text-left" | "image-text-right" | "two-image" | "one-image";
    images: string | string[];
    text: RichText;
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
        content: []
    }
]