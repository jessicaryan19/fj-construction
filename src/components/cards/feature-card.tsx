import { Card, CardContent } from "../ui/card";
import { Icon } from "@iconify/react";

interface FeatureCardProps {
    icon: string;
    title: string;
    description?: string;
    orientation?: "horizontal" | "vertical";
}
export default function FeatureCard({ icon, title, description, orientation = "horizontal" }: FeatureCardProps) {
    const borderStyle = {
        horizontal: "border-l-8 border-l-secondary rounded-3xl h-full",
        vertical: "border-t-8 border-t-secondary rounded-3xl justify-center h-full"
    }[orientation];

    const cardContentStyle = {
        horizontal: "flex flex-col gap-4",
        vertical: "flex flex-col items-center gap-4"
    }[orientation];

    const textStyle = {
        horizontal: "text-primary text-left",
        vertical: "text-primary text-center"
    }[orientation];

    return (
        <Card className={borderStyle}>
            <CardContent className={cardContentStyle}>
                <Icon icon={icon} className="text-primary text-4xl" />
                <div className={textStyle}>
                    <h6>{title}</h6>
                    <p>{description}</p>
                </div>
            </CardContent>
        </Card>
    )
}