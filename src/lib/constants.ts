import { NavItem, ServiceItem, ProcessStep } from "@/types";
import { COMPANY_CONFIG } from "./company";

export const COMPANY_NAME = COMPANY_CONFIG.legalName;
export const COMPANY_TAGLINE = "Software & Application Development Services";
export const COMPANY_DESCRIPTION =
  "Miaga Technologies LLP is an Indian software and application development limited liability partnership providing end-to-end digital engineering, application design, testing, integration, and platform maintenance.";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "software-development",
    title: "Software Development",
    shortDesc:
      "We design, build, and deploy reliable software platforms engineered around your specific business requirements and workflows.",
    fullDesc:
      "We design, build, and deploy reliable software platforms engineered around your specific business requirements and workflows. Our development process prioritizes clean architecture, modular system components, and clear documentation. We build backend systems and platform services that integrate cleanly with your operational environment.",
    icon: "Code2",
    deliverables: [
      "Custom Backend Architectures",
      "System Integration APIs",
      "Data Modeling & Storage",
      "Technical Documentation",
    ],
    technologies: ["Python", "AWS"],
    benefits: [
      "Tailored to exact organizational workflows",
      "Clean, modular, and maintainable codebase",
      "Scalable cloud backend design",
    ],
  },
  {
    id: "web-mobile-apps",
    title: "Web & Mobile App Development",
    shortDesc:
      "We create practical, responsive mobile and web applications for Android, iOS, and modern web browsers.",
    fullDesc:
      "We create practical, responsive mobile and web applications for Android, iOS, and modern web browsers. Using Flutter and proven web frameworks, we deliver consistent user experiences across platforms from a single, maintainable codebase. Every application is configured for security, responsiveness, and straightforward platform distribution.",
    icon: "Smartphone",
    deliverables: [
      "Cross-Platform Mobile Apps (Android & iOS)",
      "Responsive Web Applications",
      "RESTful API & Backend Connections",
      "App Store & Play Store Packaging",
    ],
    technologies: ["Flutter", "Python", "AWS"],
    benefits: [
      "Unified codebase across Android and iOS",
      "Consistent UI/UX across form factors",
      "Direct device feature integration",
    ],
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    shortDesc:
      "We craft intuitive, user-friendly interfaces and digital workflows tailored to user needs and business objectives.",
    fullDesc:
      "We craft intuitive, user-friendly interfaces and digital workflows tailored to user needs and business objectives. We produce interactive prototypes, wireframes, and structured design guidelines that ensure clarity across all application screens. Our designs focus on usability, visual hierarchy, and efficient user task completion.",
    icon: "Palette",
    deliverables: [
      "Interactive Prototypes & Wireframes",
      "UI Component Kits & Style Guides",
      "User Journey & Task Flow Mapping",
      "Design-to-Development Handoff Assets",
    ],
    technologies: ["Figma"],
    benefits: [
      "Intuitive navigation and clear user flows",
      "Standardized UI components for faster development",
      "User-tested layouts and interactions",
    ],
  },
  {
    id: "testing-qa",
    title: "Testing & Quality Assurance",
    shortDesc:
      "We conduct structured functional, performance, and compatibility testing across devices and browsers.",
    fullDesc:
      "We conduct structured functional, performance, and compatibility testing across devices and browsers. Our QA practice identifies software defects, usability snags, and edge cases prior to deployment. We ensure that your digital solutions perform reliably under regular operational conditions.",
    icon: "ShieldCheck",
    deliverables: [
      "Functional & Regression Test Plans",
      "Mobile Device & OS Compatibility Verification",
      "API & Integration Validation",
      "Detailed Defect & Resolution Tracking",
    ],
    technologies: ["Python"],
    benefits: [
      "Early defect discovery and resolution",
      "Consistent cross-device stability",
      "Clear test documentation and audit trails",
    ],
  },
  {
    id: "implementation-integration",
    title: "Implementation & Integration",
    shortDesc:
      "We deploy and integrate software systems into your existing technology landscape and third-party services.",
    fullDesc:
      "We deploy and integrate software systems into your existing technology landscape and third-party services. We configure secure cloud hosting environments, manage data setup, and establish reliable API connections. Our focus is ensuring smooth transitions and uninterrupted business workflows.",
    icon: "GitMerge",
    deliverables: [
      "Cloud Hosting Setup & Configuration",
      "Third-Party API & Service Connections",
      "Database Setup & Data Migration",
      "Deployment Runbooks & Verification",
    ],
    technologies: ["AWS", "Python"],
    benefits: [
      "Smooth system setup and onboarding",
      "Reliable connectivity with external services",
      "Documented deployment procedures",
    ],
  },
  {
    id: "software-licensing-distribution",
    title: "Software Licensing & Distribution",
    shortDesc:
      "We package and distribute software solutions under clear commercial licensing terms and secure distribution models.",
    fullDesc:
      "We package and distribute software solutions under clear commercial licensing terms and secure distribution models. We assist clients with application delivery pipelines, entitlement validation, and managed release packaging. This ensures your software reaches users securely and under compliant licensing structures.",
    icon: "KeyRound",
    deliverables: [
      "Commercial Software Packaging",
      "License Validation & Access Controls",
      "Release Packaging & Distribution Setup",
      "Licensing Terms Documentation",
    ],
    technologies: ["Python", "AWS"],
    benefits: [
      "Secure application release processes",
      "Clear licensing terms and compliance",
      "Controlled software distribution channels",
    ],
  },
  {
    id: "maintenance-support",
    title: "Maintenance & Support",
    shortDesc:
      "We provide ongoing application updates, routine bug fixes, and infrastructure maintenance to keep systems current.",
    fullDesc:
      "We provide ongoing application updates, routine bug fixes, and infrastructure maintenance to keep systems current. As operational demands and external platforms evolve, our team manages updates, environment health, and feature refinements during standard business hours. We help sustain system reliability and code quality over time.",
    icon: "Headphones",
    deliverables: [
      "Routine Software & Security Updates",
      "Defect Remediation & Bug Fixes",
      "Cloud Environment Health Checks",
      "Scheduled Feature Refinements",
    ],
    technologies: ["AWS", "Python"],
    benefits: [
      "Sustained platform stability and hygiene",
      "Structured updates for OS and library changes",
      "Direct technical assistance during business hours",
    ],
  },
];

export const MOHABBATH_PORTFOLIO = {
  title: "Mohabbath Matrimony",
  description:
    "A matrimony app for Android and iOS, currently in development, built with Flutter and Python. Owned and operated by Miaga Technologies LLP.",
  url: "https://www.mohabbathmatrimony.com",
  technologies: ["Flutter", "Python"],
  status: "In Development",
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "Phase 01",
    number: "01",
    title: "Requirements & Discovery",
    tagline: "Clarifying business objectives and technical requirements",
    description:
      "We consult closely with your team to review project goals, system requirements, data workflows, and user expectations before drafting a clear delivery roadmap.",
    deliverables: ["Scope & Technical Outline", "Workflow Diagrams", "Project Milestones"],
  },
  {
    step: "Phase 02",
    number: "02",
    title: "UI/UX & Prototyping",
    tagline: "Designing intuitive interfaces and structured user journeys",
    description:
      "Our team develops wireframes, interactive screen prototypes, and design guidelines to ensure usability and alignment before engineering commences.",
    deliverables: ["Screen Wireframes", "Interactive Prototype", "UI Design System"],
  },
  {
    step: "Phase 03",
    number: "03",
    title: "Software Engineering",
    tagline: "Building clean, maintainable software and applications",
    description:
      "We develop applications using modular, well-documented codebases with version control and regular milestone reviews to maintain clear progress.",
    deliverables: ["Modular Codebase Repository", "API Integrations", "Development Staging Setup"],
  },
  {
    step: "Phase 04",
    number: "04",
    title: "Testing & Quality Verification",
    tagline: "Verifying stability, compatibility, and core functionality",
    description:
      "We run systematic functional tests across target platforms and devices to identify and resolve defects prior to launch.",
    deliverables: ["Test Execution Reports", "Cross-Device Validation", "Defect Remediation"],
  },
  {
    step: "Phase 05",
    number: "05",
    title: "Deployment & Distribution",
    tagline: "Deploying production software and publishing applications",
    description:
      "We configure production cloud infrastructure, deploy services, and prepare applications for store distribution according to documented procedures.",
    deliverables: ["Production Deployment", "Release Builds", "Configuration Runbooks"],
  },
  {
    step: "Phase 06",
    number: "06",
    title: "Maintenance & Updates",
    tagline: "Providing ongoing application support during business hours",
    description:
      "We provide scheduled maintenance, routine bug fixes, dependency updates, and feature enhancements to support your software over its lifecycle.",
    deliverables: ["Scheduled Updates", "Defect Fixes", "Technical Support"],
  },
];

export const TECH_CATEGORIES = [
  {
    name: "Core Technologies",
    items: ["Flutter", "Python", "AWS"],
  },
];

export const CONTACT_INFO = {
  company: COMPANY_CONFIG.legalName,
  email: COMPANY_CONFIG.email,
  phonePrimary: COMPANY_CONFIG.phones.primary,
  address: COMPANY_CONFIG.registeredOffice,
  hours: COMPANY_CONFIG.businessHours,
  responseWindow: COMPANY_CONFIG.responseWindow,
};
