export type Project = {
    id: string,
    name: string,
    location: string,
    shortDesc: string,
    bedrooms: number | string,
    landSize: number,
    buildingSize: number,
    finishedIn: number,
}

export const projectsData: Project[] = [
    {
        id: "villa-radja",
        name: "Villa Radja",
        location: "Umalas, Bali",
        shortDesc: "A modern, tropical aesthetic design located in Umalas, Bali.",
        bedrooms: 3,
        landSize: 660,
        buildingSize: 530,
        finishedIn: 2023,
    },
    {
        id: "villa-goa-gong",
        name: "Villa Goa Gong",
        location: "Jimbaran, Bali",
        shortDesc: "A clean design with dramatic horizontal lines located in Jimbaran, Bali.",
        bedrooms: 8,
        landSize: 2700,
        buildingSize: 880,
        finishedIn: 2025,
    },
    {
        id: "villa-kost-adeva",
        name: "Villa & Kost Adeva",
        location: "Jimbaran, Bali",
        shortDesc: "A functional, tropical modernism design located in Jimbaran, Bali.",
        bedrooms: "16+",
        landSize: 642.47,
        buildingSize: 708.3,
        finishedIn: 2025,
    },
    {
        id: "kost-marlboro",
        name: "Kost Marlboro",
        location: "Marlboro, Bali",
        shortDesc: "A design focused on efficiency and clean lines, utilizing a simple multi-level structure.",
        bedrooms: 6,
        landSize: 201.8,
        buildingSize: 304,
        finishedIn: 2025,
    }
]