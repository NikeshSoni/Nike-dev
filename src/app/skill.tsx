"use client";

type Skill = {
  name: string;
  icon: string;
};

const SkillsCode = () => {
  const skills: Skill[] = [
    { name: "HTML", icon: "📄" },
    { name: "CSS", icon: "🎨" },
    { name: "SCSS", icon: "💅" },
    { name: "Bootstrap 4 & 5", icon: "🅱️" },
    { name: "Tailwind CSS", icon: "🌬️" },
    { name: "Material UI", icon: "🧱" },
    { name: "Chakra UI", icon: "✨" },
    { name: "Magic UI", icon: "🪄" },
    { name: "GSAP", icon: "🎞️" },
    { name: "JavaScript", icon: "🟨" },
    { name: "TypeScript", icon: "🔷" },
    { name: "ES6", icon: "📘" },
    { name: "jQuery", icon: "💠" },
    { name: "React.js", icon: "⚛️" },
    { name: "Next.js", icon: "⏭️" },
    { name: "Git & GitHub", icon: "🐙" },
    { name: "Redux & Toolkit", icon: "📦" },
    { name: "Node.js", icon: "💚" },
    { name: "Express.js", icon: "🚂" },
    { name: "MongoDB", icon: "🍃" },
    { name: "ConvexDB", icon: "🧩" },
    { name: "TipTap Extension", icon: "🖋️" },
  ];

  const third = Math.ceil(skills.length / 3);
  const row1 = skills.slice(0, third);
  const row2 = skills.slice(third, third * 2);
  const row3 = skills.slice(third * 2);

  const renderRow = (rowSkills: Skill[], animationClass: string) => (
    <div className="marquee-container">
      <div className={`marquee-content ${animationClass}`}>
        {[...rowSkills, ...rowSkills].map((skill, index) => (
          <div key={index} className="skill-badge">
            <span className="icon">{skill.icon}</span>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="skills-wrapper">
      {renderRow(row1, "marquee-animate-1")}
      {renderRow(row2, "marquee-animate-2")}
      {renderRow(row3, "marquee-animate-3")}
    </div>
  );
};

export default SkillsCode;