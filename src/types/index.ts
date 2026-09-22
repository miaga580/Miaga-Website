export type ThemeMode = "light" | "dark";

export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  deliverables: string[];
  technologies: string[];
  benefits: string[];
}

export interface ProductItem {
  id: string;
  name: string;
  codeName: string;
  tagline: string;
  description: string;
  status: "In Beta" | "Enterprise Active" | "Proprietary R&D";
  capabilities: string[];
  techStack: string[];
  specs: Record<string, string>;
}

export interface ProcessStep {
  step: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  projectType: string[];
  budget: string;
  timeline: string;
  message: string;
}
