import { Metadata } from "next";
import ContactPage from "./page";
import { COMPANY_CONFIG } from "@/lib/company";

export const metadata: Metadata = {
  title: "Contact Us | Miaga Technologies LLP",
  description:
    "Contact Miaga Technologies LLP for software and mobile app development inquiries, project consultations, or general support.",
  alternates: {
    canonical: `${COMPANY_CONFIG.siteUrl}/contact`,
  },
  openGraph: {
    title: "Contact Us | Miaga Technologies LLP",
    description:
      "Contact Miaga Technologies LLP for software and mobile app development inquiries, project consultations, or general support.",
    url: `${COMPANY_CONFIG.siteUrl}/contact`,
    siteName: COMPANY_CONFIG.legalName,
    locale: "en_US",
    type: "website",
  },
};

export default ContactPage;
