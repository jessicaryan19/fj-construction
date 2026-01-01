import { Icon } from "@iconify/react";
import { Card, CardContent } from "../ui/card";

interface MergeIconCardProps {
    icon: string;
    title: string;
    description: string;
}

export default function MergeIconCard({ icon, title, description }: MergeIconCardProps) {
    return (
        <Card className="bg-primary rounded-3xl relative h-72 overflow-hidden">
            <CardContent className="absolute bottom-0 p-0 flex flex-col gap-0 items-center w-full">
                <Icon icon={icon} className="text-6xl text-white translate-y-3"/>
                <div className="bg-white rounded-t-3xl flex flex-col gap-4 text-center text-primary py-12 w-full">
                    <h6>{title}</h6>
                    <p className="px-10">{description}</p>
                </div>
            </CardContent>
        </Card>
    );
}
