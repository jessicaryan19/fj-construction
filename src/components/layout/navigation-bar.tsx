"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { routes } from "@/data/routes";

export default function Navbar() {
    const pathname = usePathname();
    const [active, setActive] = useState(() => {
        const currentRoute = routes.find((route) => route.href === pathname);
        return currentRoute ? currentRoute.name : "Home";
    });
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isAboveHero, setIsAboveHero] = useState(false);

    // Update active tab when pathname changes
    useEffect(() => {
        const currentRoute = routes.find((route) => route.href === pathname);
        if (currentRoute) {
            setActive(currentRoute.name);
        }
    }, [pathname]);

    // Check initial scroll position and hero section
    useEffect(() => {
        const heroSection = document.getElementById("hero-section");
        if (heroSection && pathname === "/") {
            const heroBottom = heroSection.offsetHeight;
            setIsAboveHero(window.scrollY < heroBottom);
        } else {
            setIsAboveHero(false);
        }
    }, [pathname]);

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
            if (heroSection && pathname === "/") {
                const heroBottom = heroSection.offsetHeight;
                setIsAboveHero(currentScrollY < heroBottom);
            } else {
                setIsAboveHero(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY, pathname]);

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
                                    className={`absolute left-0 -bottom-1 w-full h-0.5 rounded ${isAboveHero ? "bg-white" : "bg-primary"
                                        }`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.2 }}
                                />
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </motion.nav>
    );
}
