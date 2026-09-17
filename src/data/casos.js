// Casos y proyectos de ElectroPower.
// CONTENIDO DE MUESTRA: el cliente debe revisar cada caso y completar/ajustar
// nombres, fechas y resultados con datos reales antes de publicar.
export const CASOS = [
  {
    id: 'planta-metalurgica-matheu',
    cliente: 'Planta metalúrgica',
    zona: 'Matheu',
    anio: '2025',
    sector: 'Industrial',
    titulo: 'Tablero principal y puesta a tierra en planta metalúrgica',
    descripcion:
      'Renovación del tablero principal de distribución y normalización de la puesta a tierra de una planta metalúrgica de Matheu, que operaba con protecciones obsoletas.',
    servicios: [
      'Tablero principal de distribución',
      'Puesta a tierra con medición certificada',
      'Protecciones termomagnéticas y diferenciales',
    ],
    resultado:
      'Planta normalizada para su inspección, con registro de medición de la puesta a tierra y protecciones a nuevo.',
    duracion: '2 semanas',
  },
  {
    id: 'media-tension-garin',
    cliente: 'Fábrica de packaging',
    zona: 'Parque Industrial OKS, Garín',
    anio: '2025',
    sector: 'Industrial',
    titulo: 'Tendido de media tensión para alimentar nueva línea de producción',
    descripcion:
      'Tendido de línea de media tensión de 13,2 kV y montaje del transformador de rebaje para alimentar una nueva línea de producción dentro del Parque Industrial OKS de Garín.',
    servicios: [
      'Línea de media tensión aérea 13,2 kV',
      'Transformador de rebaje 13.200 a 380 V',
      'Tablero general de baja tensión',
    ],
    resultado:
      'Potencia garantizada para la nueva línea con operativo de corte coordinado y posterior puesta en marcha de todo el circuito.',
    duracion: '4 semanas',
  },
  {
    id: 'grupo-electrogeno-country',
    cliente: 'Vivienda en country',
    zona: 'Nordelta, Tigre',
    anio: '2025',
    sector: 'Residencial',
    titulo: 'Instalación de grupo electrógeno y transferencia automática',
    descripcion:
      'Instalación de un grupo electrógeno a gas y armado del tablero de transferencia automática para una casa de Nordelta, garantizando continuidad de servicio.',
    servicios: [
      'Grupo electrógeno a gas',
      'Tablero de transferencia automática',
      'Canalizaciones y alimentación protegida',
    ],
    resultado:
      'Casa con respaldo automático frente a cortes, operado y puesto a punto con el propietario.',
    duracion: '1 semana',
  },
  {
    id: 'mantenimiento-programado-cipo',
    cliente: 'Planta logística',
    zona: 'Plaza Industrial Escobar, Loma Verde',
    anio: '2024',
    sector: 'Industrial',
    titulo: 'Plan de mantenimiento eléctrico programado anual',
    descripcion:
      'Diseño y ejecución de un plan de mantenimiento preventivo anual para una planta logística: termografía, torque de conexiones, verificación de protecciones y puesta a tierra.',
    servicios: [
      'Mantenimiento preventivo programado',
      'Inspección termográfica',
      'Mediciones y certificaciones',
    ],
    resultado:
      'Plan anual con informes técnicos que la planta usa para auditorías y pólizas de seguro.',
    duracion: 'Anual',
  },
  {
    id: 'instalacion-pilar',
    cliente: 'Comercio mayorista',
    zona: 'Pilar',
    anio: '2024',
    sector: 'Comercial',
    titulo: 'Instalación eléctrica completa de local comercial',
    descripcion:
      'Instalación eléctrica integral de un local mayorista en Pilar: alimentación, tablero seccional, iluminación y tomas para cinco puestos de trabajo.',
    servicios: [
      'Alimentación y tablero seccional',
      'Iluminación y tomas',
      'Puesta a tierra con certificado',
    ],
    resultado:
      'Local habilitado y listo para operar, con documentación completa para el municipio.',
    duracion: '10 días',
  },
  {
    id: 'refaccion-zona-residencial-matheu',
    cliente: 'Vivienda familiar',
    zona: 'Matheu',
    anio: '2024',
    sector: 'Residencial',
    titulo: 'Refacción integral eléctrica de vivienda familiar',
    descripcion:
      'Refacción total de las instalaciones de una casa de Matheu: reemplazo del cableado, nuevas protecciones, puesta a tierra y actualización del pilar medidor.',
    servicios: [
      'Reemplazo de cableado',
      'Protecciones y disyuntores',
      'Puesta a tierra',
    ],
    resultado:
      'Instalación segura y con capacidad para sumar aire acondicionado sin riesgo.',
    duracion: '2 semanas',
  },
];

export const getCaso = (id) => CASOS.find((c) => c.id === id);