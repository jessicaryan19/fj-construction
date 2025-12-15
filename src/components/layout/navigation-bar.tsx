"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { routes } from "@/data/routes";

export default function Navbar() {
    const [active, setActive] = useState("Home");
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isAboveHero, setIsAboveHero] = useState(false);

    useEffect(() => {
        const heroSection = document.getElementById("hero-section");

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setShow(false);
            } else {
                setShow(true);
            }
            setLastScrollY(currentScrollY);
            if (heroSection) {
                const heroBottom = heroSection.offsetHeight;
                setIsAboveHero(currentScrollY < heroBottom);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <motion.nav
            className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${isAboveHero ? "bg-transparent text-white" : "bg-white text-primary"
                }`}
            initial={{ y: 0 }}
            animate={{ y: show ? 0 : -125 }}
            transition={{ duration: 0.3 }}
        >
            <div className="container mx-auto flex justify-between items-center py-4">
                <Image
                    src={isAboveHero ? "/logo/logo-white.svg" : "/logo/logo-primary.svg"}
                    alt="FJ Constructions"
                    width={125}
                    height={50}
                    className={isAboveHero ? "filter brightness-0 invert" : ""}
                />

                <ul className="flex gap-10 relative">
                    {routes.map((item) => (
                        <li key={item.name} className="relative">
                            <Link
                                href={item.href}
                                className="focus:outline-none font-sans"
                                onClick={() => setActive(item.name)}
                            >
                                {item.name}
                            </Link>

                            {active === item.name && (
                                <motion.div
                                    layoutId="underline"
                                    className={`absolute left-0 bottom-0 mt-2 w-full h-0.5 rounded ${isAboveHero ? "bg-white" : "bg-primary"
                                        }`}
                                />
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </motion.nav>
    );
}
