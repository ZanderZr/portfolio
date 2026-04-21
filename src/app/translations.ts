export type Lang = 'en' | 'es';

export const translations = {
  en: {
    nav: { home: 'Home', about: 'About me', projects: 'Projects', contact: 'Contact' },
    hero: {
      greeting: "Hi, I'm",
      role: 'Full Stack Developer',
      cta_projects: 'View projects',
      cta_contact: 'Contact me'
    },
    about: {
      label: 'About me',
      title: 'Full Stack Developer<br>based in Spain',
      p1: "I'm a full-stack developer with experience in <strong>Angular</strong> and <strong>Node.js</strong>, focused on building clean and performant web applications.",
      p2: 'I specialize in frontend development but enjoy working across the full stack, and I always strive to be adaptable to whatever the project needs.'
    },
    projects: {
      label: "What I've built",
      title: 'My projects',
      items: [
        { title: 'Task Manager',   icon: 'fa-brands fa-angular',        info: 'Full-stack task management app built with Angular and Node.js. Features real-time updates, user authentication and a REST API backend.' },
        { title: 'Portfolio',      icon: 'fa-solid fa-code',             info: 'Personal portfolio built with Angular 19 standalone components. Fully responsive with scroll-snap sections and smooth animations.' },
        { title: 'REST API',       icon: 'fa-brands fa-node-js',         info: 'RESTful API built with Node.js and Express. Includes JWT authentication, input validation and full CRUD operations.' },
        { title: 'E-commerce UI',  icon: 'fa-solid fa-cart-shopping',    info: 'Responsive e-commerce frontend with Angular. Product catalog, shopping cart, filters and checkout flow.' }
      ]
    },
    contact: {
      label: 'Get in touch',
      title: 'Contact me',
      name: 'Your name',
      email: 'Your email',
      message: 'Your message',
      send: 'Send message',
      desc: "I'm always open to new opportunities and collaborations. Feel free to reach out!"
    }
  },
  es: {
    nav: { home: 'Inicio', about: 'Sobre mí', projects: 'Proyectos', contact: 'Contacto' },
    hero: {
      greeting: 'Hola, soy',
      role: 'Desarrollador Full Stack',
      cta_projects: 'Ver proyectos',
      cta_contact: 'Contáctame'
    },
    about: {
      label: 'Sobre mí',
      title: 'Desarrollador Full Stack<br>con base en España',
      p1: 'Soy desarrollador full-stack con experiencia en <strong>Angular</strong> y <strong>Node.js</strong>, enfocado en crear aplicaciones web limpias y eficientes.',
      p2: 'Me especializo en el frontend pero disfruto trabajando en todo el stack, adaptándome siempre a lo que cada proyecto necesite.'
    },
    projects: {
      label: 'Lo que he construido',
      title: 'Mis proyectos',
      items: [
        { title: 'Gestor de Tareas', icon: 'fa-brands fa-angular',       info: 'App full-stack de gestión de tareas con Angular y Node.js. Actualizaciones en tiempo real, autenticación y API REST.' },
        { title: 'Portfolio',        icon: 'fa-solid fa-code',            info: 'Portfolio personal con Angular 19 standalone. Completamente responsive con scroll-snap y animaciones.' },
        { title: 'API REST',         icon: 'fa-brands fa-node-js',        info: 'API RESTful con Node.js y Express. Autenticación JWT, validación de datos y CRUD completo.' },
        { title: 'E-commerce UI',    icon: 'fa-solid fa-cart-shopping',   info: 'Frontend de e-commerce responsive con Angular. Catálogo, carrito, filtros y proceso de compra.' }
      ]
    },
    contact: {
      label: 'Ponte en contacto',
      title: 'Contáctame',
      name: 'Tu nombre',
      email: 'Tu email',
      message: 'Tu mensaje',
      send: 'Enviar mensaje',
      desc: '¡Siempre estoy abierto a nuevas oportunidades y colaboraciones. No dudes en escribirme!'
    }
  }
};
