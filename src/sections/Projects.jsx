// src/sections/Projects.jsx
// Puedes usar un array de objetos en data/projects.js para la info de proyectos

export function Projects({ id }) {
  // Simulación de un array de proyectos
  const projectsData = [
    { title: 'E-commerce React', tech: 'React, Tailwind, Node.js', description: 'Plataforma de comercio electrónico con pasarela de pagos funcional.', link: '#', github: '#' },
    { title: 'Landing Page SaaS', tech: 'Next.js, TypeScript, Sanity', description: 'Web de presentación para un servicio de software como servicio (SaaS).', link: '#', github: '#' },
    // ... más proyectos
  ];

  return (
    <section id={id} className="py-20 p-8 container mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 border-b-4 border-indigo-500 inline-block pb-1">
        Mis Proyectos Destacados
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        
        {/* Mapea tus proyectos (necesitas crear un ProjectCard.jsx) */}
        {projectsData.map((project, index) => (
          <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-2 text-indigo-600 dark:text-teal-400">{project.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{project.tech}</p>
            <p className="mb-4">{project.description}</p>
            <div className="flex space-x-4">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm text-white bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded">Ver Demo</a>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-sm text-indigo-500 dark:text-teal-400 border border-indigo-500 dark:border-teal-400 px-4 py-2 rounded hover:bg-indigo-50 dark:hover:bg-gray-800">GitHub</a>
            </div>
          </div>
        ))}
        
      </div>
      
    </section>
  );
}