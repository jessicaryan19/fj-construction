"use client";
import { socialsData, routes } from "@/data/routes";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
    const [active, setActive] = useState("Home");
    return (
        <footer className="container mx-auto bg-white flex justify-between gap-40 font-sans items-center py-10 mt-24">
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
                            <Link href={socialsData.email.link} className="underline">{socialsData.email.name}</Link>
                            <Link href={socialsData.whatsapp.link} className="underline">{socialsData.whatsapp.name}</Link>
                        </div>
                    </div>
                    <p>Copyright ©️ 2025 FJ Construction. All Rights Reserved.</p>
                </div>

            </div>
        </footer>
    )
}