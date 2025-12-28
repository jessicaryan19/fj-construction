import VerticalFadeIn from "@/components/animations/vertical-fade-in";
import StarLongIcon from "@/components/icons/star-long-icon";
import { Service } from "@/data/services"
import { cn } from "@/lib/utils";
import Image from "next/image"

interface ServiceItemProps {
    service: Service,
    index: number
}
export default function ServiceItem({
    service,
    index
}: ServiceItemProps) {
    const isOdd = index % 2 === 1;

    return (
        <VerticalFadeIn>
            <div className="flex flex-col gap-5" key={service.title}>
                <div className={`container flex gap-20 items-center ${isOdd && 'flex-row-reverse'}`}>
                    <div className="relative aspect-video w-3/5 rounded-3xl overflow-hidden">
                        <Image
                            src={service.image}
                            alt=""
                            fill
                            style={{ objectFit: "cover" }}
                            priority
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-primary via-primary/40 to-primary/0" />
                        <div className={`absolute bg-white text-primary py-4 px-8 ${isOdd ? 'left-0 rounded-br-3xl' : 'right-0 rounded-bl-3xl'}`}>
                            <h2>{index + 1}</h2>
                        </div>
                        <div className="absolute inset-0 flex flex-col justify-end items-center z-10 pb-8">
                            <h2 className="text-white">{service.title}</h2>
                        </div>
                    </div>

                    <span className="flex-1 leading-10 text-primary">
                        {service.longDesc.map((desc, index) => (
                            index % 2 == 0 ? (
                                <span key={index} className="text-xl">{desc}</span>
                            ) : (
                                <span key={index} className="text-3xl px-1.5">{desc}</span>
                            )
                        ))}
                    </span>
                </div>

                <div className={`relative w-screen -mx-[calc((100vw-100%)/2)] flex ${isOdd ? "justify-end" : "justify-start"}`}>
                    <StarLongIcon
                        width={300}
                        className={cn(
                            "object-contain text-primary",
                            !isOdd && "scale-x-[-1]"
                        )} />
                </div>
            </div>
        </VerticalFadeIn>
    )
}