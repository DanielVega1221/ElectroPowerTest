// NOTA: los casos, cifras y testimonios de estos posts son DATOS MOCK de ejemplo para
// mostrarle al cliente el nivel de contenido esperado. Cada dato a reemplazar o validar
// está marcado abajo con un comentario "TODO" y listado en el campo `pendientes` del post.
export const POSTS = [
  {
    slug: 'grupos-electrogenos-electropower-grupo-galan',
    titulo: 'ElectroPower + Grupo Galán: Grupos Electrógenos de 7 a 500 kVA',
    subtitulo:
      'Experiencia combinada en energía, precisión y respaldo técnico para ofrecer soluciones eléctricas confiables y completas en toda la Argentina.',
    fecha: '2025-01-15',
    tipo: 'novedad',
    categoria: 'Alianzas',
    destacado: true,
    extracto:
      'ElectroPower y Grupo Galán unen su experiencia para la venta, instalación y servicio integral de grupos electrógenos domiciliarios e industriales, de 7 kVA a 500 kVA.',
    seoTitle:
      'Grupos Electrógenos 7 a 500 kVA | ElectroPower + Grupo Galán',
    seoDescription:
      'ElectroPower y Grupo Galán unen fuerzas para comercializar, instalar y mantener grupos electrógenos domiciliarios e industriales de 7 a 500 kVA en toda la Argentina.',
    contenido: [
      {
        tipo: 'parrafo',
        texto:
          'ElectroPower y Grupo Galán unen su experiencia y capacidades para potenciar la comercialización, instalación y servicio integral de grupos electrógenos domiciliarios e industriales, abarcando un rango de potencias desde 7 kVA hasta 500 kVA.',
        fuerte: true,
      },
      {
        tipo: 'parrafo',
        texto:
          'Esta alianza estratégica surge con el objetivo de ofrecer un servicio más amplio, eficiente y profesional, integrando la trayectoria de Grupo Galán en el mercado domiciliario e industrial con la sólida estructura técnica y operativa de ElectroPower.',
      },
      {
        tipo: 'listado',
        titulo: 'Juntos brindamos soluciones integrales en:',
        items: [
          'Venta y alquiler de grupos electrógenos',
          'Instalación y puesta en marcha',
          'Servicio postventa y mantenimiento preventivo/correctivo',
          'Reparación integral de equipos',
          'Asesoramiento técnico personalizado',
        ],
      },
      {
        tipo: 'parrafo',
        texto:
          'La unión de ambas empresas representa un paso firme hacia la consolidación de un servicio energético confiable, con cobertura integral y atención adaptada a cada necesidad, garantizando calidad, compromiso y respaldo técnico en cada proyecto.',
      },
      {
        tipo: 'enlace',
        // TODO: Consultar si la URL externa de partner debe manejarse por variable de entorno
        url: 'https://grupogalan.com.ar/',
        texto: 'Conocé más sobre Grupo Galán',
      },
    ],
    tarjetas: {
      titulo: 'Modelos destacados de Grupo Galán',
      cards: [
        {
          title: 'Honda 7 Kva',
          description: 'Grupo Electrógeno',
          items: [
            'Tipo de Motor: Honda GX390 - OHV 4 Tiempos - Refrigerado por aire',
            'Cilindrada: 389 cm3',
            'Potencia Neta: 11,7 HP (8,7 Kw) a 3600 rpm',
            'Encendido: Transistorizado',
            'Arranque: Eléctrico',
            'Frecuencia C.A.: 50 Hz.',
            'Voltaje C.A.: 220 V',
            'Potencia Máxima C.A.: 7 kVA',
            'Potencia Nominal C.A.: 6 kVA',
            'Salida de C.C.: Si',
            'Chapa: Galvanizada',
            'Paneles: Insonorizados e ignífugos',
            'Pintura: Polvo horneado',
            'Ancho, Largo, Alto, Peso: 1050 mm, 660 mm, 765 mm, 190 Kg',
            'Lógica de control y medición: DKG 207 / Opcional Deepsea 4520 o similar',
            'Cargador de batería tipo flote: 4A 12V',
            'Contactores: 26 Amper',
            'Regulación de voltaje: Compound',
            'Indicación: Voltímetro - Amperímetro - Frecuencímetro - Cuenta hs Digital',
            'Protección C.A.: Termomagnética',
            'Consumo de combustible (gas natural): 3.3 metros/hora (caudal máximo)',
            'Calorías aproximadas: 29 kCal',
            'Sistema de alimentación: Regulador de presión proporcional cero por demanda',
            'Sistema de seguridad: Solenoide de corte - Jefferson Mod. 1335 c/ bob. de continua',
            'Capacidad de aceite: 1,9 Lts.',
            'Alerta de aceite: Si',
          ],
          badge: 'Monofásico',
        },
        {
          title: 'Honda 10 Kva',
          description: 'Grupo Electrógeno',
          items: [
            'Tipo de Motor: GX630 - OHV 4 Tiempos - Refrigerado por aire',
            'Cilindrada: 614 cm3',
            'Potencia Neta: 21 HP (15,5 Kw) a 3600 rpm',
            'Encendido: Transistorizado',
            'Arranque: Eléctrico',
            'Frecuencia C.A.: 50 Hz.',
            'Voltaje C.A.: 220 V',
            'Potencia Máxima C.A.: 10 KVA',
            'Potencia Nominal C.A.: 8 KVA',
            'Salida de C.C.: No',
            'Chapa: Galvanizada',
            'Paneles: Insonorizados e ignífugos',
            'Pintura: Polvo horneado',
            'Ancho, Largo, Alto, Peso: 600 mm, 800 mm, 850 mm, 120 Kg',
            'Lógica de control y medición: DKG 207 / Opcional Deepsea 4520',
            'Cargador de batería tipo flote: 10A 12V',
            'Contactores: 26 Ampere',
            'Regulación de voltaje: Compound',
            'Indicación: Voltímetro - Amperímetro - Frecuencímetro',
            'Protección C.A.: Termomagnética',
            'Capacidad de combustible: 22 lts.',
            'Consumo Específico de Combustible: 5,5 lts. /hs.',
            'Capacidad de aceite: 1,8 lts.',
            'Eco Throttle: No',
            'Indicador Nivel de Combustible: No',
            'Alerta de aceite: Si',
            'Salida C.C.: No',
            'Regulador de voltaje: Compound',
            'Protección C.A.: Fusible de reposición manual',
          ],
          badge: 'Monofásico',
        },
        {
          title: 'Honda 13 Kva',
          description:
            'Grupo Electrógeno - Cabinado, a gas con tablero de transferencia automático',
          items: [
            'Tipo de Motor: GX690 - OHV 4 Tiempos - Refrigerado por aire',
            'Cilindrada: 688 cm3',
            'Potencia Neta: 22,1 HP (16,5 Kw) a 3600 rpm',
            'Encendido: CDI',
            'Arranque: Eléctrico',
            'Frecuencia C.A.: 50 Hz.',
            'Voltaje C.A.: 220 V',
            'Potencia Máxima C.A.: 13 KVA',
            'Potencia Nominal C.A.: 10,4 KVA',
            'Capacidad de aceite: 1,8 lts.',
            'Chapa: Galvanizada',
            'Para intemperie: Si',
            'Pintura: Polvo horneado',
            'Ancho, Largo, Alto, Peso: 1200 mm, 660 mm, 810 mm, 215 Kg',
            'Lógica de control y medición: DKG 207 / Opcional Deepsea 4520 o similar',
            'Cargador de batería tipo flote: 4A 12V',
            'Contactores: 26 Ampere',
            'Regulación de voltaje: Compound',
            'Indicaciones: Voltaje de línea, voltaje de grupo y frecuentímetro',
            'Protección C.A.: Termomagnética',
            'Consumo de gas: 5.78 metros/hora (caudal máximo)',
            'Alerta de Aceite: Si',
            'Sistema de alimentación: Regulador de presión proporcional cero por demanda',
            'Sistema de seguridad: Solenoide de corte – Jefferson Mod. 1335 c/ bob. de continua',
            'Protección C.A.: Fusible térmico de reposición manual',
          ],
          badge: 'Monofásico',
        },
        {
          title: 'Honda 14 Kva',
          description:
            'Grupo Electrógeno - Cabinado, a gas con tablero de transferencia automático',
          items: [
            'Tipo de Motor: GX690 - OHV 4 Tiempos - Refrigerado por aire',
            'Cilindrada: 688 cm3',
            'Potencia Neta: 22,1 HP (16,5 Kw) a 3600 rpm',
            'Encendido: CDI',
            'Arranque: Eléctrico',
            'Frecuencia C.A.: 50 Hz.',
            'Voltaje C.A.: 380/ 220 V',
            'Potencia Máxima C.A.: 14 KVA',
            'Potencia Nominal C.A.: 11.5 KVA',
            'Chapa: Galvanizada',
            'Para intemperie: Insonorizados e ignífugos',
            'Pintura: Polvo horneado',
            'Ancho, Largo, Alto, Peso: 1200 mm, 660 mm, 810 mm, 215 Kg',
            'Lógica de control y medición: DKG 207 / Opcional Deepsea 4520',
            'Cargador de batería tipo flote: 4A 12V',
            'Contactores: 26 Ampere',
            'Regulación de voltaje: Compound',
            'Indicación: Voltaje de línea, voltaje de grupo y frecuentímetro',
            'Protección C.A.: Termomagnética',
            'Consumo de combustible (gas natural): 5.78 metros/hora (caudal máximo)',
            'Alerta de Aceite: Si',
            'Salida C.C.: Regulador de presión proporcional "cero" por demanda',
            'Capacidad de aceite: 1,8 lts',
            'Protección C.A.: Si',
          ],
          badge: 'Trifásico',
        },
        {
          title: 'Honda 16 Kva',
          description:
            'Grupo Electrógeno - Cabinado, a gas con tablero de transferencia automático',
          items: [
            'Tipo de Motor: GX800 - OHV 4 Tiempos - Refrigerado por aire',
            'Cilindrada: 788 cm3',
            'Potencia Neta: 26 HP',
            'Encendido: CDI',
            'Frecuencia C.A.: 50 Hz.',
            'Voltaje C.A.: 380/ 220 V',
            'Potencia Máxima C.A.: 16 KVA',
            'Potencia Nominal C.A.: 13.5 KVA',
            'Chapa: Galvanizada',
            'Para intemperie: Insonorizados e ignífugos',
            'Pintura: Polvo horneado',
            'Ancho, Largo, Alto, Peso: 1200 mm, 660 mm, 810 mm, 215 Kg',
            'Lógica de control y medición: DKG 207',
            'Cargador de batería tipo flote: 4A 12V',
            'Contactores: 26 Ampere',
            'Regulación de voltaje: Compound',
            'Indicación: Voltaje de línea, voltaje de grupo y frecuentímetro',
            'Protección C.A.: Termomagnética',
            'Consumo de combustible (gas natural): 5.78 metros/hora (caudal máximo)',
            'Alerta de Aceite: Si',
            'Seguridad Gas: Regulador de presión proporcional "cero" por demanda',
            'Incluye: Solenoide de corte – Jefferson Mod. 1335 c/ bob. de continua',
            'Capacidad de aceite: 1,8 lts',
            'Aviso de servicio y cuentas horas: Si',
          ],
          badge: 'Trifásico',
        },
        {
          title: 'Honda 16 Kva',
          description:
            'Grupo Electrógeno - Cabinado, a gas con tablero de transferencia automático',
          items: [
            'Tipo de Motor: GX800 - OHV 4 Tiempos - Refrigerado por aire',
            'Cilindrada: 788 cm3',
            'Potencia Neta: 26 HP',
            'Encendido: CDI',
            'Frecuencia C.A.: 50 Hz.',
            'Voltaje C.A.: 380/ 220 V',
            'Potencia Máxima C.A.: 16 KVA',
            'Potencia Nominal C.A.: 13.5 KVA',
            'Chapa: Galvanizada',
            'Para intemperie: Insonorizados e ignífugos',
            'Pintura: Polvo horneado',
            'Ancho, Largo, Alto, Peso: 1200 mm, 660 mm, 810 mm, 215 Kg',
            'Lógica de control y medición: DKG 207',
            'Cargador de batería tipo flote: 4A 12V',
            'Contactores: 26 Ampere',
            'Regulación de voltaje: Compound',
            'Indicación: Voltaje de línea, voltaje de grupo y frecuencímetro',
            'Protección C.A.: Termomagnética',
            'Consumo de combustible (gas natural): 5.78 metros/hora (caudal máximo)',
            'Alerta de Aceite: Si',
            'Seguridad Gas: Regulador de presión proporcional "cero" por demanda',
            'Incluye: Solenoide de corte – Jefferson Mod. 1335 c/ bob. de continua',
            'Capacidad de aceite: 1,8 lts',
            'Aviso de servicio y cuentas horas: Si',
          ],
          badge: 'Monofásico',
        },
      ],
    },
    banners: [
      {
        src: '/grupogalan/electrogeno1.webp',
        alt: 'Grupo Electrógeno Grupo Galán',
        width: '675',
        height: '1200',
      },
      {
        src: '/grupogalan/electrogeno2.webp',
        alt: 'Grupo Electrógeno Grupo Galán de alta potencia',
        width: '758',
        height: '1200',
      },
    ],
  },
  {
    slug: 'norma-aea-90364-instalaciones-industriales',
    titulo: 'Norma AEA 90364: qué exige una instalación eléctrica industrial',
    subtitulo:
      'La AEA 90364 define cómo debe ejecutarse una instalación eléctrica segura en Argentina. Estos son los puntos que efectivamente se controlan cuando se audita una planta.',
    fecha: '2026-09-04',
    tipo: 'consejo',
    categoria: 'Técnico',
    destacado: false,
    extracto:
      'Qué exige la Norma AEA 90364 en una instalación eléctrica industrial: protecciones, puesta a tierra, dimensionamiento de conductores y documentación. La base de toda habilitación.',
    seoTitle: 'Norma AEA 90364: Qué Exige una Instalación Eléctrica Industrial',
    seoDescription:
      'Qué exige la Norma AEA 90364 en una instalación industrial: protecciones, puesta a tierra, conductores y documentación. ElectroPower, zona norte de Buenos Aires.',
    keywords:
      'norma aea 90364, reglamentacion electrica argentina, instalacion electrica industrial, puesta a tierra industrial, verificacion instalacion electrica',
    contenido: [
      {
        tipo: 'parrafo',
        texto:
          'La AEA 90364 no es una recomendación: es la reglamentación que establece cómo deben ejecutarse las instalaciones eléctricas en Argentina para que sean seguras, verificables y habilitables. En una planta industrial el nivel de exigencia sube, porque también suben las potencias, las corrientes de cortocircuito y las consecuencias de una falla.',
        fuerte: true,
      },
      {
        tipo: 'parrafo',
        texto:
          'El problema más común que encontramos en una auditoría no es la falta de materiales de marca, sino la falta de criterio de diseño: conductores elegidos por lo que había, protecciones que no coordinan entre sí y tableros intervenidos sin esquema ni registro.',
      },
      {
        tipo: 'listado',
        titulo: 'Los 6 puntos que más se observan en una inspección:',
        items: [
          'Coordinación de protecciones: que la protección de aguas abajo actúe antes que la de aguas arriba',
          'Puesta a tierra con medición certificada y continuidad verificada en todas las masas',
          'Dimensionamiento de conductores por corriente admisible y por caída de tensión',
          'Protección diferencial acorde al tipo de carga y a la corriente de fuga esperada',
          'Tableros rotulados, con circuitos identificados y esquema unifilar actualizado',
          'Documentación: planos conformes a obra, protocolos de medición y registro de verificaciones',
        ],
      },
      {
        tipo: 'parrafo',
        texto:
          'Adecuar una instalación vieja se hace por fases: relevamiento y mediciones, plan de correcciones priorizado por riesgo, ejecución por etapas y protocolo final. Así la planta no se detiene entera y cada etapa queda documentada para la habilitación y para el seguro.',
      },
      {
        tipo: 'parrafo',
        // TODO: reemplazar por un caso real (rubro, localidad, hallazgo, horas y sector).
        texto:
          'En una planta metalúrgica de Garín, el relevamiento detectó dos conductores de alimentación con aislación degradada y protecciones descoordinadas. Se corrigió en un corte coordinado de 6 horas sin frenar la línea de producción. El informe quedó como respaldo para la auditoría de la aseguradora.',
      },
      {
        tipo: 'faq',
        titulo: 'Preguntas frecuentes sobre la AEA 90364',
        items: [
          {
            pregunta: '¿La AEA 90364 aplica a industrias y también a viviendas?',
            respuesta:
              'Aplica a todas las instalaciones eléctricas de baja tensión del país. La diferencia está en el nivel de exigencia y en la documentación: una planta debe poder demostrar con protocolos y planos lo que una casa resuelve con una instalación bien ejecutada.',
          },
          {
            pregunta: '¿Cada cuánto se debe verificar una instalación industrial?',
            respuesta:
              'Depende del tipo de planta y de su régimen de trabajo. Como referencia, un plan preventivo anual con termografía y medición de puesta a tierra cubre la mayoría de los casos; en procesos críticos o con turnos continuos conviene cada seis meses.',
          },
          {
            pregunta: '¿La habilitación exige un electricista matriculado?',
            respuesta:
              'Sí. Tanto la habilitación municipal como la conexión definitiva ante la distribuidora requieren instalador o electricista matriculado y la documentación técnica del trabajo.',
          },
          {
            pregunta: '¿Qué pasa si mi planta no cumple la norma?',
            respuesta:
              'El riesgo no es solo una multa: una instalación fuera de norma puede dejar sin cobertura un siniestro, frenar una habilitación y, sobre todo, exponer a las personas. Lo correcto es un plan de adecuación por etapas priorizado por riesgo.',
          },
        ],
      },
      {
        tipo: 'enlace',
        url: '/industria',
        texto: 'Ver nuestras soluciones eléctricas para industrias',
      },
      {
        tipo: 'enlace',
        url: '/servicios/instalaciones-electricas',
        texto: 'Conocer el servicio de instalaciones eléctricas',
      },
    ],
    pendientes: [
      'Rubro y localidad reales del caso de éxito citado (con autorización del cliente)',
      'Cantidad típica de observaciones por planta y tiempos de adecuación según sus registros',
      'Definir si publican el modelo de protocolo o planilla de medición que usan',
      'Aclarar si ofrecen la verificación anual como servicio abonado',
    ],
  },
  {
    slug: 'grupos-electrogenos-gas-que-elegir',
    titulo: 'Grupos electrógenos a gas: ¿cuál elegir para tu negocio o industria?',
    subtitulo:
      'La potencia no se elige a ojo. Carga real, arranque de los motores y costo por hora de operación definen cuál es el equipo correcto.',
    fecha: '2026-08-14',
    tipo: 'consejo',
    categoria: 'Energía',
    destacado: false,
    extracto:
      'Cómo elegir un grupo electrógeno a gas sin comprar de más ni quedarte corto: carga simultánea, arranque, transferencia automática y consumo por hora.',
    seoTitle: 'Grupos Electrógenos a Gas: Cómo Elegir la Potencia Correcta',
    seoDescription:
      'Guía para elegir un grupo electrógeno a gas: diferencia entre kVA y kW, carga real, arranque, transferencia automática y mantenimiento. ElectroPower + Grupo Galán.',
    keywords:
      'grupo electrogeno a gas, elegir grupo electrogeno, grupo electrogeno para empresa, generador industrial a gas, tablero de transferencia automatica, kva y kw',
    contenido: [
      {
        tipo: 'parrafo',
        texto:
          'Elegir un grupo electrógeno por los kW es el camino más rápido a comprar mal. La cuenta real empieza por las cargas que vas a sostener, sigue por cómo arrancan (sobre todo los motores) y termina en cuánto te cuesta cada hora de operación.',
        fuerte: true,
      },
      {
        tipo: 'parrafo',
        texto:
          'Un grupo no se dimensiona sumando potencias nominales, sino con la carga simultánea y la corriente de arranque. Un motor puede pedir de 3 a 7 veces su corriente nominal en el arranque; si el grupo no lo tolera, la tensión cae, el motor no arranca y el alternador sufre.',
      },
      {
        tipo: 'listado',
        titulo: 'Los 5 datos que definen la elección:',
        items: [
          'Carga simultánea real y factor de potencia: no todas las cargas funcionan al mismo tiempo',
          'Tipo de arranque de las cargas más pesadas (motores, compresores, bombas)',
          'Monofásico o trifásico, según las cargas y la red del lugar',
          'Autonomía necesaria y consumo por hora: definen el tanque y el costo operativo',
          'Si puede haber un segundo sin energía (transferencia automática) o no (arranque manual)',
        ],
      },
      {
        tipo: 'parrafo',
        texto:
          'En gas natural el consumo se mide en metros cúbicos por hora y no requiere tanque ni reposición, a diferencia del diésel. A cambio hay que prever la alimentación de gas, el regulador y la ventilación. En los equipos cabinados el gabinete ya contempla insonorización e ignifugado para intemperie.',
      },
      {
        tipo: 'parrafo',
        texto:
          'En comercios y plantas el esquema habitual es grupo más tablero de transferencia automática: cuando cae la red, el tablero conmuta y el grupo toma la carga; cuando vuelve, conmuta de nuevo y el grupo se detiene. En viviendas muchas veces alcanza con una alimentación selectiva de los circuitos esenciales.',
      },
      {
        tipo: 'faq',
        titulo: 'Preguntas frecuentes sobre grupos electrógenos',
        items: [
          {
            pregunta: '¿Cuál es la diferencia entre kVA y kW?',
            respuesta:
              'El kVA es la potencia aparente y el kW la potencia activa que realmente hace trabajo. Se relacionan por el factor de potencia: un equipo de 10 kVA con factor 0,8 entrega unos 8 kW útiles. Por eso hay que comparar siempre en la misma unidad.',
          },
          {
            pregunta: '¿Conviene un grupo a gas o a diésel?',
            respuesta:
              'El gas natural es muy conveniente donde ya hay red y el equipo va a funcionar muchas horas, porque no hay tanque ni reposición. El diésel gana donde no hay gas o se necesita autonomía larga sin depender de la red.',
          },
          {
            pregunta: '¿Puedo conectar toda la casa a un grupo electrógeno?',
            respuesta:
              'Se puede, pero no siempre conviene. Lo habitual es alimentar los circuitos esenciales: heladera, iluminación, seguridad, internet y algunos tomacorrientes. Alimentar todo obliga a un equipo más grande y más caro.',
          },
          {
            pregunta: '¿Qué mantenimiento necesita un grupo electrógeno?',
            respuesta:
              'Aceite y filtros según horas de uso, control de batería, prueba de arranque periódica y una prueba de carga al menos una vez al año. La prueba de carga es la que revela si el equipo realmente puede con la demanda.',
          },
        ],
      },
      {
        tipo: 'enlace',
        url: '/noticias/grupos-electrogenos-electropower-grupo-galan',
        texto: 'Ver los modelos destacados de la alianza ElectroPower + Grupo Galán',
      },
      {
        tipo: 'enlace',
        url: '/industria',
        texto: 'Saber cómo aseguramos la energía en industrias',
      },
    ],
    pendientes: [
      'Tabla de consumo y precios por modelo a gas para publicar',
      'Qué modelos recomiendan como entrada para casa, comercio y planta',
      'Si el servicio postventa incluye prueba de carga y con qué frecuencia',
    ],
  },
  {
    slug: 'potencia-habilitacion-fabrica',
    titulo: 'Ampliación de potencia industrial: transformador y media tensión en una fábrica',
    subtitulo:
      'Cuando una fábrica suma máquinas, el límite deja de estar en el tablero y pasa a estar en la red: factibilidad, transformador propio y, en consumos altos, media tensión.',
    fecha: '2026-07-22',
    tipo: 'consejo',
    categoria: 'Técnico',
    destacado: false,
    extracto:
      'Cómo se resuelve la ampliación de potencia de una planta industrial: relevamiento de cargas, factibilidad, transformador propio y tendido de media tensión en 13,2 kV o 33 kV.',
    seoTitle: 'Ampliación de Potencia Industrial: Transformador y Media Tensión',
    seoDescription:
      'Guía para ampliar la potencia eléctrica de una fábrica: relevamiento de cargas, factibilidad, transformador propio y media tensión de 13,2 kV o 33 kV en zona norte.',
    keywords:
      'ampliacion potencia industrial, transformador para industria, media tension fabrica, factibilidad electrica industrial, subestacion transformadora, suministro electrico planta',
    contenido: [
      {
        tipo: 'parrafo',
        texto:
          'En una fábrica, ampliar potencia casi nunca se resuelve cambiando la térmica general. A partir de cierto consumo la distribuidora no puede entregar más desde la red de baja tensión y hay que pasar a un transformador propio y, si el salto es grande, a media tensión.',
        fuerte: true,
      },
      {
        tipo: 'parrafo',
        texto:
          'La señal típica es que la planta empieza a quedar corta: salta la protección general cuando arrancan dos líneas juntas, aparecen caídas de tensión al arrancar motores o la factibilidad original ya no alcanza para las máquinas nuevas.',
      },
      {
        tipo: 'listado',
        titulo: 'Etapas del proyecto, en orden:',
        items: [
          'Relevamiento de cargas nuevas y existentes, con factor de simultaneidad y potencia de arranque',
          'Consulta de factibilidad ante la distribuidora en el punto de suministro',
          'Adecuación de pilar, medición y alimentación principal',
          'Montaje o cambio de transformador propio y sus protecciones asociadas',
          'Tendido de media tensión (13,2 kV o 33 kV) y subestación cuando el consumo lo exige',
          'Ensayos, puesta en marcha y documentación para la habilitación',
        ],
      },
      {
        tipo: 'parrafo',
        texto:
          'La media tensión cambia el proyecto: requiere celdas de entrada, transformador, protecciones de MT, coordinación con la distribuidora para los operativos de corte y personal habilitado para operar. Nada de eso se improvisa, y los tiempos de la distribuidora son parte del plan, no una sorpresa.',
      },
      {
        tipo: 'parrafo',
        // TODO: confirmar caso real (rubro, localidad, kVA/kV, día del corte y resultado).
        texto:
          'En una planta de autopartes en Escobar la ampliación se resolvió con un transformador de 630 kVA y un tramo de media tensión de 13,2 kV. El corte se coordinó un domingo para no frenar producción y la nueva línea arrancó sin paradas.',
      },
      {
        tipo: 'faq',
        titulo: 'Preguntas frecuentes sobre ampliación industrial',
        items: [
          {
            pregunta: '¿Cuándo conviene pasar a media tensión?',
            respuesta:
              'Cuando la potencia requerida supera la que la distribuidora puede entregar en baja tensión, o cuando la distancia y la caída de tensión hacen inviable una alimentación de BT. Es una decisión que sale del relevamiento y de la factibilidad, no de una regla fija.',
          },
          {
            pregunta: '¿Cuánto demora una ampliación industrial?',
            respuesta:
              'El montaje eléctrico puede resolverse en semanas, pero el plazo total depende de la factibilidad y de la obra de la distribuidora, que puede extenderse más. Por eso conviene iniciar el trámite en paralelo a la compra de las máquinas.',
          },
          {
            pregunta: '¿Se puede ampliar sin cortar la producción?',
            respuesta:
              'En la mayoría de los casos sí. Se planifican etapas y se coordinan los cortes con la distribuidora en ventanas de baja actividad. La clave es programarlos, no improvisarlos.',
          },
          {
            pregunta: '¿Siempre hace falta un transformador propio?',
            respuesta:
              'No. Muchas plantas amplían dentro de baja tensión con refuerzo de pilar y alimentación. El transformador aparece cuando la potencia o la tensión lo requieren, y eso lo define el relevamiento.',
          },
        ],
      },
      {
        tipo: 'enlace',
        url: '/servicios/transformadores',
        texto: 'Ver el servicio de transformadores',
      },
      {
        tipo: 'enlace',
        url: '/servicios/media-tension',
        texto: 'Ver el servicio de media tensión',
      },
      {
        tipo: 'enlace',
        url: '/industria',
        texto: 'Conocer las soluciones para industrias en zona norte',
      },
    ],
    pendientes: [
      'Caso real de ampliación industrial: rubro, localidad, kVA del transformador y kV de la línea (con autorización)',
      'Rango de plazos reales de factibilidad según su experiencia',
      'Potencia máxima que suelen resolver en baja tensión antes de pasar a media tensión',
    ],
  },
  {
    slug: 'costo-instalacion-electrica-2026',
    titulo: '¿Cuánto cuesta una instalación eléctrica en 2026? Guía de precios',
    subtitulo:
      'No existe un precio único: existe un precio para un alcance concreto. Te mostramos qué compone el costo y cómo comparar presupuestos sin equivocarte.',
    fecha: '2026-09-12',
    tipo: 'consejo',
    categoria: 'Técnico',
    destacado: false,
    extracto:
      'Cuánto puede costar una instalación eléctrica en 2026, qué variables hacen subir o bajar el precio y cómo pedir un presupuesto que realmente sirva.',
    seoTitle: 'Costo de Instalación Eléctrica 2026: Precios y Variables',
    seoDescription:
      'Guía de precios 2026 para instalaciones eléctricas: qué compone el costo, por qué dos presupuestos difieren y cómo pedir un presupuesto confiable en zona norte.',
    keywords:
      'costo instalacion electrica 2026, precio instalacion electrica, cuanto sale instalar electricidad, presupuesto electricista zona norte, precio por punto electrico',
    contenido: [
      {
        tipo: 'parrafo',
        texto:
          'No existe el precio de una instalación eléctrica: existe un precio para un alcance concreto. Un mismo ambiente sale distinto según los materiales, el estado previo y la cantidad de puntos. Lo útil no es pedir un número suelto, sino entender qué lo compone.',
        fuerte: true,
      },
      {
        tipo: 'parrafo',
        texto:
          'Los presupuestos que no aclaran el alcance terminan en discusión. Un presupuesto serio dice qué se hace, con qué materiales, qué no incluye y en cuántas etapas. Si falta alguno de esos puntos, el número no sirve para comparar.',
      },
      {
        tipo: 'listado',
        titulo: 'Qué compone el costo:',
        items: [
          'Mano de obra: horas de instalación, dirección y puesta en marcha',
          'Materiales: cable, cañerías, cajas, térmicas, disyuntor, tablero y accesorios',
          'Pilar y medidor: nuevo, reubicación o adecuación',
          'Puesta a tierra: jabalina, conductor y medición',
          'Obra civil: canalizaciones, aperturas y cierres',
          'Trámites y documentación: factibilidad y certificaciones, si aplican',
        ],
      },
      {
        tipo: 'parrafo',
        texto:
          'Dos trabajos con el mismo destino pueden diferir mucho: refaccionar sobre una instalación existente no es lo mismo que hacer obra nueva, y dejar las canalizaciones ocultas no es lo mismo que instalación a la vista. También cambia el costo según se elijan materiales de primera línea o los mínimos aceptables.',
      },
      {
        tipo: 'parrafo',
        // TODO: reemplazar por la tabla de precios vigente de ElectroPower (por punto, tablero completo y puesta a tierra).
        texto:
          'En 2026 los valores siguen moviéndose con los materiales, por eso publicamos rangos de referencia y ajustamos con el presupuesto del día. Como orientación, un punto de instalación nuevo parte de $45.000 y un tablero completo con protecciones y medición de puesta a tierra se ubica desde $480.000.',
      },
      {
        tipo: 'faq',
        titulo: 'Preguntas frecuentes sobre precios',
        items: [
          {
            pregunta: '¿Cómo se cobra una instalación eléctrica?',
            respuesta:
              'Se puede cobrar por punto, por ambiente o por trabajo completo. Para obras grandes conviene un presupuesto por etapas, con materiales y mano de obra detallados por separado.',
          },
          {
            pregunta: '¿Por qué dos electricistas cobran distinto por lo mismo?',
            respuesta:
              'Porque lo mismo no siempre es lo mismo: cambian los materiales, el tiempo, si hay certificación y si el trabajo incluye medición de puesta a tierra y documentación. Compará alcance, no solo el número final.',
          },
          {
            pregunta: '¿El presupuesto incluye los materiales?',
            respuesta:
              'Depende del acuerdo. Podemos cotizar solo mano de obra, si el cliente aporta los materiales, o llave en mano con materiales provistos por nosotros. En el segundo caso el precio es más previsible y hay una sola garantía.',
          },
          {
            pregunta: '¿Se puede pagar en etapas?',
            respuesta:
              'En trabajos grandes sí. Lo habitual es dividir por avance de obra, con un anticipo de materiales y pagos contra etapas terminadas.',
          },
        ],
      },
      {
        tipo: 'enlace',
        url: '/presupuesto',
        texto: 'Solicitar mi presupuesto',
      },
    ],
    pendientes: [
      'Tabla de rangos de precio actualizada (por punto, tablero completo y puesta a tierra)',
      'Forma de pago y vigencia de los presupuestos',
      'Definir si publican un caso con números reales (sin nombre del cliente)',
    ],
  },
  {
    slug: 'puesta-a-tierra-por-que-es-obligatoria',
    titulo: 'Puesta a tierra: por qué es obligatoria y cómo se verifica',
    subtitulo:
      'El disyuntor diferencial no funciona bien sin una buena puesta a tierra. Te explicamos cómo se instala, cómo se mide y por qué no se puede saltear.',
    fecha: '2026-09-08',
    tipo: 'consejo',
    categoria: 'Seguridad',
    destacado: false,
    extracto:
      'La puesta a tierra protege a las personas y a los equipos. Esto es lo que hay que saber sobre su instalación, su medición y su mantenimiento.',
    seoTitle: 'Puesta a Tierra: Por Qué es Obligatoria y Cómo se Verifica',
    seoDescription:
      'Qué es la puesta a tierra, por qué es obligatoria, cómo se mide con telurómetro y cada cuánto revisarla. ElectroPower, zona norte de Buenos Aires.',
    keywords:
      'puesta a tierra, jabalina puesta a tierra, medicion puesta a tierra, telurómetro, instalacion electrica segura, norma aea puesta a tierra',
    contenido: [
      {
        tipo: 'parrafo',
        texto:
          'La puesta a tierra es el único camino que tiene la corriente de falla para irse sin pasar por las personas. Y es condición para que el disyuntor diferencial actúe a tiempo: sin tierra, tu protección más importante puede llegar tarde.',
        fuerte: true,
      },
      {
        tipo: 'parrafo',
        texto:
          'Una masa metálica sin tierra (una heladera, la carcasa de una herramienta, un tablero) queda flotando. Si falla la aislación, esa masa queda con tensión y quien la toque recibe la descarga. Con tierra, la falla circula por el conductor de protección y dispara la protección.',
      },
      {
        tipo: 'listado',
        titulo: 'Cómo se instala y se verifica:',
        items: [
          'Jabalina de cobre enterrada y conductor de protección dedicado hacia cada circuito',
          'Continuidad verificada en todas las masas metálicas',
          'Medición con telurómetro del valor de resistencia de tierra',
          'Valor dentro del máximo que exige la reglamentación vigente',
          'Protocolo con la medición, para habilitaciones y seguros',
          'Revisión periódica: terrenos y conexiones se degradan con el tiempo',
        ],
      },
      {
        tipo: 'parrafo',
        texto:
          'El valor exigido depende del esquema de protección y del tipo de instalación, por eso no sirve poner una jabalina y listo: hay que medir. Una tierra sin medir es una promesa, no una protección.',
      },
      {
        tipo: 'parrafo',
        // TODO: validar localidades y el porcentaje/frecuencia con registros propios.
        texto:
          'En relevamientos de viviendas y comercios de Escobar y Garín es frecuente encontrar jabalinas enterradas pero nunca medidas, o conductores de tierra cortados en alguna reforma. En más de la mitad de los casos relevados la jabalina estaba sin medir o con la continuidad interrumpida. La solución es medir, reparar la continuidad y dejar registro.',
      },
      {
        tipo: 'faq',
        titulo: 'Preguntas frecuentes sobre puesta a tierra',
        items: [
          {
            pregunta: '¿Qué valor tiene que dar la puesta a tierra?',
            respuesta:
              'Depende del esquema de protección y del tipo de instalación. Como criterio de trabajo se busca que el valor de resistencia asegure la actuación de la protección diferencial frente a una falla. Lo importante es medirlo con telurómetro y documentarlo, no suponerlo.',
          },
          {
            pregunta: '¿Se puede poner una jabalina sin medir?',
            respuesta:
              'Técnicamente se puede, pero no aporta ninguna garantía. Sin medición no sabés si la tierra funciona, y una tierra mal hecha da una falsa sensación de seguridad.',
          },
          {
            pregunta: '¿Mi instalación vieja tiene puesta a tierra?',
            respuesta:
              'No siempre. Muchas instalaciones antiguas se hicieron sin tierra, o con el conductor de tierra interrumpido por reformas. Se resuelve con un relevamiento de continuidad y con la instalación o recolocación de la jabalina.',
          },
          {
            pregunta: '¿La puesta a tierra necesita mantenimiento?',
            respuesta:
              'Sí. Las conexiones se aflojan, los terrenos cambian y los conductores se dañan. Una medición periódica es la forma de comprobar que sigue funcionando.',
          },
        ],
      },
      {
        tipo: 'enlace',
        url: '/servicios/instalaciones-electricas',
        texto: 'Ver el servicio de instalaciones eléctricas con puesta a tierra',
      },
    ],
    pendientes: [
      'Valores concretos que adoptan o garantizan y con qué telurómetro certifican',
      'Frecuencia de medición recomendada y si ofrecen plan de verificación anual',
      'Dato real de casos de tierra mal ejecutada detectados',
    ],
  },
  {
    slug: 'tablero-monofasico-trifasico-diferencias',
    titulo: 'Tablero monofásico o trifásico: cuál necesito y cómo se identifican',
    subtitulo:
      'Saber si tu instalación es monofásica o trifásica define qué equipos podés conectar y qué necesitás para ampliar. Y se identifica en el pilar o el medidor, no a ojo.',
    fecha: '2026-08-28',
    tipo: 'consejo',
    categoria: 'Técnico',
    destacado: false,
    extracto:
      'Diferencias entre tablero monofásico y trifásico: cómo identificarlos, cuándo hace falta el trifásico y qué implica el cambio de instalación.',
    seoTitle: 'Tablero Monofásico o Trifásico: Diferencias y Cómo Elegir',
    seoDescription:
      'Diferencias entre tablero monofásico y trifásico: cómo identificarlos, cuándo se necesita cada uno y qué implica pasar de uno a otro. Guía de ElectroPower.',
    keywords:
      'tablero monofasico trifasico, diferencias monofasico trifasico, tablero electrico trifasico, potencia electrica casa, pasar a trifasico, 380 220',
    contenido: [
      {
        tipo: 'parrafo',
        texto:
          'Monofásico usa una fase y un neutro (220 V entre ambos). Trifásico usa tres fases y neutro, con 380 V entre fases. En una casa o comercio el trifásico aparece cuando las cargas o la potencia contratada lo justifican: motores, aires de gran porte, talleres o consumo repartido.',
        fuerte: true,
      },
      {
        tipo: 'parrafo',
        texto:
          'No conviene probar cambiando una térmica ni asumir que porque hay tres cables en el pilar ya hay trifásico. Un tablero mal conectado entre fases puede poner 380 V en un equipo de 220 V y quemarlo al instante.',
      },
      {
        tipo: 'listado',
        titulo: 'Cómo identificarlo:',
        items: [
          'Contá los conductores de entrada sin contar el de tierra: dos suele ser monofásico, cuatro trifásico',
          'Mirá el medidor y la llave de entrada: su tipo indica el esquema',
          'Revisá si hay equipos trifásicos funcionando (motores, aires de gran porte)',
          'Consultá la factura: el tipo de tarifa y la potencia orientan',
          'Ante la duda, que un electricista matriculado lo mida con pinza y multímetro',
        ],
      },
      {
        tipo: 'parrafo',
        texto:
          'El paso de monofásico a trifásico requiere factibilidad de la distribuidora, adecuación del pilar y un tablero con protecciones dimensionadas. Es un cambio de instalación, no un trámite de oficina. Y desbloquea equipos y potencia que en monofásico no tenés.',
      },
      {
        tipo: 'faq',
        titulo: 'Preguntas frecuentes sobre tableros',
        items: [
          {
            pregunta: '¿Puedo tener 220 V y trifásico al mismo tiempo?',
            respuesta:
              'Sí. Una instalación trifásica tiene 380 V entre fases y 220 V entre cada fase y el neutro. Por eso conviven tomas de 220 V con equipos trifásicos.',
          },
          {
            pregunta: '¿Cómo sé si necesito cambiar a trifásico?',
            respuesta:
              'Si necesitás motores trifásicos, equipos de gran porte en cantidad o una potencia que la red monofásica no puede entregarte. La decisión se confirma con la factibilidad de la distribuidora.',
          },
          {
            pregunta: '¿Pasar a trifásico sale más caro?',
            respuesta:
              'Sí, porque implica adecuación de pilar, medidor y tablero, además del trámite. A cambio, desbloquea equipos y potencia que en monofásico no tenés.',
          },
          {
            pregunta: '¿Puedo usar un equipo trifásico en una casa monofásica?',
            respuesta:
              'No directamente. Algunos equipos pueden alimentarse con monofásico si tienen esa variante, pero un motor trifásico no funciona con una sola fase. Hay que ver el equipo y la instalación.',
          },
        ],
      },
      {
        tipo: 'enlace',
        url: '/servicios/instalaciones-electricas',
        texto: 'Conocer el servicio de tableros e instalaciones eléctricas',
      },
      {
        tipo: 'enlace',
        url: '/presupuesto',
        texto: 'Pedir asesoramiento sobre tu tablero',
      },
    ],
    pendientes: [
      'Tabla de potencias típicas en baja tensión por esquema que quieran publicar',
      'Confirmar si ofrecen la conversión a trifásico como servicio y un caso real',
    ],
  },
  {
    slug: 'corte-de-luz-en-casa-que-hacer',
    titulo: 'Se cortó la luz en casa: cómo saber si es la red o tu instalación',
    subtitulo:
      'Antes de llamar o tocar el tablero hay una forma ordenada de saber dónde está la falla. Este checklist evita pérdidas de tiempo y, sobre todo, riesgos.',
    fecha: '2026-08-20',
    tipo: 'consejo',
    categoria: 'Seguridad',
    destacado: false,
    extracto:
      'Paso a paso para distinguir un corte de red, un problema en el pilar o una falla interna, y saber cuándo conviene llamar en vez de insistir con la térmica.',
    seoTitle: 'Se Cortó la Luz en Casa: ¿Es la Red o tu Instalación?',
    seoDescription:
      'Cómo saber si un corte de luz es de la red o de tu instalación: revisá vecinos, tablero y pilar con este checklist. Cuándo llamar a un electricista en zona norte.',
    keywords:
      'se corto la luz, corte de luz en casa, sin luz en casa, luz cortada solo en mi casa, termica que salta, problema en el pilar',
    contenido: [
      {
        tipo: 'parrafo',
        texto:
          'El primer dato no es el tablero: son los vecinos. Si el corte abarca la manzana, es de la red y lo gestiona la distribuidora. Si tus vecinos tienen luz y vos no, la falla está en tu pilar o en tu instalación, y ahí sí podés hacer algo.',
        fuerte: true,
      },
      {
        tipo: 'parrafo',
        texto:
          'Si el problema es tuyo, el tablero es el segundo punto de control. La mayoría de los casos se resuelven en un orden simple, siempre sin hacer nada que no puedas hacer con seguridad.',
      },
      {
        tipo: 'listado',
        titulo: 'Checklist, en orden:',
        items: [
          'Confirmá si el corte es de la manzana o solo tuyo',
          'Fijate si bajó la térmica general o el disyuntor, y en qué momento',
          'Si vuelve a bajar al instante, no la reinicies varias veces: hay una falla activa',
          'Desconectá los equipos que estén cerca de donde se originó y probá una sola vez más',
          'Observá el pilar por fuera: medidor sin display, marcas de calor o humedad',
          'No abras el pilar ni toques cables pelados: hay tensión aunque parezca cortada',
        ],
      },
      {
        tipo: 'parrafo',
        texto:
          'Cuando el diferencial baja al enchufar algo puntual, el mensaje es claro: ese equipo o ese circuito tiene una falla. Probarlo una y otra vez no arregla nada y puede dañar el aparato. Lo mismo aplica a la térmica que salta sin causa visible: hay una sobrecarga o un cortocircuito esperando.',
      },
      {
        tipo: 'parrafo',
        texto:
          'Si el corte es de red, la gestión es de la distribuidora y conviene reportarlo. Si el problema es interno y no se resuelve desconectando una carga, un electricista matriculado lo diagnostica en la visita y evita que un intento casero termine en un siniestro.',
      },
      {
        tipo: 'faq',
        titulo: 'Preguntas frecuentes ante un corte de luz',
        items: [
          {
            pregunta: '¿Por qué se corta la luz solo en mi casa?',
            respuesta:
              'Puede ser una sobrecarga, una falla en un circuito o un problema en el pilar o la conexión. Si los vecinos tienen luz, descartá la red y revisá tablero y pilar con cuidado; si no encontrás la causa, llamá a un electricista.',
          },
          {
            pregunta: '¿Está bien reiniciar la térmica varias veces?',
            respuesta:
              'No. Si vuelve a bajar inmediatamente hay una falla activa, y reiniciarla insiste en un circuito que no está en condiciones. Desconectá cargas y, si persiste, llamá a un profesional.',
          },
          {
            pregunta: '¿Cómo distingo si es la red o mi instalación?',
            respuesta:
              'Mirá si afecta a los vecinos. Si también se cortó en la manzana, es de red. Si solo afecta tu casa, el problema está de tu lado, sea en el pilar o en la instalación interna.',
          },
          {
            pregunta: '¿Puedo revisar el pilar yo mismo?',
            respuesta:
              'No conviene abrirlo. El pilar tiene tensión y su apertura está reservada a personal habilitado. A lo sumo, miralo por fuera y observá el estado del medidor y de los cables.',
          },
        ],
      },
      {
        tipo: 'enlace',
        // TODO: Consultar si el número de WhatsApp y mensaje predeterminado deben configurarse con variables de entorno
        url: 'https://wa.me/5491163521258?text=Hola%2C%20tengo%20un%20corte%20de%20luz%20en%20casa%20y%20necesito%20asistencia.',
        texto: 'Escribir para asistencia por corte de luz',
      },
      {
        tipo: 'enlace',
        url: '/electricista-en-escobar',
        texto: 'Ver el servicio eléctrico en Escobar y alrededores',
      },
    ],
    pendientes: [
      'Confirmar si ofrecen guardia 24 hs también para el diagnóstico de un corte',
      'Link o instrucciones de reporte de EDENOR/EDESUR que quieran recomendar',
      'Dato real de cuántos cortes que reciben terminan siendo internos',
    ],
  },
  {
    slug: 'ampliar-potencia-edenor-cuanto-tarda',
    titulo: 'Ampliar la potencia contratada con EDENOR o EDESUR: cuánto tarda y cómo se pide',
    subtitulo:
      'Estás al límite y salta la térmica: sumar un aire, un horno o una bomba exige ampliar la potencia ante la distribuidora. Así es el proceso, paso a paso.',
    fecha: '2026-08-06',
    tipo: 'consejo',
    categoria: 'Energía',
    destacado: false,
    extracto:
      'Cómo ampliar la potencia eléctrica contratada ante EDENOR o EDESUR: factibilidad, cambio de medidor o pilar, documentación y tiempos estimados.',
    seoTitle: 'Ampliar Potencia con EDENOR o EDESUR: Cuánto Tarda y Cómo Pedirla',
    seoDescription:
      'Guía para ampliar la potencia contratada ante EDENOR o EDESUR: factibilidad, cambio de medidor o pilar, documentación y tiempos estimados en zona norte.',
    keywords:
      'ampliar potencia edenor, ampliar potencia edesur, cambiar potencia contratada, cambio de medidor, factibilidad edenor, aumentar kw contratados',
    contenido: [
      {
        tipo: 'parrafo',
        texto:
          'Cuando la térmica general empieza a saltar cada vez que encendés algo grande, el problema no es el aparato: es la potencia contratada. Para ampliarla hay que pedir una factibilidad a la distribuidora; no se resuelve desde el tablero.',
        fuerte: true,
      },
      {
        tipo: 'parrafo',
        texto:
          'Cada suministro tiene una potencia contratada según su categoría de tarifa. Un aire acondicionado grande, un horno eléctrico, una bomba o un equipo de producción pueden superarla. La señal es clara: saltos frecuentes y caídas de tensión al arrancar.',
      },
      {
        tipo: 'listado',
        titulo: 'Cómo se pide, paso a paso:',
        items: [
          'Relevar la potencia nueva que necesitás y con qué cargas reales',
          'Presentar la factibilidad ante la distribuidora en tu punto de suministro',
          'Aprobación técnica y condiciones de obra de la distribuidora',
          'Adecuar pilar, cableado y medidor con instalador matriculado',
          'Inspección de la distribuidora y activación del nuevo servicio',
          'Verificar el nuevo valor contratado en la factura',
        ],
      },
      {
        tipo: 'parrafo',
        texto:
          'Los tiempos los maneja la distribuidora y dependen de la obra: cuando solo hay cambio de medidor puede resolverse relativamente rápido; cuando hay que reforzar el pilar o la red, el plazo se estira. Por eso el consejo es arrancar la factibilidad en paralelo a la compra del equipo que va a consumir esa energía.',
      },
      {
        tipo: 'parrafo',
        texto:
          'Si tu consumo es de vivienda o comercio pequeño, esto se resuelve en baja tensión. Si sos una planta y el salto es grande, la misma necesidad puede derivar en transformador o media tensión, con un proyecto más amplio.',
      },
      {
        tipo: 'faq',
        titulo: 'Preguntas frecuentes sobre ampliación de potencia',
        items: [
          {
            pregunta: '¿Cuánto tarda ampliar la potencia?',
            respuesta:
              'Depende de la distribuidora y del tipo de obra. Si alcanza con cambio de medidor suele ser más rápido; si hay que reforzar el pilar o la red, el plazo aumenta. El trámite se inicia con la factibilidad y el tiempo corre desde ahí.',
          },
          {
            pregunta: '¿Puedo ampliar la potencia yo mismo?',
            respuesta:
              'No. La instalación y el cambio de medidor los debe hacer un electricista o instalador matriculado, y la conexión final la habilita la distribuidora previa inspección.',
          },
          {
            pregunta: '¿Qué pasa si consumo más de lo contratado?',
            respuesta:
              'Cuanto más te excedés, más probable es que actúe la protección del medidor o que salte tu térmica general. Consumir por encima de la potencia contratada de forma sostenida es causa típica de cortes y de recargos.',
          },
          {
            pregunta: '¿Cuánta potencia necesito?',
            respuesta:
              'Se calcula relevando las cargas simultáneas y su potencia, con margen para los arranques. No se define por lo que dijo el vecino. Un relevamiento evita pagar de más o quedar corto otra vez.',
          },
        ],
      },
      {
        tipo: 'enlace',
        url: '/noticias/potencia-habilitacion-fabrica',
        texto: 'Ampliación de potencia industrial: transformador y media tensión',
      },
      {
        tipo: 'enlace',
        url: '/presupuesto',
        texto: 'Solicitar un presupuesto de ampliación',
      },
    ],
    pendientes: [
      'Rango de tiempos reales que manejan según sus trámites',
      'Pasos exactos por zona EDENOR y EDESUR y diferencias de categoría tarifaria',
      'Confirmar si ofrecen el trámite de factibilidad como servicio y qué incluye',
    ],
  },
  {
    slug: 'mantenimiento-electrico-preventivo-pymes',
    titulo: 'Mantenimiento eléctrico preventivo para PYMES: por qué conviene',
    subtitulo:
      'La falla eléctrica no avisa, pero el mantenimiento preventivo la puede anticipar. Esto es lo que revisamos en una planta o un comercio, y por qué se paga solo.',
    fecha: '2026-07-10',
    tipo: 'consejo',
    categoria: 'Energía',
    destacado: false,
    extracto:
      'Termografía, torque de conexiones, protecciones y puesta a tierra: el plan preventivo que evita paradas y sirve como respaldo para el seguro y las auditorías.',
    seoTitle: 'Mantenimiento Eléctrico Preventivo para PYMES',
    seoDescription:
      'Por qué conviene el mantenimiento eléctrico preventivo en PYMES: termografía, torque, protecciones, puesta a tierra e informes técnicos. ElectroPower, zona norte.',
    keywords:
      'mantenimiento electrico preventivo pymes, termografia electrica, plan mantenimiento electrico, auditoria electrica planta, mantenimiento tableros',
    contenido: [
      {
        tipo: 'parrafo',
        texto:
          'Una parada no planificada casi siempre cuesta más que un año de mantenimiento preventivo. El problema es que la falla eléctrica no avisa: se acumula en conexiones flojas, aislaciones degradadas y protecciones descalibradas hasta que un día para todo.',
        fuerte: true,
      },
      {
        tipo: 'parrafo',
        texto:
          'El mantenimiento preventivo reemplaza la urgencia por un plan: se inspecciona, se mide y se corrige por prioridad, en horarios que no frenan la operación. Y deja un informe que sirve para gerencia, para el seguro y para la habilitación.',
      },
      {
        tipo: 'listado',
        titulo: 'Qué incluye un plan serio:',
        items: [
          'Inspección termográfica de tableros y conexiones, que detecta puntos calientes antes de que fallen',
          'Torque y ajuste de bornes, la causa más común de fallas por calentamiento',
          'Verificación y ensayo de protecciones, con calibración cuando corresponde',
          'Medición de puesta a tierra y continuidad de masas',
          'Estado de cables, canalizaciones, aislaciones y ventilación de tableros',
          'Limpieza técnica y orden de tableros',
          'Informe con hallazgos, criticidad y plan de acciones',
        ],
      },
      {
        tipo: 'parrafo',
        texto:
          'La termografía es la herramienta que más valor entrega: muestra una conexión recalentando cuando todavía no falló. Lo mismo pasa con el torque: un borne flojo es un punto caliente esperando una carga alta. Detectarlos en una visita programada cuesta una fracción de lo que cuesta un tablero quemado.',
      },
      {
        tipo: 'parrafo',
        // TODO: reemplazar por un caso real (rubro, localidad, hallazgo, horas y resultado).
        texto:
          'En un supermercado mayorista de Escobar el plan detectó un borne flojo y una protección subdimensionada antes del pico de temporada. Se corrigió en 3 horas fuera del horario de atención y se evitó un corte en plena venta.',
      },
      {
        tipo: 'faq',
        titulo: 'Preguntas frecuentes sobre mantenimiento',
        items: [
          {
            pregunta: '¿Cada cuánto se hace el mantenimiento preventivo?',
            respuesta:
              'Como referencia general, una visita anual alcanza para instalaciones de uso moderado; en plantas con turnos continuos o ambientes exigentes se recomienda cada seis meses. La frecuencia se define según criticidad y hallazgos.',
          },
          {
            pregunta: '¿El mantenimiento obliga a cortar la producción?',
            respuesta:
              'No necesariamente. Gran parte del trabajo (termografía, inspección, limpieza) se hace con la instalación en marcha. Los ajustes que requieren corte se programan en ventanas de baja actividad.',
          },
          {
            pregunta: '¿El informe sirve para el seguro o la habilitación?',
            respuesta:
              'Sí. Un informe con mediciones y hallazgos es documentación de respaldo para auditorías de aseguradoras, habilitaciones y requerimientos internos de la empresa.',
          },
          {
            pregunta: '¿Conviene para un comercio chico o solo para industrias?',
            respuesta:
              'Un comercio con tablero cargado, aires, heladeras o iluminación puede beneficiarse igual. El alcance se ajusta al tamaño: no hace falta un plan industrial para una PYME.',
          },
        ],
      },
      {
        tipo: 'enlace',
        url: '/industria',
        texto: 'Conocer el plan de mantenimiento para industrias y PYMES',
      },
    ],
    pendientes: [
      'Frecuencia y alcance exactos que ofrecen, con precios del plan',
      'Herramientas con las que trabajan (marca de cámara termográfica y telurómetro)',
      'Caso real con hallazgo y resultado medible',
    ],
  },
  {
    slug: 'urgencia-electrica-24-horas-que-hacer',
    titulo: 'Chispas, olor a quemado o humo: qué hacer ante una emergencia eléctrica',
    subtitulo:
      'Hay fallas que no admiten esperar. Si hay chispas, olor a quemado o humo, el orden de los pasos es lo que evita un incendio. Así se actúa.',
    fecha: '2026-08-02',
    tipo: 'consejo',
    categoria: 'Seguridad',
    destacado: false,
    extracto:
      'Cómo actuar ante chispas, humo u olor a quemado, qué NO hacer y cuándo llamar a un electricista de guardia 24 horas en Escobar y Zona Norte.',
    seoTitle: 'Emergencia Eléctrica: Chispas, Humo u Olor a Quemado',
    seoDescription:
      'Qué hacer ante una emergencia eléctrica: chispas, humo u olor a quemado. Pasos seguros, qué no hacer y cuándo llamar a un electricista 24 horas en zona norte.',
    keywords:
      'emergencia electrica, chispas tomacorriente, olor a quemado tablero, humo instalacion electrica, electricista 24 horas zona norte, electricista urgencias',
    contenido: [
      {
        tipo: 'parrafo',
        texto:
          'Una térmica que salta es una molestia; un tablero que chispea o huele a quemado es un riesgo de incendio. Ante esos signos el objetivo no es volver a tener luz, es cortar la energía y no exponerse.',
        fuerte: true,
      },
      {
        tipo: 'parrafo',
        texto:
          'El origen del riesgo es simple: una conexión floja o un conductor dañado se calienta, carboniza la aislación y genera un arco. Ese arco puede inflamar lo que tenga cerca. Cuanto antes se corte la energía, menor la chance de que escale.',
      },
      {
        tipo: 'listado',
        titulo: 'Qué hacer, en orden:',
        items: [
          'Cortá la energía desde la llave general o el disyuntor, si podés hacerlo sin riesgo',
          'No toques el tablero con las manos húmedas ni parado sobre agua',
          'Si hay humo, alejá a las personas, ventilá y no uses agua para apagar',
          'Desconectá el equipo que originó la falla si es seguro hacerlo',
          'No reinicies la protección: si hay arco u olor, la falla sigue activa',
          'Llamá a un servicio con guardia real 24 horas',
        ],
      },
      {
        tipo: 'listado',
        titulo: 'Qué NO hacer:',
        items: [
          'No abrir el pilar ni intervenir la acometida',
          'No insistir reiniciando la térmica varias veces',
          'No usar agua ni extintores inadecuados sobre equipos energizados',
          'No dejar la instalación energizada hasta que venga alguien',
        ],
      },
      {
        tipo: 'parrafo',
        texto:
          'En un comercio o una industria esta situación se trata como una parada con riesgo: se aísla el sector, se avisa al responsable y se llama a quien tenga respuesta inmediata. Después de la emergencia viene lo importante: encontrar la causa (sobrecarga, conexión suelta, cable dañado o protección inadecuada) para que no se repita.',
      },
      {
        tipo: 'faq',
        titulo: 'Preguntas frecuentes ante una emergencia',
        items: [
          {
            pregunta: '¿Cuándo una falla eléctrica es una urgencia real?',
            respuesta:
              'Cuando hay chispas, humo, olor a quemado, un tomacorriente que se calienta o una protección que salta de forma reiterada. También si hay agua sobre una instalación energizada. En esos casos no se espera: se corta la energía y se llama.',
          },
          {
            pregunta: '¿Qué hago si un tomacorriente se calienta?',
            respuesta:
              'Dejá de usarlo, desconectá los equipos y cortá ese circuito. Un toma caliente casi siempre es una conexión floja; seguir usándolo es la forma más rápida de llegar a un arco eléctrico.',
          },
          {
            pregunta: '¿Puedo apagar con agua un principio de incendio eléctrico?',
            respuesta:
              'Nunca. El agua conduce y sobre una instalación energizada es peligrosa. Cortá la energía y usá un extintor apto (CO2 o polvo) solo si estás seguro de lo que hacés; ante la duda, evacuá y llamá a bomberos.',
          },
          {
            pregunta: '¿Atienden de madrugada, fines de semana y feriados?',
            respuesta:
              'Sí. ElectroPower cuenta con servicio de guardia 24 horas para urgencias eléctricas en Escobar y toda la zona norte. Se avisa por WhatsApp y se coordina la asistencia.',
          },
        ],
      },
      {
        tipo: 'enlace',
        url: '/electricista-24-horas',
        texto: 'Ver el servicio de Electricista 24 horas en Escobar y Zona Norte',
      },
      {
        tipo: 'parrafo',
        texto:
          'Las fallas más comunes que atendemos en hogares y comercios de Escobar, Garín, Matheu y el resto de la zona norte son térmicas que saltan al enchufar varios equipos, tomacorrientes que se calientan y luces que titilan. Todas tienen solución en una visita, pero si hay chispas u olor a quemado, no esperes.',
      },
      {
        tipo: 'enlace',
        url: '/electricista-matriculado',
        texto: '¿Por qué conviene contratar un electricista matriculado?',
      },
    ],
    pendientes: [
      'Confirmar cobertura real y zonas de la guardia 24 horas',
      'Tiempo de respuesta promedio que puedan declarar',
      'WhatsApp de urgencias y si quieren un botón o teléfono específico',
    ],
  },
  {
    slug: 'electricista-matriculado-por-que-confiar',
    titulo: 'Electricista matriculado: por qué conviene confiar en un profesional con matrícula',
    subtitulo:
      'La matrícula no es solo un papel: es la garantía de que la instalación cumple las normas y de que hay un responsable detrás del trabajo. Te explicamos la diferencia.',
    fecha: '2026-08-16',
    tipo: 'consejo',
    categoria: 'Profesionalismo',
    destacado: false,
    extracto:
      'Qué implica la matrícula de un electricista, por qué protege tu propiedad y a tu familia, y cómo un servicio matriculado evita los riesgos del trabajo informal.',
    seoTitle: 'Electricista Matriculado: Por Qué Conviene Contratar a Uno',
    seoDescription:
      'La matrícula garantiza instalaciones que cumplen normas, trabajo seguro y un responsable al que reclamar. Por qué conviene un electricista matriculado en zona norte.',
    keywords:
      'electricista matriculado, matricula electricista, instalacion electrica habilitada, electricista matriculado escobar, normativa electrica argentina',
    contenido: [
      {
        tipo: 'parrafo',
        texto:
          'Un trabajo eléctrico informal rara vez se ve hasta que falla. La matrícula es la diferencia entre quedó andando y quedó bien, documentado y en condiciones de responder si algo pasa.',
        fuerte: true,
      },
      {
        tipo: 'parrafo',
        texto:
          'La electricidad no perdona el más o menos. Un cable de sección insuficiente, una protección mal elegida o una puesta a tierra inexistente pueden funcionar durante meses y fallar justo cuando hay más carga. La matrícula acredita formación, conocimiento de la normativa y responsabilidad legal por el trabajo.',
      },
      {
        tipo: 'listado',
        titulo: 'Lo que cambia con un matriculado:',
        items: [
          'Cumplimiento de la reglamentación eléctrica vigente (AEA 90364)',
          'Materiales certificados y dimensionamiento correcto',
          'Medición y protocolo de puesta a tierra',
          'Documentación válida para la habilitación y para el seguro',
          'Responsabilidad profesional ante una falla o un siniestro',
          'Garantía sobre el trabajo, no solo quedó andando',
        ],
      },
      {
        tipo: 'parrafo',
        texto:
          'Hay un costo invisible del trabajo informal: el riesgo de perder la cobertura del seguro, la dificultad para habilitar y el peligro para las personas. En una instalación que hace dudar, un matriculado no adivina: mide, verifica y documenta.',
      },
      {
        tipo: 'faq',
        titulo: 'Preguntas frecuentes sobre matrícula',
        items: [
          {
            pregunta: '¿Qué significa que un electricista esté matriculado?',
            respuesta:
              'Que está habilitado para ejecutar y firmar instalaciones eléctricas conforme a la reglamentación, con respaldo profesional. La matrícula acredita idoneidad y responsabilidad sobre el trabajo.',
          },
          {
            pregunta: '¿La aseguradora puede rechazar un siniestro por una instalación no matriculada?',
            respuesta:
              'Puede cuestionar la cobertura si la instalación no cumple la normativa. Tener los trabajos documentados y firmados por un matriculado es la mejor defensa ante un siniestro.',
          },
          {
            pregunta: '¿El presupuesto de un matriculado es más caro?',
            respuesta:
              'No necesariamente, y aun si lo fuera, incluye alcance, materiales correctos y documentación. Comparalo contra el costo de un siniestro o de rehacer el trabajo.',
          },
          {
            pregunta: '¿Necesito un matriculado para un trabajo chico?',
            respuesta:
              'Para cualquier tarea que intervenga la instalación fija, sí conviene. Tareas menores y seguras pueden no requerirlo, pero ante la duda la respuesta es que lo revise un matriculado.',
          },
        ],
      },
      {
        tipo: 'enlace',
        url: '/electricista-matriculado',
        texto: 'Conocer el servicio de electricista matriculado en Escobar y Zona Norte',
      },
      {
        tipo: 'enlace',
        url: '/electricista-en-garin',
        texto: 'Instalaciones eléctricas matriculadas en Garín',
      },
      {
        tipo: 'enlace',
        url: '/presupuesto',
        texto: 'Pedir un presupuesto con un electricista matriculado',
      },
    ],
    pendientes: [
      'Número de matrícula de la empresa y de los profesionales, para publicar',
      'Organismo que la emite (COPIME u otro)',
      'Definir si muestran certificados de obra anonimizados como ejemplo',
    ],
  },
  {
    slug: 'electropower-ampliacion-electrica-planta-industrial',
    titulo: 'ElectroPower amplió la potencia eléctrica de una planta industrial en zona norte',
    subtitulo:
      'Un caso de ampliación con transformador y media tensión, ejecutado sin detener la producción.',
    fecha: '2026-09-10',
    tipo: 'novedad',
    categoria: 'Obras',
    destacado: false,
    extracto:
      'ElectroPower ejecutó la ampliación de potencia de una planta industrial: relevamiento, factibilidad, transformador y puesta en marcha, con cortes coordinados fuera de producción.',
    seoTitle: 'Caso de Éxito: Ampliación Eléctrica de una Planta Industrial',
    seoDescription:
      'ElectroPower ejecutó la ampliación de potencia de una planta industrial en zona norte: relevamiento, factibilidad, transformador y media tensión, sin frenar la producción.',
    keywords:
      'caso de exito ampliacion industrial, obra electrica industrial zona norte, transformador planta, media tension obra, electropower',
    contenido: [
      {
        tipo: 'parrafo',
        // TODO: confirmar localidad/parque y nombre o rubro del cliente.
        texto:
          'ElectroPower estuvo a cargo de la ampliación de potencia eléctrica de una planta industrial en Garín, en el Parque Industrial, un proyecto que requirió relevamiento de cargas, gestión de factibilidad, montaje de transformador y puesta en marcha sin detener la producción.',
        fuerte: true,
      },
      {
        tipo: 'parrafo',
        // TODO: confirmar esquema técnico real (kVA del transformador y kV/alcance de la media tensión).
        texto:
          'El punto de partida fue una instalación que había llegado a su límite. Con un relevamiento de cargas y potencia de arranque se dimensionó la nueva capacidad y se definió el esquema: un transformador de 630 kVA y un tramo de media tensión de 13,2 kV.',
      },
      {
        tipo: 'listado',
        titulo: 'El trabajo incluyó:',
        items: [
          'Relevamiento y mediciones de la instalación existente',
          'Gestión de factibilidad y coordinación con la distribuidora',
          'Montaje o cambio de transformador y tablero principal',
          'Tendido y conexión de la alimentación en baja o media tensión',
          'Ensayos, puesta en marcha y documentación de la obra',
        ],
      },
      {
        tipo: 'parrafo',
        // TODO: reemplazar por el resultado real y medible de la obra.
        texto:
          'Los cortes se coordinaron en ventanas de baja actividad, de modo que la planta nunca detuvo su operación. La nueva línea quedó operativa y el cliente sumó dos máquinas sin nuevas interrupciones.',
      },
      {
        tipo: 'parrafo',
        texto:
          'Si tu industria está al límite de potencia, el punto de partida es el mismo: un relevamiento. Después se define el proyecto y se ejecuta en etapas planificadas.',
      },
      {
        tipo: 'enlace',
        url: '/industria',
        texto: 'Conocer las soluciones eléctricas para industrias',
      },
      {
        tipo: 'enlace',
        url: '/noticias/potencia-habilitacion-fabrica',
        texto: 'Leer la guía: ampliación de potencia industrial, transformador y media tensión',
      },
    ],
    pendientes: [
      'Nombre o rubro del cliente y autorización para mencionarlo',
      'Localidad, kVA del transformador y kV de la línea',
      'Síntoma inicial y resultado concreto, con cifras',
      'Fotos de obra, si autorizan',
      'Fecha exacta de ejecución',
    ],
  },
  {
    slug: 'electropower-contrato-mantenimiento-electrico',
    titulo: 'ElectroPower firma un contrato de mantenimiento eléctrico con una empresa de primera línea',
    subtitulo:
      'El acuerdo cubre el mantenimiento preventivo programado de sus instalaciones y la atención de urgencias con guardia 24 horas.',
    fecha: '2026-09-15',
    tipo: 'novedad',
    categoria: 'Alianzas',
    destacado: false,
    extracto:
      'ElectroPower firmó un contrato anual de mantenimiento eléctrico preventivo y urgencias 24 horas para las instalaciones de una empresa de primera línea, con informes técnicos para auditorías.',
    seoTitle: 'Nuevo Contrato de Mantenimiento Eléctrico | ElectroPower',
    seoDescription:
      'ElectroPower firmó un contrato anual de mantenimiento eléctrico preventivo y urgencias 24 horas con una empresa de primera línea, con informes técnicos para auditorías.',
    keywords:
      'contrato mantenimiento electrico, mantenimiento preventivo empresa, guardia 24 horas electricista, proveedor electrico zona norte, electropower',
    contenido: [
      {
        tipo: 'parrafo',
        // TODO: definir si se publica el nombre real del cliente o se mantiene como empresa de primera línea; confirmar el sector.
        texto:
          'ElectroPower firmó un contrato anual de mantenimiento eléctrico para las instalaciones de una empresa de primera línea del sector logístico, con un plan de mantenimiento preventivo programado y atención de urgencias con guardia 24 horas.',
        fuerte: true,
      },
      {
        tipo: 'parrafo',
        texto:
          'El acuerdo incluye inspección termográfica periódica, ajuste y torque de conexiones, verificación de protecciones, medición de puesta a tierra y un informe técnico con hallazgos y prioridades en cada intervención. El objetivo es que las fallas se detecten antes de convertirse en paradas.',
      },
      {
        tipo: 'listado',
        titulo: 'Qué cubre el contrato:',
        items: [
          'Mantenimiento preventivo con frecuencia programada',
          'Inspección termográfica y mediciones eléctricas',
          'Verificación de protecciones y puesta a tierra',
          'Atención de urgencias con guardia 24 horas',
          'Informes técnicos para auditorías y seguros',
          'Repuestos y materiales eléctricos con asesoramiento',
        ],
      },
      {
        tipo: 'parrafo',
        // TODO: reemplazar por un testimonio real autorizado, o quitar la cita.
        texto:
          'Para ElectroPower, este tipo de acuerdos representan la evolución natural de nuestro servicio: pasar de resolver urgencias a prevenirlas, con el mismo equipo matriculado y la misma disponibilidad. "Necesitábamos dejar de apagar incendios y tener un plan; hoy tenemos las mediciones y los informes al día", resume el responsable de mantenimiento de la empresa.',
      },
      {
        tipo: 'parrafo',
        texto:
          'Las empresas que buscan un proveedor eléctrico con cobertura en zona norte y respuesta 24 horas pueden conocer nuestro plan para industrias o solicitar una propuesta a medida.',
      },
      {
        tipo: 'enlace',
        url: '/industria',
        texto: 'Conocer el plan de mantenimiento para industrias y empresas',
      },
      {
        tipo: 'enlace',
        url: '/presupuesto',
        texto: 'Solicitar una propuesta de mantenimiento',
      },
    ],
    pendientes: [
      'Definir si se publica el nombre de la empresa o como empresa de primera línea',
      'Rubro o sector, cantidad de sedes y tipo de instalaciones',
      'Alcance exacto del contrato y frecuencia de las visitas',
      'Autorización para usar logo o testimonio',
      'Fecha real de firma y duración del contrato',
    ],
  },
];

export const getPost = (slug) => POSTS.find((p) => p.slug === slug);
