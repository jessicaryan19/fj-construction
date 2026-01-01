"use client"

import Line from "../../ui/line"
import ProjectSlideshow from "../projects/project-slideshow"
import VerticalFadeIn from "@/components/animations/vertical-fade-in"
import FlowerIcon from "@/components/icons/flower-icon"

export default function OurProjectsHighlight() {
    return (
        <VerticalFadeIn>
            <div className="flex flex-col gap-20 w-full items-center">
                <div className="flex flex-row gap-2 md:gap-4 items-center container mx-auto px-4">
                    <div className="flex gap-4 items-center">
                        <FlowerIcon />
                        <h4 className="text-primary whitespace-nowrap">Our Projects</h4>
                    </div>
                    <Line />
                </div>
                <div className="w-full">
                    <ProjectSlideshow />
                </div>
            </div>
        </VerticalFadeIn>
    )
}