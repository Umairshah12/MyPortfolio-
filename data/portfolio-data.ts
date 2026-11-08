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
  location: 'Islamabad, Pakistan',
  locationDetails: 'Federal Capital, Pakistan • Available for Remote, Hybrid & Relocation Roles',
  availability: 'Available for Immediate Engagement',
  email: 'syedumairshah763@gmail.com',
  phone: '+92 313 9837430',
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
    url: 'https://github.com/Umairshah12',
    icon: 'Github',
    username: 'github.com/Umairshah12',
  },
  {
    name: 'Email',
    url: 'mailto:syedumairshah763@gmail.com',
    icon: 'Mail',
    username: 'syedumairshah763@gmail.com',
  },
];

export const TECHNICAL_SKILLS: Skill[] = [
  // Development
  { name: 'React.js', category: 'development', icon: 'Code2', level: 'Advanced', highlight: true, context: 'Modern hooks, state management & SPAs' },
  { name: 'Next.js', category: 'development', icon: 'Layers', level: 'Advanced', highlight: true, context: 'App Router, SSR/SSG & full-stack API routes' },
  { name: 'JavaScript', category: 'development', icon: 'FileCode', level: 'Advanced', highlight: true, context: 'ES6+, async architectures & DOM manipulation' },
  { name: 'HTML5', category: 'development', icon: 'Globe', level: 'Advanced', context: 'Semantic markup, accessibility & SEO best practices' },
  { name: 'CSS3 / Tailwind', category: 'development', icon: 'Palette', level: 'Advanced', context: 'Responsive design, animations & modern utility CSS' },
  { name: 'C++', category: 'development', icon: 'Cpu', level: 'Proficient', highlight: true, context: 'Object-oriented programming, data structures, algorithms & high-performance logic' },
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
    period: '2023 – Present',
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
    period: '2022 – 2023',
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
    period: '2020 – 2022',
    isCurrent: false,
    type: 'Enterprise IT & Software Engineering',
    description:
      'Delivered dual-track value by providing Tier 1/2 enterprise IT support, maintaining infrastructure uptime, and building custom software solutions for business clients.',
    keyResponsibilities: [
      'Delivered responsive technical support across hardware, operating systems (Windows & Linux), network appliances, and productivity software suites.',
      'Engineered and maintained internal software modules and database-driven applications using modern frameworks, C++, and SQL.',
      'Administered enterprise Active Directory domains, provisioning user accounts, assigning role-based security permissions, and managing Group Policy Objects (GPOs).',
      'Conducted on-site and remote hardware diagnostics, repairing motherboard components, diagnosing network drops, and configuring managed switches.',
      'Implemented automated IT asset management systems and maintained detailed incident documentation to uphold SLA compliance.',
    ],
    operationalImpact: [
      'Reduced average ticket resolution time by 35% through standardized troubleshooting playbooks and automated diagnostic scripts.',
      'Developed custom client-facing web portals resulting in smoother client communication and automated reporting.',
    ],
    skillsApplied: [
      'Software Development (C++, JS, SQL)',
      'Active Directory & Windows Administration',
      'Network Configuration & Troubleshooting',
      'IT Asset Management',
      'Tier 1/2 Helpdesk Support',
    ],
    accentColor: '#7f5af0',
  },
];

export const PROJECTS: ProjectItem[] = [];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'bs-it',
    degree: 'Bachelor of Science in Information Technology (BS IT)',
    institution: 'Higher Education Commission (HEC) Accredited University',
    location: 'Recognized University',
    period: '2016 – 2020',
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
    id: 'cert-software-dev',
    title: 'Software Development & Frontend Engineering (React.js & JavaScript)',
    issuer: 'Professional Software Engineering Specialization',
    dateOrStatus: 'Professional Credential',
    badgeCode: 'DEV-REACT-JS',
    description: 'Advanced development with modern JavaScript (ES6+), React.js ecosystem, state management, component architecture, asynchronous APIs, and responsive design systems.',
    skills: ['Software Development', 'React.js', 'JavaScript (ES6+)', 'TypeScript', 'Frontend Architecture', 'State Management'],
  },
  {
    id: 'cert-m365',
    title: 'Microsoft 365 Certified: Fundamentals (MS-900)',
    issuer: 'Microsoft Corporation',
    dateOrStatus: 'Certified / Verified',
    badgeCode: 'MS-900-VERIFIED',
    description: 'Demonstrated foundational knowledge of Microsoft 365 cloud services, security, compliance, privacy, and pricing.',
    skills: ['Microsoft 365 Admin', 'Azure Active Directory', 'Cloud Governance', 'Security & Compliance'],
  },
  {
    id: 'cert-iata',
    title: 'IATA Airline Passenger Services & DCS Operational Standards',
    issuer: 'Aviation Regulatory & Airline Operations Academy',
    dateOrStatus: 'Certified Professional',
    badgeCode: 'IATA-OPS-PAX',
    description: 'Comprehensive operational certification in international travel documentation, dangerous goods regulations (DGR), and DCS ticketing.',
    skills: ['Passenger Handling (DCS)', 'Travel Regulations', 'Dangerous Goods Awareness', 'Aviation Safety'],
  },
  {
    id: 'cert-fullstack',
    title: 'Modern Full-Stack Web Development (React & Next.js)',
    issuer: 'Professional Developer Institute',
    dateOrStatus: 'Certified Specialist',
    badgeCode: 'DEV-REACT-NEXT',
    description: 'Advanced engineering certification focusing on modern TypeScript, server-side rendering, reactive state architectures, and Tailwind CSS design systems.',
    skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'API Integration'],
  },
];

