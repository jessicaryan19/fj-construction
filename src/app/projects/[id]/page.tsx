import VerticalFadeIn from "@/components/animations/vertical-fade-in"
import ProjectContentRenderer from "@/components/sections/projects/details/project-content-renderer"
import ProjectHero from "@/components/sections/projects/project-hero"
import ProjectSlideshow from "@/components/sections/projects/project-slideshow"
import { projectsData } from "@/data/projects"
import { Metadata } from "next"
import { notFound } from "next/navigation"

interface ProjectDetailsProps {
    params: Promise<{ id: string }>
}

export async function generateMetadata({
    params,
}: ProjectDetailsProps): Promise<Metadata> {
    const { id } = await params
    const project = projectsData.find((data) => data.id === id)

    if (!project) {
        return {
            title: "Project Not Found",
        }
    }

    return {
        title: `${project.name} - ${project.location}`,
        description: project.shortDesc,
        openGraph: {
            title: `${project.name} - ${project.location} | FJ Constructions`,
            description: project.shortDesc,
            images: [`/projects/${project.id}/${project.landingCover}`],
        },
    }
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

                <div className="container flex flex-col text-lg sm:text-2xl md:text-4xl lg:text-5xl gap-5 md:gap-10 px-4">
                    {project.content.map((content, index) => (
                        <ProjectContentRenderer key={index} project={project} content={content} />
                    ))}
                </div>

                <VerticalFadeIn className="flex flex-col gap-20 w-full items-center">
                    <h4 className="text-primary">Unlock More of Our Projects</h4>
                    <ProjectSlideshow startIndex={index + 1} />
                </VerticalFadeIn>
            </main>
        </div>
    )
}