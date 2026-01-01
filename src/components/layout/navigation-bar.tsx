"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { routes } from "@/data/routes";

export default function Navbar() {
    const pathname = usePathname();
    const [active, setActive] = useState(() => {
        const currentRoute = routes.find((route) => route.href === pathname);
        if (pathname.startsWith("/projects/")) {
            return "Projects";
        }
        return currentRoute ? currentRoute.name : "Home";
    });
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isAboveHero, setIsAboveHero] = useState(() => {
        return pathname === "/" || pathname.startsWith("/projects/") || pathname === "/contact-us";
    });
    const [isNavigating, setIsNavigating] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        setIsNavigating(true);
        const currentRoute = routes.find((route) => route.href === pathname);
        if (pathname.startsWith("/projects/")) {
            setActive("Projects");
        } else if (currentRoute) {
            setActive(currentRoute.name);
        }
        const timer = setTimeout(() => setIsNavigating(false), 300);
        return () => clearTimeout(timer);
    }, [pathname]);

    useEffect(() => {
        const heroSection = document.getElementById("hero-section");
        if ((heroSection && pathname === "/") || pathname.startsWith("/projects/") || pathname === "/contact-us") {
            const heroBottom = heroSection?.offsetHeight || window.innerHeight;
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
            if ((heroSection && pathname === "/") || pathname.startsWith("/projects/") || pathname === "/contact-us") {
                const heroBottom = heroSection?.offsetHeight || window.innerHeight;
                setIsAboveHero(currentScrollY < heroBottom);
            } else {
                setIsAboveHero(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY, pathname]);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMobileMenuOpen]);

    const handleLinkClick = (name) => {
        setActive(name);
        setIsMobileMenuOpen(false);
    };

    return (
        <AnimatePresence mode="wait">
            <motion.nav
                className={`fixed top-0 left-0 w-full z-30 transition-colors duration-300 ${isAboveHero ? "bg-transparent text-white" : "bg-white text-primary"
                    }`}
                initial={{ y: 0 }}
                animate={{ y: show ? 0 : -125 }}
                transition={{ duration: 0.3 }}
            >
                <div className="container mx-auto flex justify-between items-center py-4 px-4">
                    <Image
                        src={isAboveHero ? "/logo/logo-white.svg" : "/logo/logo-primary.svg"}
                        alt="FJ Constructions"
                        width={125}
                        height={50}
                        className={isAboveHero ? "filter brightness-0 invert" : ""}
                    />

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex lg:gap-10 gap-5 relative">
                        {routes.map((item) => (
                            <li key={`navbar-${item.name}`} className="relative">
                                <Link
                                    href={item.href}
                                    className={`focus:outline-none font-sans transition-all hover:font-bold ${active === item.name ? "font-bold" : "font-normal"
                                        }`}
                                    onClick={() => setActive(item.name)}
                                >
                                    {item.name}
                                </Link>

                                {active === item.name && (
                                    <motion.div
                                        key={isNavigating ? pathname : "underline"}
                                        layoutId={!isNavigating ? "underline" : undefined}
                                        className={`absolute left-0 -bottom-1 w-full h-0.5 rounded ${isAboveHero ? "bg-white" : "bg-primary"
                                            }`}
                                        initial={{ opacity: 1 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* Hamburger Button */}
                    <button
                        className="md:hidden flex flex-col justify-center items-center w-8 h-8 focus:outline-none"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span
                            className={`block w-6 h-0.5 mb-1.5 transition-all ${isAboveHero ? "bg-white" : "bg-primary"
                                } ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
                        />
                        <span
                            className={`block w-6 h-0.5 mb-1.5 transition-all ${isAboveHero ? "bg-white" : "bg-primary"
                                } ${isMobileMenuOpen ? "opacity-0" : ""}`}
                        />
                        <span
                            className={`block w-6 h-0.5 transition-all ${isAboveHero ? "bg-white" : "bg-primary"
                                } ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                        />
                    </button>
                </div>
            </motion.nav>

            {isMobileMenuOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsMobileMenuOpen(false)}
                    />

                    {/* Sidebar */}
                    <motion.div
                        className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 md:hidden"
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                        <div className="flex flex-col p-8 pt-20">
                            {routes.map((item) => (
                                <Link
                                    key={`sidebar-${item.name}`}
                                    href={item.href}
                                    className={`py-4 text-primary font-sans transition-all hover:font-bold border-b border-gray-200 ${active === item.name ? "font-bold" : "font-normal"
                                        }`}
                                    onClick={() => handleLinkClick(item.name)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}