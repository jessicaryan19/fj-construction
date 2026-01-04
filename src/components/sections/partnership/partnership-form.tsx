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
    const [selectedPartnerType, setSelectedPartnerType] = useState<string>("");
    const [selectedPartnershipModel, setSelectedPartnershipModel] = useState<string>("");

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

    const validateForm = (): boolean => {
        if (!form.current) return false;

        const formData = new FormData(form.current);
        const companyName = formData.get('company_name') as string;
        const picName = formData.get('pic_name') as string;
        const picPosition = formData.get('pic_position') as string;
        const businessEmail = formData.get('business_email') as string;
        const waPhoneNumber = formData.get('wa_phone_number') as string;
        const projectNeed = formData.get('project_need') as string;

        if (!companyName?.trim()) {
            toast.error('Please enter your Company/Studio Name!');
            document.getElementById('company-name')?.focus();
            return false;
        }
        if (!picName?.trim()) {
            toast.error('Please enter PIC Full Name!');
            document.getElementById('pic-name')?.focus();
            return false;
        }
        if (!picPosition?.trim()) {
            toast.error('Please enter PIC Position!');
            document.getElementById('pic-position')?.focus();
            return false;
        }
        if (!businessEmail?.trim()) {
            toast.error('Please enter your Business Email!');
            document.getElementById('business-email')?.focus();
            return false;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(businessEmail)) {
            toast.error('Please enter a valid email address!');
            document.getElementById('business-email')?.focus();
            return false;
        }
        if (!waPhoneNumber?.trim()) {
            toast.error('Please enter your Phone Number for WhatsApp!');
            document.getElementById('wa-phone-number')?.focus();
            return false;
        }

        // Phone number validation (basic)
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        if (!phoneRegex.test(waPhoneNumber)) {
            toast.error('Please enter a valid phone number!');
            document.getElementById('wa-phone-number')?.focus();
            return false;
        }
        if (!selectedPartnerType) {
            toast.error('Please select your Partner Type!');
            document.getElementById('developer')?.focus();
            return false;
        }
        if (!selectedPartnershipModel) {
            toast.error('Please select your Desired Partnership Model!');
            document.getElementById('referral')?.focus();
            return false;
        }
        if (!projectNeed?.trim()) {
            toast.error('Please describe your Current Project Need/Scope!');
            document.getElementById('project-need')?.focus();
            return false;
        }

        return true;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.current) return;
        if (!validateForm()) {
            return;
        }
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
            setSelectedPartnerType("");
            setSelectedPartnershipModel("");
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
                        <h4 className="text-white text-center md:text-left">Tell us how you&apos;d like to collaborate.</h4>
                    </VerticalFadeIn>

                    <VerticalFadeIn className="w-full md:w-1/2">
                        <Card className="w-full md:h-[800px] rounded-3xl">
                            <CardContent className="md:overflow-y-scroll rounded-3xl">
                                <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-6 py-4">
                                    <Field>
                                        <FieldLabel htmlFor="company-name">Company/Studio Name</FieldLabel>
                                        <Input id="company-name" name="company_name" autoComplete="off" />
                                    </Field>
                                    <Field>
                                        <FieldLabel htmlFor="pic-name">PIC Full Name</FieldLabel>
                                        <Input id="pic-name" name="pic_name" autoComplete="off" />
                                    </Field>
                                    <Field>
                                        <FieldLabel htmlFor="pic-position">PIC Position</FieldLabel>
                                        <Input id="pic-position" name="pic_position" autoComplete="off" />
                                        <FieldDescription>e.g. Lead Architect, Managing Director, Sales Manager, etc.</FieldDescription>
                                    </Field>
                                    <Field>
                                        <FieldLabel htmlFor="business-email">Business Email</FieldLabel>
                                        <Input id="business-email" name="business_email" autoComplete="off" />
                                    </Field>
                                    <Field>
                                        <FieldLabel htmlFor="wa-phone-number">Phone Number for WhatsApp</FieldLabel>
                                        <Input id="wa-phone-number" name="wa_phone_number" autoComplete="off" />
                                    </Field>

                                    <div className="w-full">
                                        <FieldSet>
                                            <FieldLabel>Your Partner Type</FieldLabel>
                                            <RadioGroup
                                                name="partner_type"
                                                value={selectedPartnerType}
                                                onValueChange={setSelectedPartnerType}
                                            >
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
                                            <RadioGroup
                                                name="partnership_model"
                                                value={selectedPartnershipModel}
                                                onValueChange={setSelectedPartnershipModel}
                                            >
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
                                        <Textarea className="h-40" id="project-need" name="project_need" />
                                    </Field>
                                    <Field>
                                        <FieldLabel htmlFor="portfolio">Company Website/Portfolio<p className="text-gray-500">(optional)</p></FieldLabel>
                                        <Input id="portfolio" name="portfolio" autoComplete="off" />
                                    </Field>

                                    <SlidingButton
                                        text="Send Message"
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