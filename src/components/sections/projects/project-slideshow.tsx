"use client"

import Image from "next/image"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { projectsData } from "@/data/projects"
import ArrowButton from "@/components/buttons/arrow-button"
import { Button } from "@/components/ui/button"
import SlidingButton from "@/components/buttons/sliding-button"
import { useRouter } from "next/navigation"

const slideVariants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 80 : -80,
        opacity: 0,
    }),
    center: {
        x: 0,
        opacity: 1,
    },
    exit: (direction: number) => ({
        x: direction > 0 ? -80 : 80,
        opacity: 0,
    }),
}

interface ProjectSlideshowProps {
    startIndex?: number
}
export default function ProjectSlideshow({
    startIndex = 0
}: ProjectSlideshowProps) {
    const router = useRouter()
    const total = projectsData.length;
    const safeStartIndex = total === 0 ? 0 : ((startIndex % total) + total) % total;

    const [[index, direction], setIndex] = useState<[number, number]>([safeStartIndex, 0]);
    const paginate = (newDirection: number) => {
        setIndex(([prevIndex]) => [
            (prevIndex + newDirection + total) % total,
            newDirection,
        ])
    }

    const project = projectsData[index]

    return (
        <div className="flex flex-col gap-5 w-full items-center">
            <div className="w-full h-full flex overflow-hidden">
                <div className="relative bg-primary w-2/3 overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <Image
                            src="/texture.jpg"
                            alt="Texture background"
                            className="object-cover object-center"
                            fill
                            priority
                        />
                        <div className="absolute inset-0 bg-primary mix-blend-lighten" />
                    </div>

                    <div className="relative flex flex-col gap-10 w-full pe-12">
                        <div className="flex w-full justify-between items-center gap-6 py-6 ps-24 z-10">
                            <div className="flex gap-4">
                                <ArrowButton onClick={() => paginate(-1)} />
                                <ArrowButton direction="right" onClick={() => paginate(1)} />
                            </div>
                            <div className="flex gap-4">
                                <Button size="custom" onClick={() => router.push(`/projects/${project.id}`)}>
                                    Learn Details
                                </Button>
                                <SlidingButton
                                    text="View All Projects"
                                    type="inverted"
                                    href="/projects"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <AnimatePresence mode="wait" custom={direction}>
                                <motion.div
                                    key={project.name}
                                    custom={direction}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                    className="text-right"
                                >
                                    <h1 className="text-secondary/60 font-medium">
                                        {project.location}
                                    </h1>
                                    <div className="text-7xl text-secondary uppercase">
                                        {project.name}
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            <div className="relative min-h-128 rounded-tr-3xl overflow-hidden z-10">
                                <AnimatePresence mode="wait" custom={direction}>
                                    <motion.div
                                        key={project.id}
                                        custom={direction}
                                        variants={slideVariants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                        className="absolute inset-0"
                                    >
                                        <Image
                                            src={`/projects/${project.id}/slideshow-secondary.png`}
                                            alt={project.name}
                                            fill
                                            priority
                                            className="object-cover object-bottom"
                                        />
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-1 relative overflow-hidden">
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={project.id}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={`/projects/${project.id}/slideshow-main.png`}
                                alt={project.name}
                                fill
                                priority
                                className="object-cover object-center"
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            <div className="flex gap-2 justify-center">
                {projectsData.map((_, idx) => (
                    <span key={idx}
                        className={`w-3 h-3 rounded-full transition-colors ${idx === index ? "bg-primary" : "bg-primary/30"
                            }`}
                    />
                ))}
            </div>
        </div>
    )
}
