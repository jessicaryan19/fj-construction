import ImageRoundedCard from "@/components/cards/image-rounded-card";
import RichTextRenderer from "@/components/ui/rich-text";
import { Project, ProjectContentBlock } from "@/data/projects";

interface ProjectContentRendererProps {
    project: Project
    content: ProjectContentBlock
}

export default function ProjectContentRenderer({
    project,
    content,
}: ProjectContentRendererProps) {
    if (content.type === "two-image-one-desc") {
        return <TwoImageOneDesc project={project} content={content} />
    } else if (content.type === "image-text-left") {
        return <ImageTextContent project={project} content={content} />
    } else if (content.type === "image-text-right") {
        return <ImageTextContent project={project} content={content} />
    } else if (content.type === "two-image") {
        return <TwoImage project={project} content={content} />
    } else if (content.type === "one-image") {
        return <OneImage project={project} content={content} />
    } else if (content.type === "text") {
        return <TextContent project={project} content={content} />
    }
    return <TextContent project={project} content={content} />
}

function TwoImageOneDesc({
    project,
    content,
}: ProjectContentRendererProps) {
    return (
        <div className="flex gap-10">
            <div className="flex flex-col w-2/3 gap-10 aspect-video pb-20">
                <ImageRoundedCard source={`/projects/${project.id}/${content.images?.[0]}`} />
                <div className="self-end w-2/3 text-white bg-primary p-20 rounded-3xl text-right leading-tight">
                    <RichTextRenderer content={content.text} />
                </div>
            </div>
            <div className="flex-1 pt-40 aspect-9/16">
                <ImageRoundedCard orientation="vertical" source={`/projects/${project.id}/${content.images?.[1]}`} />
            </div>
        </div>
    )
}

function TextContent({
    content,
}: ProjectContentRendererProps) {
    const colorStyle = content.type === "text" ? "text-primary" : "bg-primary text-white"
    return (
        <div className={`rounded-3xl py-12 px-32 text-center leading-tight ${colorStyle}`}>
            <RichTextRenderer content={content.text} />
        </div>
    )
}

function OneImage({
    project,
    content,
}: ProjectContentRendererProps) {
    return (
        < div className="relative rounded-3xl overflow-hidden aspect-16/6" >
            <ImageRoundedCard
                source={`/projects/${project.id}/${content.images}`}
            />
        </div >
    )
}

function TwoImage({
    project,
    content,
}: ProjectContentRendererProps) {
    return (
        < div className="grid grid-cols-[3fr_2fr] gap-10" >
            < div className="relative rounded-3xl overflow-hidden aspect-video" >
                <ImageRoundedCard
                    source={`/projects/${project.id}/${content.images[0]}`}
                />
            </div >

            < div className="relative rounded-3xl overflow-hidden" >
                <ImageRoundedCard
                    source={`/projects/${project.id}/${content.images[1]}`}
                />
            </div >
        </div >
    )
}

function ImageTextContent({
    project,
    content,
}: ProjectContentRendererProps) {
    const orientation = content.type === "image-text-right" ? "flex-row-reverse" : "";
    const rendererStyle = content.type === "image-text-right" ? "text-right" : "";

    return (
        <div className={`flex items-center gap-10 ${orientation}`}>
            <div className="w-1/2 aspect-video">
                <ImageRoundedCard source={`/projects/${project.id}/${content.images}`} />
            </div>
            <div className={`flex-1 text-primary leading-tight p-4 ${rendererStyle}`}>
                <RichTextRenderer content={content.text} />
            </div>
        </div>
    )
}