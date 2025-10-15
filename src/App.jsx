import { Header } from './sections/Header';
import { Footer } from './sections/Footer';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';

import './App.css';

function App() {
  return (
    // Estilo Base: Fondo oscuro (gray-900) y texto claro (gray-50).
    <div className="min-h-screen font-sans bg-gray-900 text-gray-50 antialiased">
      
      <Header />
      
      <main className="pt-20"> 
        <Hero id="home" />
        {/* Separadores sutiles entre secciones */}
        <hr className="border-gray-800 my-8 pr-10 w-11/12 mx-auto" /> 
        <About id="about" />
        <hr className="border-gray-800 my-8 w-11/12 mx-auto" /> 
        <Skills id="skills" />
        <hr className="border-gray-800 my-8 w-11/12 mx-auto" /> 
        <Projects id="projects" />
        <hr className="border-gray-800 my-8 w-11/12 mx-auto" /> 
        <Contact id="contact" />
      </main>
      
      <Footer />
      
    </div>
  );
}

export default App;