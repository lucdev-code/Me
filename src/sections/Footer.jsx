// src/components/Footer.jsx

export function Footer() {
  return (
    <footer className="py-8 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-600 dark:text-gray-400">
      <p>
        &copy; {new Date().getFullYear()} [Tu Nombre]. Desarrollado con React y Tailwind CSS.
      </p>
    </footer>
  );
}