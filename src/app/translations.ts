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
        { title: 'IntraApp + IntraApi', icon: 'fa-solid fa-microchip', info: 'Cross-platform IoT platform for the agri-tech sector. BLE sensors, UWB real-time positioning, OTA firmware and LoRaWAN. Professional project.' }
      ]
    },
    intraapp: {
      back: 'Back to portfolio',
      badge: 'Professional Work · Agri-tech IoT',
      subtitle: 'IoT Device Management Platform',
      desc: 'Cross-platform application for managing IoT sensor networks in agricultural environments. Covers end-to-end workflows: BLE device configuration, UWB real-time positioning, OTA firmware distribution, LoRaWAN network management and production monitoring via WebSocket and SSE.',
      stack_title: 'Tech Stack',
      highlights_title: 'Key Technical Challenges',
      highlights: [
        'Custom BLE protocol over ESP32: async message routing, firmware chunking, and a compact 21-sensor bitmask (Uint32)',
        'Real-time state synchronisation across BLE + WebSocket + REST without a global state manager',
        'Same codebase running on Android APK, web browser and desktop (Electron) via Capacitor',
        'Dual charger IC support (MP2731 and BQ25622E) behind a unified interface',
        'Multi-step calibration workflows with sequential modals and partial-save recovery'
      ],
      metrics_title: 'Scale',
      confidential: 'Confidential project — details available on request'
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
        { title: 'IntraApp + IntraApi', icon: 'fa-solid fa-microchip', info: 'Plataforma IoT cross-platform para el sector agri-tech. Sensores BLE, posicionamiento UWB en tiempo real, firmware OTA y LoRaWAN. Proyecto profesional.' }
      ]
    },
    intraapp: {
      back: 'Volver al portfolio',
      badge: 'Trabajo Profesional · Agri-tech IoT',
      subtitle: 'Plataforma de Gestión de Dispositivos IoT',
      desc: 'Aplicación cross-platform para la gestión de redes de sensores IoT en entornos agrícolas. Cubre flujos end-to-end: configuración de dispositivos BLE, posicionamiento UWB en tiempo real, distribución de firmware OTA, gestión de redes LoRaWAN y monitorización en producción vía WebSocket y SSE.',
      stack_title: 'Stack Tecnológico',
      highlights_title: 'Retos Técnicos Clave',
      highlights: [
        'Protocolo BLE personalizado sobre ESP32: enrutado de mensajes asíncrono, chunking de firmware y bitmask compacto de 21 sensores (Uint32)',
        'Sincronización de estado en tiempo real entre BLE + WebSocket + REST sin gestor de estado global',
        'El mismo código corriendo en Android APK, navegador web y desktop (Electron) vía Capacitor',
        'Soporte de dos ICs de carga (MP2731 y BQ25622E) tras una interfaz unificada',
        'Guías de calibración multi-paso con modales secuenciales y recuperación de estado parcial'
      ],
      metrics_title: 'Escala',
      confidential: 'Proyecto confidencial — detalles disponibles bajo petición'
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
