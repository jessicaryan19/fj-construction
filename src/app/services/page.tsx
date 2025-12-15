import ServicesIntroSection from "@/components/sections/service-intro-section";
import Image from "next/image";

export default function Services() {
  return (
   <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-col items-center bg-white dark:bg-black">
        <ServicesIntroSection/>
        <div className="rounded-3xl">
            <Image src="/project-highlight/main-1.png" alt="Project Highlight"/>
        </div>
      </main>
    </div>
  );
}