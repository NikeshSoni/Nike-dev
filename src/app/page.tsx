import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import SkillsCode from "./skill"
// import { ProjectCard } from "@/components/project-card";
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

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-3xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 mt-4 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-40 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>

   
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3 p-3 ">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (

            <div className="" >
              <BlurFade
                key={work.company}
                delay={BLUR_FADE_DELAY * 6 + id * 0.05}
              >
                <ResumeCard
                  key={work.company}
                  logoUrl={work.logoUrl}
                  altText={work.company}
                  title={work.company}
                  subtitle={work.title}
                  href={work.href}
                  badges={work.badges}
                  period={`${work.start} - ${work.end ?? "Present"}`}
                  description={work.description}
                />
              </BlurFade>
            </div>
          ))}
        </div>
      </section>

      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h1 className="text-lg">Technologies I Work With</h1>
          </BlurFade>
          <div>
            <SkillsCode />
          </div>
        </div>
      </section>


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
                        <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 12 + id * 0.05}>
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

      <section id="hackathons">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Hackathons
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Committed to Continuous Growth
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Although I have not yet participated in hackathons, I am proactively seeking opportunities to enhance my skills and broaden my experience as a developer. I am dedicated to continuous learning, professional development, and contributing effectively to innovative projects alongside talented teams.
                </p>
              </div>
            </div>
          </BlurFade>
          {/* <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.hackathons.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade> */}
        </div>
      </section>


      {/* <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just shoot me a dm{" "}
                <Link
                  href={DATA.contact.social.X.url}
                  className="text-blue-500 hover:underline"
                >
                  with a direct question on twitter
                </Link>{" "}
                and I&apos;ll respond whenever I can. I will ignore all
                soliciting.
              </p>
            </div>
          </BlurFade>
        </div>
      </section> */}
    </main>
  );
}
