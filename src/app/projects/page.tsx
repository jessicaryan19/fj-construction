import ProjectCard from "@/components/sections/projects/project-card";
import ProjectClosing from "@/components/sections/projects/project-closing";
import { projectsData } from "@/data/projects";
import Image from "next/image";

export default function Projects() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="min-h-screen w-full flex flex-col gap-20 pt-40 pb-10 items-center bg-white dark:bg-black">
                <div className="flex gap-4 items-center container">
                    <Image src="/star.svg" alt="Star" width={40} height={40} />
                    <h1 className="text-primary">Our Proud Projects</h1>
                </div>

                <div className="container grid grid-cols-2 gap-16">
                    {projectsData.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                <ProjectClosing />
            </main>
        </div>
    )
}