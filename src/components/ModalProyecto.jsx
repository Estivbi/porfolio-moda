// ModalProyecto.jsx
import React from "react";

const ModalProyecto = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-moda-dark/60 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6 relative animate-fadeIn" onClick={e => e.stopPropagation()}>
        <button className="absolute top-2 right-2 text-2xl text-moda-dark/50 hover:text-moda-rose" onClick={onClose}>&times;</button>
        <h3 className="text-2xl font-bold mb-4 text-moda-dark">{project.title}</h3>
        <div className="mb-4 flex flex-col gap-2">
          {project.type === "image" && project.images.map((img, idx) => (
            <img key={idx} src={img} alt={project.title + " " + (idx+1)} className="rounded-lg border border-moda-gray" />
          ))}
          {project.type === "video" && (
            <iframe
              width="100%"
              height="315"
              src={project.video}
              title={project.title}
              style={{ border: 0 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg border border-moda-gray"
            ></iframe>
          )}
        </div>
        <p className="mb-2 text-moda-dark/80">{project.description}</p>
        <small className="text-moda-dark/50">{project.credits}</small>
      </div>
    </div>
  );
};

export default ModalProyecto;
