import { cn } from "@/lib/utils";
import { Fragment } from "react/jsx-runtime";
import { ClassNameValue } from "tailwind-merge";

export type RichTextSpan = {
    text: string
    underline?: boolean
    bold?: boolean
    italic?: boolean
}
export type RichText = RichTextSpan[]

interface RichTextRendererProps {
    content: RichText,
    className?: ClassNameValue
}

export default function RichTextRenderer({
    content,
    className
}: RichTextRendererProps) {
    return (
        <>
            {content.map((span, i) => (
                <Fragment key={i}>
                    <span
                        className={cn(
                            span.underline && "underline",
                            span.bold && "font-bold",
                            span.italic && "italic",
                            className
                        )}
                    >
                        {span.text}
                    </span>
                    <span>{" "}</span>
                </Fragment>
            ))}
        </>
    )
}