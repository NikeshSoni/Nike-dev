"use client"
import { useEffect, useRef } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { ResumeCard } from "@/components/resume-card";
import { DATA } from "@/data/resume";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function About() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
        <div className="">
        <h1 className="text-4xl font-bold">Yo, I&apos;m Nikesh Rajbhar 🚀</h1>
          <p className="text-lg font-normal mt-2 text-gray-800">
            Welcome to my decentralized zone. Stoked you found your way here!
          </p>
        </div>

      <div className="flex justify-start">
        <div className="relative w-[100%] h-0 pb-[38.125%] sm:pb-[38.125%]">
          <video
            ref={videoRef}
            className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
            autoPlay
            loop
            muted
          >
            <source src="/code.webm" type="video/mp4" />
               Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <section id="education">
        <div className="flex mt-3 min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
    </main>
  );
}
