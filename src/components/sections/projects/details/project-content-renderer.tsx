import VerticalFadeIn from "@/components/animations/vertical-fade-in";
import ImageRoundedCard from "@/components/cards/image-rounded-card";
import SparkleIcon from "@/components/icons/sparkle-icon";
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
        <div className="flex flex-col md:flex-row gap-5 md:gap-10">
            <div className="flex flex-col w-full md:w-2/3 gap-5 md:gap-10 md:pb-20">
                <div className="aspect-video">
                    <ImageRoundedCard source={`/projects/${project.id}/${content.images?.[0]}`} />
                </div>
                <div className="self-end w-full md:w-2/3 text-white bg-primary p-10 md:p-16 lg:p-20 rounded-3xl text-right leading-tight">
                    <RichTextRenderer content={content.text} />
                </div>
            </div>
            <div className="flex-1 md:pt-40 aspect-video md:aspect-9/16">
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
        <div className={`rounded-3xl py-6 md:py-12 px-12 md:px-24 text-center leading-tight ${colorStyle}`}>
            <RichTextRenderer content={content.text} />
        </div>
    )
}

function OneImage({
    project,
    content,
}: ProjectContentRendererProps) {
    return (
        <div className={`relative rounded-3xl overflow-hidden aspect-video md:aspect-16/6 ${content.className}`} >
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
        <div className={`grid gap-5 grid-cols-1 md:gap-10 ${isFlipped ? 'md:grid-cols-[2fr_3fr]' : 'md:grid-cols-[3fr_2fr]'}`}>
            <div className="relative aspect-video md:aspect-auto md:min-h-[400px]">
                <ImageRoundedCard
                    source={`/projects/${project.id}/${content.images[0]}`}
                />
            </div>
            <div className="relative aspect-video md:aspect-auto md:min-h-[400px]">
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
    const orientation = content.type === "image-text-right" ? "md:flex-row-reverse" : "md:flex-row";
    const rendererStyle = content.type === "image-text-right" ? "text-right" : "";

    return (
        <div className={`flex items-center gap-5 md:gap-10 flex-col ${orientation}`}>
            <div className="w-full md:w-1/2 aspect-video">
                <ImageRoundedCard source={`/projects/${project.id}/${content.images}`} />
            </div>
            <div className={`flex-1 text-primary leading-tight md:p-4 ${rendererStyle}`}>
                <RichTextRenderer content={content.text} />
            </div>
        </div>
    )
}

function CircleText({ content }: ProjectContentRendererProps) {
    return (
        <div className="relative w-full flex justify-center py-8 sm:py-12 lg:py-16">
            <SparkleIcon className="hidden xl:block absolute right-32 top-8 text-secondary" width={120} height={120} />
            <SparkleIcon className="hidden xl:block absolute left-32 bottom-8 text-secondary" width={120} height={120} />

            <div className="relative w-full max-w-6xl px-4 sm:px-8 lg:px-16">
                <div className="relative">
                    <svg
                        viewBox="0 0 946 450"
                        className="hidden lg:block absolute inset-0 w-full h-full"
                        preserveAspectRatio="xMidYMid meet"
                        aria-hidden
                    >
                        <ellipse
                            cx="473"
                            cy="225"
                            rx="460"
                            ry="220"
                            fill="#334B2C"
                        />
                        <ellipse
                            cx="473"
                            cy="225"
                            rx="460"
                            ry="180"
                            fill="none"
                            stroke="#9EB4AB"
                            strokeWidth="3"
                            transform="rotate(-12 473 225)"
                        />
                    </svg>

                    <div className="relative flex justify-center text-center py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24">
                        <div className="text-white max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl xl:max-w-3xl break-words">
                            <RichTextRenderer content={content.text} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}