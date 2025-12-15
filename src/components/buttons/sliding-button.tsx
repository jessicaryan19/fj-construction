"use client"

import { Icon } from "@iconify/react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

interface SlidingButtonProps {
    text: string;
    type?: 'default' | 'primary' | 'inverted';
    icon?: string;
    href?: string;
    onClick?: () => void;
}

export default function SlidingButton({
    text,
    type = "default",
    icon = "weui:arrow-filled",
    href,
    onClick,
}: SlidingButtonProps) {
    const router = useRouter()

    const handleClick = () => {
        onClick?.()
        if (href) router.push(href)
    }

    const containerButtonStyle = {
        default: "relative flex items-center gap-4 px-1 py-1 rounded-full border-2 border-white cursor-pointer w-fit",
        primary: "relative flex items-center gap-4 px-1 py-1 rounded-full bg-primary cursor-pointer w-fit",
        inverted: "relative flex items-center gap-4 px-0.5 py-0.5 rounded-full bg-white cursor-pointer w-fit",
    }[type]

    const innerButtonStyle = {
        default: "flex items-center justify-center bg-white rounded-full text-primary",
        primary: "flex items-center justify-center bg-white rounded-full text-primary",
        inverted: "flex items-center justify-center bg-primary rounded-full text-white",
    }[type]

    return (
        <motion.div
            initial="rest"
            whileHover="hover"
            whileTap="hover"
            animate="rest"
            onClick={handleClick}
            className={containerButtonStyle}
            role="button"
            tabIndex={0}
        >
            <motion.div
                layout
                variants={{
                    rest: { width: "80%" },
                    hover: { width: "100%" },
                }}
                transition={{ type: "spring", stiffness: 250, damping: 30 }}
                className={innerButtonStyle}
            >
                <motion.span
                    variants={{
                        rest: { paddingLeft: 48, paddingRight: 48 },
                        hover: { paddingLeft: 40, paddingRight: 56 },
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="font-bold whitespace-nowrap py-3"
                >
                    {text}
                </motion.span>
                
                <motion.div
                    variants={{
                        rest: { color: `${type === "inverted" ? "var(--primary)" : "#ffffff"}` },
                        hover: { color: `${type === "inverted" ? "#ffffff" : "var(--primary)"}` },
                    }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-6"
                >
                    <Icon icon={icon} className="text-3xl" />
                </motion.div>
            </motion.div>
        </motion.div>
    )
}
