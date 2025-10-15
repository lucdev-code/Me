// src/sections/Contact.jsx

export function Contact({ id }) {
  return (
    <section id={id} className="py-20 p-8 bg-indigo-600 dark:bg-gray-800 text-white">
      <div className="container mx-auto text-center max-w-2xl">
        <h2 className="text-4xl font-bold mb-4">
          ¿Listo para Empezar un Proyecto?
        </h2>
        <p className="text-xl mb-8">
          Si te gusta mi trabajo y tienes una idea, no dudes en contactarme.
        </p>
        
        {/* Formulario simple o enlaces */}
        <div className="space-y-4">
            <p className="text-lg">
                Envíame un correo a: <a href="mailto:tu-email@ejemplo.com" className="font-bold underline hover:text-teal-200">tu-email@ejemplo.com</a>
            </p>
            <p className="text-lg">
                O conéctate en LinkedIn: <a href="[Tu LinkedIn]" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-teal-200">/tu-perfil</a>
            </p>
        </div>
        
      </div>
    </section>
  );
}