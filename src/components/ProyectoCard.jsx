import React from 'react';

const ProyectoCard = ({ project, onClick }) => (
  <div
    className="group cursor-pointer overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300"
    onClick={onClick}
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
      {project.category && (
        <span className="text-xs text-moda-pink-dark font-medium mt-2 block capitalize">
          {project.category}
        </span>
      )}
    </div>
  </div>
);

export default ProyectoCard;
