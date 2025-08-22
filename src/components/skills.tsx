// // components/Skills.tsx
// import React from "react";

// interface Skill {
//   name: string;
//   level: number;
// }

// const skills: Skill[] = [
//   { name: "ReactJS", level: 85 },
//   { name: "Libraries: MUI/Antd", level: 73 },
//   { name: "HTML/CSS/JS", level: 75 },
//   { name: "TypeScript", level: 64 },
//   { name: "Tailwind CSS", level: 95 },
//   { name: "React Query/Zustand", level: 60 },
//   { name: "Next JS", level: 80 },
// ];

// const Skills: React.FC = () => {
//   return (
//     <section className="p-8 text-center text-white  mx-auto relative z-0 ">
//       <h2 className="text-3xl font-bold mb-8">My skills</h2>
//       <div className="flex flex-wrap container  gap-8 border-gray-400 mx-auto rounded-50 rounded-br px-7 py-5 border-2 ">
//         {skills.map((skill) => (
//           <div key={skill.name} className="relative w-50 h-50 p-5">
//             <svg className="w-full h-full ">
//               <circle
//                 cx="50%"
//                 cy="50%"
//                 r="36"
//                 strokeWidth="6"
//                 stroke="#333"
//                 fill="transparent"
//               />
//               <circle
//                 cx="50%"
//                 cy="50%"
//                 r="36"
//                 strokeWidth="6"
//                 stroke="url(#gradient)"
//                 fill="transparent"
//                 strokeDasharray="226"
//                 strokeDashoffset={226 - (226 * skill.level) / 100}
//                 strokeLinecap="round"
//                 transform="rotate(-90 50 50)"
//               />
//             </svg>
//             <defs>
//               <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
//                 <stop offset="0%" style={{ stopColor: "#6a0dad" }} />
//                 <stop offset="100%" style={{ stopColor: "#00d4ff" }} />
//               </linearGradient>
//             </defs>
//             <span className="absolute inset-0 flex items-center justify-center text-xl font-semibold ">
//               {skill.level}%
//             </span>
//             <p className=" text-[26px]  ">{skill.name}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Skills;
"use client"
import React from "react";

const skills = [
  { name: "Javascript", logo: "/javascript-1.svg", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "Typescript", logo: "/typscript.svg", url: "https://www.typescriptlang.org/" },
  { name: "React", logo: "/react.svg", url: "https://reactjs.org/" },
  { name: "Next.js", logo: "/next-js.svg", url: "https://nextjs.org/" },
  { name: "Node.js", logo: "/node-js.svg", url: "https://nodejs.org/" },
  { name: "Sass/Scss", logo: "/sass.svg", url: "https://sass-lang.com/" },
  { name: "Tailwindcss", logo: "/tailwind.svg", url: "https://tailwindcss.com/" },
  { name: "Figma", logo: "/figma.svg", url: "https://www.figma.com/" },
  { name: "Git", logo: "/git.svg", url: "https://git-scm.com/" },
];

const Skills: React.FC = () => {
  return (
    <section className="position : relative skills-section py-12 container mx-auto">
      <div className="text-center mb-8">
        <button className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full font-semibold">
          Skills
        </button>
        <h2 className="mt-4 text-lg font-medium text-white">
          The skills, tools and technologies I am really good at:
        </h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-2 cursor-pointer hover:bg-slate-500 rounded-xl	p-3 "
            onClick={() => window.open(skill.url, "_blank")} // Yangi tabda ochish
          >
            <img
              src={skill.logo}
              alt={skill.name}
              className="h-12 w-12 object-contain"
            />
            <span className="text-sm font-medium text-white">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
