import VerticalFadeIn from "@/components/animations/vertical-fade-in";
import SlidingButton from "@/components/buttons/sliding-button";
import GlassCard from "@/components/cards/glass-card";
import ImageBackground from "@/components/layout/image-background";
import { Project } from "@/data/projects";

interface ProjectHeroProps {
    project: Project
}
export default function ProjectHero({
    project
}: ProjectHeroProps) {
    const projectData = [
        { icon: "mdi:location", title: project.location },
        { icon: "material-symbols:bed", title: `${project.bedrooms} bedrooms` },
        { icon: "streamline:triangle-arrow-expand-remix", description: "Land Size", title: `${project.landSize} m2` },
        { icon: "mingcute:building-6-fill", description: "Building Size", title: `${project.buildingSize} m2` },
        { icon: "line-md:calendar", description: "Finished in", title: `${project.finishedIn}` }
    ]

    return (
        <ImageBackground image={`/projects/${project.id}/${project.landingCover}`} opacity={30}>
            <div className="flex flex-col items-center justify-end h-screen pb-20 pt-64">
                <div className="container flex flex-col flex-1 justify-between">
                    <VerticalFadeIn>
                        <SlidingButton text="Back" href="/projects" direction="left" initialWidth="65%" />
                    </VerticalFadeIn>
                    <div className="flex flex-col gap-10">
                        <VerticalFadeIn>
                            <h1 className="text-8xl text-white uppercase">{project.name}</h1>
                        </VerticalFadeIn>
                        <div className="w-full grid grid-cols-5 gap-8">
                            {projectData.map((item) => (
                                <GlassCard key={item.title} icon={item.icon} title={item.title} description={item.description} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </ImageBackground>
    )
}