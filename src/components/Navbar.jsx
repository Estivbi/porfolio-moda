import React from 'react';

const Navbar = ({ onScrollToProyectos, onScrollToBiografia, onScrollToContacto }) => {
  return (
    <nav className="w-full py-4 px-6 bg-moda-gray/80 backdrop-blur-sm sticky top-0 z-40">
      <div className="max-w-6xl mx-auto flex justify-center space-x-8">
        <button 
          onClick={onScrollToProyectos}
          className="text-moda-dark hover:text-moda-rose transition-colors duration-300 font-medium"
        >
          Proyectos
        </button>
        <button 
          onClick={onScrollToBiografia}
          className="text-moda-dark hover:text-moda-rose transition-colors duration-300 font-medium"
        >
          Sobre mí
        </button>
        <button 
          onClick={onScrollToContacto}
          className="text-moda-dark hover:text-moda-rose transition-colors duration-300 font-medium"
        >
          Contacto
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
