import React from "react";
import ContactInfo from "./ContactInfo";
import SocialLinks from "./SocialLinks";

const Contacto = () => (
  <section className="py-16 px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-moda-dark mb-4">Contacto</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Información de contacto */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-moda-dark mb-6">Información de contacto</h3>
            <ContactInfo variant="grid" />
          </div>
          
          {/* Redes sociales */}
          <div>
            <h4 className="text-xl font-semibold text-moda-dark mb-4">Sígueme</h4>
            <SocialLinks variant="default" />
          </div>
        </div>

        {/* Botón de contacto directo */}
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-moda-dark mb-4">¿Tienes un proyecto en mente?</h3>
            <p className="text-lg text-moda-pink-dark mb-8">
              Envíame un correo y hablemos sobre cómo puedo ayudarte a hacer realidad tu visión creativa.
            </p>
          </div>
          
          <a 
            href="mailto:hola@ejemplo.com?subject=Consulta%20sobre%20proyecto%20creativo"
            className="inline-flex items-center space-x-3 bg-moda-rose text-moda-dark font-semibold py-4 px-8 rounded-lg hover:bg-moda-pink transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-moda-rose focus:ring-offset-2 shadow-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>Enviar correo</span>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Contacto;
