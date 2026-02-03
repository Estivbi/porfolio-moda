// projects.js
import img1 from '../assets/1.jpeg';
import img2 from '../assets/2.jpeg';  
import img7 from '../assets/7.jpeg';
import img9 from '../assets/9.jpeg';
import img16 from '../assets/16.jpeg';
import img17 from '../assets/17.jpeg';

const projects = [
  {
    id: 1,
    title: "Victoria - Portada Enero",
    category: "portadas",
    type: "image",
    cover: img1,
    images: [img1, img1],
    video: null,
    description: "Creación y estilismo de portada para revista Victoria",
    credits: "Estilismo: Patricia Moreno"
  },
  {
    id: 2,
    title: "Eien Diamonds - Campaña",
    category: "marcas",
    type: "image",
    cover: img2,
    images: [img2, img2],
    video: null,
    description: "Dirección creativa y estilismo para campaña de Eien Diamonds",
    credits: "@eien.diamonds"
  },
  {
    id: 3,
    title: "Estilismo Artista Emergente",
    category: "artistas",
    type: "image",
    cover: img7,
    images: [img7, img7],
    video: null,
    description: "Creación de looks que refuerzan la imagen y narrativa visual del artista",
    credits: "Estilismo: Patricia Moreno"
  },
  {
    id: 4,
    title: "Test de Modelo",
    category: "estudio",
    type: "image",
    cover: img9,
    images: [img9, img9],
    video: null,
    description: "Estilismo para sesión test de modelo, potenciando versatilidad",
    credits: "Estilismo: Patricia Moreno"
  },
  {
    id: 5,
    title: "Editorial Independiente",
    category: "editorial",
    type: "image",
    cover: img17,
    images: [img17, img17],
    video: null,
    description: "Proyecto editorial independiente con conceptos visuales creativos",
    credits: "Dirección: Patricia Moreno"
  },
  {
    id: 6,
    title: "Victoria - Portada Febrero",
    category: "portadas",
    type: "image",
    cover: img16,
    images: [img16, img16],
    video: null,
    description: "Creación y estilismo de portada para revista Victoria",
    credits: "Estilismo: Patricia Moreno"
  }
];

export default projects;
