// ============================================
// PERSONAL DATA FILE
// Only personal information that can be changed/replaced with API
// UI text stays in components
// ============================================

// Hero Section - Personal Info
export const heroData = {
  name: "M Moazam",
  title: "Software Engineering Student",
  image: "/person main.png",
  testimonial:
    "Moazam is a motivated software engineering student\nwith strong problem-solving skills\nand a passion for modern web development.",
  experienceYears: "3+Years",
};

// Hireme Section - Personal Info
export const hiremeData = {
  description:
    "I am a BS Software Engineering student at COMSATS Abbottabad with hands-on experience in full-stack development and an industry internship. I focus on learning fast, writing clean code, and building practical solutions.",
  image: "/person main2.png",
  stats: [
    { value: "10+", label: "Academic Projects" },
    { value: "1", label: "Industry Internship" },
  ],
};

// Work Experience - Personal Info
export const workExperienceData = {
  experiences: [
    {
      id: 1,
      company: "Sui Northern Gas Pipelines Limited (SNGPL), Lahore",
      dates: "Jan 2026 - Mar 2026",
      role: "IT / MIS Intern",
      description:
        "Worked in the IT/MIS department, assisting with internal systems, data handling, and basic software-related tasks while gaining exposure to enterprise-level workflows.",
      nodeType: "orange-dashed",
    },
  ],
};

// About Page - Personal Info
export const aboutData = {
  description:
    "I am a Bachelor of Science in Software Engineering student at COMSATS Abbottabad. I enjoy building full-stack web applications using React and FastAPI, with a strong interest in backend systems and problem-solving.",
stats: [
  { label: "Hours Spent Building", value: "1000+" },
  { label: "Cups of Chai ☕", value: "Too Many" },
  { label: "Bugs Squashed", value: "∞" },
],
  skills: [
    { name: "React", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "Python", level: 80 },
    { name: "FastAPI", level: 75 },
    { name: "PostgreSQL", level: 75 },
    { name: "SQLite", level: 70 },
    { name: "SQL", level: 75 },
    { name: "REST APIs", level: 75 },
    { name: "Git & GitHub", level: 70 },
    { name: "HTML & CSS", level: 85 },
  ],
  education: [
    {
      degree: "Bachelor of Science",
      field: "Software Engineering",
      institution: "COMSATS University Islamabad, Abbottabad Campus",
      year: "2023 - 2027",
    },
  ],
  experience: [
    {
      role: "IT / MIS Intern",
      company: "SNGPL Lahore",
      period: "2026",
      description:
        "Assisted with IT operations, system documentation, and data management tasks in a corporate environment.",
    },
  ],
};

// Services - Personal Info
export const servicesData = {
  services: [
    {
      id: 1,
      icon: "💻",
      title: "Frontend Development",
      description:
        "Building responsive and interactive user interfaces using React and modern web technologies.",
      features: [
        "React Components",
        "Responsive Design",
        "State Management",
        "Clean UI Implementation",
      ],
    },
    {
      id: 2,
      icon: "⚙️",
      title: "Backend Development",
      description:
        "Developing secure and efficient backend APIs using Python and FastAPI.",
      features: [
        "REST API Development",
        "Database Integration",
        "Authentication Basics",
        "API Testing",
      ],
    },
    {
      id: 3,
      icon: "🧠",
      title: "AI & Logic-Based Projects",
      description:
        "Implementing basic AI logic and algorithms for academic and learning-focused projects.",
      features: [
        "Game AI Logic",
        "Algorithm Implementation",
        "Python-Based Solutions",
      ],
    },
    {
      id: 4,
      icon: "🛠️",
      title: "Database Design",
      description:
        "Designing and managing relational databases for small to medium-scale applications.",
      features: [
        "PostgreSQL",
        "SQLite",
        "SQL Queries",
        "Schema Design",
      ],
    },
  ],
};

// Projects - Personal Info
export const projectsData = {
  projects: [
    // {
    //   id: 1,
    //   title: "Student Management System",
    //   category: "Full Stack",
    //   description:
    //     "A web-based system for managing student records with CRUD functionality and role-based access.",
    //   image: "stdpr.png",
    //   technologies: ["React", "FastAPI", "PostgreSQL"],
    //   link: "#",
    //   github: "#",
    // },
    
    {
      id: 3,
      title: "Jarvis CLI Assistant",
      category: "Artificial Intelligence",
      description:
      "A Python-based command-line voice assistant capable of recognizing speech, executing commands, and responding using text-to-speech.",
      image: "aipr.jpg",
      technologies: ["Python", "Speech Recognition", "Text-to-Speech", "Automation"],
      link: "#",
      github: "https://github.com/moazamshigri/Mini-Jarvis",
    },
  

    {
      id: 4,
      title: "Personal Portfolio Website",
      category: "Frontend",
      description:
        "A responsive personal portfolio website showcasing academic projects, skills, and internship experience.",
      image: "frontendpr.png",
      technologies: ["React", "CSS", "JavaScript"],
      link: "#",
      github: "https://github.com/moazamshigri/myPortfolio",
    },
    {
  id: 5,
  title: "QR Code Generator",
  category: "Python Utilities",
  description:
    "A Python-based utility that generates QR codes from user input such as text or URLs, with options to save and reuse the generated codes.",
  image: "qrpr.png",
  technologies: ["Python", "qrcode Library", "Image Processing"],
  link: "#",
  github: "https://github.com/moazamshigri/qrcode-maker-python",
},
  {
  id: 2,
  title: "Weather Forecast App",
  category: "Web Development",
  description:
    "A responsive web application that fetches real-time weather data for any city, displaying temperature, humidity, and forecasts in a sleek interface.",
  image: "weatherpr.png",
  technologies: ["React", "FastAPI", "OpenWeather API"],
  link: "#",
  github: "https://github.com/moazamshigri/",
},

  {
  id: 6,
  title: "Buy me a toffee",
  category: "Web Development",
  description:
    "A responsive web application that allows users to make donations and support creators.",
  image: "buymeatoffee.png",
  technologies: ["React","Node js", "Express", "Stripe Payment","MongoDB", "Postman"],
  link: "#",
  github: "https://github.com/moazamshigri/",
},

  ],
};

// Resume - Personal Info
export const resumeData = {
  resumeUrl: "/cv.pdf",
  fileName: "cv.pdf",
};

// Contact - Personal Info
export const contactData = {
  contactInfo: [
    {
      type: "phone",
      value: "+0340-3482190",
    },
    {
      type: "email",
      value: "muhammadmoazzamshigri@gmail.com",
    },
    {
      type: "address",
      value: "Abbottabad, Pakistan",
    },
  ],
  socialLinks: [
    { label: "Facebook", href: "https://www.facebook.com/moazam.shigri", icon: "f" },
    { label: "Twitter", href: "https://x.com/Moazam_Shigri", icon: "t" },
    { label: "Instagram", href: "https://www.instagram.com/moazam_shigri/", icon: "in", accent: true },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/m-moazam-a8b0ab264/", icon: "li" },
  ],
};

// Navigation - Structural (keeping for now, but could be moved)
export const navigationData = {
  logo: {
    src: "/logo2.png",
    alt: "Logo",
    link: "/",
  },
  leftNavItems: [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
  ],
  rightNavItems: [
    { path: "/resume", label: "Resume" },
    { path: "/project", label: "Project" },
    { path: "/contact", label: "Contact" },
  ],
};
