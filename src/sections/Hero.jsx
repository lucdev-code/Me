// src/sections/Hero.jsx

export function Hero({ id }) {
  return (
    <section id={id} className="min-h-[calc(100vh-80px)] flex items-center justify-center p-8">
      <div className="text-center max-w-4xl">
        <p className="text-xl text-indigo-600 dark:text-teal-400 mb-4">
          ¡Hola! Soy
        </p>
        <h1 className="text-6xl md:text-8xl font-extrabold mb-4">
          [Tu Nombre Completo]
        </h1>
        <h2 className="text-3xl md:text-4xl font-light text-gray-600 dark:text-gray-300 mb-8">
          Desarrollador Web <span className="font-bold">&</span> Apasionado por el UX/UI.
        </h2>
        
        {/* Botones de acción */}
        <div className="space-x-4">
          <a href="#projects" className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
            Ver Proyectos
          </a>
          <a href="/assets/tu-cv.pdf" download className="border border-indigo-600 text-indigo-600 dark:text-teal-400 dark:border-teal-400 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 dark:hover:bg-gray-800 transition">
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  );
}