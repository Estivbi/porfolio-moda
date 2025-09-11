import React, { useRef } from 'react';
import Portada from './components/Portada';
import Proyectos from './components/Proyectos';
import ProyectoDetalle from './components/ProyectoDetalle';
import Biografia from './components/Biografia';
import Testimonios from './components/Testimonios';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import projects from './projects';
import './App.css';

const App = () => {
  const proyectosRef = useRef(null);
  const biografiaRef = useRef(null);
  const contactoRef = useRef(null);

  const scrollToProject = (projectId) => {
    const element = document.getElementById(`proyecto-${projectId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-moda-gray font-moda">
      <Navbar 
        onScrollToProyectos={() => scrollToSection(proyectosRef)}
        onScrollToBiografia={() => scrollToSection(biografiaRef)}
        onScrollToContacto={() => scrollToSection(contactoRef)}
      />
      
      <Portada />
      
      <div ref={proyectosRef} data-section="proyectos">
        <Proyectos projects={projects} onSelectProject={scrollToProject} />
      </div>
      
      {/* Cada proyecto desglosado individualmente */}
      {projects.map((project) => (
        <ProyectoDetalle 
          key={project.id} 
          project={project} 
          id={`proyecto-${project.id}`}
        />
      ))}
      
      <div ref={biografiaRef} data-section="biografia">
        <Biografia />
      </div>
      
      <Testimonios />
      
      <div ref={contactoRef} data-section="contacto">
        <Contacto />
      </div>
      
      <Footer />
    </div>
  );
};

export default App;
