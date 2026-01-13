import React from "react";
import Card from "./Card";

const Biografia = () => (
  <section className="py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-moda-dark mb-6">Sobre mí</h2>
        <p className="text-xl text-moda-pink-dark max-w-3xl mx-auto">
          Mi historia, mi pasión y mi visión como Creative Director
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Imagen de Patri*/}
        <div className="order-2 lg:order-1">
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-moda-rose to-moda-peach rounded-2xl flex items-center justify-center">
              <span className="text-8xl">✨</span>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-moda-pink rounded-full flex items-center justify-center">
              <span className="text-2xl">✨</span>
            </div>
          </div>
        </div>

        {/* Contenido */}
        <div className="order-1 lg:order-2 space-y-6">
          <Card className="bg-white/70 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold text-moda-dark mb-4">Mi Historia</h3>
            <p className="text-lg text-moda-dark/80 leading-relaxed mb-6">
              Soy Carolina, una Creative Director apasionada por crear experiencias visuales únicas 
              que conecten marcas con audiencias. Con más de 5 años de experiencia en el mundo de 
              la moda y el diseño, he desarrollado una visión que combina estética contemporánea 
              con narrativas auténticas.
            </p>
            <p className="text-lg text-moda-dark/80 leading-relaxed">
              Mi enfoque se centra en entender la esencia de cada marca para crear estrategias 
              creativas que no solo sean visualmente impactantes, sino que también generen 
              conexiones emocionales duraderas.
            </p>
          </Card>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-moda-rose/30 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-moda-dark mb-2">50+</div>
              <div className="text-moda-pink-dark">Proyectos Completados</div>
            </div>
            <div className="bg-moda-peach/30 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-moda-dark mb-2">5+</div>
              <div className="text-moda-pink-dark">Años de Experiencia</div>
            </div>
          </div>
        </div>
      </div>

      {/* Servicios destacados */}
      <div className="mt-20">
        <h3 className="text-3xl font-bold text-center text-moda-dark mb-12">Lo que hago como Creative Director</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card variant="service">
            <div className="w-16 h-16 bg-moda-rose rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h4 className="text-xl font-semibold text-moda-dark mb-3">Estrategia Creativa</h4>
            <p className="text-moda-dark/70">
              Desarrollo conceptos visuales que reflejan la identidad única de cada marca y conectan con su audiencia objetivo.
            </p>
          </Card>
          
          <Card variant="service">
            <div className="w-16 h-16 bg-moda-peach rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📸</span>
            </div>
            <h4 className="text-xl font-semibold text-moda-dark mb-3">Dirección Visual</h4>
            <p className="text-moda-dark/70">
              Superviso cada aspecto visual, desde la fotografía hasta el diseño, asegurando coherencia y excelencia en cada detalle.
            </p>
          </Card>
          
          <Card variant="service">
            <div className="w-16 h-16 bg-moda-lilac rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚀</span>
            </div>
            <h4 className="text-xl font-semibold text-moda-dark mb-3">Innovación</h4>
            <p className="text-moda-dark/70">
              Implemento tendencias emergentes y técnicas creativas para mantener a las marcas a la vanguardia del diseño.
            </p>
          </Card>
        </div>
      </div>
    </div>
  </section>
);

export default Biografia;
