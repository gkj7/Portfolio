/* ============================================================
   PORTFOLIO DATA — edit this file to update content later.
   ============================================================ */

const SKILLS = [
  "Penetration Testing", "Ethical Hacking", "Network Security",
  "Digital Forensics", "Cryptography", "Wireshark", "Burp Suite", "Hydra",
  "Computer Networks", "Python", "C/C++", "Java", "JavaScript",
  "Web Development", "Databases (SQL/NoSQL)", "OOP", "Data Structures",
  "Algorithms", "Operating Systems", "Git & GitHub", "Linux"
];

const EVENTS = [
  "assets/events-ctf.png",
  "assets/events-asthra.png",
  "assets/events-iit-ropar.png"
];

const RESEARCH = [
  {
    title: "A Multi-Modal Platform for AI-Generated Image Detection and Comprehensive Forensic Analysis",
    conference: "ICSRC'26 — International Conference on Sustainable Development in Renewable Energy and Computing Techniques",
    venue: "Mar Baselios Institute of Technology and Science, Kothamangalam",
    date: "6th & 7th March 2026",
    file: "assets/publication-icsrc26.pdf"
  }
];

const EDUCATION = [
  {
    degree: "Bachelor of Technology in Computer Science and Engineering (Cyber Security)",
    institution: "St. Joseph's College of Engineering and Technology, Palai",
    board: "APJ Abdul Kalam Technological University, Kerala, India",
    years: "2022 - 2026",
    score: "CGPA: 7.9"
  },
  {
    degree: "Class 12 Computer Science",
    institution: "Mount Mary Public School & Junior College, Maalam, Kottayam",
    board: "Central Board of Secondary Education (CBSE)",
    years: "2021 - 2022",
    score: "Score: 85%"
  },
  {
    degree: "Class 10",
    institution: "Mount Mary Public School & Junior College, Maalam, Kottayam",
    board: "Central Board of Secondary Education (CBSE)",
    years: "2019 - 2020",
    score: "Score: 91%"
  }
];

const CERTIFICATES = [
  {
    title: "Network Analysis Using Wireshark 3",
    issuer: "Infosys Springboard",
    date: "July 29, 2024",
    file: "assets/cert-wireshark.pdf"
  },
  {
    title: "Ethical Hacker",
    issuer: "Cisco Networking Academy",
    date: "14 Oct 2025",
    file: "assets/cert-cisco-ethical-hacker.pdf"
  },
  {
    title: "Cyber Security and Privacy",
    issuer: "NPTEL — IIT Madras",
    date: "Oct 2024",
    file: "assets/cert-nptel.pdf"
  },
  {
    title: "Cyber Security and Applied Ethical Hacking",
    issuer: "Infosys Springboard",
    date: "April 6, 2026",
    file: "assets/cert-applied-ethical-hacking.pdf"
  }
];

const PROJECTS = [
  {
    title: "Auth-Tester",
    tags: ["Python", "Security"],
    description: "A Python utility for testing HTTP Basic Auth security in controlled lab environments. Runs concurrent credential checks with rate-limiting and proxy support.",
    link: "https://github.com/gkj7/auth-tester"
  },
  {
    title: "Anomaly Traffic Detection",
    tags: ["Python", "Isolation Forest", "ML"],
    description: "A real-time network anomaly detection system using Isolation Forest. Processes large-scale traffic data and extracts flow-based features to flag suspicious activity as it happens.",
    link: "https://github.com/gkj7/anomaly-traffic-detection"
  },
  {
    title: "Trace-AI",
    tags: ["Python", "Computer Vision", "Forensics"],
    description: "A multi-modal deepfake detection pipeline combining error level analysis, noise patterns, frequency artifacts, and compression signatures, with explainable metadata forensics.",
    link: "https://github.com/gkj7/Trace-AI"
  },
  {
    title: "Activity-Logger",
    tags: ["Android"],
    description: "An Android app that tracks phone usage and turns it into a clean daily timeline. A simple, well-scoped app built for everyday use.",
    link: "https://github.com/gkj7/activity-logger"
  },
  {
    title: "Personal Portfolio",
    tags: ["HTML", "CSS", "JavaScript"],
    description: "My professional portfolio website, built with HTML, CSS, and JavaScript, and hosted on Vercel.",
    link: "https://github.com/gkj7/portfolio-v3"
  }
];
