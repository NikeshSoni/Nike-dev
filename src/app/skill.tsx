"use client";
import React from "react";
// import { useSpringCarousel } from "react-spring-carousel";


export function Carousel() {
  const technologies = [
    { name: "Java", category: "Languages" },
    { name: "JavaScript", category: "Languages" },
    { name: "TypeScript", category: "Languages" },
    { name: "Python", category: "Languages" },
    { name: "Dart", category: "Languages" },
    { name: "Express", category: "Frameworks" },
    { name: "Prisma", category: "Tools" },
    { name: "Firebase", category: "Services" },
    { name: "Supabase", category: "Services" },
    { name: "Ne", category: "Tools" },
    { name: "Clerk", category: "Services" },
    { name: "Jest", category: "Testing" },
    { name: "GoLang", category: "Languages" },
    { name: "Redis", category: "Databases" },
    { name: "Bun", category: "Runtime" },
  ];

  const { carouselFragment } = useSpringCarousel({
    itemsPerSlide: 5,
    gutter: 24,
    withLoop: true,
    items: technologies.map((tech, index) => ({
      id: index.toString(),
      renderItem: (
        <TechCard name={tech.name} category={tech.category} />
      ),
    })),
  });

  return (
    <div className="w-full overflow-hidden py-8">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
          Technologies I Work With
        </h2>
        <div className="relative">
          <div className="w-full">{carouselFragment}</div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent dark:from-gray-900" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent dark:from-gray-900" />
        </div>
      </div>
    </div>
  );
}

function TechCard({ name, category }: { name: string; category: string }) {
  return (
    <div className="flex h-40 flex-col items-center justify-center rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:scale-105 hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
      <div className="text-4xl font-bold text-gray-800 dark:text-white">
        {name.split(" ")[0]}
      </div>
      {name.split(" ").length > 1 && (
        <div className="text-2xl font-bold text-gray-600 dark:text-gray-300">
          {name.split(" ")[1]}
        </div>
      )}
      <div className="mt-2 text-sm font-medium text-gray-500 dark:text-gray-400">
        {category}
      </div>
    </div>
  );
}