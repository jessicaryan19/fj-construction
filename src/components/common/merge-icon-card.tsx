import { Icon } from "@iconify/react";
import { Card, CardContent } from "../ui/card";

interface MergeIconCardProps {
    icon: string;
    title: string;
    description: string;
}

export default function MergeIconCard({ icon, title, description }: MergeIconCardProps) {
    return (
        <Card className="bg-primary rounded-3xl relative h-64 overflow-hidden">


            <CardContent
                className="absolute bottom-0"
            >
                <Icon icon={icon} className=""/>
                <div className="bg-white rounded-t-3xl flex flex-col gap-4 text-center text-primary py-6 w-full">
                    <h3 className="font-medium">{title}</h3>
                    <p className="px-10">{description}</p>
                </div>

            </CardContent>
        </Card>
    );
}
