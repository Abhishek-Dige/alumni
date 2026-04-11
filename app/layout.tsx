import type { Metadata } from "next";
import { Geist, Fraunces } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Providers from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "IIITL Alumni — A community hub for IIIT Lucknow",
    template: "%s — IIITL Alumni",
  },
  description:
    "A community-built hub for IIIT Lucknow alumni and students to find each other, share opportunities, and stay in touch after graduation.",
  openGraph: {
    title: "IIITL Alumni",
    description:
      "A community hub for IIIT Lucknow alumni and students — directory, events, news, and jobs.",
    type: "website",
    images: ["/IIITL_LOGO.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Providers>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
