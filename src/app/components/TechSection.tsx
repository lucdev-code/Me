// components/TechSection.tsx
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiTypescript,
  SiNestjs,
  SiAngular,
  SiReact
} from "react-icons/si";
import { IconType } from "react-icons";

interface Tech {
  name: string;
  icon: IconType; // Componente de icono
  category: "frontend" | "backend"; // Para filtrar
  color: string; // Tailwind class para color
}

const technologies: Tech[] = [
  { name: "HTML", icon: SiHtml5, category: "frontend", color: "text-orange-500" },
  { name: "CSS", icon: SiCss3, category: "frontend", color: "text-blue-500" },
  { name: "JavaScript", icon: SiJavascript, category: "frontend", color: "text-yellow-400" },
  { name: "Next.js", icon: SiNextdotjs, category: "frontend", color: "text-gray-100" },
  { name: "Angular", icon: SiAngular, category: "frontend", color: "text-red-600" },
  { name: "React", icon: SiReact, category: "frontend", color: "text-blue-400" },

  { name: "Node.js", icon: SiNodedotjs, category: "backend", color: "text-green-500" },
  { name: "Express.js", icon: SiExpress, category: "backend", color: "text-gray-400" },
  { name: "TypeScript", icon: SiTypescript, category: "backend", color: "text-blue-600" },
  { name: "Nest.js", icon: SiNestjs, category: "backend", color: "text-red-500" },
];

export default function TechSection() {
  const frontEndTechs = technologies.filter((tech) => tech.category === "frontend");
  const backEndTechs = technologies.filter((tech) => tech.category === "backend");

  return (
    <section className="py-16 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <h2 className="text-4xl font-extrabold text-white text-center mb-12 tracking-wide drop-shadow-lg">
          Fullstack Technologies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Front-end */}
          <div className="text-center">
            <h3 className="text-3xl font-semibold text-pink-400 mb-8 tracking-wide">
              Front-end
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
              {frontEndTechs.map((tech) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-pink-500/50 transition-shadow duration-300 cursor-pointer transform hover:-translate-y-1"
                    title={tech.name}
                  >
                    <Icon className={`${tech.color} mb-3`} size={48} />
                    <p className="text-white font-semibold text-sm sm:text-base select-none">
                      {tech.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Back-end */}
          <div className="text-center">
            <h3 className="text-3xl font-semibold text-pink-400 mb-8 tracking-wide">
              Back-end
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
              {backEndTechs.map((tech) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-pink-500/50 transition-shadow duration-300 cursor-pointer transform hover:-translate-y-1"
                    title={tech.name}
                  >
                    <Icon className={`${tech.color} mb-3`} size={48} />
                    <p className="text-white font-semibold text-sm sm:text-base select-none">
                      {tech.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
