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
import { motion } from "motion/react";

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
        <div className="container px-4">
            <VerticalFadeIn className="flex flex-col gap-20">
                <div className="flex gap-4 items-center">
                    <Line />
                    <h4 className="text-primary">What they say about us</h4>
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

                    <div className="flex flex-col pt-4 md:pt-8 gap-2 md:gap-0">
                        <Carousel setApi={setApi} opts={{ loop: true, duration: 45 }}>
                            <CarouselContent>
                                {testimonialsData.map((testimonial, idx) => (
                                    <CarouselItem key={testimonial.name} className="flex gap-20 px-10 md:px-20 py-5 md:py-10 items-start">
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: current === idx ? 1 : 0 }}
                                            transition={{ duration: 0.6, ease: "easeInOut" }}
                                            className="flex flex-col md:flex-row gap-6 md:gap-20 w-full"
                                        >
                                            <div className="flex flex-row md:flex-col items-center justify-center w-full md:w-1/5 gap-4">
                                                <div className="bg-white rounded-full">
                                                    <Icon icon="gg:profile" className="text-secondary text-4xl md:text-8xl" />
                                                </div>
                                                <h5 className="text-white text-center font-medium">{testimonial.name}</h5>
                                            </div>
                                            <GlassContainer className="p-6 md:p-12 gap-2 md:gap-4">
                                                <Icon icon="fa-solid:quote-left" className="absolute text-secondary text-3xl md:text-6xl -top-3 md:-top-6 -left-3 md:-left-6" />
                                                <Icon icon="fa-solid:quote-right" className="absolute text-secondary text-3xl md:text-6xl -bottom-3 md:-bottom-6 -right-3 md:-right-6" />
                                                <div className="flex flex-col gap-1 md:gap-2 justify-center h-full">
                                                    <RichTextRenderer content={testimonial.parts} className="text-sm sm:text-md md:text-lg lg:text-xl" />
                                                </div>
                                            </GlassContainer>
                                        </motion.div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>

                        <div className="z-10 flex justify-center items-center gap-10">
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