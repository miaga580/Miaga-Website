import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SparkleTrail } from "@/components/visual/SparkleTrail";
import { COMPANY_CONFIG } from "@/lib/company";

const spaceGrotesk = Space_Grotesk({
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
  metadataBase: new URL(COMPANY_CONFIG.siteUrl),
  title: {
    default: "Miaga Technologies LLP | Software & Mobile App Development",
    template: "%s | Miaga Technologies LLP",
  },
  description:
    "Miaga Technologies LLP is an Indian software and mobile app development LLP specializing in custom software development, Flutter mobile applications, and AWS cloud solutions.",
  keywords: [
    "Miaga Technologies LLP",
    "software development",
    "mobile app development",
    "Flutter",
    "Python",
    "AWS",
    "application maintenance",
    "Kochi Kerala IT company",
  ],
  authors: [{ name: COMPANY_CONFIG.legalName }],
  creator: COMPANY_CONFIG.legalName,
  publisher: COMPANY_CONFIG.legalName,
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
  alternates: {
    canonical: COMPANY_CONFIG.siteUrl,
  },
  openGraph: {
    title: "Miaga Technologies LLP | Software & Mobile App Development",
    description:
      "Miaga Technologies LLP is an Indian software and mobile app development LLP specializing in custom software development, Flutter mobile applications, and AWS cloud solutions.",
    url: COMPANY_CONFIG.siteUrl,
    siteName: COMPANY_CONFIG.legalName,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Miaga Technologies LLP | Software & Mobile App Development",
    description:
      "Miaga Technologies LLP is an Indian software and mobile app development LLP specializing in custom software development, Flutter mobile applications, and AWS cloud solutions.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${plusJakartaSans.variable} font-sans antialiased bg-background text-text-primary selection:bg-amethyst-500/30 selection:text-amethyst-200 min-h-screen flex flex-col`}
      >
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
