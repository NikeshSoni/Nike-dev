import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { Icons } from "@/components/icons";
import meetCall from "../../public/g-meet.png"
import docsGoogle from "../../public/docs-google.png"

const BLUR_FADE_DELAY = 0.04;

const dataStore = [
    {
        title: "Google Docs",
        href: "https://docs-dev-psi.vercel.app/",
        dates: "Mar 3, 2025",
        active: true,
        description:
            "🚀 Just launched my Google Docs clone (Desktop only)...",
        technologies: [
            "Next.js", "Tailwind CSS", "sadCn", "Convex DB", "Clerk Auth", "Tiptap Editor"
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
        image: docsGoogle,
        video: "",
    },
    {
        title: "Google Meet",
        href: "https://meet-call-tawny.vercel.app/",
        dates: "Jan 7, 2025",
        active: true,
        description:
            "🚀 Welcome to Over Digital World – a seamlessly engineered online conferencing tool...",
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
        image: meetCall,
        video: "",
    },
];


const RecentProject = () => {
    return (
        <section id="projects">
            <div className="flex flex-col max-w-[800px] mx-auto">
                <div>
                    <BlurFade delay={BLUR_FADE_DELAY * 11}>
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                                    Featured Projects
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    Explore My Recent Creations
                                </h2>
                                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    From intuitive UIs to robust backend systems, I’ve built a range of projects that showcase my skills and passion for development.
                                </p>
                                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Dive deeper on the <a className="text-blue-500 hover:underline" href="/projects">projects page</a> to see what I’ve been working on.
                                </p>
                            </div>
                        </div>
                    </BlurFade>
                </div>
                <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
                    {dataStore.map((project, id) => (
                        <BlurFade key={id} delay={BLUR_FADE_DELAY * 12 + id * 0.05}>
                            <ProjectCard
                                href={project.href}
                                title={project.title}
                                description={project.description}
                                dates={project.dates}
                                tags={project.technologies}
                                image={project.image}
                                video={project.video}
                                links={project.links}
                            />
                        </BlurFade>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default RecentProject
