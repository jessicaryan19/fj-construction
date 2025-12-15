"use client";
import Image from "next/image";
import Line from "../ui/line";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "../ui/carousel";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";

export default function WhatTheySay() {
    const testimonials = [{
        name: "Mr. Ethan Hayes",
        parts: [{ bold: "Working with FJ Constructions was an absolute pleasure." },
            "Their transparency in costings and timelines, coupled with their consistent weekly updates, made the entire process stress-free. The quality of workmanship and the attention to detail in our villa far surpassed what we envisioned. For anyone planning a construction project in Bali, FJ Constructions is the team you want."]
    }, {
        name: "Ms. Nissa",
        parts: [
            "We needed a contractor with commercial expertise who could handle a large-scale project while adhering strictly to international quality standards.",
            { bold: "FJ Constructions exceeded our expectations." },
            "Their detailed project management system and transparent financial reporting were outstanding. They were professional, efficient, and delivered the project on time. Highly recommended for any large-scale development in Bali."]
    }, {
        name: "Mr. Eriberto Cordioli",
        parts: [
            "I entrusted FJ Constructions to build my private villa in the Umalas area. Their team was highly skilled at tackling the challenges of the design and ensured flawless structural integrity. The process was professional; I received clear progress reports, and most importantly, they completed the project on time and within the strict budget I set.",
            { bold: "Highly reliable and recommended." },
        ]
    }, {
        name: "Ms. Maya Santoso",
        parts: [
            { bold: "Working with FJ Constructions was one of the best decisions we made for our villa project in Canggu." },
            "The team was transparent, organized, and guided us through every step—from budgeting to final finishing. What stood out most was their responsiveness and ability to solve problems quickly on-site. Our villa turned out exactly as envisioned, delivered on time and with excellent workmanship."]
    }, {
        name: "Mr. Jonathan Lee",
        parts: [
            { bold: "FJ Constructions exceeded our expectations." },
            "Their attention to detail and commitment to quality made the entire build process smooth and stress-free. We appreciated how professionally they coordinated with our architect and suppliers. The result is a villa that not only looks beautiful but is also structurally solid and thoughtfully executed.",
            { bold: "Highly recommended for anyone building in Bali." }
        ]
    }]

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
        <div className="container flex flex-col gap-20">
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
                            {testimonials.map((testimonial) => (
                                <CarouselItem key={testimonial.name} className="flex gap-20 px-20 py-10 items-center">
                                    <div className="flex flex-col items-center justify-center w-1/5 gap-4">
                                        <div className="bg-white rounded-full">
                                            <Icon icon="gg:profile" className="text-secondary text-8xl" />
                                        </div>
                                        <h2 className="text-white text-center font-medium">{testimonial.name}</h2>
                                    </div>

                                    <div className="relative bg-linear-to-r from-white/10 via-white/30 to-white/10 backdrop-blur-xl rounded-3xl p-12 text-white border flex flex-1 flex-col gap-4 h-full">
                                        <Icon icon="fa-solid:quote-left" className="absolute text-secondary text-6xl -top-6 -left-6" />
                                        <Icon icon="fa-solid:quote-right" className="absolute text-secondary text-6xl -bottom-6 -right-6" />
                                        <div className="flex flex-col gap-2 justify-center h-full">
                                            {testimonial.parts.map((part, i) =>
                                                typeof part === "string" ? <span className="text-xl" key={i}>{part}</span> : <h3 key={i}>{part.bold}</h3>
                                            )}
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>

                    <div className="flex justify-center items-center gap-10">
                        <Icon
                            icon="iconamoon:arrow-left-6-circle-light"
                            className="text-4xl text-white z-10"
                            onClick={() => api?.scrollPrev()}
                        />
                        <div className="flex gap-2 justify-center">
                            {testimonials.map((_, idx) => (
                                <span key={idx}
                                    className={`w-3 h-3 rounded-full transition-colors ${idx === current ? "bg-white" : "bg-white/30"
                                        }`}
                                />
                            ))}
                        </div>
                        <Icon
                            icon="iconamoon:arrow-right-6-circle-light"
                            className="text-4xl text-white z-10"
                            onClick={() => api?.scrollNext()}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}