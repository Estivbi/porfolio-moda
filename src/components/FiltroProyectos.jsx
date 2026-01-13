import React from 'react';

const FiltroProyectos = ({ categoriaActiva, onCategoriaChange }) => {
  const categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'editoriales', label: 'Editoriales' },
    { id: 'test', label: 'Test' },
    { id: 'artistas', label: 'Artistas' },
    { id: 'marcas', label: 'Marcas' }
  ];

  return (
    <div className="flex justify-center gap-3 mb-12 flex-wrap">
      {categories.map(cat => (
        <button 
          key={cat.id}
          onClick={() => onCategoriaChange(cat.id)}
          className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
            categoriaActiva === cat.id
              ? 'bg-moda-rose text-moda-dark shadow-md'
              : 'bg-white text-moda-dark hover:bg-moda-pink border border-moda-pink/30'
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
};

export default FiltroProyectos;