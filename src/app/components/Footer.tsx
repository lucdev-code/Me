// components/Footer.tsx (versión actualizada con enlaces rápidos en fila horizontal)
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react"; // O usa tus iconos preferidos

export default function Footer() {
    const socialLinks = [
        { href: "https://github.com/lucdev-code", icon: Github, label: "GitHub" },
        { href: "https://www.linkedin.com/in/jos%C3%A9-lucero-388798266/", icon: Linkedin, label: "LinkedIn" },
        { href: "mailto:joserl.lucero.17@gmail.com", icon: Mail, label: "Email" },
    ];

    const quickLinks = [
        { href: "/about", label: "About" },
        { href: "/projects", label: "Projects" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <footer className="bg-gray-900 dark:bg-gray-900 border-t border-gray-800 text-gray-300">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Sección Principal - Centrada */}
                    <div className="space-y-2 text-center">
                        <h3 className="text-xl font-bold text-white">José Lucero</h3>
                        <p className="text-sm">
                            If you would like to work with me, contact me!
                        </p>
                    </div>

                    {/* Enlaces Rápidos - Centrada, ahora en fila horizontal */}
                    <div className="text-center">
                        <h4 className="text-lg font-semibold text-white mb-2">
                            Enlaces
                        </h4>
                        <ul className="flex flex-row justify-center space-x-4"> {/* Cambiado: flex row con espaciado horizontal y centrado */}
                            {quickLinks.map((link) => (
                                <li key={link.href} className="list-none"> {/* list-none para remover bullets en flex */}
                                    <Link
                                        href={link.href}
                                        className="text-gray-300 hover:text-green-400 transition-colors" // Removido inline-block (no necesario en flex)
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Redes Sociales - Centrada */}
                    <div className="text-center">
                        <h4 className="text-lg font-semibold text-white mb-2">
                            Sigue mi trabajo
                        </h4>
                        <div className="flex justify-center space-x-4">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.href}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-300 hover:text-green-400 transition-colors p-2 rounded-full bg-gray-800 hover:bg-gray-700"
                                        aria-label={social.label}
                                    >
                                        <Icon size={20} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Copyright (comentado, pero si lo descomentas, agrégalo con centrado) */}
                {/* <div className="border-t border-gray-800 pt-4 mt-4 text-center text-sm text-gray-500"> */}
                {/*   <p>&copy; 2024 Jose Lucero. Hecho con Next.js y ❤️. Todos los derechos reservados.</p> */}
                {/* </div> */}
            </div>
        </footer>
    );
}
