// projects.js
// Aquí defines los proyectos de la galería

const projects = [
  {
    id: 1,
    title: "Editorial Primavera",
    category: "editoriales",
    type: "image",
    cover: "/vite.svg",
    images: ["/vite.svg", "/vite.svg"],
    video: null,
    description: "Editorial de moda primavera 2025. Fotografía y estilismo.",
    credits: "Fotografía: Ana Pérez, Estilismo: Juan López"
  },
  {
    id: 2,
    title: "Pasarela Otoño",
    category: "marcas",
    type: "video",
    cover: "/vite.svg",
    images: [],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Desfile de moda otoño 2025. Video resumen.",
    credits: "Dirección: Laura Ruiz"
  },
  {
    id: 3,
    title: "Test de Accesorios",
    category: "test",
    type: "image",
    cover: "/vite.svg",
    images: ["/vite.svg"],
    video: null,
    description: "Prueba de nuevos accesorios de temporada.",
    credits: "Styling: María García"
  },
  {
    id: 4,
    title: "Colaboración Artista",
    category: "artistas",
    type: "image",
    cover: "/vite.svg",
    images: ["/vite.svg", "/vite.svg"],
    video: null,
    description: "Colección limitada con artista invitado.",
    credits: "Colaboración: Carlos Rodríguez"
  },
  {
    id: 5,
    title: "Editorial Verano",
    category: "editoriales",
    type: "image",
    cover: "/vite.svg",
    images: ["/vite.svg"],
    video: null,
    description: "Campaña de verano 2025.",
    credits: "Fotografía: Elena Fernández"
  },
  {
    id: 6,
    title: "Marca",
    category: "marcas",
    type: "image",
    cover: "/vite.svg",
    images: ["/vite.svg", "/vite.svg"],
    video: null,
    description: "Proyecto para marca de lujo.",
    credits: "Creative Director: Pablo López"
  }
];

export default projects;
