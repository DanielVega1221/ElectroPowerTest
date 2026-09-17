const IconoBolt = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconoClima = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2V6M12 18V22M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M2 12H6M18 12H22M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const IconoMateriales = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M9 12H15M12 9V15"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const IconoConstruccion = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3 21H21M6 21V9L12 3L18 9V21M10 21V15H14V21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconoTransformador = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect
      x="4"
      y="6"
      width="16"
      height="12"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M8 10H16M8 14H12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="16" cy="14" r="1" fill="currentColor" />
  </svg>
);

const IconoMediaTension = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M14.7 6.3C15.1 5.9 15.6 5.7 16.1 5.7C16.6 5.7 17.1 5.9 17.5 6.3C17.9 6.7 18.1 7.2 18.1 7.7C18.1 8.2 17.9 8.7 17.5 9.1L8.5 18.1C8.1 18.5 7.6 18.7 7.1 18.7C6.6 18.7 6.1 18.5 5.7 18.1C5.3 17.7 5.1 17.2 5.1 16.7C5.1 16.2 5.3 15.7 5.7 15.3L14.7 6.3Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11 11L13 13"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const ICONOS_SERVICIO = {
  'instalaciones-electricas': IconoBolt,
  climatizacion: IconoClima,
  'venta-materiales': IconoMateriales,
  construccion: IconoConstruccion,
  transformadores: IconoTransformador,
  'media-tension': IconoMediaTension,
};

export const BADGE_SERVICIO = {
  'instalaciones-electricas': 'Especialidad',
  climatizacion: 'Confort',
  'venta-materiales': 'Materiales',
  construccion: 'Integral',
  transformadores: 'Industrial',
  'media-tension': 'Expertos',
};