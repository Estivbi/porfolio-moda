// Testimonios.jsx
import React from "react";

const Testimonios = () => {
  const testimonios = [
    {
      texto: "Carolina capturó perfectamente la esencia de nuestra marca. Su visión creativa y atención al detalle superaron nuestras expectativas.",
      autor: "María González",
      empresa: "Directora de Marketing, StyleCo"
    },
    {
      texto: "Trabajar con Carolina fue una experiencia increíble. Su profesionalismo y creatividad se reflejan en cada imagen que produce.",
      autor: "Carlos Ruiz",
      empresa: "Editor, Fashion Magazine"
    },
    {
      texto: "La calidad y el estilo único de Carolina han elevado nuestro contenido visual. Recomendamos sus servicios sin dudarlo.",
      autor: "Ana Martín",
      empresa: "CEO, Trendy Brand"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-moda-dark mb-4">Lo que dicen de mí</h2>
          <p className="text-lg text-moda-pink-dark max-w-2xl mx-auto">
            Testimonios reales de clientes y colaboradores que han trabajado conmigo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonios.map((testimonio, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-moda-pink"
            >
              <div className="mb-6">
                <svg className="w-8 h-8 text-moda-rose mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>
              
              <blockquote className="text-moda-dark/80 text-lg leading-relaxed mb-6 italic">
                "{testimonio.texto}"
              </blockquote>
              
              <div className="border-t border-moda-pink pt-4">
                <p className="font-semibold text-moda-dark">{testimonio.autor}</p>
                <p className="text-moda-pink-dark text-sm">{testimonio.empresa}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonios;
