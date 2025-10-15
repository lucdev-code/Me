// components/Home.tsx
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import TerminalBox from "./components/Terminal";
import ProjectCard from "./components/Card";
import TechSection from "./components/TechSection";
import IntroCard from "./components/IntroCard";
import { projects } from "./resources/projects";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the animation after the component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Small delay to ensure DOM is ready

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-8 px-4 pt-8 h-auto w-full transition-all duration-1000 ease-out ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
    }`}>
      {/* Bloque Hero: Imagen + IntroCard (lado a lado en desktop) + Terminal debajo */}
      <div className="flex flex-col items-center justify-center w-full max-w-6xl mb-12 gap-y-4 md:gap-y-12">
        {/* Hero Section with staggered animation */}
        <div className={`flex flex-col md:flex-row items-center justify-center w-full gap-x-16 gap-y-3 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="flex-shrink-0 order-1 md:order-1 md:mr-0">
            <Image
              src="/images/unnamed.jpg"
              alt="Jose Lucero - Fullstack Developer"
              width={250}
              height={250}
              priority
              className="rounded-full border-4 border-green-400 shadow-lg object-cover mx-auto md:mx-0 transition-transform duration-500"
            />
          </div>
          <div className="order-2 md:order-2 flex-1 max-w-md">
            <IntroCard />
          </div>
        </div>

        {/* TerminalBox - Siempre debajo de imagen + IntroCard */}
        <div className={`w-full max-w-2xl flex-1 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <TerminalBox />
        </div>

        <div className={`w-full max-w-2xl flex-1 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <TechSection />
        </div>

        {/* Sección de Proyectos (debajo del hero, con su propio fondo y padding) */}
        <section className={`w-full py-12 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={`text-3xl font-bold text-white text-center mb-8 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}>
              Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  {...project}
                  className={`transition-all duration-700 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  } animate-in slide-in-from-bottom-${
                    index + 1
                  } duration-700`} // Using Tailwind's animate plugin if available; fallback to custom
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
