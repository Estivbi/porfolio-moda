// sections.js - Secciones del portfolio y sus fotos
// Para añadir fotos a una sección: importa la imagen y añádela a `images`.
// `cover` es la imagen de fondo de la tarjeta en la home.
import img2 from '../assets/2.jpeg';
import img3 from '../assets/3.jpeg';
import img4 from '../assets/4.jpeg';
import img8 from '../assets/8.jpeg';
import img9 from '../assets/9.jpeg';
import img10 from '../assets/10.jpeg';
import img11 from '../assets/11.jpeg';
import img12 from '../assets/12.jpeg';
import img13 from '../assets/13.jpeg';
import img17 from '../assets/17.jpeg';
import img18 from '../assets/18.jpeg';
import desfile1 from '../assets/desfiles/1.jpg';
import desfile2 from '../assets/desfiles/2.jpg';
import desfile3 from '../assets/desfiles/3.jpg';
import desfile4 from '../assets/desfiles/4.jpg';
import desfile5 from '../assets/desfiles/5.jpg';
import desfile6 from '../assets/desfiles/6.jpg';
import desfile7 from '../assets/desfiles/7.jpg';
import desfile8 from '../assets/desfiles/8.jpg';
import desfile9 from '../assets/desfiles/9.jpg';
import editorial1 from '../assets/editoriales/1.jpg';
import editorial2 from '../assets/editoriales/2.webp';
import editorial3 from '../assets/editoriales/3.webp';
import editorial4 from '../assets/editoriales/4.webp';
import editorial5 from '../assets/editoriales/5.jpg';
import editorial6 from '../assets/editoriales/6.jpg';
import editorial7 from '../assets/editoriales/7.jpg';
import editorial8 from '../assets/editoriales/8.jpg';
import editorial9 from '../assets/editoriales/9.jpg';
import editorial10 from '../assets/editoriales/10.jpg';
import editorial11 from '../assets/editoriales/11.jpg';
import editorial12 from '../assets/editoriales/12.jpg';
import editorial14 from '../assets/editoriales/14.jpg';
import editorial15 from '../assets/editoriales/15.jpg';
import editorial16 from '../assets/editoriales/16.jpg';

// Todas las fotos de las carpetas de src/assets, para las secciones que se rellenan solas
const folderModules = import.meta.glob('../assets/*/*.{jpg,jpeg,png,webp}', { eager: true, import: 'default' });

// Fotos de una carpeta ordenadas por nombre (1, 2, 3... 10). Basta con subir la foto a la carpeta.
function folderEntries(folder) {
  return Object.entries(folderModules)
    .filter(([path]) => path.includes(`/assets/${folder}/`))
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }));
}

function folderImages(folder) {
  return folderEntries(folder).map(([, img]) => img);
}

// Una foto concreta de una carpeta por su nombre sin extensión (p. ej. '3'); si no existe, la primera
function folderImage(folder, name) {
  const entries = folderEntries(folder);
  const match = entries.find(([path]) => path.split('/').at(-1).replace(/\.\w+$/, '') === name);
  return (match ?? entries[0])?.[1] ?? null;
}

const artistas = folderImages('artistas');
// Portadas: cada portada seguida de las fotos de su sesión (1 portada Octubre, 2-3 su sesión, 4 Primera Edición...)
const portadas = folderImages('portadas');

const sections = [
  {
    slug: 'desfiles',
    title: 'Desfiles',
    description: 'Estilismo y coordinación de looks para pasarela',
    credits: 'Estilismo: Patricia Moreno',
    cover: desfile6,
    images: [desfile6, desfile2, desfile5, desfile3, desfile4, desfile7, desfile1, desfile8, desfile9]
  },
  {
    slug: 'editoriales',
    title: 'Editoriales',
    description: 'Proyecto editorial independiente con conceptos visuales creativos',
    credits: 'Dirección: Patricia Moreno',
    cover: img17,
    images: [img17, editorial1, img18, editorial2, editorial3, editorial7, editorial9, editorial8, editorial5, editorial6, editorial14, editorial4, editorial11, editorial10, editorial15, editorial12, editorial16]
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
    slug: 'artistas',
    title: 'Artistas',
    description: 'Creación de looks que refuerzan la imagen y narrativa visual del artista',
    credits: 'Estilismo: Patricia Moreno',
    cover: artistas[0] ?? null,
    images: artistas
  },
  {
    slug: 'portadas',
    title: 'Portadas',
    description: 'Creación y estilismo de portada para revista Victoria',
    credits: 'Estilismo: Patricia Moreno',
    // Fondo de la tarjeta: una foto de sesión, sin el texto de la revista encima
    cover: folderImage('portadas', '3'),
    images: portadas
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
