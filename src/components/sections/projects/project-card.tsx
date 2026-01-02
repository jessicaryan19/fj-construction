import { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
    project: Project
}

export default function ProjectCard({
    project
}: ProjectCardProps) {
    return (
        <Link href={`/projects/${project.id}`} className="group flex flex-col gap-3 sm:gap-4 cursor-pointer">
            <div className="relative aspect-video w-full rounded-2xl sm:rounded-3xl overflow-hidden">
                <Image
                    src={`/projects/${project.id}/slideshow-secondary.png`}
                    alt=""
                    fill
                    className="group-hover:scale-105 transition-all duration-500"
                    style={{ objectFit: "cover" }}
                    priority
                />
                <div className="absolute inset-0 bg-transparent group-hover:bg-black/30 transition-colors duration-500" />
                <div className="absolute bottom-0 bg-primary/70 p-3 m-3 sm:p-4 sm:m-4 lg:p-5 lg:m-5 rounded-2xl sm:rounded-3xl">
                    <h6 className="uppercase text-white">{project.name}</h6>
                </div>
                <div className={cn(
                    "absolute bottom-0 right-0 bg-white rounded-full rounded-b-none",
                    "w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28",
                    "after:content-[''] after:absolute after:right-full after:bottom-0",
                    "after:w-12 after:h-12 sm:after:w-14 sm:after:h-14 lg:after:w-16 lg:after:h-16",
                    "after:bg-transparent after:rounded-br-2xl sm:after:rounded-br-3xl after:shadow-[10px_10px_0_0_#fff] sm:after:shadow-[12px_12px_0_0_#fff] lg:after:shadow-[14px_14px_0_0_#fff]",
                    "before:content-[''] before:absolute before:right-0 before:bottom-full",
                    "before:w-20 before:h-20 sm:before:w-24 sm:before:h-24 lg:before:w-28 lg:before:h-28",
                    "before:bg-transparent before:rounded-br-2xl sm:before:rounded-br-3xl before:shadow-[45px_45px_0_0_#fff] sm:before:shadow-[52px_52px_0_0_#fff] lg:before:shadow-[60px_60px_0_0_#fff]"
                )}
                />
                <div className={cn(
                    "absolute bottom-0 right-0 bg-primary text-white",
                    "text-4xl sm:text-5xl lg:text-6xl",
                    "w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24",
                    "flex items-center justify-center rounded-full"
                )}
                >
                    <Icon icon="weui:arrow-filled" />
                </div>
            </div>
            <h6 className="font-medium text-primary">
                {project.shortDesc}
            </h6>
        </Link>
    )
}