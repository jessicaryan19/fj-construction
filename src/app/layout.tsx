import type { Metadata } from "next";
import { Adamina } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/layout/navigation-bar";
import Footer from "@/components/layout/footer";
import { Toaster } from "sonner";


const adamina = Adamina({
  variable: "--font-adamina",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: "FJ Constructions | Premium Villa & Construction Services in Bali",
    template: "%s | FJ Constructions",
  },
  description:
    "FJ Constructions is a trusted construction company in Bali specializing in luxury villa development, residential projects, and commercial construction. Quality craftsmanship and modern tropical design.",
  keywords: [
    "construction company Bali",
    "villa builder Bali",
    "luxury villa construction",
    "Bali property developer",
    "residential construction Bali",
    "commercial construction",
    "tropical architecture",
    "FJ Constructions",
  ],
  authors: [{ name: "FJ Constructions" }],
  creator: "FJ Constructions",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "FJ Constructions",
    title: "FJ Constructions | Premium Villa & Construction Services in Bali",
    description:
      "Trusted construction company in Bali specializing in luxury villa development and modern tropical architecture.",
  },
  twitter: {
    card: "summary_large_image",
    title: "FJ Constructions | Premium Villa & Construction Services in Bali",
    description:
      "Trusted construction company in Bali specializing in luxury villa development and modern tropical architecture.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${adamina.variable} antialiased`}
      >
        <div className="flex w-full items-center justify-center">
          <NavigationBar />
        </div>
        {children}
        <Toaster position="bottom-right" richColors />
        <Footer />
      </body>
    </html>
  );
}
