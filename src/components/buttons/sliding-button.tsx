"use client"

import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

interface SlidingButtonProps {
    text: string;
    type?: 'default' | 'primary'
    icon?: React.ReactNode;
}
export default function SlidingButton({
    text,
    type = 'default',
    icon = <ChevronRight size={28} />
}: SlidingButtonProps) {
    const buttonStyle = {
        default: "relative flex items-center gap-4 px-1 py-1 rounded-full border-2 border-white",
        primary: "relative flex items-center gap-4 px-1 py-1 rounded-full bg-primary"
    }[type]

    return (
        <Link href="/projects" className="inline-block w-fit">
            <motion.div
                initial="rest"
                whileHover="hover"
                animate="rest"
                className={buttonStyle}
            >
                <motion.div
                    layout
                    variants={{
                        rest: { width: "80%" },
                        hover: { width: "100%" },
                    }}
                    transition={{ type: "spring", stiffness: 250, damping: 30 }}
                    className="flex items-center justify-center bg-white rounded-full"
                >
                    <span className="text-primary text-center font-bold whitespace-nowrap px-12 hover:ps-10 hover:pe-14 py-3 transition-all">
                        {text}
                    </span>

                    <motion.div
                        variants={{
                            rest: { color: "#ffffff" },
                            hover: { color: "var(--primary)" },
                        }}
                        className="absolute right-0 px-4"
                        transition={{ duration: 0.2 }}
                    >
                        {icon}
                    </motion.div>
                </motion.div>
            </motion.div>
        </Link>
    )
}
