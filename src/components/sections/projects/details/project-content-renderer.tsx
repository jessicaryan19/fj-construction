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
                <div className="self-end w-full md:w-2/3 text-white bg-primary p-10 md:p-16 lg:p-20 rounded-3xl text-center md:text-right leading-tight">
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
        <div className="flex gap-5 md:gap-10" >
            <div className="flex flex-col w-1/2 md:w-2/3 gap-5 md:gap-10">
                <div className="relative aspect-video" >
                    <ImageRoundedCard source={`/projects/${project.id}/${content.images[0]}`} />
                </div >
                <div className="relative aspect-video" >
                    <ImageRoundedCard source={`/projects/${project.id}/${content.images[1]}`} />
                </div >
            </div>
            <div className="relative flex-1 md:pt-40 md:pb-20 md:aspect-9/16">
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
    const rendererStyle = content.type === "image-text-right" ? "text-left md:text-right" : "";

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
        <div className="relative w-full flex justify-center py-6 sm:py-10 lg:py-14">
            {/* Sparkle icons with animations */}
            <SparkleIcon
                className="absolute right-2 sm:right-16 lg:right-32 top-2 sm:top-8 text-secondary animate-sparkle-float w-8 h-8 sm:w-16 sm:h-16 lg:w-[120px] lg:h-[120px]"
            />
            <SparkleIcon
                className="absolute left-2 sm:left-16 lg:left-32 bottom-2 sm:bottom-8 text-secondary animate-sparkle-pulse w-8 h-8 sm:w-16 sm:h-16 lg:w-[120px] lg:h-[120px]"
            />

            <div className="relative w-full px-2 sm:px-8">
                {/* SVG container with proper aspect ratio */}
                <svg
                    viewBox="0 0 946 450"
                    className="w-full h-auto"
                    preserveAspectRatio="xMidYMid meet"
                    aria-hidden="true"
                >
                    {/* Main filled ellipse */}
                    <ellipse
                        cx="473"
                        cy="225"
                        rx="460"
                        ry="200"
                        fill="#334B2C"
                    />
                    {/* Decorative stroke ellipse */}
                    <ellipse
                        cx="473"
                        cy="225"
                        rx="440"
                        ry="160"
                        fill="none"
                        stroke="#9EB4AB"
                        strokeWidth="3"
                        transform="rotate(-12 473 225)"
                    />
                </svg>

                <div className="absolute inset-0 flex items-center justify-center px-8 sm:px-16 lg:px-24 py-4">
                    <div className="text-white text-center max-w-[80%] sm:max-w-[70%] lg:max-w-[60%]">
                        <div className="text-sm xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-relaxed font-medium">
                            <RichTextRenderer content={content.text} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}