"use client";
import Image from "next/image";
import Line from "../../ui/line";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "../../ui/carousel";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import ArrowButton from "../../buttons/arrow-button";
import { testimonialsData } from "@/data/testimonials";
import GlassContainer from "@/components/ui/glass-container";
import RichTextRenderer from "@/components/ui/rich-text";
import VerticalFadeIn from "@/components/animations/vertical-fade-in";

export default function TestimonialsSection() {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        if (!api) {
            return
        }
        api.on("select", () => {
            setCurrent(api.selectedScrollSnap())
        })
    }, [api])

    return (
        <div className="container">
            <VerticalFadeIn className="flex flex-col gap-20">
                <div className="flex gap-4 items-center">
                    <Line />
                    <h1 className="text-primary">What they say about us</h1>
                </div>

                <div className="relative bg-primary rounded-3xl pb-10 overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <Image
                            src="/texture.jpg"
                            alt="Texture background"
                            className="object-cover object-center"
                            fill
                            priority
                        />
                        <div className="absolute inset-0 bg-primary mix-blend-lighten"></div>
                    </div>

                    <div className="flex flex-col pt-8">
                        <Carousel setApi={setApi} opts={{ loop: true }}>
                            <CarouselContent>
                                {testimonialsData.map((testimonial) => (
                                    <CarouselItem key={testimonial.name} className="flex gap-20 px-20 py-10 items-center">
                                        <div className="flex flex-col items-center justify-center w-1/5 gap-4">
                                            <div className="bg-white rounded-full">
                                                <Icon icon="gg:profile" className="text-secondary text-8xl" />
                                            </div>
                                            <h2 className="text-white text-center font-medium">{testimonial.name}</h2>
                                        </div>
                                        <GlassContainer className="p-12 gap-4">
                                            <Icon icon="fa-solid:quote-left" className="absolute text-secondary text-6xl -top-6 -left-6" />
                                            <Icon icon="fa-solid:quote-right" className="absolute text-secondary text-6xl -bottom-6 -right-6" />
                                            <div className="flex flex-col gap-2 justify-center h-full">
                                                <RichTextRenderer content={testimonial.parts} className="text-xl" />
                                            </div>
                                        </GlassContainer>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>

                        <div className="flex justify-center items-center gap-10">
                            <ArrowButton onClick={() => api?.scrollPrev()} />
                            <div className="flex gap-2 justify-center">
                                {testimonialsData.map((_, idx) => (
                                    <span key={idx}
                                        className={`w-3 h-3 rounded-full transition-colors ${idx === current ? "bg-white" : "bg-white/30"
                                            }`}
                                    />
                                ))}
                            </div>
                            <ArrowButton direction="right" onClick={() => api?.scrollNext()} />
                        </div>
                    </div>
                </div>
            </VerticalFadeIn>
        </div>
    )
}