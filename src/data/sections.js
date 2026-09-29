// sections.js - Secciones del portfolio y sus fotos
// Para añadir fotos a una sección: importa la imagen y añádela a `images`.
// `cover` es la imagen de fondo de la tarjeta en la home.
import img1 from '../assets/1.jpeg';
import img2 from '../assets/2.jpeg';
import img3 from '../assets/3.jpeg';
import img4 from '../assets/4.jpeg';
import img8 from '../assets/8.jpeg';
import img9 from '../assets/9.jpeg';
import img10 from '../assets/10.jpeg';
import img11 from '../assets/11.jpeg';
import img12 from '../assets/12.jpeg';
import img13 from '../assets/13.jpeg';
import img14 from '../assets/14.jpeg';
import img15 from '../assets/15.jpeg';
import img16 from '../assets/16.jpeg';
import img17 from '../assets/17.jpeg';
import img18 from '../assets/18.jpeg';

const sections = [
  {
    slug: 'desfiles',
    title: 'Desfiles',
    description: 'Estilismo y coordinación de looks para pasarela',
    credits: 'Estilismo: Patricia Moreno',
    cover: null,
    images: []
  },
  {
    slug: 'editoriales',
    title: 'Editoriales',
    description: 'Proyecto editorial independiente con conceptos visuales creativos',
    credits: 'Dirección: Patricia Moreno',
    cover: img17,
    images: [img17, img18]
  },
  {
    slug: 'marcas',
    title: 'Marcas',
    description: 'Dirección creativa y estilismo para campaña de Eien Diamonds',
    credits: '@eien.diamonds',
    cover: img4,
    images: [img4, img2, img3]
  },
  {
    slug: 'portadas',
    title: 'Portadas',
    description: 'Creación y estilismo de portada para revista Victoria',
    credits: 'Estilismo: Patricia Moreno',
    cover: img15,
    images: [img16, img1, img14, img15]
  },
  {
    slug: 'test-modelos',
    title: 'Test Modelos',
    description: 'Estilismo para sesión test de modelo, potenciando versatilidad',
    credits: 'Estilismo: Patricia Moreno',
    cover: img8,
    images: [img8, img9, img10, img11, img12, img13]
  }
];

export default sections;
