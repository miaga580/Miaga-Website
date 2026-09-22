import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SparkleTrail } from "@/components/visual/SparkleTrail";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Miaga Technologies LLP | Advanced Software & OTT Streaming Platforms",
  description:
    "Miaga Technologies LLP carries on the business of software development, application development, design, programming, testing, licensing, sale, distribution, maintenance of software applications, platforms, and digital solutions, including proprietary software products, OTT video streaming platforms, and mobile apps.",
  keywords: [
    "Miaga Technologies LLP",
    "software development",
    "OTT video streaming platforms",
    "mobile app development",
    "iOS Android",
    "enterprise digital solutions",
    "software licensing and distribution",
    "application maintenance and testing",
  ],
  authors: [{ name: "Miaga Technologies LLP" }],
  creator: "Miaga Technologies LLP",
  publisher: "Miaga Technologies LLP",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Miaga Technologies LLP | Engineering Elegant Digital Realities",
    description:
      "Full-spectrum software development, high-throughput OTT streaming platforms, native mobile applications, and proprietary digital platforms.",
    url: "https://miagatech.com",
    siteName: "Miaga Technologies LLP",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Miaga Technologies LLP | Engineering Elegant Digital Realities",
    description:
      "Enterprise software engineering, carrier-grade OTT platforms, and native mobile apps with ethereal precision.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${fraunces.variable} ${plusJakartaSans.variable}`}>
      <body className="antialiased selection:bg-amethyst-200 dark:selection:bg-amethyst-800 selection:text-violet-royal dark:selection:text-pearl-50">
        <ThemeProvider>
          <SparkleTrail />
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
