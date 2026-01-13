import React, { useState } from "react";
import ProyectoCard from "./ProyectoCard";
import FiltroProyectos from "./FiltroProyectos";

const Proyectos = ({ projects, onSelectProject }) => {
  const [categoriaActiva, setCategoriaActiva] = useState('todos');

  const proyectosFiltrados = categoriaActiva === 'todos' 
    ? projects 
    : projects.filter(p => p.category === categoriaActiva);

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-moda-dark">Proyectos</h2>
        
        <FiltroProyectos 
          categoriaActiva={categoriaActiva} 
          onCategoriaChange={setCategoriaActiva} 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proyectosFiltrados.map((project) => (
            <ProyectoCard 
              key={project.id}
              project={project}
              onClick={() => onSelectProject(project.id)}
            />
          ))}
        </div>

        {proyectosFiltrados.length === 0 && (
          <div className="text-center py-12">
            <p className="text-moda-dark/60 text-lg">No hay proyectos en esta categoría</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Proyectos;
