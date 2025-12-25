import { Project } from "@/data/projects";
import { Icon } from "@iconify/react";
import Image from "next/image";

interface ProjectCardProps {
    project: Project
}
export default function ProjectCard({
    project
}: ProjectCardProps) {
    return (
        <div className="group flex flex-col gap-4 cursor-pointer">
            <div className="relative aspect-video w-full rounded-3xl overflow-hidden">
                <Image
                    src={`/projects/${project.id}/slideshow-secondary.png`}
                    alt=""
                    fill
                    className="group-hover:scale-105 transition-all duration-500"
                    style={{ objectFit: "cover" }}
                    priority
                />
                <div className="absolute bottom-0 bg-primary/70 p-5 m-5 rounded-3xl">
                    <h2 className="uppercase text-white">{project.name}</h2>
                </div>
                <div className="absolute bottom-0 right-0 w-28 h-28 bg-white rounded-full rounded-b-none
                    group-hover:w-32 group-hover:h-32
                    transition-all duration-500
                    after:content-[''] after:absolute after:right-full after:bottom-0 after:w-16
                    after:h-16 after:bg-transparent after:rounded-br-3xl after:shadow-[14px_14px_0_0_#fff]
                    before:content-[''] before:absolute before:right-0 before:bottom-full before:w-28
                    before:h-28 before:bg-transparent before:rounded-br-3xl before:shadow-[60px_60px_0_0_#fff]"
                />
                <div className="absolute bottom-0 right-0 bg-primary text-white text-6xl w-24 h-24 group-hover:text-7xl group-hover:h-28 group-hover:w-28 flex items-center justify-center rounded-full
                    transform-all duration-700"
                >
                    <Icon icon="weui:arrow-filled" />
                </div>
            </div>
            <h3 className="font-medium text-primary">
                {project.shortDesc}
            </h3>
        </div>
    )
}