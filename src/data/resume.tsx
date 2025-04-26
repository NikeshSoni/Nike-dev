import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import appleImg from "../../public/apple.png"
import niccolomiranda from "../../public/niccolomiranda.png"
import revolt from "../../public/revolt.png"
import layers from "../../public/layers.png"
import redmagic from "../../public/redmagic.png"
import menimo from "../../public/menimo.png"
import meetCall from "../../public/g-meet.png"
import alogic from "../../public/alogic.png"
import icici from "../../public/icici.png"
import docsGoogle from "../../public/docs-google.png"


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
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
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
      title: "Pre Auth analist",
      logoUrl: "/Infinx-Logo.webp",
      start: "Oct 2024",
      end: "Present",
      description:
        "Pre-Authorization Analyst at Infinx with experience in checking insurance coverage, getting approvals for medical procedures, and reducing delays. Skilled in working with doctors and insurance companies to make the process smooth and accurate. Knowledgeable in medical terms, insurance rules, and health record systems.",
    },
    {
      company: "Lot Management ( 3 Month Freelance )",
      href: "https://www.infinx.com/",
      badges: [],
      location: "Remote & on site",
      title: "React.js Developer",
      logoUrl: "",
      start: "Oct 2024",
      end: "Jan 2025",
      description:
        `Tech Stack: React.js, MUI (Material UI), GraphQL
Worked on a complete revamp of the Lot Management platform, enhancing functionality, performance, and
user experience. Utilized React.js and MUI to build scalable, component-based UIs, and integrated GraphQL
for efficient data handling. Contributed to end-to-end feature development, UI optimization, and seamless
data interaction across the platform.`,
    },
    {
      company: "Neel Ambulance ( Freelance )",
      href: "https://project-ambulance.vercel.app/",
      badges: [],
      location: "Remote",
      title: "Next.js Developer ",
      logoUrl: "https://project-ambulance.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.2ed2a8bf.png&w=256&q=75",
      start: "March 2025",
      end: "under construction",
      description:
        "Tech Stack: Next.js, Tailwind CSS, shadcn/ui Designed and developed a fully responsive ambulance service website from scratch using Next.js and Tailwind CSS.Integrated shadcn/ ui components to ensure a clean, modern UI / UX.The platform enables fast access to emergency services, showcases service details, and includes optimized performance for mobile and desktop users.",
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
      end: "April 2024",
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
      title: "Google Docs",
      href: "https://docs-dev-psi.vercel.app/",
      dates: "Mar 3, 2025",
      active: true,
      description:
        "🚀 Just launched my Google Docs clone (Desktop only) built with Next.js, Tailwind, Convex DB, Clerk, and Tiptap for real-time, secure, collaborative editing. ✨ Features include rich-text editing, user invites, mentions, and an admin panel to manage everything smoothly.",
      technologies: [
        "Next.js", "Tailwind CSS", "sadCn", "Convex DB", "Clerk Auth", " Tiptap Editor"
      ],
      links: [
        {
          type: "Website",
          href: "https://docs-dev-psi.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/NikeshSoni/google_docs",
          icon: <Icons.github className="size-3" />,
        },
      ],
      imageData: docsGoogle,
      video: "",
    },
    {
      title: "Google Meet",
      href: "https://meet-call-tawny.vercel.app/",
      dates: "Jan 7, 2025",
      active: true,
      description:
        "🚀 Welcome to Over Digital World – a seamlessly engineered online conferencing tool 🌐 that integrates ZugoCloud ☁️ with React ⚛️ for smooth and real-time communication 💬.",
      technologies: [
        "React.js + vite",
        "Tailwind Css",
        "sadCn",
        "ZugoCloud",
      ],
      links: [
        {
          type: "Website",
          href: "https://meet-call-tawny.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/NikeshSoni/Meet_call",
          icon: <Icons.github className="size-3" />,
        },
      ],
      imageData: meetCall,
      video: "",
    },

    {
      title: "Alogic Clone",
      href: "https://nikeshsoni.github.io/Alogic-Clone/",
      dates: "Apr 4, 2024",
      active: true,
      description:
        "🚀 I created a responsive clone of the Alogic website to improve my frontend skills. Built with ⚛️ React.js and Vite for speed, and styled using Bootstrap 5, the project features a modern layout with product sections and navigation. It helped me practice building components, using utility classes, and designing for all screen sizes. 💬.",
      technologies: [
        "React.js + vite",
        "Bootstrap 5",
      ],
      links: [
        {
          type: "Website",
          href: "https://nikeshsoni.github.io/Alogic-Clone/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/NikeshSoni/Alogic-Clone",
          icon: <Icons.github className="size-3" />,
        },
      ],
      imageData: alogic,
      video: "",
    },
    {
      title: "icici Bank ",
      href: "https://nikeshsoni.github.io/icici/",
      dates: "Mar 2, 2024",
      active: true,
      description:
        "🔧 Built an ICICI Bank website clone 📚 using ⚛️ React.js + Vite, 🎨 Bootstrap 5, and 💅 SCSS to practice 📱 responsive design, 🧩 component-based architecture, and 🎯 custom theming.",
      technologies: [
        "React.js + vite",
        "Bootstrap 5",
      ],
      links: [
        {
          type: "Website",
          href: "https://nikeshsoni.github.io/icici/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/NikeshSoni/icici",
          icon: <Icons.github className="size-3" />,
        },
      ],
      imageData: icici,
      video: "",
    },
    {
      title: "Niccolomiranda UI",
      href: "https://nikeshsoni.github.io/niccolomiranda/",
      dates: "Nov 11, 2023",
      active: true,
      description:
        "A ReactJS-based clone of the Niccolomiranda website, developed with SCSS and Bootstrap integration. Designed for clean presentation, this project demonstrates front-end skills through a visually engaging and well-structured layout.",
      technologies: [
        "React.js",
        "Bootstrap 5",
        "SCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://nikeshsoni.github.io/niccolomiranda/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/NikeshSoni/niccolomiranda",
          icon: <Icons.github className="size-3" />,
        },
      ],
      imageData: niccolomiranda,
      video: "",
    },
    {
      title: "Revolt Moter",
      href: "https://nikeshsoni.github.io/revolt-main-project/",
      dates: "Nov 8, 2022",
      active: true,
      description:
        "Developed a modern and responsive website for Revolt Motors, focusing on performance, userengagement, and clean UI. Implemented reusable components, seamless navigation, and a structured layout to showcase electric vehicles and related offerings. Ensured mobile-first design and cross-browser compatibility for an optimal user experience.",
      technologies: [
        "React.js + vite",
        "CSS",
        "SCSS",
        "Bootstrap 5",
      ],
      links: [
        {
          type: "Website",
          href: "https://nikeshsoni.github.io/revolt-main-project/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/NikeshSoni/revolt-main-project",
          icon: <Icons.github className="size-3" />,
        },
      ],
      imageData: revolt,
      video:
        "",
    },

    {
      title: "Layers Website",
      href: "https://nikeshsoni.github.io/Layers/",
      dates: "Nov 3, 2022",
      active: true,
      description:
        "Created a sleek and visually layered web application for a mobile skin customization brand. Focused on showcasing products with dynamic layouts and interactive UI components. The project highlights responsive design, clean SCSS architecture, and smooth user experience, ideal for product presentation and brand visibility.",
      technologies: [
        "HTML ",
        "CSS",
        "SCSS",
        "Bootstrap 5",
        "Javascript",
      ],
      links: [
        {
          type: "Website",
          href: "https://nikeshsoni.github.io/Layers/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/NikeshSoni/Layers",
          icon: <Icons.github className="size-3" />,
        },
      ],
      imageData: layers,
      video:
        "",
    },

    {
      title: "Apple Website",
      href: "https://nikeshsoni.github.io/apple/iphone.html",
      dates: "Oct 26, 2022",
      active: true,
      description:
        "A visually appealing project developed using ReactJS, SCSS, and Bootstrap. It presents layered content effectively, making it ideal for showcasing professional profiles and technical skills with style.",
      technologies: [
        "HTML ",
        "CSS",
        "SCSS",
        "Bootstrap 5",
        "Javascript",
      ],
      links: [
        {
          type: "Website",
          href: "https://nikeshsoni.github.io/apple/iphone.html",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      imageData: appleImg,
      video:
        "",
    },

    {
      title: "Minomo",
      href: "https://nikeshsoni.github.io/minomo-new/nikki.html",
      dates: "Jul 17, 2022",
      active: true,
      description:
          "The Menimo website is a frontend project I created using HTML and CSS to practice and improve my web design skills",
      technologies: [
        "HTML ",
        "CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://nikeshsoni.github.io/minomo-new/nikki.html",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/NikeshSoni/minomo-new",
          icon: <Icons.github className="size-3" />,
        },
      ],
      imageData: menimo,
      video:
        "",
    },
    
    {
      title: "RedMagic",
      href: "https://nikeshsoni.github.io/RedMagic/index.html",
      dates: "Jun 19, 2022",
      active: true,
      description:
        "I built the RedMagic website as my very first project to dive into web development. This project showcases a clean, responsive layout using only HTML and CSS.",
      technologies: [
        "HTML ",
        "CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://nikeshsoni.github.io/RedMagic/index.html",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/NikeshSoni/RedMagic",
          icon: <Icons.github className="size-3" />,
        },
      ],
      imageData: redmagic,
      video:
        "",
    },

  ],
  hackathons: [
    // {
    //   title: "Portal Hackathon",
    //   dates: "October 29, 2016",
    //   location: "Kingston, Ontario",
    //   description:
    //     "Developed an internal widget for uploading assignments using Waterloo's portal app",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/UWPortalSDK/crowmark",
    //     },
    //   ],
    // },
  ],
} as const;
