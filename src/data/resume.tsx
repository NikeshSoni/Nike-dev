import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Nikesh Rajbhar",
  initials: "DV",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisc",
  description:
    "MERN Stack Developer skilled in MongoDB, Express.js, React, and Node.js. Builds responsive, scalable web apps with clean code. Passionate about performance, teamwork, and delivering full-stack solutions in agile teams.",
  summary:
    "Hi, I'm Nikesh a dedicated MERN Stack Developer with hands-on experience in building full-stack web apps using MongoDB, Express.js, React.js, and Node.js. I enjoy creating fast, responsive, and user-friendly websites. From building APIs to designing clean interfaces, I love every part of the development process. When I'm not coding, I'm exploring new technologies, working on side projects",
  avatarUrl: "/me.png",
  skills: [
    "HTML",
    "CSS",
    "SCSS",
    "Bootstrap 4 & 5",
    "Tailwind CSS",
    "material ui",
    "Chakra UI",
    "Magic Ui",
    "GSAP",
    "Javascript",
    "Typescript",
    "ES6",
    "jQuery",
    "React.js",
    "Next.js",
    "Git & Github",
    "Redux & Redux toolkit",
    "Node.js",
    "Express.js",
    "MongoDB",
    "ConvexDB",
    "TipTap extension",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/NikeshSoni",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nikesh-rajbhar-13a20824b/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Infinx",
      href: "https://www.infinx.com/",
      badges: [],
      location: "Remote & on site",
      title: "Pre Auth Analist",
      logoUrl: "/Infinx-Logo.webp",
      start: "Oct 2024",
      end: "Present",
      description:
        "Pre-Authorization Analyst at Infinx with experience in checking insurance coverage, getting approvals for medical procedures, and reducing delays. Skilled in working with doctors and insurance companies to make the process smooth and accurate. Knowledgeable in medical terms, insurance rules, and health record systems.",
    },
    {
      company: "Ex-Intern EazyByts web solutions",
      href: "https://eazybyts.com/internships-opportunities/",
      badges: [],
      location: "Remote",
      title: "MERN Stack Developer",
      logoUrl: "/intern.webp",
      start: "March 2025",
      end: "April 2025",
      description:
        "Motivated and detail-oriented MERN Stack Developer with hands-on experience gained during an internship at EazyByts Web Solutions. Proficient in building dynamic web applications using MongoDB, Express.js, React.js, and Node.js. Demonstrated ability to collaborate with cross-functional teams, contribute to real-world projects, and deliver clean, efficient code. Passionate about continuous learning and staying updated with modern web development practices to build scalable and user-friendly solutions.",
    },
    {
      company: "pawaskar-ent ( Freelance )",
      href: "https://www.pawaskar-ent.in/",
      badges: [],
      location: "Remote",
      title: "React.js Developer",
      logoUrl: "/download.png",
      start: "Jan 2024",
      end: "April 2025",
      description:
        "Freelance React.js Developer with experience building fast, user-friendly websites for service businesses, especially in the HVAC industry. Skilled in creating custom, SEO-friendly platforms that boost customer engagement and increase bookings. Focused on clean code, responsive design, and great user experiences to help clients grow their business.",
    },
  ],
  education: [
    {
      school: "Mahatama Night Degree Collage",
      href: "https://www.mahatmandc.ac.in/",
      degree: "Bachelor's Degree B-com",
      logoUrl: "/images-collage.jpeg",
      start: "2022",
      end: "2024",
    },
    {
      school: "Mahatama Night Junior Collage",
      href: "https://www.mahatmandc.ac.in/",
      degree: "12th HSC Commerce",
      logoUrl: "/images-collage.jpeg",
      start: "2020",
      end: "2022",
    },
    {
      school: "Lal bahadur shastri night high schooly",
      href: "",
      degree: "10th SSC Board",
      logoUrl: "/school-logo.avif",
      start: "2019",
      end: "2020",
    }
  ],


  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
