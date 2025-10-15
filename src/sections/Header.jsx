
export function Header() {
  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Acerca de', href: '#about' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md">
      <nav className="container mx-auto flex justify-between items-center p-4">

        {/* Enlaces de Navegación */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-gray-700 hover:text-red-500 dark:text-gray-300 dark:hover:text-teal-400 transition">
              {link.name}
            </a>
          ))}
        </div>

        {/* Botón de Modo Oscuro / Menú Hamburguesa */}
        <div className="flex items-center space-x-4">
          {/* Aquí va el componente <DarkModeToggle /> */}
          {/* Aquí va el componente <MobileMenuButton /> */}
        </div>
      </nav>
    </header>
  )
}
