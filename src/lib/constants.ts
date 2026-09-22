import { NavItem, ServiceItem, ProductItem, ProcessStep } from "@/types";

export const COMPANY_NAME = "Miaga Technologies LLP";
export const COMPANY_TAGLINE = "Engineering Elegant Digital Realities";
export const COMPANY_DESCRIPTION =
  "Miaga Technologies LLP is an advanced technology practice specializing in end-to-end software development, mobile applications, proprietary platforms, and high-concurrency OTT video streaming architectures.";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "OTT Platforms", href: "/ott-platforms", badge: "Specialty" },
  { label: "Products", href: "/products", badge: "In-House" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "custom-software",
    title: "Custom Software Development",
    shortDesc:
      "Enterprise-grade web platforms, scalable microservices, distributed cloud backends, and bespoke business systems tailored to complex domain logic.",
    fullDesc:
      "We design and build resilient digital foundations from the ground up. Whether architecting high-throughput transactional APIs, modular microservices, or mission-critical enterprise workflows, our engineers adhere to strict domain-driven design, clean architecture, and automated CI/CD pipelines.",
    icon: "Code2",
    deliverables: [
      "Distributed Microservices Architecture",
      "Cloud-Native Backend Infrastructure",
      "High-Performance REST & GraphQL APIs",
      "Enterprise Workflow Automation Systems",
      "Database Modeling & Sharding Optimization",
    ],
    technologies: ["Node.js", "Go", "Python", "PostgreSQL", "Redis", "Docker", "Kubernetes", "AWS"],
    benefits: [
      "Fault-tolerant, horizontally scalable architecture",
      "Strict data integrity and compliance posture",
      "Maintainable, cleanly documented codebases",
    ],
  },
  {
    id: "mobile-apps",
    title: "Web & Mobile App Development",
    shortDesc:
      "Native iOS and Android applications along with reactive modern web frontends engineered for fluid 60fps animations and offline capability.",
    fullDesc:
      "From native iOS (Swift) and Android (Kotlin) flagship experiences to versatile cross-platform ecosystems (Flutter & React Native), we craft mobile solutions that combine pixel-perfect fluid UI with deep device integration, biometrics, push notifications, and offline data sync.",
    icon: "Smartphone",
    deliverables: [
      "Native iOS Apps (Swift / SwiftUI)",
      "Native Android Apps (Kotlin / Jetpack Compose)",
      "Cross-Platform Solutions (Flutter / React Native)",
      "Offline-First Data Synchronization",
      "App Store & Google Play Launch Management",
    ],
    technologies: ["Swift", "SwiftUI", "Kotlin", "Flutter", "React Native", "Next.js", "TypeScript"],
    benefits: [
      "Hardware-accelerated performance & 60fps UI",
      "Intuitive tactile touch gestures and haptics",
      "Seamless background synchronization & caching",
    ],
  },
  {
    id: "ott-platforms",
    title: "OTT / Video Streaming Platforms",
    shortDesc:
      "End-to-end video streaming solutions featuring ultra-low latency ingestion, adaptive bitrate delivery, multi-DRM security, and custom player SDKs.",
    fullDesc:
      "Our premier practice area: we architect carrier-grade OTT and VOD streaming platforms capable of scaling to millions of concurrent viewers. We build multi-screen frontends for Smart TVs, Web, and Mobile, backed by resilient video CMS, live transcoding, subscription billing, and real-time QoE telemetry.",
    icon: "Tv",
    deliverables: [
      "Live & VOD Video Ingestion & Transcoding",
      "Low-Latency HLS & MPEG-DASH Streaming",
      "Multi-DRM Integration (Widevine, FairPlay, PlayReady)",
      "Smart TV Apps (Tizen, webOS, Android TV, Apple TV)",
      "Monetization Engines (SVOD, AVOD with SSAI, TVOD)",
    ],
    technologies: ["HLS / DASH", "FFmpeg", "AWS MediaLive", "CMAF", "Video.js / Shaka", "Shaka Player", "WebRTC"],
    benefits: [
      "Sub-second live streaming latency",
      "Buffer-free adaptive bitrate switching",
      "Enterprise DRM protecting premium content",
    ],
  },
  {
    id: "ui-ux-design",
    title: "UI/UX & Experience Design",
    shortDesc:
      "Sophisticated design systems, human-centered UX research, interactive prototypes, and production design tokens tuned for digital elegance.",
    fullDesc:
      "Design at Miaga combines aesthetic wonder with rigorous usability. We map user journeys, construct cohesive multi-brand design systems, and prototype intricate micro-interactions, ensuring every digital touchpoint feels intuitive, polished, and distinctly memorable.",
    icon: "Palette",
    deliverables: [
      "Comprehensive Multi-Brand Design Systems",
      "User Research & Quantitative Journey Mapping",
      "High-Fidelity Interactive Figma Prototypes",
      "Accessible Micro-Interactions & Motion Design",
      "Production-Ready Design Tokens & Guidelines",
    ],
    technologies: ["Figma", "Design Tokens", "Framer", "Prototyping", "WCAG 2.1 AA", "Storybook"],
    benefits: [
      "Accelerated engineering velocity via tokens",
      "Frictionless user flows reducing churn",
      "Distinctive, award-grade visual identity",
    ],
  },
  {
    id: "testing-qa",
    title: "Testing & Quality Assurance",
    shortDesc:
      "Automated regression suites, load testing for concurrency spikes, device matrix validation, and deep security audits.",
    fullDesc:
      "Reliability is non-negotiable. Our dedicated QA engineers build automated continuous testing suites covering end-to-end user flows, API contracts, cross-browser compatibility, real-device mobile farms, and heavy-concurrency stress testing.",
    icon: "ShieldCheck",
    deliverables: [
      "Automated End-to-End Regression Suites",
      "High-Concurrency Load & Stress Testing",
      "Mobile Device Lab Matrix Validation",
      "Security Audits & Vulnerability Assessments",
      "Automated CI/CD Quality Gate Integration",
    ],
    technologies: ["Playwright", "Cypress", "Appium", "k6", "Jest", "SonarQube", "OWASP ZAP"],
    benefits: [
      "Zero-downtime releases with verified stability",
      "Early defect detection minimizing technical debt",
      "Predictable performance during traffic spikes",
    ],
  },
  {
    id: "implementation-integration",
    title: "Implementation & Integration",
    shortDesc:
      "Smooth enterprise deployment, legacy system migration, ERP/CRM bridges, and cloud infrastructure orchestration.",
    fullDesc:
      "We orchestrate complex enterprise rollouts without disrupting existing business operations. Our integration engineers configure hybrid-cloud environments, modernize legacy codebases, and establish high-throughput data pipelines linking internal systems with external partners.",
    icon: "GitMerge",
    deliverables: [
      "Enterprise Cloud Migration & Setup",
      "Legacy Code Modernization & Refactoring",
      "ERP / CRM / Payment Gateway Integration",
      "Automated CI/CD Deployment Pipelines",
      "Zero-Downtime Data Migration & Sync",
    ],
    technologies: ["AWS", "Google Cloud", "Terraform", "Docker", "Stripe", "Salesforce API", "Kafka"],
    benefits: [
      "Seamless cutovers without operational pause",
      "Robust data synchronization and idempotency",
      "Infrastructure-as-Code for reproducible setups",
    ],
  },
  {
    id: "software-licensing",
    title: "Software Licensing & Distribution",
    shortDesc:
      "Commercial distribution frameworks, enterprise seat management, cryptographic license keys, and compliant packaging.",
    fullDesc:
      "For software creators and enterprise platform operators, we design robust software licensing infrastructures. We implement cryptographic license verification, multi-tenant subscription tiers, seat-based access management, and automated update delivery networks.",
    icon: "KeyRound",
    deliverables: [
      "Cryptographic License Generation & Validation",
      "Multi-Tenant Seat & Quota Enforcement",
      "Digital Rights & IP Protection Architecture",
      "Automated Software Distribution & OTA Updates",
      "Compliance & Usage Analytics Telemetry",
    ],
    technologies: ["Ed25519 / RSA Cryptography", "OAuth 2.0", "Stripe Billing", "Electron Auto-Updater", "Docker Hub"],
    benefits: [
      "Tamper-resistant license verification",
      "Frictionless self-serve tier upgrades",
      "Automated over-the-air binary distribution",
    ],
  },
  {
    id: "maintenance-support",
    title: "Maintenance & 24/7 Support",
    shortDesc:
      "Proactive infrastructure monitoring, SLA-backed incident response, security patch management, and ongoing feature iterations.",
    fullDesc:
      "Software longevity demands continuous care. Miaga provides dedicated DevOps and engineering support to monitor uptime, apply critical security patches, optimize cloud expenditures, and continually refine platform features to meet evolving business needs.",
    icon: "Headphones",
    deliverables: [
      "24/7 Automated Telemetry & Uptime Monitoring",
      "SLA-Backed Rapid Incident Response",
      "Quarterly Security Audits & Dependency Patching",
      "Cloud Infrastructure Cost Optimization",
      "Ongoing Feature Enhancement Sprints",
    ],
    technologies: ["Datadog", "Prometheus", "Grafana", "AWS CloudWatch", "PagerDuty", "Terraform"],
    benefits: [
      "Guaranteed 99.95%+ uptime SLAs",
      "Predictable operational expenditures",
      "Proactive remediation before users notice issues",
    ],
  },
];

export const PRODUCTS: ProductItem[] = [
  {
    id: "streamcore-ott",
    name: "[Product: StreamCore OTT Engine]",
    codeName: "SC-9000",
    tagline: "Carrier-Grade Video Orchestration & Dynamic Ingestion Framework",
    description:
      "A modular, proprietary video streaming backbone engineered for media broadcasters and OTT operators. Features automated live-to-VOD packaging, server-side ad insertion (SSAI), and multi-CDN load balancing.",
    status: "In Beta",
    capabilities: [
      "Ultra-low latency CMAF & chunked HLS/DASH packaging",
      "Dynamic Server-Side Ad Insertion (SSAI) with SCTE-35 markers",
      "Multi-DRM key rotation across Widevine, FairPlay, and PlayReady",
      "Automated subtitle and multi-audio language track stitching",
      "Sub-second failover across geographically distributed origin servers",
    ],
    techStack: ["Rust", "FFmpeg", "Go", "AWS MediaPackage", "WebAssembly"],
    specs: {
      "Latency Target": "< 1.5s Glass-to-Glass",
      "Concurrency Tested": "[1.2M+ Concurrent Streams]",
      "Target Resolution": "Up to 8K HDR10+ / Dolby Vision",
      "Licensing Model": "[Enterprise On-Prem & Managed Cloud]",
    },
  },
  {
    id: "aurapulse-qa",
    name: "[Product: AuraPulse QA Automation]",
    codeName: "AP-V2",
    tagline: "Autonomous Concurrency & Video QoE Benchmarking Suite",
    description:
      "A proprietary quality assurance harness purpose-built for high-concurrency digital platforms. Simulates millions of synthetic users, measuring network jitter, video buffer ratios, and API latency in real time.",
    status: "In Beta",
    capabilities: [
      "Synthetic video player emulation with QoS/QoE telemetry capture",
      "Automated regression pipelines integrated with GitHub Actions and GitLab",
      "Dynamic latency degradation and packet-loss simulation",
      "Real-time visual reports with automatic root-cause bottleneck detection",
    ],
    techStack: ["TypeScript", "Python", "k6 Engine", "ClickHouse", "React"],
    specs: {
      "Simulation Capacity": "[500,000 Virtual Users / Node]",
      "Metrics Captured": "Buffer Ratio, TTFB, Startup Latency, Bitrate Switches",
      "Integrations": "[Jira, Slack, Datadog, CI/CD]",
      "Deployment": "[Docker Containerized / Helm Chart]",
    },
  },
  {
    id: "omnisync-mobile",
    name: "[Product: OmniSync Mobile Framework]",
    codeName: "OS-MOBILE",
    tagline: "Ultra-Lightweight Distributed Offline-First State Engine",
    description:
      "An in-house mobile framework accelerating iOS and Android app engineering. Provides bi-directional deterministic offline caching, CRDT conflict resolution, and instant background sync.",
    status: "Enterprise Active",
    capabilities: [
      "Conflict-free replicated data types (CRDT) for seamless offline editing",
      "Zero-latency local reads with transactional SQLite and Room/CoreData wrappers",
      "Encrypted peer-to-peer data synchronization over local networks (BLE/Wi-Fi)",
      "Minimal binary footprint (< 250KB added to target app bundle)",
    ],
    techStack: ["Swift", "Kotlin", "C++ Core", "SQLite", "Protobuf"],
    specs: {
      "Sync Overhead": "< 12ms Round-Trip",
      "Security": "AES-256-GCM At Rest & TLS 1.3 In Flight",
      "Footprint": "[< 250 KB Binary Overhead]",
      "Compatibility": "iOS 15+, Android 8.0+",
    },
  },
  {
    id: "nexalicensing",
    name: "[Product: NexaLicensing Manager]",
    codeName: "NL-ENTERPRISE",
    tagline: "Cryptographic Software Entitlement & Distribution Platform",
    description:
      "A turnkey licensing infrastructure enabling software companies to securely issue, revoke, and verify offline and online licenses for desktop, mobile, and enterprise appliances.",
    status: "Proprietary R&D",
    capabilities: [
      "Asymmetric Ed25519 digital signatures preventing license tampering",
      "Hardware-fingerprinted node locking with graceful hardware change allowances",
      "Automated over-the-air update delta distribution with integrity checksums",
      "Seat management dashboard with enterprise SSO (SAML / OIDC)",
    ],
    techStack: ["Go", "Rust", "Next.js", "PostgreSQL", "Tailscale API"],
    specs: {
      "Verification Speed": "< 0.8ms Local Verification",
      "Encryption": "Ed25519 / ChaCha20-Poly1305",
      "Supported OS": "Windows, macOS, Linux, Embedded Linux",
      "Availability": "[Private Enterprise Alpha]",
    },
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "Phase 01",
    number: "01",
    title: "Discover & Architect",
    tagline: "Understanding core objectives & engineering boundaries",
    description:
      "We unpack your business requirements, analyze concurrency demands, examine technical constraints, and draft formal architecture specifications with precise security and scalability roadmaps.",
    deliverables: ["Technical Architecture Document", "System Data Flow Diagrams", "Infrastructure Cost Projections"],
  },
  {
    step: "Phase 02",
    number: "02",
    title: "Design & Prototype",
    tagline: "Crafting ethereal UI and functional interactive flows",
    description:
      "Our design team creates high-fidelity design systems, intuitive user journeys, and interactive clickable prototypes in Figma. We validate usability, accessibility (WCAG AA), and brand coherence before a single line of code is written.",
    deliverables: ["Full Interactive Figma Prototype", "Design Token Library", "Component Specification Matrix"],
  },
  {
    step: "Phase 03",
    number: "03",
    title: "Engineering & Build",
    tagline: "Clean, modular code built with modern stacks",
    description:
      "Agile two-week sprints where senior engineers build your product using modular microservices, clean frontends, and automated CI/CD pipelines. Every pull request undergoes peer review and automated linting.",
    deliverables: ["Modular Codebase Repository", "Continuous Integration Pipelines", "Interactive Staging Environments"],
  },
  {
    step: "Phase 04",
    number: "04",
    title: "Rigorous QA & Testing",
    tagline: "Stress-testing every boundary condition",
    description:
      "We subject the platform to high-concurrency load testing, security vulnerability scans, cross-device matrix validation, and automated regression suites to guarantee resilience under real-world stress.",
    deliverables: ["Load Testing Benchmark Report", "Automated Test Coverage Suite", "Security Audit Sign-Off"],
  },
  {
    step: "Phase 05",
    number: "05",
    title: "Production Launch",
    tagline: "Zero-downtime deployment & global CDN cutover",
    description:
      "Orchestrated rollout using blue-green or canary deployments. We monitor DNS propagation, configure global edge caching, verify telemetry feeds, and oversee live user onboarding.",
    deliverables: ["Production Cloud Environment", "Edge CDN Configuration", "Live Monitoring Dashboards"],
  },
  {
    step: "Phase 06",
    number: "06",
    title: "Maintain & Evolve",
    tagline: "Long-term performance, SLA guarantees & continuous upgrades",
    description:
      "Post-launch, our team provides proactive monitoring, security updates, feature iterations, and 24/7 SLA-backed support, ensuring your digital asset continuously leads its industry.",
    deliverables: ["24/7 Telemetry Monitoring", "SLA Support Agreement", "Quarterly Roadmap Iteration"],
  },
];

export const TECH_CATEGORIES = [
  {
    name: "Frontend & Web",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vue.js", "WebAssembly", "WebGL / Three.js"],
  },
  {
    name: "Mobile Ecosystem",
    items: ["iOS (Swift / SwiftUI)", "Android (Kotlin / Jetpack)", "Flutter", "React Native", "Native SDKs"],
  },
  {
    name: "Video & OTT",
    items: ["HLS / MPEG-DASH", "CMAF Low Latency", "FFmpeg Transcoding", "AWS MediaServices", "Shaka Player", "Multi-DRM"],
  },
  {
    name: "Backend & Systems",
    items: ["Node.js", "Go (Golang)", "Python", "Rust", "PostgreSQL", "Redis", "Kafka", "GraphQL"],
  },
  {
    name: "Cloud & DevOps",
    items: ["Amazon Web Services", "Google Cloud Platform", "Kubernetes", "Docker", "Terraform", "CI/CD GitHub Actions"],
  },
  {
    name: "Quality & Security",
    items: ["Playwright", "k6 Load Testing", "OWASP Security", "SonarQube", "Datadog Telemetry", "Sentry"],
  },
];

export const CONTACT_INFO = {
  company: "Miaga Technologies LLP",
  email: "contact@miagatech.com",
  phone: "+1 (800) 555-0199 / +91 80 4000 0000",
  address: "[Registered Office Address: Tech Zone, Innovation Boulevard, Silicon Corridor, Bengaluru, Karnataka, India]",
  hours: "Monday – Friday: 9:00 AM – 6:00 PM IST (24/7 Emergency SLA Support)",
  slaResponseTime: "< 2 hours for critical enterprise requests",
};
