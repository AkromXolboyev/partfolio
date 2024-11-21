// components/Skills.tsx
import React from "react";

interface Skill {
  name: string;
  level: number;
}

const skills: Skill[] = [
  { name: "ReactJS", level: 85 },
  { name: "Libraries: MUI/Antd", level: 73 },
  { name: "HTML/CSS/JS", level: 75 },
  { name: "TypeScript", level: 64 },
  { name: "Tailwind CSS", level: 95 },
  { name: "React Query/Zustand", level: 60 },
  { name: "Next JS", level: 80 },
];

const Skills: React.FC = () => {
  return (
    <section className="p-8 text-center text-white  mx-auto relative z-0 ">
      <h2 className="text-3xl font-bold mb-8">My skills</h2>
      <div className="flex flex-wrap container  gap-8 border-gray-400 mx-auto rounded-50 rounded-br px-7 py-5 border-2 ">
        {skills.map((skill) => (
          <div key={skill.name} className="relative w-50 h-50 p-5">
            <svg className="w-full h-full ">
              <circle
                cx="50%"
                cy="50%"
                r="36"
                strokeWidth="6"
                stroke="#333"
                fill="transparent"
              />
              <circle
                cx="50%"
                cy="50%"
                r="36"
                strokeWidth="6"
                stroke="url(#gradient)"
                fill="transparent"
                strokeDasharray="226"
                strokeDashoffset={226 - (226 * skill.level) / 100}
                strokeLinecap="round"
                transform="rotate(-90 50 50)"
              />
            </svg>
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: "#6a0dad" }} />
                <stop offset="100%" style={{ stopColor: "#00d4ff" }} />
              </linearGradient>
            </defs>
            <span className="absolute inset-0 flex items-center justify-center text-xl font-semibold ">
              {skill.level}%
            </span>
            <p className=" text-[26px]  ">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
