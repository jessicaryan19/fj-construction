import Image from "next/image"

export default function OurPartnershipModels() {
    const partnershipModelData = [
        {
            title: "Referral Partnership",
            description: "Earn commission for bringing clients or projects (3% per deal).",
            image: "/services/referral.jpg",
        },
        {
            title: "Project Collaboration",
            description:
                "A joint execution between us (FJC) and you (developer/architect). We will share branding on completed projects.",
            image: "/services/collaboration.jpg",
        },
        {
            title: "Exclusive Contractor Partnership",
            description:
                "A long-term agreement for multiple builds or developments with priority scheduling & dedicated project team.",
            image: "/services/contractor.jpg",
        },
    ]

    return (
        <div className="container flex flex-col gap-20 items-center">
            <h1 className="text-primary">Our Partnership Models</h1>

            <div className="grid grid-cols-3 gap-10 w-full">
                {partnershipModelData.map((item) => (
                    <div
                        key={item.title}
                        className="relative w-full h-[420px] cursor-pointer"
                    >
                        <div className="absolute top-0 left-0 w-full h-2/3 overflow-hidden rounded-3xl">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5/6 h-60 bg-primary text-white rounded-3xl p-8 z-10 flex flex-col gap-4 items-center justify-center text-center">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
