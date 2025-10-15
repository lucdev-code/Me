// components/Header.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-6 flex flex-col items-center py-4">
        {/* Logo arriba */}
        <Link href="/" className="mb-3 flex-shrink-0">
          <Image
            src="/images/LD.png"
            alt="Jose Lucero - Fullstack Developer"
            width={65}
            height={50}
            priority
            className="rounded-full border-none object-cover w-8 h-8"
          />
        </Link>

        {/* Navegación Desktop */}
        <ul className="hidden md:flex space-x-12 mb-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-gray-900 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors font-medium"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Botón de Menú Móvil */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-900 dark:text-white hover:text-green-600 dark:hover:text-green-400"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={30} /> : <Menu size={24} />}
        </button>

        {/* Menú Móvil */}
        {isMenuOpen && (
          <div className="md:hidden w-full mt-2 border-t border-gray-200/50 dark:border-gray-700/50">
            <ul className="space-y-2 pt-2 text-center">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block text-gray-900 dark:text-white hover:text-green-600 dark:hover:text-green-400 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
