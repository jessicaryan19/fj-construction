"use client"
import { Icon } from "@iconify/react"
import { AnimatePresence, motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { useState, useRef } from "react"

interface SlidingButtonProps {
    text: string
    type?: 'default' | 'primary' | 'inverted'
    icon?: string
    href?: string
    onClick?: () => void
    direction?: 'left' | 'right'
    initialWidth?: string
    isSubmit?: boolean
    disabled?: boolean
}

export default function SlidingButton({
    text,
    type = "default",
    icon = "weui:arrow-filled",
    initialWidth = "80%",
    href,
    onClick,
    direction = "right",
    isSubmit = false,
    disabled = false,
}: SlidingButtonProps) {
    const router = useRouter()
    const [isAnimating, setIsAnimating] = useState(false)
    const pendingActionRef = useRef<(() => void) | null>(null)

    const handleClick = () => {
        if (isAnimating) return

        // Store the action to execute after animation
        pendingActionRef.current = () => {
            if (disabled) return
            onClick?.()
            if (href) router.push(href)
        }
        setIsAnimating(true)
    }

    const handleAnimationComplete = () => {
        if (isAnimating && pendingActionRef.current) {
            pendingActionRef.current()
            pendingActionRef.current = null
            setIsAnimating(false)
        }
    }

    const containerButtonStyle = {
        default: "relative flex items-center gap-4 px-1 py-1 rounded-full border-2 border-white w-fit",
        primary: "relative flex items-center gap-4 px-1 py-1 rounded-full bg-primary w-fit",
        inverted: "relative flex items-center gap-4 px-0.5 py-0.5 rounded-full bg-white w-fit",
    }[type]

    const innerButtonStyle = {
        default: "flex items-center justify-center bg-white rounded-full text-primary cursor-pointer",
        primary: "flex items-center justify-center bg-white rounded-full text-primary cursor-pointer",
        inverted: "flex items-center justify-center bg-primary rounded-full text-white cursor-pointer",
    }[type]

    const isLeftDirection = direction === "left"

    return (
        <AnimatePresence mode="wait">
            <motion.button
                type={isSubmit ? "submit" : "button"}
                initial="rest"
                whileHover="hover"
                whileTap="hover"
                animate={isAnimating ? "hover" : "rest"}
                onClick={handleClick}
                onAnimationComplete={handleAnimationComplete}
                className={`${containerButtonStyle} ${isLeftDirection && 'justify-end'}`}
                role="button"
                tabIndex={0}
            >
                <motion.div
                    layout
                    variants={{
                        rest: { width: initialWidth },
                        hover: { width: "100%" },
                    }}
                    transition={{ type: "spring", stiffness: 250, damping: 30 }}
                    className={innerButtonStyle}
                >
                    <motion.span
                        variants={{
                            rest: isLeftDirection
                                ? { paddingLeft: 48, paddingRight: 48 }
                                : { paddingLeft: 48, paddingRight: 48 },
                            hover: isLeftDirection
                                ? { paddingLeft: 56, paddingRight: 40 }
                                : { paddingLeft: 40, paddingRight: 56 },
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
                        className={isLeftDirection ? "absolute left-6" : "absolute right-6"}
                        style={isLeftDirection ? { transform: "rotate(180deg)" } : undefined}
                    >
                        <Icon icon={icon} className="text-3xl" />
                    </motion.div>
                </motion.div>
            </motion.button>
        </AnimatePresence>
    )
}