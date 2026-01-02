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
            <div className="flex flex-col gap-3 sm:gap-5" key={service.title}>
                <div className={cn(
                    "container flex flex-col gap-6 items-center",
                    "md:flex-row md:gap-12 lg:gap-20",
                    isOdd && "md:flex-row-reverse"
                )}>
                    <div className="relative aspect-video w-full md:w-3/5 rounded-2xl md:rounded-3xl overflow-hidden">
                        <Image
                            src={service.image}
                            alt=""
                            fill
                            style={{ objectFit: "cover" }}
                            priority
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-primary via-primary/40 to-primary/0" />
                        <div className={cn(
                            "absolute bg-white text-primary py-2 px-4 md:py-4 md:px-8",
                            isOdd ? "left-0 rounded-br-2xl md:rounded-br-3xl" : "right-0 rounded-bl-2xl md:rounded-bl-3xl"
                        )}>
                            <h5 className="text-xl md:text-2xl">{index + 1}</h5>
                        </div>
                        <div className="absolute inset-0 flex flex-col justify-end items-center z-10 pb-4 md:pb-8">
                            <h5 className="text-white text-lg md:text-xl lg:text-2xl px-4 text-center">{service.title}</h5>
                        </div>
                    </div>

                    <span className="flex-1 leading-7 md:leading-9 lg:leading-10 text-primary px-4 md:px-0">
                        {service.longDesc.map((desc, index) => (
                            index % 2 == 0 ? (
                                <span key={index} className="text-base md:text-lg lg:text-xl">{desc}</span>
                            ) : (
                                <span key={index} className="text-xl md:text-2xl lg:text-3xl px-1">{desc}</span>
                            )
                        ))}
                    </span>
                </div>

                <div className={cn(
                    "relative w-screen -mx-[calc((100vw-100%)/2)] flex",
                    isOdd ? "justify-end" : "justify-start"
                )}>
                    <StarLongIcon
                        width={150}
                        className={cn(
                            "object-contain text-primary sm:w-[200px] md:w-[250px] lg:w-[300px]",
                            !isOdd && "scale-x-[-1]"
                        )}
                    />
                </div>
            </div>
        </VerticalFadeIn>
    )
}