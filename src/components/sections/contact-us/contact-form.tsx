"use client"
import VerticalFadeIn from "@/components/animations/vertical-fade-in";
import SlidingButton from "@/components/buttons/sliding-button";
import { Card, CardContent } from "@/components/ui/card";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "@/lib/emailjs";
import { toast } from "sonner";

export default function ContactForm() {
    const form = useRef<HTMLFormElement>(null);
    const [isSending, setIsSending] = useState(false);

    const validateForm = (): boolean => {
        if (!form.current) return false;

        const formData = new FormData(form.current);
        const name = formData.get('name') as string;
        const phone = formData.get('phone') as string;
        const message = formData.get('message') as string;

        if (!name?.trim()) {
            toast.error('Please enter your name!');
            document.getElementById('name')?.focus();
            return false;
        }
        if (!phone?.trim()) {
            toast.error('Please enter your phone number!');
            document.getElementById('phone')?.focus();
            return false;
        }

        // Phone number validation (basic)
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        if (!phoneRegex.test(phone)) {
            toast.error('Please enter a valid phone number!');
            document.getElementById('phone')?.focus();
            return false;
        }
        if (!message?.trim()) {
            toast.error('Please enter your message!');
            document.getElementById('message')?.focus();
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
                EMAILJS_CONFIG.TEMPLATE_ID_CONTACT,
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
        <div className="container flex flex-col md:flex-row gap-5 md:gap-8 lg:gap-20 px-4">
            <VerticalFadeIn className="relative w-full md:w-1/2 h-72 md:h-auto md:min-h-[600px] rounded-2xl md:rounded-3xl overflow-hidden">
                <Image
                    src="/projects/villa-radja/dining-room.png"
                    alt=""
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 bg-linear-to-t from-primary via-primary/40 to-primary/0" />
                <div className="absolute inset-0 flex flex-col gap-2 md:gap-10 justify-center z-10 p-6 sm:p-8 md:p-12 text-white">
                    <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Have a Vision in Mind?</h2>
                    <h4 className="text-lg sm:text-xl md:text-2xl">Tell us about your dream</h4>
                </div>
            </VerticalFadeIn>

            <VerticalFadeIn className="w-full md:w-1/2" delay={0.1}>
                <Card className="w-full rounded-2xl md:rounded-3xl">
                    <CardContent className="rounded-2xl md:rounded-3xl p-4 sm:p-6">
                        <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-6 py-2 sm:py-4">
                            <Field>
                                <FieldLabel htmlFor="name">Name</FieldLabel>
                                <Input id="name" name="name" />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
                                <Input id="phone" name="phone" />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="message">Message</FieldLabel>
                                <Textarea className="h-48 sm:h-56 md:h-64" id="message" name="message" />
                            </Field>

                            <SlidingButton
                                text={"Send Message"}
                                type="primary"
                                isSubmit
                                disabled={isSending}
                            />
                        </form>
                    </CardContent>
                </Card>
            </VerticalFadeIn>
        </div>
    )
}