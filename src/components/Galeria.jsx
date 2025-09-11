import React from "react";

const Proyectos = ({ projects, onSelectProject }) => (
  <section className="py-16 px-6">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-moda-dark">Proyectos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group cursor-pointer overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300"
            onClick={() => onSelectProject(project.id)}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src={project.cover} 
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-moda-dark mb-1">{project.title}</h3>
              <p className="text-moda-dark/60 text-sm">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Proyectos;
