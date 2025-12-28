import VerticalFadeIn from "@/components/animations/vertical-fade-in";
import ImageRoundedCard from "@/components/cards/image-rounded-card";
import SparkleIcon from "@/components/icons/sparkle-icon";
import RichTextRenderer from "@/components/ui/rich-text";
import { Project, ProjectContentBlock } from "@/data/projects";
import Image from "next/image";

interface ProjectContentRendererProps {
    project: Project
    content: ProjectContentBlock
}

export default function ProjectContentRenderer({
    project,
    content,
}: ProjectContentRendererProps) {

    let children = <TextContent project={project} content={content} />
    if (content.type === "two-image-one-desc") {
        children = <TwoImageOneDesc project={project} content={content} />
    } else if (content.type === "image-text-left" || content.type === "image-text-right") {
        children = <ImageTextContent project={project} content={content} />
    } else if (content.type === "one-image") {
        children = <OneImage project={project} content={content} />
    } else if (content.type === "two-image" || content.type === "two-image-flip") {
        children = <TwoImage project={project} content={content} />
    } else if (content.type === "three-image") {
        children = <ThreeImage project={project} content={content} />
    } else if (content.type === "circle-text") {
        children = <CircleText project={project} content={content} />
    }

    return (
        <VerticalFadeIn>
            {children}
        </VerticalFadeIn>
    )
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
        <div className={`rounded-3xl py-12 px-24 text-center leading-tight ${colorStyle}`}>
            <RichTextRenderer content={content.text} />
        </div>
    )
}

function OneImage({
    project,
    content,
}: ProjectContentRendererProps) {
    return (
        <div className={`relative rounded-3xl overflow-hidden aspect-16/6 ${content.className}`} >
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
    const isFlipped = content.type === 'two-image-flip';

    return (
        <div className={`grid gap-10 ${isFlipped ? 'grid-cols-[2fr_3fr]' : 'grid-cols-[3fr_2fr]'}`}>
            <div className="relative min-h-[400px]">
                <ImageRoundedCard
                    source={`/projects/${project.id}/${content.images[0]}`}
                />
            </div>
            <div className="relative min-h-[400px]">
                <ImageRoundedCard
                    source={`/projects/${project.id}/${content.images[1]}`}
                />
            </div>
        </div>
    )
}

function ThreeImage({
    project,
    content,
}: ProjectContentRendererProps) {
    return (
        <div className="flex gap-10" >
            <div className="flex flex-col w-2/3 gap-10">
                <div className="relative aspect-video" >
                    <ImageRoundedCard source={`/projects/${project.id}/${content.images[0]}`} />
                </div >
                <div className="relative aspect-video" >
                    <ImageRoundedCard source={`/projects/${project.id}/${content.images[1]}`} />
                </div >
            </div>
            <div className="relative flex-1 pt-40 pb-20 aspect-9/16">
                <ImageRoundedCard
                    source={`/projects/${project.id}/${content.images[2]}`}
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

function CircleText({
    content,
}: ProjectContentRendererProps) {
    return (
        <div className="relative w-full">
            <SparkleIcon className="absolute right-32 text-secondary" width={120} height={120} />
            <SparkleIcon className="absolute left-32 bottom-0 text-secondary" width={120} height={120} />
            <svg
                viewBox="0 0 946 400"
                className="w-full h-full"
                aria-hidden
            >
                <ellipse
                    cx="473"
                    cy="200"
                    rx="460"
                    ry="200"
                    fill="#334B2C"
                />
                <ellipse
                    cx="473"
                    cy="200"
                    rx="460"
                    ry="160"
                    fill="none"
                    stroke="#9EB4AB"
                    strokeWidth="3"
                    transform="rotate(-12 473 200)"
                />
            </svg>

            <div className="absolute inset-0 flex items-center justify-center px-54 text-center">
                <div className="text-white leading-tight">
                    <RichTextRenderer content={content.text} />
                </div>
            </div>
        </div>
    )
}
