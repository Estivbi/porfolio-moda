import React from "react";
import ContactInfo from "./ContactInfo";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-moda-dark text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Información personal */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-moda-rose">Sobre mí</h3>
            <p className="text-moda-gray mb-4">
              Creative Director apasionada por crear experiencias visuales únicas que conecten marcas con audiencias.
            </p>
            <div className="flex space-x-4">
              <SocialLinks variant="footer" />
            </div>
          </div>

          {/* Enlaces de navegación */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-moda-rose">Navegación</h3>
            <ul className="space-y-2">
              <li>
                <a href="#proyectos" className="text-moda-gray hover:text-moda-rose transition-colors">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#biografia" className="text-moda-gray hover:text-moda-rose transition-colors">
                  Biografía
                </a>
              </li>
              <li>
                <a href="#testimonios" className="text-moda-gray hover:text-moda-rose transition-colors">
                  Testimonios
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-moda-gray hover:text-moda-rose transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Información de contacto */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-moda-rose">Contacto</h3>
            <ContactInfo variant="footer" />
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-moda-pink-dark pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-moda-gray text-sm mb-4 md:mb-0">
              © {currentYear} Carolina. Todos los derechos reservados.
            </p>
            <p className="text-moda-gray text-sm">
              Hecho con ❤️ para la moda
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
