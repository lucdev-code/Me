// src/sections/About.jsx

export function About({ id }) {
  return (
    <section id={id} className="py-20 p-8 container mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 border-b-4 border-indigo-500 inline-block pb-1">
        Acerca de Mí
      </h2>
      <div className="flex flex-col md:flex-row gap-12 items-center">
        
        {/* Foto */}
        <div className="md:w-1/3">
          <img 
            src="/assets/tu-foto.jpg" 
            alt="Tu Nombre" 
            className="rounded-full w-64 h-64 object-cover mx-auto shadow-xl" 
          />
        </div>
        
        {/* Texto */}
        <div className="md:w-2/3 text-lg space-y-4">
          <p>
            Empecé a programar en [Año] y mi pasión se centra en crear soluciones limpias, eficientes y centradas en el usuario. Mi viaje me ha llevado a dominar tecnologías como <span className="font-bold">React, Node.js y Tailwind CSS</span>.
          </p>
          <p>
            Mi objetivo es transformar ideas complejas en experiencias web intuitivas y funcionales. Siempre estoy en busca de nuevos retos y oportunidades para aprender y crecer.
          </p>
          <a href="#contact" className="text-indigo-600 dark:text-teal-400 font-semibold hover:underline">
            ¿Hablamos de tu próximo proyecto?
          </a>
        </div>
      </div>
    </section>
  );
}