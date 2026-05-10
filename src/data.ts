
import projet1 from './asstes/projet/projet1.png';
import projet2 from './asstes/projet/projet2.png';
import projet3 from './asstes/projet/projet3.png';
import projet4 from './asstes/projet/projet4.png';
import authentic from './asstes/projet/Authentic.png';
import spirnthack from './asstes/projet/spirnthack.png';

export const profile = {
  title: "Cybersecurity Researcher | Cryptography | Machine Learning | Full-Stack Developer",
  email: "mamakemrosly@gmail.com",
  phone: "(+237) 6 50 98 31 90",
  web: "mamekem-rosly.vercel.app",
  linkedin: "rosly-mamekem",
  bio: `Because eloquent speakers can be deceptive, I let my work speak for itself. What drives me is not a predefined career path but genuine curiosity: the mathematics behind cryptographic proofs, the psychology of an attacker, the elegance of systems that simply work, and the challenge of solving problems that actually matter. My interests span research in cryptography (including deep dives into 'Darkside' mechanisms), machine learning for cybersecurity, full-stack development, ethical hacking, and building meaningful technological ecosystems.`,
  motto: "Eloquent speakers can be deceptive, so I let my work speak for itself.",
  testimonials: [
    { name: "Dr. Kadzue Oscar", role: "Director at APILEC Association", comment: "A dedicated professional with a deep understanding of security systems and architectural integrity." },
   
    { name: "Paul DKP", role: "Director at DKP-B-learning", comment: "A reliable partner in developing scalable and secure educational platforms." },
    { name: "Zenderock Emmanuel", role: "Frontend Dev", comment: "Working with Rosly ensures that every codebase is not only functional but architecturally sound." }
  ],
  education: [
    {
      degree: "Master’s in Applied Mathematics, specialization in Computer Security & Machine learning",
      school: "African Institute for Mathematical Sciences (AIMS)",
      location: "Senegal",
      period: "2025 – Present",
      highlights: [
        "Focus: Network Security, Machine Learning, Optimization",
        "Research thesis: 'Privacy-Preserving graph neural network for intrusion detection system in intrusion detection system in iot environment'",
        "Mastercard Foundation Scholar fully funded merit scholarship"
      ]
    },
    
    {
      degree: "Master’s in Applied Cryptology & Cybersecurity",
      school: "National Higher Polytechnic Institute Bamenda - Center for Cybersecurity & Mathematical Cryptology",
      location: "Cameroon",
      period: "2023 – 2025",
      highlights: [
        "Research thesis: 'Privacy-Preserving Key Management Scheme for Clustered IoT Networks'",
        "Supervisor: Prof. Mohamed-Lamine Messai (Université Lyon 2)",
        "Mastercard Foundation Scholar fully funded merit scholarship",
        "Academy of Research and Higher Education Fully funded scholarship"
      ]
    },
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Ngaoundere",
      location: "Cameroon",
      period: "2020 – 2023",
      highlights: [
        "Focus: Networks, Mathematics, Software Engineering",
        "Secretary then Vice-President of INFOTECH Club"
      ]
    }
  ],
  experience: [
    {
      role: "Intern Public Key Infrastructure (PKI)",
      company: "ANTIC (National Agency for Information and Communication Technologies)",
      period: "Apr – June 2025",
      location: "Cameroon",
      description: [
        "Engineered Authentic, a PKI-based platform for digital document certification used across public services.",
        "Conducted applied research on X.509 digital signature mechanisms and PKI integration.",
        "Collaborated with a 5-person cryptography division to review and harden certificate lifecycle management procedures."
      ]
    },
    {
      role: "Freelance Security Consultant",
      company: "CyComAi",
      period: "2024 - 2025",
      location: "Remote",
      description: [
        "Designed and shipped a backend system for AI-assisted online information verification.",
        "Identified and remediated critical security vulnerabilities (OWASP Top-10), reducing attack surface by 60%.",
        "Implemented role-based access control (RBAC) and secure API design patterns."
      ]
    },
    {
      role: "Cloud Infrastructure Monitoring & Security Intern",
      company: "Sygalin SAS",
      period: "2022 — 3 months",
      location: "Ngaoundere, Cameroon",
      description: [
        "Built AWS CloudWatch dashboards monitoring 12 microservices, reducing MTTD by 35%.",
        "Automated alert pipelines for performance anomalies.",
        "Hardened cloud infrastructure security posture."
      ]
    }
  ],
  projects: [
    {
      title: "Authentic",
      subtitle: "PKI Digital Document Certification",
      period: "2025",
      description: "PKI-based platform for digital document certification used across public services with X.509 digital signature mechanisms.",
      tech: ["PKI", "X.509", "Digital Signatures", "Cryptography", "Certificate Management"],
      link: "https://authentic-237.vercel.app",
      image: authentic
    },
    {
      title: "SprintHack CTF Lab",
      subtitle: "Attack / Audit / Defense",
      period: "2026 – Present",
      description: "Enterprise-grade Active Directory lab simulating real-world attack chains: privilege escalation, lateral movement, and post-exploitation.",
      tech: ["Active Directory", "Metasploit", "Kali Linux", "Wireshark", "Windows Server"],
      link: "https://sprinthack.vercel.app",
      image: spirnthack
    },
    {
      title: "IDS/IPS Network Intrusion Detection",
      subtitle: "Network Security Platform",
      period: "2025",
      description: "Implementing Snort + Zeek to monitor live network traffic and detect reconnaissance, exploitation attempts, and C2 patterns.",
      tech: ["Snort", "Zeek", "Wireshark", "Python", "Linux"],
      image: projet2
    },
    {
      title: "Tenezis AI",
      subtitle: "Document & Research Companion",
      period: "2025",
      description: "AI assistant for document analysis, intelligent research, and semantic search using RAG patterns.",
      tech: ["OCR", "NLP", "LLMs", "Semantic Search", "Knowledge Memory"],
      link: "https://tenezisai.com",
      image: projet3
    },
    {
      title: "Authentic SaaS",
      subtitle: "Anti-Disinformation Platform",
      period: "2024",
      description: "Information verification platform using cryptographic methods and AI to authenticate document sources.",
      tech: ["Nuxt.js", "Laravel", "TailwindCSS", "ML Libraries"],
      link: "https://authentic-237.vercel.app",
      image: projet4
    },
    {
      title: "Eyesandears",
      subtitle: "Anti-Phishing & Social Engineering",
      period: "2024",
      description: "Real-time network traffic analysis engine detecting phishing URLs and suspicious activity.",
      tech: ["React", "Laravel", "MySQL", "Security Analysis Tools"],
      link: "https://eyeandears.com",
      image: projet1
    },
    {
      title: "Booble-IO",
      subtitle: "SaaS Interface Framework",
      period: "2024",
      description: "A custom UI framework and portal designed for seamless SaaS interactions, focusing on accessibility and speed.",
      tech: ["Vue.js", "TailwindCSS", "Node.js"],
      image: projet2
    },
    {
      title: "Library Management System",
      subtitle: "Desktop Resource Tracker",
      period: "2023",
      description: "Automated desktop application for tracking thousands of resources, with real-time availability status and secure member authentication.",
      tech: ["Java", "MySQL", "JavaFX"],
      image: projet3
    }
  ],
  skills: {
    security: ["Cryptography (PKI, ECC, RSA)", "Penetration Testing", "Vulnerability Assessment", "OSINT"],
    programming: ["Python", "C/C++", "PHP", "JavaScript", "Java", "Bash"],
    frameworks: ["React", "Next.js", "Nuxt.js", "Laravel", "Django", "Tailwind CSS"],
    tools: ["Git", "Docker", "AWS", "Kali Linux", "Metasploit", "Wireshark", "DevOps", "MLOps"]
  },
  certifications: [
    { name: "Certified API Security Analyst (CASA)", issuer: "APISec University", date: "2026" },
    { name: "AI for Cybersecurity Specialization", issuer: "Johns Hopkins University", date: "2026" },
    { name: "Machine Learning Specialization", issuer: "Stanford / DeepLearning.AI", date: "2025" },
    { name: "Neural Networks & Deep Learning", issuer: "DeepLearning.AI", date: "2025" },
    { name: "CISSP Prep Specialization", issuer: "Infosec / Coursera", date: "2024" },
    { name: "Certified in Cybersecurity (CC)", issuer: "ISC2 / Coursera", date: "2024" }
  ],
  recognition: [
    "Cybersecurity Ambassador UNDP Tech4Peace / Give1Project 2025",
    "Organizer of SprintHack CTF 2025",
    "Winner Cybersecurity QUICKATHON",
    "Mastercard Foundation Scholar",
    "Public Speaker at Women Techmakers (WTM) & GDG"
  ]
};
