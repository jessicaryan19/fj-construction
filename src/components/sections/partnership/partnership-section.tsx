"use client";

import { whyPartnerWithUsData } from "@/data/services";
import MergeIconCard from "@/components/cards/merge-icon-card";
import VerticalFadeIn from "@/components/animations/vertical-fade-in";
import ImageRoundedCard from "@/components/cards/image-rounded-card";

export default function PartnershipSection() {
    return (
        <div className="flex gap-14 w-full container">
            <VerticalFadeIn className="flex-none w-1/3 rounded-3xl overflow-hidden bg-white">
                <ImageRoundedCard source="/services/partnership.jpg" />
            </VerticalFadeIn>

            <div className="flex-1 flex flex-col gap-12 text-primary h-full">
                <h1>Why You Should Partner With Us</h1>
                <div className="grid grid-cols-2 gap-10">
                    {
                        whyPartnerWithUsData.map((reason, index) => (
                            <VerticalFadeIn delay={index * 0.1} key={reason.title}>
                                <MergeIconCard
                                    icon={reason.icon}
                                    title={reason.title}
                                    description={reason.description}
                                />
                            </VerticalFadeIn>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}