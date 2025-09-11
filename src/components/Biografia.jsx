// Biografia.jsx
import React from "react";

const Biografia = () => (
  <section className="py-20 px-6">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-8 text-moda-dark">Sobre mí</h2>
      <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
        <p className="text-lg text-moda-dark/80 leading-relaxed mb-6">
          Soy una apasionada de la fotografía de moda con más de 5 años de experiencia 
          capturando la esencia y elegancia en cada imagen. Mi enfoque combina técnica 
          profesional con una visión artística única.
        </p>
        <p className="text-lg text-moda-dark/80 leading-relaxed">
          Especializada en editoriales de moda, retratos y colaboraciones con marcas, 
          siempre busco crear narrativas visuales que conecten y emocionen.
        </p>
      </div>
    </div>
  </section>
);

export default Biografia;
