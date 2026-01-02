"use client"
import { Icon } from "@iconify/react";
import { Button } from "../ui/button";

interface ArrowButtonProps {
    direction?: 'left' | 'right' | 'up' | 'down';
    onClick: () => void;
}
export default function ArrowButton({
    direction = 'left',
    onClick
}: ArrowButtonProps) {
    return (
        <Button className="p-4 md:p-4" onClick={onClick}>
            <Icon icon={`ep:arrow-${direction}-bold`} />
        </Button>
    )
}