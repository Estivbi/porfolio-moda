import React from 'react';

const ProyectoDetalle = ({ project, id }) => {
  return (
    <section 
      id={id}
      className="py-20 px-6 min-h-screen flex items-center"
      style={{ 
        background: `linear-gradient(135deg, ${getProjectGradient(project.id)})` 
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Contenido del proyecto */}
          <div className="space-y-6">
            <h2 className="text-5xl font-bold text-moda-dark leading-tight">
              {project.title}
            </h2>
            <p className="text-xl text-moda-dark/80 leading-relaxed">
              {project.description}
            </p>
            <div className="text-moda-dark/60">
              <small className="font-medium">{project.credits}</small>
            </div>
          </div>

          {/* Media del proyecto */}
          <div className="space-y-4">
            {project.type === "image" && project.images.map((img, idx) => (
              <div key={idx} className="overflow-hidden rounded-2xl shadow-lg">
                <img 
                  src={img} 
                  alt={`${project.title} ${idx + 1}`} 
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
            
            {project.type === "video" && (
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <iframe
                  width="100%"
                  height="400"
                  src={project.video}
                  title={project.title}
                  style={{ border: 0 }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-2xl"
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// Función para obtener gradientes únicos por proyecto
const getProjectGradient = (projectId) => {
  const gradients = {
    1: '#F7D6E0, #E3D6F7', // Rose to Lilac
    2: '#D6F7EC, #D6EAF7', // Mint to Sky
    3: '#F7E6D6, #F7D6E0', // Peach to Rose
  };
  return gradients[projectId] || '#F5F5F5, #F7D6E0'; // Default
};

export default ProyectoDetalle;
