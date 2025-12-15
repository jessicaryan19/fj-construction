"use client";
import { externalLinks, routes } from "@/data/routes";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
    const [active, setActive] = useState("Home");
    return (
        <footer className="container mx-auto bg-white flex justify-between gap-40 font-sans items-center py-10">
            <div className="flex flex-col items-center gap-4">
                <Image src='/logo/logo-2-primary.svg' alt="FJ Constructions" width={125} height={50} />
                <div className="flex items-center gap-8">
                    <Link href={externalLinks.instagram} className="border border-primary p-1 rounded-full">
                        <Icon icon="iconoir:instagram" className="text-2xl text-primary" />
                    </Link>
                    <Link href={externalLinks.linkedin} className="border border-primary p-1 rounded-full">
                        <Icon icon="mdi:linkedin" className="text-2xl text-primary" />
                    </Link>
                </div>
            </div>

            <div className="flex flex-col flex-1 text-primary">
                <div className="flex py-5 border-b border-primary">
                    <p className="uppercase font-bold w-1/4">Navigate</p>
                    <div className="flex flex-1 justify-between">
                        {routes.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`focus:outline-none ${active === item.name ? "font-bold" : ""}`}
                                onClick={() => setActive(item.name)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className="flex py-5">
                        <p className="uppercase font-bold w-1/4">Contact Us On</p>
                        <div className="flex flex-1 gap-10">
                            <Link href={externalLinks.email} className="underline">constructions.fjc@gmail.com</Link>
                            <Link href={externalLinks.whatsapp} className="underline">+62 819 4422 0801</Link>
                        </div>
                    </div>
                    <p>Copyright ©️ 2025 FJ Construction. All Rights Reserved.</p>
                </div>

            </div>
        </footer>
    )
}