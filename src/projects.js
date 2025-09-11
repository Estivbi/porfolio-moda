// projects.js
// Aquí defines los proyectos de la galería

const projects = [
  {
    id: 1,
    title: "Editorial Primavera",
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
    type: "video",
    cover: "/vite.svg",
    images: [],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Desfile de moda otoño 2025. Video resumen.",
    credits: "Dirección: Laura Ruiz"
  }
];

export default projects;
