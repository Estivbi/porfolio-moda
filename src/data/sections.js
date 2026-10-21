// sections.js - Secciones del portfolio y sus fotos
// Para añadir fotos a una sección: importa la imagen y añádela a `images`.
// `cover` es la imagen de fondo de la tarjeta en la home.
// `title`, `description` y `credits` tienen texto en español (es) e inglés (en).
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
import editorial17 from '../assets/editoriales/17.jpg';
import editorial18 from '../assets/editoriales/18.jpg';
import editorial19 from '../assets/editoriales/19.jpg';
import editorial20 from '../assets/editoriales/20.jpg';
import editorial21 from '../assets/editoriales/21.jpg';
import editorial22 from '../assets/editoriales/22.jpg';

// Todas las fotos de las carpetas de src/assets, para las secciones que se rellenan solas
const folderModules = import.meta.glob('../assets/*/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', { eager: true, import: 'default' });

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
// Portadas: cada portada seguida de las fotos de su sesión, de la edición más reciente a la más antigua
// (1 Nº 9, 5 Nº 7, 9 Nº 6, 12 Nº 4, 16 Nº 1 Primera Edición)
const portadas = folderImages('portadas');
const marcas = folderImages('marcas');

const sections = [
  {
    slug: 'desfiles',
    title: { es: 'Desfiles', en: 'Runway' },
    description: {
      es: 'Estilismo y coordinación de looks para el desfile de Apolineo Studio en la Mercedes-Benz Fashion Week',
      en: 'Styling and look coordination for the Apolineo Studio show at Mercedes-Benz Fashion Week',
    },
    credits: { es: 'Estilismo: Patricia Moreno', en: 'Styling: Patricia Moreno' },
    cover: desfile6,
    images: [desfile6, desfile2, desfile5, desfile3, desfile4, desfile7, desfile1, desfile8, desfile9]
  },
  {
    slug: 'editoriales',
    title: { es: 'Editoriales', en: 'Editorials' },
    description: {
      es: 'Proyecto editorial independiente con conceptos visuales creativos',
      en: 'Independent editorial project with creative visual concepts',
    },
    credits: { es: 'Dirección: Patricia Moreno', en: 'Direction: Patricia Moreno' },
    cover: img17,
    images: [img17, editorial1, img18, editorial2, editorial3, editorial7, editorial9, editorial8, editorial5, editorial6, editorial14, editorial4, editorial11, editorial10, editorial15, editorial12, editorial16, editorial17, editorial18, editorial19, editorial20, editorial21, editorial22]
  },
  {
    slug: 'marcas',
    title: { es: 'Marcas', en: 'Brands' },
    description: {
      es: 'Dirección creativa y estilismo para campañas de marca',
      en: 'Creative direction and styling for brand campaigns',
    },
    credits: { es: 'Estilismo: Patricia Moreno', en: 'Styling: Patricia Moreno' },
    cover: img4,
    images: [img4, img2, img3, ...marcas]
  },
  {
    slug: 'artistas',
    title: { es: 'Artistas', en: 'Artists' },
    description: {
      es: 'Creación de looks que refuerzan la imagen y narrativa visual del artista',
      en: "Creating looks that strengthen the artist's image and visual narrative",
    },
    credits: { es: 'Estilismo: Patricia Moreno', en: 'Styling: Patricia Moreno' },
    cover: artistas[0] ?? null,
    images: artistas
  },
  {
    slug: 'portadas',
    title: { es: 'Portadas', en: 'Covers' },
    description: {
      es: 'Creación y estilismo de portada para revista Victoria',
      en: 'Cover creation and styling for Victoria magazine',
    },
    credits: { es: 'Estilismo: Patricia Moreno', en: 'Styling: Patricia Moreno' },
    // Fondo de la tarjeta: una foto de sesión, sin el texto de la revista encima
    cover: folderImage('portadas', '11'),
    images: portadas
  },
  {
    slug: 'test-modelos',
    title: { es: 'Test Modelos', en: 'Model Tests' },
    description: {
      es: 'Estilismo para sesión test de modelo, potenciando versatilidad',
      en: "Styling for model test shoots, highlighting the model's versatility",
    },
    credits: { es: 'Estilismo: Patricia Moreno', en: 'Styling: Patricia Moreno' },
    cover: img8,
    images: [img8, img9, img10, img11, img12, img13]
  }
];

export default sections;
