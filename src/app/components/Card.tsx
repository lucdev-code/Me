// components/ProjectCard.tsx
import Link from "next/link";
import { Github, ArrowUpRight } from "lucide-react"; 
import Image from "next/image";  // Asegúrate de tener next/image configurado
// Iconos de Lucide para enlaces

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string; // URL de imagen (ej. "/images/project1.jpg")
  technologies: string[]; // Array de techs (ej. ["Next.js", "TypeScript"])
  githubUrl?: string;
  demoUrl?: string;
  className?: string; // 👈 añadimos esto
}

export default function ProjectCard({ 
  title, 
  description, 
  image, 
  technologies, 
  githubUrl, 
  demoUrl,
  className = "" // 👈 valor por defecto
}: ProjectCardProps) {
  return (
    <div
      className={`bg-gray-800 border border-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200 group ${className}`}
    >
      {/* Imagen (opcional) */}
      {image && (
        <div className="relative h-48 bg-gray-900">
          <Image
            src={image}
            alt={`${title} preview`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      {/* Contenido */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4 text-sm leading-relaxed">{description}</p>
        
        {/* Tecnologías como badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-700 text-green-400 text-xs font-medium rounded-full border border-green-600/30"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Enlaces */}
        <div className="flex space-x-4">
          {githubUrl && (
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-300 hover:text-green-400 transition-colors px-3 py-1 rounded-md bg-gray-700 hover:bg-gray-600"
            >
              <Github size={16} className="mr-1" />
              Código
            </Link>
          )}
          {demoUrl && (
            <Link
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-300 hover:text-green-400 transition-colors px-3 py-1 rounded-md bg-gray-700 hover:bg-gray-600"
            >
              <ArrowUpRight size={16} className="mr-1" />
              Demo
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
