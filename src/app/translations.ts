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
      title: 'Full Stack Developer<br>Cross-platform & IoT',
      p1: "Full-stack developer specialised in <strong>cross-platform applications</strong> with Angular, Ionic and Capacitor — one codebase for Android, web and desktop, backed by <strong>Node.js</strong> REST APIs.",
      p2: "Experienced in the agri-tech sector integrating <strong>real-time systems</strong> (WebSocket, MQTT, SSE) and <strong>BLE communication</strong> with IoT devices."
    },
    projects: {
      label: "What I've built",
      title: 'My projects',
      items: [
        { slug: 'intraapp',  icon: 'fa-solid fa-microchip', title: 'IntraApp + IntraApi',  info: 'Cross-platform IoT platform for the agri-tech sector. BLE sensors, UWB real-time positioning, OTA firmware and LoRaWAN. Professional project.' },
        { slug: 'ticketera', icon: 'fa-solid fa-ticket',    title: 'Ticketing Platform',   info: 'Multi-tenant ticketing platform: Laravel API plus three Angular front-ends for backoffice, sales and door scanning. Collaboration — I worked on the backoffice and the API.' },
        { slug: 'nutria',    icon: 'fa-solid fa-utensils',  title: 'NutrIA',               info: 'Local-first nutrition app. Describe a meal in plain language and Gemini estimates calories and macros. Ionic + Capacitor, SQLite on device, no accounts and no backend. Personal project.' }
      ]
    },
    actions: {
      detail: 'View project',
      demo: 'Live demo',
      github: 'Source code'
    },
    detail: {
      back: 'Back to portfolio',
      stack_title: 'Tech Stack',
      highlights_title: 'Key Technical Challenges',
      role_title: 'My Contribution',
      metrics_title: 'Scale',
      confidential: 'Confidential project — details available on request'
    },
    details: {
      intraapp: {
        badge: 'Professional Work · Agri-tech IoT',
        subtitle: 'IoT Device Management Platform',
        desc: 'Cross-platform application for managing IoT sensor networks in agricultural environments. Covers end-to-end workflows: BLE device configuration, UWB real-time positioning, OTA firmware distribution, LoRaWAN network management and production monitoring via WebSocket and SSE.',
        highlights: [
          'Custom BLE protocol over ESP32: async message routing, firmware chunking, and a compact 21-sensor bitmask (Uint32)',
          'Real-time state synchronisation across BLE + WebSocket + REST without a global state manager',
          'Same codebase running on Android APK, web browser and desktop (Electron) via Capacitor',
          'Dual charger IC support (MP2731 and BQ25622E) behind a unified interface',
          'Multi-step calibration workflows with sequential modals and partial-save recovery'
        ],
        role: [] as string[]
      },
      ticketera: {
        badge: 'Collaboration · Live Events & Ticketing',
        subtitle: 'Multi-tenant Ticketing Platform',
        desc: 'Ticketing platform where each promoter runs as an independent tenant. A Laravel API drives three Angular front-ends: a backoffice for managing events and staff, a public storefront for sales, and a scanner for validating tickets at the door. Supporting infrastructure covers queue workers, ticket QR/PDF generation and time-series reporting.',
        highlights: [
          'Multi-tenant model: each promoter manages its own events, staff and sales in isolation',
          'Three Angular front-ends sharing one API, each with its own auth flow and permissions',
          'PostgreSQL with TimescaleDB for time-series sales and access reporting',
          'Background workers for backups, purchase documents and media uploads',
          'Docker-based local infrastructure with Nginx, Postgres and Redis'
        ],
        role: [
          'Backoffice screens for the promoter workflow: event setup, artists, internal users and settings',
          'Full promoter-rep (RRPP) management: rosters, bulk adding, invitations and resend flow',
          'Multi-step forms and data tables for event and internal-user creation',
          'Avatar upload replacing manual URL entry, wired through the API media pipeline',
          'Standalone Go tooling that generates the ticket QR codes and the printable PDF tickets they are embedded in',
          'The matching Laravel API endpoints, request validation, migrations and tests'
        ]
      }
    },
    contact: {
      label: 'Get in touch',
      title: 'Contact me',
      name: 'Your name',
      email: 'Your email',
      message: 'Your message',
      send: 'Send message',
      sending: 'Sending...',
      success: "Message sent! I'll get back to you soon.",
      error: 'Something went wrong. Please try again.',
      name_required: 'Name is required',
      email_invalid: 'Enter a valid email',
      message_required: 'Message is required',
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
      title: 'Desarrollador Full Stack<br>Cross-platform & IoT',
      p1: 'Desarrollador full-stack especializado en <strong>aplicaciones cross-platform</strong> con Angular, Ionic y Capacitor — un mismo código para Android, web y desktop, con APIs REST en <strong>Node.js</strong>.',
      p2: 'Experiencia en el sector agri-tech integrando <strong>sistemas en tiempo real</strong> (WebSocket, MQTT, SSE) y <strong>comunicación BLE</strong> con dispositivos IoT.'
    },
    projects: {
      label: 'Lo que he construido',
      title: 'Mis proyectos',
      items: [
        { slug: 'intraapp',  icon: 'fa-solid fa-microchip', title: 'IntraApp + IntraApi',    info: 'Plataforma IoT cross-platform para el sector agri-tech. Sensores BLE, posicionamiento UWB en tiempo real, firmware OTA y LoRaWAN. Proyecto profesional.' },
        { slug: 'ticketera', icon: 'fa-solid fa-ticket',    title: 'Plataforma de Ticketing', info: 'Plataforma de ticketing multi-tenant: API en Laravel y tres fronts Angular para backoffice, venta y escaneo en puerta. Colaboración — trabajé en el backoffice y en la API.' },
        { slug: 'nutria',    icon: 'fa-solid fa-utensils',  title: 'NutrIA',                  info: 'App de nutrición local-first. Describes la comida en lenguaje natural y Gemini estima calorías y macros. Ionic + Capacitor, SQLite en el dispositivo, sin cuentas ni backend. Proyecto personal.' }
      ]
    },
    actions: {
      detail: 'Ver proyecto',
      demo: 'Ver demo',
      github: 'Código fuente'
    },
    detail: {
      back: 'Volver al portfolio',
      stack_title: 'Stack Tecnológico',
      highlights_title: 'Retos Técnicos Clave',
      role_title: 'Mi Aportación',
      metrics_title: 'Escala',
      confidential: 'Proyecto confidencial — detalles disponibles bajo petición'
    },
    details: {
      intraapp: {
        badge: 'Trabajo Profesional · Agri-tech IoT',
        subtitle: 'Plataforma de Gestión de Dispositivos IoT',
        desc: 'Aplicación cross-platform para la gestión de redes de sensores IoT en entornos agrícolas. Cubre flujos end-to-end: configuración de dispositivos BLE, posicionamiento UWB en tiempo real, distribución de firmware OTA, gestión de redes LoRaWAN y monitorización en producción vía WebSocket y SSE.',
        highlights: [
          'Protocolo BLE personalizado sobre ESP32: enrutado de mensajes asíncrono, chunking de firmware y bitmask compacto de 21 sensores (Uint32)',
          'Sincronización de estado en tiempo real entre BLE + WebSocket + REST sin gestor de estado global',
          'El mismo código corriendo en Android APK, navegador web y desktop (Electron) vía Capacitor',
          'Soporte de dos ICs de carga (MP2731 y BQ25622E) tras una interfaz unificada',
          'Guías de calibración multi-paso con modales secuenciales y recuperación de estado parcial'
        ],
        role: [] as string[]
      },
      ticketera: {
        badge: 'Colaboración · Eventos y Ticketing',
        subtitle: 'Plataforma de Ticketing Multi-tenant',
        desc: 'Plataforma de ticketing donde cada promotor funciona como un tenant independiente. Una API en Laravel da servicio a tres fronts Angular: un backoffice para gestionar eventos y personal, una tienda pública de venta y un escáner para validar entradas en puerta. Alrededor, workers en segundo plano, generación de QR y PDF de entradas e informes de series temporales.',
        highlights: [
          'Modelo multi-tenant: cada promotor gestiona sus eventos, personal y ventas de forma aislada',
          'Tres fronts Angular sobre una misma API, cada uno con su propio flujo de autenticación y permisos',
          'PostgreSQL con TimescaleDB para informes de ventas y accesos en series temporales',
          'Workers en segundo plano para backups, documentos de compra y subida de medios',
          'Infraestructura local con Docker, Nginx, Postgres y Redis'
        ],
        role: [
          'Pantallas de backoffice del flujo de promotor: alta de eventos, artistas, usuarios internos y ajustes',
          'Gestión completa de RRPP: listados, alta masiva, invitaciones y reenvío',
          'Formularios multi-paso y tablas de datos para crear eventos y usuarios internos',
          'Subida de avatar sustituyendo la introducción manual de URLs, conectada al pipeline de medios de la API',
          'Utilidades standalone en Go que generan los QR de las entradas y los PDF imprimibles donde se embeben',
          'Los endpoints correspondientes en la API Laravel, validación de peticiones, migraciones y tests'
        ]
      }
    },
    contact: {
      label: 'Ponte en contacto',
      title: 'Contáctame',
      name: 'Tu nombre',
      email: 'Tu email',
      message: 'Tu mensaje',
      send: 'Enviar mensaje',
      sending: 'Enviando...',
      success: '¡Mensaje enviado! Te responderé pronto.',
      error: 'Algo salió mal. Por favor, inténtalo de nuevo.',
      name_required: 'El nombre es obligatorio',
      email_invalid: 'Introduce un email válido',
      message_required: 'El mensaje es obligatorio',
      desc: '¡Siempre estoy abierto a nuevas oportunidades y colaboraciones. No dudes en escribirme!'
    }
  }
};
