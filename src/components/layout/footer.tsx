"use client";
import { socialsData, routes } from "@/data/routes";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
    const [active, setActive] = useState("Home");
    return (
        <footer className="container mx-auto bg-white flex flex-col lg:flex-row justify-between gap-4 md:gap-10 lg:gap-40 font-sans items-center lg:items-start py-10 mt-24 px-4">
            <div className="flex flex-col items-center gap-4">
                <Image src='/logo/logo-2-primary.svg' alt="FJ Constructions" width={125} height={50} />
                <div className="flex items-center gap-8">
                    <Link href={socialsData.instagram.link} className="border border-primary p-1 rounded-full">
                        <Icon icon={socialsData.instagram.icon} className="text-2xl text-primary" />
                    </Link>
                    <Link href={socialsData.linkedin.link} className="border border-primary p-1 rounded-full">
                        <Icon icon={socialsData.linkedin.icon} className="text-2xl text-primary" />
                    </Link>
                </div>
            </div>

            <div className="flex flex-col flex-1 w-full lg:w-auto text-primary">
                <div className="flex flex-col md:flex-row py-5 gap-4 md:gap-0 border-b border-primary">
                    <p className="uppercase font-bold md:w-1/4">Navigate</p>
                    <div className="grid grid-cols-3 gap-2 md:gap-0 md:flex md:flex-1 justify-between">
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

                <div className="flex flex-col gap-2">
                    <div className="flex flex-col md:flex-row py-5 gap-4 md:gap-0">
                        <p className="uppercase font-bold md:w-1/4">Contact Us On</p>
                        <div className="flex flex-col md:flex-row flex-1 gap-2 md:gap-10">
                            <Link href={socialsData.email.link} className="underline">{socialsData.email.name}</Link>
                            <Link href={socialsData.whatsapp.link} className="underline">{socialsData.whatsapp.name}</Link>
                        </div>
                    </div>
                    <p className="text-center md:text-left text-sm">Copyright ©️ 2025 FJ Construction. All Rights Reserved.</p>
                </div>

            </div>
        </footer>
    )
}