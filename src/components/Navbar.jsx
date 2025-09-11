import React, { useState, useEffect } from 'react';

const Navbar = ({ onScrollToProyectos, onScrollToBiografia, onScrollToContacto }) => {
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 100);

      // Detectar qué sección está visible
      const proyectos = document.querySelector('[data-section="proyectos"]');
      const biografia = document.querySelector('[data-section="biografia"]');
      const contacto = document.querySelector('[data-section="contacto"]');

      if (contacto && contacto.getBoundingClientRect().top <= 100) {
        setActiveSection('contacto');
      } else if (biografia && biografia.getBoundingClientRect().top <= 100) {
        setActiveSection('biografia');
      } else if (proyectos && proyectos.getBoundingClientRect().top <= 100) {
        setActiveSection('proyectos');
      } else {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'proyectos', label: 'Proyectos', onClick: onScrollToProyectos },
    { id: 'biografia', label: 'Sobre mí', onClick: onScrollToBiografia },
    { id: 'contacto', label: 'Contacto', onClick: onScrollToContacto }
  ];

  return (
    <nav className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md rounded-full px-6 py-3 shadow-lg border border-moda-pink' 
        : 'bg-gradient-to-br from-moda-rose to-moda-peach rounded-full px-6 py-3'
    }`}>
      <div className="flex space-x-6">
        {navItems.map((item) => (
          <button 
            key={item.id}
            onClick={item.onClick}
            className={`transition-all duration-300 font-medium px-3 py-1 rounded-full ${
              activeSection === item.id
                ? 'text-moda-dark bg-moda-rose/30'
                : isScrolled 
                  ? 'text-moda-dark hover:text-moda-pink-dark hover:bg-moda-rose/20'
                  : 'text-moda-dark hover:text-moda-pink-dark'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
