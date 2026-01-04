"use client"
import VerticalFadeIn from "@/components/animations/vertical-fade-in";
import SlidingButton from "@/components/buttons/sliding-button";
import ImageBackground from "@/components/layout/image-background";
import { Card, CardContent } from "@/components/ui/card";
import { Field, FieldDescription, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "@/lib/emailjs";
import { toast } from "sonner";



export default function PartnershipForm() {
    const form = useRef<HTMLFormElement>(null);
    const [isSending, setIsSending] = useState(false);


    const partnerTypeData = [
        { id: 'developer', value: 'Developer' },
        { id: 'architect-designer', value: 'Architect/Designer' },
        { id: 'real-estate-agency', value: 'Real Estate Agency' },
        { id: 'property-manager', value: 'Property Manager' },
    ];

    const partnershipModelData = [
        { id: 'referral', value: 'Referral Partnership (bringing clients)' },
        { id: 'collaboration', value: 'Project Collaboration (jont execution)' },
        { id: 'exclusive-contractor', value: 'Exclusive Contractor Partnership (long-term/multiple builds)' },
        { id: 'general-discussion', value: 'General Discussion/Introduction' },
    ]

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.current) return;

        setIsSending(true);

        try {
            await emailjs.sendForm(
                EMAILJS_CONFIG.SERVICE_ID,
                EMAILJS_CONFIG.TEMPLATE_ID_PARTNERSHIP,
                form.current,
                EMAILJS_CONFIG.PUBLIC_KEY
            );
            toast.success('Message sent successfully!');
            form.current.reset();
        } catch (error) {
            console.error('EmailJS Error:', error);
            toast.error('Failed to send message. Please try again later.');
        } finally {
            setIsSending(false);
        }
    };



    return (
        <ImageBackground image="/projects/villa-goa-gong/slideshow-secondary.png">
            <div className="flex justify-center items-center py-20">
                <div className="flex flex-col md:flex-row justify-between items-center container gap-10 md:gap-0 px-4">
                    <VerticalFadeIn className="flex flex-col flex-1 md:gap-10">
                        <h2 className="text-white text-center md:text-left">Ready to Partner?</h2>
                        <h4 className="text-white text-center md:text-left">Tell us how you’d like to collaborate.</h4>
                    </VerticalFadeIn>

                    <VerticalFadeIn className="w-full md:w-1/2">
                        <Card className="w-full md:h-[800px] rounded-3xl">
                            <CardContent className="md:overflow-y-scroll rounded-3xl">
                                <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-6 py-4">
                                    <Field>
                                        <FieldLabel htmlFor="company-name">Company/Studio Name</FieldLabel>
                                        <Input id="company-name" name="company_name" autoComplete="off" required />
                                    </Field>
                                    <Field>
                                        <FieldLabel htmlFor="pic-name">PIC Full Name</FieldLabel>
                                        <Input id="pic-name" name="pic_name" autoComplete="off" required />
                                    </Field>
                                    <Field>
                                        <FieldLabel htmlFor="pic-position">PIC Position</FieldLabel>
                                        <Input id="pic-position" name="pic_position" autoComplete="off" required />
                                        <FieldDescription>e.g. Lead Architect, Managing Director, Sales Manager, etc.</FieldDescription>
                                    </Field>
                                    <Field>
                                        <FieldLabel htmlFor="business-email">Business Email</FieldLabel>
                                        <Input id="business-email" name="business_email" type="email" autoComplete="off" required />
                                    </Field>
                                    <Field>
                                        <FieldLabel htmlFor="wa-phone-number">Phone Number for WhatsApp</FieldLabel>
                                        <Input id="wa-phone-number" name="wa_phone_number" autoComplete="off" required />
                                    </Field>

                                    <div className="w-full">
                                        <FieldSet>
                                            <FieldLabel>Your Partner Type </FieldLabel>
                                            <RadioGroup defaultValue={partnerTypeData[0].value} name="partner_type">
                                                {partnerTypeData.map((data) => (
                                                    <Field orientation="horizontal" key={data.id}>
                                                        <RadioGroupItem value={data.value} id={data.id} />
                                                        <FieldLabel htmlFor={data.id} className="font-normal">
                                                            {data.value}
                                                        </FieldLabel>
                                                    </Field>
                                                ))}
                                            </RadioGroup>
                                        </FieldSet>
                                    </div>

                                    <div className="w-full">
                                        <FieldSet>
                                            <FieldLabel>Your Desired Partnership Model</FieldLabel>
                                            <RadioGroup defaultValue={partnershipModelData[0].value} name="partnership_model">
                                                {partnershipModelData.map((data) => (
                                                    <Field orientation="horizontal" key={data.id}>
                                                        <RadioGroupItem value={data.value} id={data.id} />
                                                        <FieldLabel htmlFor={data.id} className="font-normal">
                                                            {data.value}
                                                        </FieldLabel>
                                                    </Field>
                                                ))}
                                            </RadioGroup>
                                        </FieldSet>
                                    </div>

                                    <Field>
                                        <FieldLabel htmlFor="project-need">Current Project Need/Scope</FieldLabel>
                                        <Textarea id="project-need" name="project_need" required />
                                    </Field>
                                    <Field>
                                        <FieldLabel htmlFor="portfolio">Company Website/Portfolio (optional)</FieldLabel>
                                        <Input id="portfolio" name="portfolio" autoComplete="off" />
                                    </Field>

                                    <SlidingButton
                                        text={isSending ? "Sending..." : "Send Message"}
                                        type="primary"
                                        isSubmit
                                        disabled={isSending}
                                    />
                                </form>
                            </CardContent>
                        </Card>
                    </VerticalFadeIn>
                </div>
            </div>
        </ImageBackground>
    );
}