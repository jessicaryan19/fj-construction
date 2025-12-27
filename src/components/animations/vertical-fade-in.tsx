"use client"

import { cn } from "@/lib/utils";
import { useInView, motion, AnimatePresence } from "framer-motion";
import { ReactNode, useRef } from "react";
import { ClassNameValue } from "tailwind-merge";

interface VerticalFadeInProps {
    children: ReactNode;
    delay?: number;
    className?: ClassNameValue;
}
export default function VerticalFadeIn({
    children,
    delay = 0,
    className
}: VerticalFadeInProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.25 });

    return (
        <AnimatePresence>
            <motion.div
                className={cn("w-full", className)}
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                    opacity: isInView ? 1 : 0,
                    y: isInView ? 0 : 20
                }}
                transition={{ duration: 0.8, ease: "easeInOut", delay }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}