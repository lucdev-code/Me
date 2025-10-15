// src/sections/Skills.jsx
// Puedes usar un array de objetos en data/skills.js para las tecnologías

export function Skills({ id }) {
  const frontendSkills = ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Next.js'];
  const backendSkills = ['Node.js', 'Express', 'Python', 'MongoDB', 'SQL'];
  
  // Componente Card de Habilidad (debes crearlo en components/SkillCard.jsx)

  return (
    <section id={id} className="py-20 p-8 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 border-b-4 border-indigo-500 inline-block pb-1 mx-auto">
          Mis Habilidades
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Columna 1: Frontend */}
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-indigo-600 dark:text-teal-400">Frontend</h3>
            <ul className="space-y-2">
              {frontendSkills.map(skill => <li key={skill} className="flex items-center"><span className="text-green-500 mr-2">✓</span> {skill}</li>)}
            </ul>
          </div>

          {/* Columna 2: Backend */}
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-indigo-600 dark:text-teal-400">Backend & DB</h3>
            <ul className="space-y-2">
              {backendSkills.map(skill => <li key={skill} className="flex items-center"><span className="text-green-500 mr-2">✓</span> {skill}</li>)}
            </ul>
          </div>

          {/* Columna 3: Herramientas */}
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-indigo-600 dark:text-teal-400">Herramientas</h3>
            <ul className="space-y-2">
              <li><span className="text-green-500 mr-2">✓</span> Git/GitHub</li>
              <li><span className="text-green-500 mr-2">✓</span> Figma / UX/UI</li>
              <li><span className="text-green-500 mr-2">✓</span> Vercel / Netlify</li>
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  );
}