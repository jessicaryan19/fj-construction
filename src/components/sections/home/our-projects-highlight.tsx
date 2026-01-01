"use client"

import Line from "../../ui/line"
import ProjectSlideshow from "../projects/project-slideshow"
import VerticalFadeIn from "@/components/animations/vertical-fade-in"
import FlowerIcon from "@/components/icons/flower-icon"

export default function OurProjectsHighlight() {
    return (
        <VerticalFadeIn>
            <div className="flex flex-col gap-20 w-full items-center">
                <div className="flex gap-4 items-center container">
                    <FlowerIcon/>
                    <h4 className="text-primary">Our Projects</h4>
                    <Line />
                </div>
                <ProjectSlideshow />
            </div>
        </VerticalFadeIn>
    )
}
