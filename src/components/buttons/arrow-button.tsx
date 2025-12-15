"use client"
import { Icon } from "@iconify/react";

interface ArrowButtonProps {
    direction?: 'left' | 'right' | 'up' | 'down';
    onClick: () => void;
}
export default function ArrowButton({
    direction = 'left',
    onClick
}: ArrowButtonProps) {
    return (
        <Icon
            icon={`iconamoon:arrow-${direction}-6-circle-light`}
            className="text-4xl hover:scale-110 text-white hover:text-white/80 transition-all duration-300 z-10 cursor-pointer"
            onClick={onClick}
        />
    )
}