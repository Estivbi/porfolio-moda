// i18n/ui.js - Textos de la web en español e inglés

export const languages = ['es', 'en'];

// Ruta de una página en el idioma dado: '/#contacto' -> '/en/#contacto'
export function localePath(lang, path = '/') {
  return lang === 'en' ? `/en${path}` : path;
}

// Misma página en el otro idioma
export function switchLangPath(currentPath, toLang) {
  const withoutLang = currentPath.replace(/^\/en(?=\/|$)/, '') || '/';
  return localePath(toLang, withoutLang);
}

const titlesEn = {
  nav: {
    about: 'About',
    education: 'Education',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
  },
  heroEyebrow: 'Stylist & Creative Director',
  presentationEyebrow: 'Introduction',
  presentationTitle: 'About me',
  projectsEyebrow: 'Projects',
  projectsTitle: 'Selected Work',
  educationEyebrow: 'Education',
  educationTitle: 'Training',
  skillsEyebrow: 'Skills',
  skillsTitle: 'Professional Skills',
  skillGroups: ['Creation & Direction', 'Styling & Consulting', 'Production & Management', 'Areas of Expertise'],
  contactEyebrow: 'Contact',
  contactTitle: "Let's talk",
  location: 'Location',
  followMe: 'Follow me',
  brand: 'Brand',
  brandRole: 'Direction & Stylist',
  comingSoon: 'Coming soon',
};

// Títulos de la versión en español (los de siempre)
const titlesEs = {
  nav: {
    about: 'Presentación',
    education: 'Educación',
    skills: 'Habilidades',
    projects: 'Proyectos',
    contact: 'Contacto',
  },
  heroEyebrow: 'Estilista & Directora Creativa',
  presentationEyebrow: 'Presentación',
  presentationTitle: 'Sobre mí',
  projectsEyebrow: 'Proyectos',
  projectsTitle: 'Trabajos Destacados',
  educationEyebrow: 'Educación',
  educationTitle: 'Formación',
  skillsEyebrow: 'Habilidades',
  skillsTitle: 'Competencias Profesionales',
  skillGroups: ['Creación & Dirección', 'Styling & Asesoría', 'Producción & Gestión', 'Áreas de Especialidad'],
  contactEyebrow: 'Contacto',
  contactTitle: 'Hablemos',
  location: 'Ubicación',
  followMe: 'Sígueme',
  brand: 'Brand',
  brandRole: 'Direction & Stylist',
  comingSoon: 'Próximamente',
};

export const ui = {
  es: {
    ...titlesEs,
    meta: {
      title: 'Patricia Moreno - Creative Director & Fashion Stylist',
      description: 'Portafolio de Patricia Moreno, Creative Director especializada en moda y diseño visual. Descubre mis proyectos, mi historia y mi visión creativa.',
    },
    heroText: 'Tengo 21 años y soy estilista y directora creativa. Especializada en desarrollo de conceptos creativos, dirección estética y construcción de narrativas visuales para marcas, artistas y editoriales de moda.',
    heroCtaProjects: 'Ver Proyectos',
    heroCtaContact: 'Contactar',
    presentation: [
      'Mi nombre es <strong style="color: #000000;">Patricia Moreno</strong>, tengo <strong style="color: #000000;">21 años</strong> y soy estilista y directora creativa. Actualmente estudio Estilismo y Asesoría de Imagen.',
      'Inicié mi trayectoria desarrollando proyectos personales, lo que me permitió construir una identidad creativa propia. Con el tiempo, he participado en la creación de portadas para revistas de moda, en el estilismo de campañas para marcas del sector y en la creación de looks para artistas emergentes.',
      'Mi enfoque se centra en desarrollar conceptos creativos coherentes, trabajar con equipos multidisciplinarios y crear narrativas visuales que comuniquen la esencia de cada proyecto. Cada trabajo es una oportunidad para explorar nuevas perspectivas visuales y fortalecer mi identidad como creativa.',
    ],
    projectsText: 'Selección de proyectos donde he participado como estilista y directora creativa',
    photos: 'fotos',
    viewGallery: 'Ver galería',
    education: [
      'Actualmente estudio <strong style="color: #000000;">Estilismo y Asesoría de Imagen</strong>, una formación que me ha permitido adquirir una base sólida tanto teórica como práctica dentro del sector de la moda y la imagen.',
      'A lo largo de mis estudios he trabajado en el desarrollo de conceptos creativos, análisis de tendencias, construcción de estilismos y dirección estética, aplicando estos conocimientos en proyectos reales y ejercicios creativos. Esta formación me ha ayudado a entender la imagen como una herramienta de comunicación, reforzando mi capacidad para crear narrativas visuales coherentes y alineadas con una identidad concreta.',
    ],
    skills: [
      ['Desarrollo de conceptos creativos y storytelling visual', 'Análisis de tendencias y referencias culturales', 'Dirección creativa aplicada a moda y proyectos editoriales', 'Construcción de identidad visual y narrativas coherentes'],
      ['Creación y planificación de estilismos', 'Asesoría de imagen y construcción de looks', 'Selección de vestuario, accesorios y paletas cromáticas', 'Coordinación de looks para shootings y campañas'],
      ['Organización y preparación de sesiones fotográficas', 'Trabajo con artistas, modelos y equipos creativos', 'Coordinación de proyectos editoriales e independientes', 'Capacidad de adaptación a distintos estilos y briefs creativos'],
      ['Portadas de revista y editoriales de moda', 'Campañas y proyectos de marca', 'Styling para artistas emergentes', 'Sesiones de test y portfolio de modelos'],
    ],
    contactText: '¿Tienes un proyecto en mente? Me encantaría conocer tu visión y explorar cómo podemos trabajar juntos para crear algo especial.',
    locationValue: 'Madrid, España',
    quote: '"La creatividad es la inteligencia divirtiéndose."',
    sendMessage: 'Enviar Mensaje',
    mailSubject: 'Consulta sobre proyecto',
    footerText: 'Creative Director & Fashion Stylist especializada en crear experiencias visuales únicas que conectan marcas con audiencias.',
    rights: 'Todos los derechos reservados.',
    madeWith: 'Hecho con ❤️ para la moda',
    galleryHint: 'Arrastra para explorar · Pulsa una foto para ampliarla',
    galleryEmpty: 'Estamos preparando las fotos de esta sección.',
    galleryPhotosOf: 'Fotos de',
    photoWord: 'foto',
    enlarge: 'Ampliar',
    galleryMetaSuffix: 'Portfolio de Patricia Moreno, estilista y directora creativa.',
  },
  en: {
    ...titlesEn,
    meta: {
      title: 'Patricia Moreno - Creative Director & Fashion Stylist',
      description: 'Portfolio of Patricia Moreno, Creative Director specialised in fashion and visual design. Discover my projects, my story and my creative vision.',
    },
    heroText: "I'm 21 and I'm a stylist and creative director. Specialised in developing creative concepts, aesthetic direction and building visual narratives for fashion brands, artists and editorials.",
    heroCtaProjects: 'View Projects',
    heroCtaContact: 'Get in touch',
    presentation: [
      'My name is <strong style="color: #000000;">Patricia Moreno</strong>, I am <strong style="color: #000000;">21 years old</strong> and I am a stylist and creative director. I am currently studying Styling and Image Consulting.',
      'I started my career developing personal projects, which allowed me to build my own creative identity. Over time, I have taken part in creating covers for fashion magazines, styling campaigns for fashion brands and creating looks for emerging artists.',
      'My approach focuses on developing coherent creative concepts, working with multidisciplinary teams and creating visual narratives that communicate the essence of each project. Every job is an opportunity to explore new visual perspectives and strengthen my identity as a creative.',
    ],
    projectsText: 'A selection of projects I have worked on as a stylist and creative director',
    photos: 'photos',
    viewGallery: 'View gallery',
    education: [
      'I am currently studying <strong style="color: #000000;">Styling and Image Consulting</strong>, a programme that has given me a solid theoretical and practical foundation in the fashion and image industry.',
      'Throughout my studies I have worked on developing creative concepts, trend analysis, building looks and aesthetic direction, applying this knowledge to real projects and creative exercises. This training has helped me understand image as a communication tool, strengthening my ability to create coherent visual narratives aligned with a specific identity.',
    ],
    skills: [
      ['Creative concept development and visual storytelling', 'Trend analysis and cultural references', 'Creative direction for fashion and editorial projects', 'Building visual identity and coherent narratives'],
      ['Creating and planning looks', 'Image consulting and look building', 'Selecting wardrobe, accessories and colour palettes', 'Coordinating looks for shoots and campaigns'],
      ['Organising and preparing photo shoots', 'Working with artists, models and creative teams', 'Coordinating editorial and independent projects', 'Adapting to different styles and creative briefs'],
      ['Magazine covers and fashion editorials', 'Campaigns and brand projects', 'Styling for emerging artists', 'Model test shoots and portfolios'],
    ],
    contactText: "Have a project in mind? I'd love to hear your vision and explore how we can work together to create something special.",
    locationValue: 'Madrid, Spain',
    quote: '"Creativity is intelligence having fun."',
    sendMessage: 'Send Message',
    mailSubject: 'Project enquiry',
    footerText: 'Creative Director & Fashion Stylist specialised in creating unique visual experiences that connect brands with audiences.',
    rights: 'All rights reserved.',
    madeWith: 'Made with ❤️ for fashion',
    galleryHint: 'Drag to explore · Tap a photo to enlarge it',
    galleryEmpty: "We're preparing the photos for this section.",
    galleryPhotosOf: 'Photos of',
    photoWord: 'photo',
    enlarge: 'Enlarge',
    galleryMetaSuffix: 'Portfolio of Patricia Moreno, stylist and creative director.',
  },
};

export function useTranslations(lang) {
  return ui[lang] ?? ui.es;
}
