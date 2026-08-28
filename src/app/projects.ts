// Datos de proyecto independientes del idioma. El texto traducible
// (badge, subtitle, desc, highlights) vive en translations.ts -> details[slug].

// Botones de la tarjeta. La URL no se traduce, asi que vive aqui y no en
// translations; la etiqueta sale de translations.actions[kind].
export type ActionKind = 'detail' | 'demo' | 'github';

export interface ProjectLink {
  kind: ActionKind;
  url: string; // ruta interna para 'detail', URL absoluta para el resto
}

export const ACTION_ICONS: Record<ActionKind, string> = {
  detail: 'fa-solid fa-arrow-right',
  demo: 'fa-solid fa-globe',
  github: 'fa-brands fa-github',
};

export const projectLinks: Record<string, ProjectLink[]> = {
  intraapp: [{ kind: 'detail', url: '/project/intraapp' }],
  ticketera: [{ kind: 'detail', url: '/project/ticketera' }],
  nutria: [
    { kind: 'demo', url: 'https://zanderzr.github.io/NutrIA/' },
    { kind: 'github', url: 'https://github.com/ZanderZr/NutrIA' },
  ],
};

export interface ProjectData {
  slug: string;
  title: string;
  stack: { layer: string; tech: string }[];
  metrics: { value: string; label: string }[];
}

export const projectDetails: Record<string, ProjectData> = {
  intraapp: {
    slug: 'intraapp',
    title: 'IntraApp + IntraApi',
    stack: [
      { layer: 'Frontend',        tech: 'Angular 17 · Ionic 7 · TypeScript 5.2' },
      { layer: 'Cross-platform',  tech: 'Capacitor 5 (Android + Web + Electron)' },
      { layer: 'Reactivity',      tech: 'RxJS 7.5 — BehaviorSubjects, reactive stores' },
      { layer: 'UI',              tech: 'Angular Material 17 · Highcharts · Google Maps' },
      { layer: 'Hardware',        tech: 'BLE via @capacitor-community/bluetooth-le · ESP32' },
      { layer: 'Communication',   tech: 'REST · WebSocket (auto-reconnect) · SSE · MQTT' },
      { layer: 'Backend',         tech: 'Node.js · TypeScript 5.7 · Express.js 4.21' },
      { layer: 'ORM & DB',        tech: 'Sequelize 6.37 · MySQL (3 independent instances)' },
      { layer: 'Auth & Security', tech: 'JWT · bcrypt · RBAC (7 roles) · API Key timing-safe' },
      { layer: 'IoT Protocols',   tech: 'ChirpStack (LoRaWAN) · MQTT broker · OTA via FTP' },
    ],
    metrics: [
      { value: '~319', label: 'TypeScript files' },
      { value: '90+',  label: 'Services' },
      { value: '150+', label: 'Components' },
      { value: '5',    label: 'Lazy modules' },
      { value: '35+',  label: 'Sequelize models' },
      { value: '3',    label: 'MySQL databases' },
    ],
  },

  ticketera: {
    slug: 'ticketera',
    title: 'Ticketing Platform',
    stack: [
      { layer: 'Architecture',    tech: 'Monorepo · API + 3 independent Angular fronts' },
      { layer: 'Frontend',        tech: 'Angular 21 · SSR · TypeScript · RxJS 7.8' },
      { layer: 'UI',              tech: 'Tailwind CSS 4 · Spartan UI · ng-icons (Lucide)' },
      { layer: 'Data & charts',   tech: 'TanStack Table 8 · ApexCharts 5 · Embla carousel' },
      { layer: 'i18n',            tech: 'ngx-translate 18 (HTTP loader)' },
      { layer: 'Backend',         tech: 'Laravel 13 · PHP 8.4' },
      { layer: 'Auth & Security', tech: 'Laravel Sanctum · role-based access per tenant' },
      { layer: 'Database',        tech: 'PostgreSQL + TimescaleDB · Redis' },
      { layer: 'Storage & media', tech: 'Cloudinary · AWS SDK (S3)' },
      { layer: 'Ticket assets',   tech: 'Go — QR encoding + printable PDF generation' },
      { layer: 'Infra',           tech: 'Docker · Nginx · background queue workers' },
    ],
    metrics: [
      { value: '3',    label: 'Angular front-ends' },
      { value: '200+', label: 'API controllers' },
      { value: '88',   label: 'Eloquent models' },
      { value: '144',  label: 'Migrations' },
      { value: '380+', label: 'Front-end TS files' },
      { value: '3',    label: 'Queue workers' },
    ],
  },
};
