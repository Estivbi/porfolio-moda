// Portada.jsx
import React from "react";

const Portada = () => (
  <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-gradient-to-br from-moda-rose to-moda-peach">
    {/* Aquí irá la foto, nombre y título profesional */}
    <div className="w-40 h-40 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/30 mb-8 flex items-center justify-center">
      <span className="text-6xl">📸</span>
    </div>
    <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-moda-dark mb-4">
      Carolina
    </h1>
    <p className="text-2xl text-moda-dark/80 font-light">
      Creative Director
    </p>
    <div className="mt-8 animate-bounce">
      <div className="w-6 h-10 border-2 border-moda-dark/30 rounded-full flex justify-center">
        <div className="w-1 h-3 bg-moda-dark/30 rounded-full mt-2"></div>
      </div>
    </div>
  </section>
);

export default Portada;
