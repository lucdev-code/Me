// components/IntroCard.tsx
export default function IntroCard() {
  return (
    <div className="max-w-md mx-auto rounded-lg p-8 text-center">{/* Card centrada, fondo oscuro, sombra y borde sutil */}
      {/* "Hi, I'm" - Letras pequeñas */}
      <p className="text-sm text-gray-400 mb-2 tracking-wide">{/* text-sm: ~14px, gris claro, mayúsculas para estilo */}
        Hi, I&apos;m
      </p>

      {/* "Jose Lucero" - Letras más grandes */}
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{/* text-4xl en móvil (~36px), text-5xl en desktop (~48px), bold */}
        José Lucero
      </h1>

      {/* "Fullstack developer" - Letras intermedias, acento verde */}
      <h2 className="text-xl md:text-2xl font-semibold text-green-400 mb-6">{/* text-xl en móvil (~20px), text-2xl en desktop (~24px), verde para destaque */}
        Fullstack Developer
      </h2>

      {/* Párrafo de descripción - Editable */}
      <p className="text-base text-gray-300 leading-relaxed">{/* text-base: ~16px, gris medio, line-height para legibilidad */}
        Fullstack developer with a focus on backend, I like to develop applications that help me practice how things are done in real life, always seeking to improve my good practices, as well as my thinking about problems.
      </p>
    </div>
  );
}
