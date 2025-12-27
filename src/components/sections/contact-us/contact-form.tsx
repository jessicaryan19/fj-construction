import VerticalFadeIn from "@/components/animations/vertical-fade-in";
import SlidingButton from "@/components/buttons/sliding-button";
import { Card, CardContent } from "@/components/ui/card";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export default function ContactForm() {

    return (
        <div className="container flex gap-20">
            <VerticalFadeIn className="relative w-1/2 rounded-3xl overflow-hidden">
                <Image
                    src="/projects/villa-radja/dining-room.png"
                    alt=""
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 bg-linear-to-t from-primary via-primary/40 to-primary/0" />
                <div className="absolute inset-0 flex flex-col gap-10 justify-center z-10 p-12 text-white">
                    <h1 className="text-7xl">Have a Vision in Mind?</h1>
                    <h1>Tell us about your dream</h1>
                </div>
            </VerticalFadeIn>

            <VerticalFadeIn className="w-1/2" delay={0.1}>
                <Card className="w-full rounded-3xl">
                    <CardContent className="rounded-3xl">
                        <div className="flex flex-col gap-6 py-4">
                            <Field>
                                <FieldLabel htmlFor="name">Name</FieldLabel>
                                <Input id="name" autoComplete="off" />
                            </Field>

                            <Field>
                                <FieldLabel htmlFor="phone-number">Phone Number</FieldLabel>
                                <Input id="phone-number" autoComplete="off" />
                            </Field>

                            <Field>
                                <FieldLabel htmlFor="message">Message</FieldLabel>
                                <Textarea className="h-64" id="message" />
                            </Field>
                            <SlidingButton text="Send Message" type="primary" />
                        </div>
                    </CardContent>
                </Card>
            </VerticalFadeIn>
        </div>
    )
}