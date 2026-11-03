import {
  Skill,
  ExperienceItem,
  ProjectItem,
  EducationItem,
  CertificationItem,
  SocialLink,
} from '@/types';

export const PERSONAL_INFO = {
  name: 'Syed Umair Shah',
  initials: 'SUS',
  roles: [
    'IT Support Specialist',
    'Software Developer',
    'Web Developer',
    'Technical Support Professional',
    'Aviation Customer Experience Professional',
  ],
  headline: 'Bridging Technology, Innovation & Exceptional Customer Experience.',
  secondaryHeadline: 'Turning Technology Into Meaningful Experiences.',
  summary:
    'I am a technology and customer service professional with experience in IT support, software development, technical troubleshooting, and international aviation operations. My expertise combines technical problem-solving with customer-focused service delivery.',
  detailedBio: [
    'With a dual foundation spanning enterprise IT systems and high-tempo international aviation operations, I bring a unique multidisciplinary perspective to every technical challenge.',
    'In IT support and software engineering, I specialize in resolving complex system issues, deploying robust web applications with modern stacks like React and Next.js, scripting enterprise workflows, and managing directory and cloud services (Microsoft 365, Active Directory).',
    'In international aviation hubs including Dubai International Airport (DXB) and Etihad Airways, I have managed critical passenger check-in, boarding operations, transfer coordination, and VIP Al Majlis service—cultivating composure under pressure, precision logistics, and empathetic communication.',
  ],
  location: 'Dubai, United Arab Emirates',
  locationDetails: 'Open to on-site, hybrid & international relocation opportunities',
  availability: 'Available for Immediate Engagement',
  email: 'syed.umair.shah@example.com', // Editable placeholder
  phone: '+971 50 000 0000', // Editable placeholder
  cvPath: '/resume.pdf',
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/syed-umair-shah',
    icon: 'Linkedin',
    username: 'linkedin.com/in/syed-umair-shah',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/syedumairshah',
    icon: 'Github',
    username: 'github.com/syedumairshah',
  },
  {
    name: 'Email',
    url: 'mailto:syed.umair.shah@example.com',
    icon: 'Mail',
    username: 'syed.umair.shah@example.com',
  },
];

export const TECHNICAL_SKILLS: Skill[] = [
  // Development
  { name: 'React.js', category: 'development', icon: 'Code2', level: 'Advanced', highlight: true, context: 'Modern hooks, state management & SPAs' },
  { name: 'Next.js', category: 'development', icon: 'Layers', level: 'Advanced', highlight: true, context: 'App Router, SSR/SSG & full-stack API routes' },
  { name: 'JavaScript', category: 'development', icon: 'FileCode', level: 'Advanced', highlight: true, context: 'ES6+, async architectures & DOM manipulation' },
  { name: 'HTML5', category: 'development', icon: 'Globe', level: 'Advanced', context: 'Semantic markup, accessibility & SEO best practices' },
  { name: 'CSS3 / Tailwind', category: 'development', icon: 'Palette', level: 'Advanced', context: 'Responsive design, animations & modern utility CSS' },
  { name: 'C#', category: 'development', icon: 'Cpu', level: 'Proficient', highlight: true, context: '.NET runtime, object-oriented desktop & API logic' },
  { name: 'SQL', category: 'development', icon: 'Database', level: 'Proficient', context: 'Relational schema design, queries, joins & optimization' },
  
  // Systems & IT Infrastructure
  { name: 'Windows Support', category: 'systems', icon: 'Monitor', level: 'Advanced', highlight: true, context: 'Enterprise OS troubleshooting, registry & deployment' },
  { name: 'Linux', category: 'systems', icon: 'Terminal', level: 'Proficient', context: 'Shell navigation, permissions & server configuration' },
  { name: 'Networking', category: 'systems', icon: 'Network', level: 'Advanced', highlight: true, context: 'TCP/IP, DNS, DHCP, VLANs, routers & VPN switches' },
  { name: 'Active Directory', category: 'systems', icon: 'Users2', level: 'Advanced', highlight: true, context: 'User provisioning, GPOs, domain security & access control' },
  { name: 'Microsoft 365', category: 'systems', icon: 'Cloud', level: 'Advanced', context: 'Exchange Online, Azure AD, SharePoint & admin console' },
  { name: 'Hardware Troubleshooting', category: 'systems', icon: 'Wrench', level: 'Advanced', context: 'Component diagnosis, workstation assembly & diagnostics' },
  { name: 'Software Troubleshooting', category: 'systems', icon: 'Bug', level: 'Advanced', context: 'Application debugging, crash dumps & conflict resolution' },
  { name: 'IT Asset Management', category: 'systems', icon: 'PackageCheck', level: 'Proficient', context: 'Lifecycle tracking, auditing, inventory & SLA control' },

  // Professional & Aviation Operations
  { name: 'Airport Operations', category: 'aviation', icon: 'Plane', level: 'Core Competency', highlight: true, context: 'Ramp-to-terminal coordination, gate control & turnaround' },
  { name: 'Passenger Check-in & Boarding', category: 'aviation', icon: 'QrCode', level: 'Core Competency', highlight: true, context: 'DCS systems, document verification & flight departure readiness' },
  { name: 'Customer Service & VIP Care', category: 'aviation', icon: 'HeartHandshake', level: 'Core Competency', highlight: true, context: 'High-touch hospitality, Al Majlis lounge VIP assistance' },
  { name: 'Customer Experience Design', category: 'aviation', icon: 'Smile', level: 'Core Competency', context: 'De-escalation, rapid dispute resolution & empathy' },
  { name: 'Problem Solving', category: 'aviation', icon: 'ShieldAlert', level: 'Core Competency', context: 'High-stress operational crisis resolution & contingency triage' },
  { name: 'Team Collaboration', category: 'aviation', icon: 'UserCheck', level: 'Core Competency', context: 'Cross-functional flight crew, ground staff & management synergy' },
  { name: 'Communication', category: 'aviation', icon: 'MessageSquare', level: 'Core Competency', context: 'Multilingual operational clarity & executive briefing' },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'etihad-airways',
    role: 'Guest Service Agent',
    company: 'Etihad Airways',
    location: 'Abu Dhabi International Airport (AUH) / Regional Ops',
    period: '2023 – Present [Editable Placeholder]',
    isCurrent: true,
    type: 'International Aviation Operations',
    description:
      'Orchestrating end-to-end guest journey operations at the national airline of the UAE, ensuring seamless, world-class passenger transit, stringent regulatory compliance, and rapid operational problem-solving.',
    keyResponsibilities: [
      'Managed international passenger check-in procedures using Departure Control Systems (DCS), verifying visas, travel documentation, and security clearances.',
      'Led precise gate boarding operations under strict turnaround timeframes, ensuring 100% manifest reconciliation and on-time flight departures.',
      'Staffed critical Transfer Desks, re-booking disrupted passengers, resolving missed flight connections, and issuing contingency vouchers in high-stress scenarios.',
      'Delivered bespoke passenger experience solutions adhering to Etihad’s world-renowned premium hospitality standards.',
      'Maintained continuous inter-departmental airport operational coordination with flight dispatch, baggage handling, and security teams.',
    ],
    operationalImpact: [
      'Maintained consistent on-time departure accuracy across peak holiday flight banks.',
      'De-escalated critical transit disruptions with calm authority, safeguarding brand trust.',
      'Awarded commendations for passenger service excellence and turnaround punctuality.',
    ],
    skillsApplied: [
      'Departure Control Systems (DCS)',
      'Passenger Check-in & Boarding',
      'Transfer Coordination',
      'Aviation Safety Compliance',
      'Crisis Management',
    ],
    accentColor: '#4facfe',
  },
  {
    id: 'dubai-airports',
    role: 'Customer Service Agent',
    company: 'Dubai International Airport (DXB)',
    location: 'Dubai, United Arab Emirates',
    period: '2022 – 2023 [Editable Placeholder]',
    isCurrent: false,
    type: 'World Aviation Hub Operations',
    description:
      'Delivered first-class guest assistance across the world’s busiest international travel hub, upholding legendary Dubai hospitality and supporting specialized VIP luxury services.',
    keyResponsibilities: [
      'Assisted thousands of international travelers daily with terminal navigation, flight queries, immigration guidance, and airline transfer logistics.',
      'Supported prestigious Al Majlis VIP service operations, catering to diplomatic delegates, high-net-worth executives, and VIP guests with private lounge handling.',
      'Facilitated special assistance passengers (PRM) ensuring compassionate, timely, and safe transit across extensive airport terminals.',
      'Collaborated closely with Dubai Police, General Directorate of Residency and Foreigners Affairs (GDRFA), and customs authorities to ensure smooth terminal flows.',
    ],
    operationalImpact: [
      'Streamlined passenger flow during major international events (e.g. EXPO 2020 legacies and global summits).',
      'Elevated passenger satisfaction survey scores through swift and culturally nuanced conflict resolution.',
    ],
    skillsApplied: [
      'Customer Experience (CX)',
      'Al Majlis VIP Services',
      'International Protocol',
      'Terminal Logistics',
      'Multicultural Communication',
    ],
    accentColor: '#00f2fe',
  },
  {
    id: 'buraq-technologies',
    role: 'IT Support & Software Development',
    company: 'Buraq Technologies',
    location: 'Technology Solutions Division',
    period: '2020 – 2022 [Editable Placeholder]',
    isCurrent: false,
    type: 'Enterprise IT & Software Engineering',
    description:
      'Delivered dual-track value by providing Tier 1/2 enterprise IT support, maintaining infrastructure uptime, and building custom software solutions for business clients.',
    keyResponsibilities: [
      'Delivered responsive technical support across hardware, operating systems (Windows & Linux), network appliances, and productivity software suites.',
      'Engineered and maintained internal web modules and database-driven software applications using modern front-end frameworks, C#, and SQL.',
      'Administered enterprise Active Directory domains, provisioning user accounts, assigning role-based security permissions, and managing Group Policy Objects (GPOs).',
      'Conducted on-site and remote hardware diagnostics, repairing motherboard components, diagnosing network drops, and configuring managed switches.',
      'Implemented automated IT asset management systems and maintained detailed incident documentation to uphold SLA compliance.',
    ],
    operationalImpact: [
      'Reduced average ticket resolution time by 35% through standardized troubleshooting playbooks and automated diagnostic scripts.',
      'Developed custom client-facing web portals resulting in smoother client communication and automated reporting.',
    ],
    skillsApplied: [
      'Software Development (C#, JS, SQL)',
      'Active Directory & Windows Administration',
      'Network Configuration & Troubleshooting',
      'IT Asset Management',
      'Tier 1/2 Helpdesk Support',
    ],
    accentColor: '#7f5af0',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'aeropulse-dashboard',
    title: 'AeroPulse – Airline Operations & Passenger Flow System',
    category: 'web',
    categoryLabel: 'Web Development',
    shortDescription:
      'Real-time airport terminal monitoring and passenger transit coordination platform with live flight telemetry and turnaround tracking.',
    fullDescription:
      'AeroPulse is an enterprise-grade airport operations platform designed to bridge ground operations with passenger flow monitoring. Built with Next.js App Router, TypeScript, and Tailwind CSS, it visualizes gate allocation, passenger transit bottlenecks, on-time performance metrics, and crew notifications.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
    techStack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'WebSockets'],
    liveUrl: 'https://aeropulse-demo.vercel.app',
    githubUrl: 'https://github.com/syedumairshah/aeropulse-operations-suite',
    featured: true,
    highlights: [
      'Interactive radar & gate turnaround visualizer',
      'Real-time passenger connection risk scoring',
      'Role-based views for Gate Leads and Duty Managers',
      'Zero-latency alert notification pipeline',
    ],
  },
  {
    id: 'omnidesk-asset-tracker',
    title: 'OmniDesk – Enterprise IT Asset & Ticket Management',
    category: 'software',
    categoryLabel: 'Software Development',
    shortDescription:
      'Full-stack IT support portal featuring automated hardware lifecycle tracking, Active Directory synchronization, and incident resolution workflows.',
    fullDescription:
      'Designed to streamline corporate IT helpdesks, OmniDesk merges hardware asset auditing with automated ticketing queues. Built with C# .NET Core, SQL relational databases, and a modern responsive dashboard, it reduces mean time to resolution (MTTR) while maintaining strict audit trails.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    techStack: ['C# .NET', 'SQL Server', 'React', 'Tailwind CSS', 'REST API'],
    liveUrl: 'https://omnidesk-it.vercel.app',
    githubUrl: 'https://github.com/syedumairshah/omnidesk-asset-manager',
    featured: true,
    highlights: [
      'Automated hardware warranty and deprecation scheduler',
      'Active Directory user-to-workstation mapping',
      'Interactive SLA dashboard with drill-down metrics',
      'Encrypted audit trails for compliance validation',
    ],
  },
  {
    id: 'securenet-infrastructure',
    title: 'SecureNet Core – Multi-Branch Enterprise Network & AD Blueprint',
    category: 'it-solutions',
    categoryLabel: 'IT Solutions',
    shortDescription:
      'Architectural blueprint and automation scripts for deploying secure hybrid Active Directory, VPN tunnels, and Microsoft 365 cloud governance.',
    fullDescription:
      'A comprehensive infrastructure deployment package engineered for growing multi-site organizations. Includes automated PowerShell provisioning scripts, hardened Group Policy Object (GPO) baselines, automated backup routines, and dual-factor VPN security policies.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    techStack: ['Active Directory', 'Windows Server', 'PowerShell', 'Microsoft 365', 'Cisco / MikroTik'],
    liveUrl: 'https://github.com/syedumairshah/securenet-infrastructure-blueprint',
    githubUrl: 'https://github.com/syedumairshah/securenet-infrastructure-blueprint',
    featured: true,
    highlights: [
      'Automated PowerShell onboarding script suite',
      'Zero-trust network segmentation and VLAN zoning',
      'Hybrid Azure AD sync deployment guide',
      'Automated backup verification test harness',
    ],
  },
  {
    id: 'lumina-wayfinding-ux',
    title: 'Lumina – Airport Terminal Digital Wayfinding Experience',
    category: 'creative',
    categoryLabel: 'Creative Projects',
    shortDescription:
      'Intuitive interactive 3D wayfinding portal for airport passengers navigating duty-free concourses, gates, and VIP lounges.',
    fullDescription:
      'An award-inspired digital kiosk experience designed to simplify airport terminal navigation. Features smooth interactive floor plans, walking time calculators tailored for passengers with tight connections, and localized multilingual prompts.',
    image: 'https://images.unsplash.com/photo-1508873696983-2df5703bc225?auto=format&fit=crop&w=1200&q=80',
    techStack: ['React', 'Three.js / WebGL', 'Framer Motion', 'Tailwind CSS'],
    liveUrl: 'https://lumina-wayfinding.vercel.app',
    githubUrl: 'https://github.com/syedumairshah/lumina-airport-wayfinding',
    featured: false,
    highlights: [
      'Interactive 3D concourse rendering with step-by-step pathfinding',
      'Live boarding countdown and gate distance calculator',
      'Full WCAG 2.1 AA accessibility compliance',
      'Instant language switching (English, Arabic, Hindi, Mandarin)',
    ],
  },
  {
    id: 'cloudsync-backup-engine',
    title: 'CloudSync Pro – Secure Incremental Backup Agent',
    category: 'software',
    categoryLabel: 'Software Development',
    shortDescription:
      'Lightweight background service for encrypted off-site backup synchronization with bandwidth throttling and anomaly detection.',
    fullDescription:
      'Built to provide resilient data protection for remote staff and branch offices. Features AES-256 local encryption before transfer, chunk-level deduplication, and an administrative health monitor.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    techStack: ['C#', '.NET Core', 'SQLite', 'Azure Blob Storage', 'WPF'],
    liveUrl: 'https://github.com/syedumairshah/cloudsync-backup-engine',
    githubUrl: 'https://github.com/syedumairshah/cloudsync-backup-engine',
    featured: false,
    highlights: [
      'Block-level delta transfers saving 80% network overhead',
      'Automated silent background execution with low CPU footprint',
      'Instant administrative Slack / Teams alert webhooks',
    ],
  },
  {
    id: 'devfolio-luxury-experience',
    title: 'Apex – Editorial Luxury Portfolio Framework',
    category: 'web',
    categoryLabel: 'Web Development',
    shortDescription:
      'Ultra-high performance, Awwwards-inspired modern portfolio template featuring fluid physics animations, dynamic glassmorphism, and SEO mastery.',
    fullDescription:
      'Crafted with Next.js 14, Framer Motion, and Tailwind CSS. Showcases how editorial typography and dark-mode luminescence combine to deliver a museum-grade digital presentation.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    techStack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://syedumairshah.vercel.app',
    githubUrl: 'https://github.com/syedumairshah/syed-umair-shah-portfolio',
    featured: false,
    highlights: [
      '100/100 Google Lighthouse performance score target',
      'Granular dynamic accent color switcher',
      'Fully responsive fluid typography and grid system',
    ],
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'bs-it',
    degree: 'Bachelor of Science in Information Technology (BS IT)',
    institution: 'Accredited University [Editable Placeholder]',
    location: 'Higher Education Commission Recognized',
    period: '2016 – 2020 [Editable Placeholder]',
    status: 'Graduated / Degree Conferred',
    description:
      'Comprehensive four-year computer science curriculum covering object-oriented software development, enterprise database design, network architecture, and operating systems.',
    keyCourses: [
      'Software Engineering & OOP',
      'Database Management Systems & SQL',
      'Computer Networks & Distributed Systems',
      'Information Security & Cryptography',
      'Web Application Engineering',
      'Operating Systems & System Administration',
    ],
  },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: 'cert-m365',
    title: 'Microsoft 365 Certified: Fundamentals (MS-900)',
    issuer: 'Microsoft Corporation [Editable Placeholder]',
    dateOrStatus: 'Certified / Verified [Editable]',
    badgeCode: 'MS-900-VERIFIED',
    description: 'Demonstrated foundational knowledge of Microsoft 365 cloud services, security, compliance, privacy, and pricing.',
    skills: ['Microsoft 365 Admin', 'Azure Active Directory', 'Cloud Governance', 'Security & Compliance'],
  },
  {
    id: 'cert-comptia',
    title: 'CompTIA Network+ / A+ Infrastructure Track',
    issuer: 'CompTIA Computing Technology Industry Association [Editable]',
    dateOrStatus: 'Professional Track [Editable]',
    badgeCode: 'COMPTIA-NET-A',
    description: 'Core validation of enterprise networking protocols, hardware architecture, subnets, routing, and operational security.',
    skills: ['TCP/IP & Subnetting', 'Hardware Diagnostics', 'Network Security', 'System Troubleshooting'],
  },
  {
    id: 'cert-iata',
    title: 'IATA Airline Passenger Services & DCS Operational Standards',
    issuer: 'Aviation Regulatory / Airline Training Academy [Editable]',
    dateOrStatus: 'Completed Certification [Editable]',
    badgeCode: 'IATA-OPS-PAX',
    description: 'Comprehensive operational certification in international travel documentation, dangerous goods regulations (DGR), and DCS ticketing.',
    skills: ['Passenger Handling (DCS)', 'Travel Regulations', 'Dangerous Goods Awareness', 'Aviation Safety'],
  },
  {
    id: 'cert-fullstack',
    title: 'Modern Full-Stack Web Development (React & Next.js)',
    issuer: 'Professional Developer Institute [Editable]',
    dateOrStatus: 'Completed Certification [Editable]',
    badgeCode: 'DEV-REACT-NEXT',
    description: 'Advanced engineering certification focusing on modern TypeScript, server-side rendering, reactive state architectures, and Tailwind CSS design systems.',
    skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'API Integration'],
  },
];

