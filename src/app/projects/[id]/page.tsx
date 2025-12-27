import ProjectContentRenderer from "@/components/sections/projects/details/project-content-renderer"
import ProjectHero from "@/components/sections/projects/project-hero"
import ProjectSlideshow from "@/components/sections/projects/project-slideshow"
import { projectsData } from "@/data/projects"
import { notFound } from "next/navigation"

interface ProjectDetailsProps {
    params: Promise<{ id: string }>
}

export default async function ProjectDetails({
    params
}: ProjectDetailsProps) {
    const { id } = await params
    const index = projectsData.findIndex((data) => data.id === id)
    const project = projectsData[index]

    if (!project) {
        notFound()
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="min-h-screen w-full flex flex-col gap-20 pb-10 items-center bg-white dark:bg-black">
                <ProjectHero project={project} />

                <div className="container flex flex-col text-5xl gap-10">
                    {project.content.map((content, index) => (
                        <ProjectContentRenderer key={index} project={project} content={content} />
                    ))}
                </div>

                <div className="flex flex-col gap-20 w-full items-center">
                    <h1 className="text-primary">Unlock More of Our Projects</h1>
                    <ProjectSlideshow startIndex={index + 1} />
                </div>
            </main>
        </div>
    )
}