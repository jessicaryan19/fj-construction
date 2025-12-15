"use client"
import Image from "next/image"
import Line from "../../ui/line"
import ProjectSlideshow from "../projects/project-slideshow"

export default function OurProjectsHighlight() {
    return (
        <div className="flex flex-col gap-20 w-full items-center">
            <div className="flex gap-4 items-center container">
                <Image src="/star.svg" alt="Star" width={40} height={40} />
                <h1 className="text-primary">Our Projects</h1>
                <Line />
            </div>
            <ProjectSlideshow />
        </div>
    )
}
