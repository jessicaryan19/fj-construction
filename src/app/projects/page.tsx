import VerticalFadeIn from "@/components/animations/vertical-fade-in";
import FlowerIcon from "@/components/icons/flower-icon";
import ProjectCard from "@/components/sections/projects/project-card";
import ProjectClosing from "@/components/sections/projects/project-closing";
import { projectsData } from "@/data/projects";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Projects",
    description:
        "Browse FJ Constructions' portfolio of completed villa and construction projects in Bali. See our luxury villas, residential developments, and commercial builds showcasing quality craftsmanship.",
    openGraph: {
        title: "Our Projects | FJ Constructions",
        description:
            "Browse FJ Constructions' portfolio of completed villa and construction projects in Bali.",
    },
};

export default function Projects() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="min-h-screen w-full flex flex-col gap-10 lg:gap-20 pt-40 pb-10 items-center bg-white dark:bg-black">
                <VerticalFadeIn className="flex gap-4 items-center container px-4">
                    <FlowerIcon />
                    <h4 className="text-primary">Our Proud Projects</h4>
                </VerticalFadeIn>

                <div className="container grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 lg:gap-16 px-4">
                    {projectsData.map((project, index) => (
                        <VerticalFadeIn key={project.id} delay={index * 0.1} >
                            <ProjectCard project={project} />
                        </VerticalFadeIn>
                    ))}
                </div>

                <ProjectClosing />
            </main>
        </div>
    )
}