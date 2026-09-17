import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { SERVICIOS } from './src/data/servicios.js';
import { ZONAS } from './src/data/zonas.js';
import { POSTS } from './src/data/posts.js';
import { VARIANTES } from './src/data/variantes.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, 'dist');
const SITE = 'https://www.electropowerok.com.ar';
const OG_IMAGE = `${SITE}/og-image.jpg`;
const OG_IMAGE_ALT =
  'ElectroPower | Electricistas en Escobar y Zona Norte de Buenos Aires';

const AREA_SERVED = [
  'Matheu',
  'Belén de Escobar',
  'Garín',
  'Ingeniero Maschwitz',
  'Loma Verde',
  'Maquinista Savio',
  'Escobar',
  'Pilar',
  'Tigre',
  'San Fernando',
  'San Isidro',
  'Vicente López',
  'Ciudad Autónoma de Buenos Aires',
  'Zárate',
];

const PROVINCIAS_LIMITROFES = [
  'Córdoba',
  'Santa Fe',
  'Entre Ríos',
  'La Pampa',
  'Río Negro',
];

const LOCAL_BUSINESS = {
  '@context': 'https://schema.org',
  '@type': 'Electrician',
  '@id': `${SITE}/#negocio`,
  name: 'ElectroPower',
  url: `${SITE}/`,
  logo: `${SITE}/logo.png`,
  image: OG_IMAGE,
  description:
    'Servicios eléctricos, climatización y construcción en Escobar y Zona Norte de Buenos Aires. Urgencias eléctricas 24 hs, instalaciones, tableros y mantenimiento.',
  telephone: '+5491163521258',
  email: 'electropowerconstrucciones@gmail.com',
  priceRange: '$$',
  founder: {
    '@type': 'Person',
    name: 'Ángel Saldaño',
    jobTitle: 'Fundador y Director Técnico',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Hipólito Yrigoyen 450',
    addressLocality: 'Matheu',
    addressRegion: 'Buenos Aires',
    postalCode: 'B1627',
    addressCountry: 'AR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -34.34735305866982,
    longitude: -58.79170486551942,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '13:00',
    },
  ],
  areaServed: AREA_SERVED,
  sameAs: [
    'https://www.facebook.com/profile.php?id=100057360523053',
    'https://www.instagram.com/electropowerok',
  ],
};

const ORGANIZATION = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE}/#organizacion`,
  name: 'ElectroPower',
  url: `${SITE}/`,
  logo: `${SITE}/logo.png`,
  image: OG_IMAGE,
  email: 'electropowerconstrucciones@gmail.com',
  telephone: '+5491163521258',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+5491163521258',
    contactType: 'customer service',
    areaServed: 'AR',
    availableLanguage: 'es',
  },
};

const SERVICES = [
  {
    name: 'Instalaciones Eléctricas',
    description:
      'Instalaciones eléctricas de alta, media y baja tensión, tableros eléctricos, pilares para medidores, puesta a tierra, iluminación y reparaciones eléctricas.',
  },
  {
    name: 'Climatización y Refrigeración',
    description:
      'Instalación, mantenimiento y reparación de aires acondicionados split, multisplit, de ventana y sistemas de refrigeración industrial.',
  },
  {
    name: 'Venta de Materiales Eléctricos',
    description:
      'Comercialización de cables, térmicas, disyuntores, contactores y accesorios eléctricos de primeras marcas con asesoramiento técnico.',
  },
  {
    name: 'Construcción y Refacciones',
    description:
      'Remodelación, ampliaciones y obras civiles con instalaciones eléctricas integradas, iluminación arquitectónica y construcciones en seco.',
  },
  {
    name: 'Transformadores',
    description:
      'Instalación y mantenimiento de transformadores monofásicos y trifásicos, pruebas de rigidez dieléctrica y proyectos de media tensión.',
  },
  {
    name: 'Media Tensión',
    description:
      'Tendido de líneas de media tensión en 13,2 kV y 33 kV, subestaciones transformadoras, mediciones eléctricas e inspecciones termográficas.',
  },
].map((s) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: s.name,
  description: s.description,
  serviceType: s.name,
  provider: { '@id': `${SITE}/#negocio` },
  areaServed: AREA_SERVED,
}));

const breadcrumbs = (steps, path) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: steps.map((step, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: step.name,
    item: `${SITE}${i === steps.length - 1 ? path : step.item}`,
  })),
});

const faqSchema = (faqList) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqList.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

const postFaq = (p) =>
  (p.contenido || [])
    .filter((b) => b.tipo === 'faq' && Array.isArray(b.items))
    .flatMap((b) => b.items)
    .filter((it) => it && it.pregunta && it.respuesta)
    .map((it) => ({ q: it.pregunta, a: it.respuesta }));

const profesionalIndustria = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'ElectroPower | Servicios para Industrias',
  url: `${SITE}/industria`,
  description:
    'Instalaciones eléctricas industriales, media tensión de 13,2 kV y 33 kV, transformadores y mantenimiento programado para plantas y parques industriales del conurbano norte.',
  provider: { '@id': `${SITE}/#negocio` },
  areaServed: AREA_SERVED,
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Soluciones eléctricas para industria',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Media Tensión' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Instalaciones industriales' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Transformadores' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Mantenimiento programado' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Grupos electrógenos' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Urgencias industriales' },
      },
    ],
  },
};

const servicioSchema = (s) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: s.nombre,
  url: `${SITE}/servicios/${s.slug}`,
  description: s.description,
  serviceType: s.nombre,
  provider: { '@id': `${SITE}/#negocio` },
  areaServed: AREA_SERVED,
});

const zonaSchema = (z) =>
  z.tipo === 'provincia'
    ? {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: `Electricista industrial en ${z.ciudad}`,
        url: `${SITE}/${z.slug}`,
        description: z.description,
        serviceType: 'Instalaciones eléctricas industriales',
        areaServed: z.areas,
        provider: { '@id': `${SITE}/#negocio` },
      }
    : {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: `Electricista en ${z.ciudad}`,
        url: `${SITE}/${z.slug}`,
        description: z.description,
        serviceType: 'Electricista',
        provider: { '@id': `${SITE}/#negocio` },
        areaServed: z.areas,
      };

const servicioVarianteSchema = (v) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: v.h1,
  url: `${SITE}/${v.slug}`,
  description: v.intro,
  serviceType: v.badge,
  provider: { '@id': `${SITE}/#negocio` },
  areaServed: AREA_SERVED,
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios',
    itemListElement: v.servicios.map((s, i) => ({
      '@type': 'Offer',
      position: i + 1,
      itemOffered: { '@type': 'Service', name: s.nombre },
    })),
  },
});

const articuloSchema = (p) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: p.titulo,
  description: p.extracto,
  image: OG_IMAGE,
  datePublished: p.fecha,
  dateModified: p.fecha,
  inLanguage: 'es-AR',
  articleSection: p.categoria,
  keywords: p.keywords,
  mainEntityOfPage: `${SITE}/noticias/${p.slug}`,
  author: { '@type': 'Organization', name: 'ElectroPower', url: `${SITE}/` },
  publisher: {
    '@type': 'Organization',
    name: 'ElectroPower',
    logo: { '@type': 'ImageObject', url: `${SITE}/logo.png` },
  },
});

const fundadorSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ángel Saldaño',
  jobTitle: 'Fundador y Director Técnico',
  worksFor: { '@id': `${SITE}/#organizacion` },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Matheu',
    addressRegion: 'Buenos Aires',
    addressCountry: 'AR',
  },
};

const ROUTES = {
  '/': {
    title: 'Electricista en Escobar y Zona Norte | Instalaciones Eléctricas',
    description:
      'Electricistas en Escobar y Zona Norte de Buenos Aires. Urgencias eléctricas 24 hs, instalaciones eléctricas, tableros y climatización. Presupuesto sin cargo.',
    keywords:
      'electricista en buenos aires, electricista zona norte, electricista escobar, urgencias eléctricas 24 hs, instalaciones eléctricas, tableros eléctricos, reparaciones eléctricas, climatización, electro power',
    schemas: [LOCAL_BUSINESS, ORGANIZATION],
  },
  '/servicios': {
    title: 'Servicios Eléctricos en Zona Norte | ElectroPower',
    description:
      'Instalaciones eléctricas domiciliarias, comerciales e industriales en Buenos Aires. Tableros, media tensión, transformadores, climatización y urgencias 24 hs.',
    keywords:
      'servicios eléctricos buenos aires, instalaciones eléctricas, tableros eléctricos, media tensión, transformadores, climatización, reparación eléctrica, urgencias eléctricas 24 hs',
    schemas: [
      LOCAL_BUSINESS,
      ...SERVICES,
      breadcrumbs([{ name: 'Inicio', item: '/' }, { name: 'Servicios' }], '/servicios'),
    ],
  },
  '/industria': {
    title: 'Soluciones Eléctricas Industriales en Zona Norte | ElectroPower',
    description:
      'Instalaciones eléctricas para industrias en Escobar, Garín (Parque OKS/CIPO) y zona norte. Media tensión 13,2 kV y 33 kV, transformadores y mantenimiento.',
    keywords:
      'electricista industrial zona norte, instalaciones eléctricas industriales, media tensión industrias, mantenimiento eléctrico industrial, parque industrial garín, proveedor eléctrico escobar',
    schemas: [
      LOCAL_BUSINESS,
      ORGANIZATION,
      profesionalIndustria,
      faqSchema([
        {
          q: '¿Instalan media tensión en parques industriales?',
          a: 'Sí, tendemos líneas de 13,2 kV y 33 kV, montamos subestaciones transformadoras y realizamos el mantenimiento con personal certificado.',
        },
        {
          q: '¿Qué es el mantenimiento eléctrico programado?',
          a: 'Es un plan preventivo periódico sobre tableros, protecciones, puesta a tierra y media tensión que evita paradas no programadas y deja informes técnicos.',
        },
        {
          q: '¿Obtengo documentación para auditorías y seguros?',
          a: 'Sí, entregamos informes, mediciones y certificaciones de las instalaciones que requieren las industrias y sus seguros.',
        },
      ]),
      breadcrumbs([{ name: 'Inicio', item: '/' }, { name: 'Industria' }], '/industria'),
    ],
  },
  '/nosotros': {
    title: 'ElectroPower | Electricistas en Escobar y Zona Norte',
    description:
      'Conocé ElectroPower: más de 6 años brindando servicios eléctricos, climatización y construcción en Escobar, Zona Norte y proyectos industriales en todo el país.',
    keywords:
      'empresa eléctrica escobar, electricistas zona norte, electro power, empresa de electricidad buenos aires',
    schemas: [
      LOCAL_BUSINESS,
      ORGANIZATION,
      fundadorSchema,
      breadcrumbs([{ name: 'Inicio', item: '/' }, { name: 'Nosotros' }], '/nosotros'),
    ],
  },
  '/presupuesto': {
    title: 'Solicitá tu Presupuesto | ElectroPower',
    description:
      'Solicitá tu presupuesto de instalaciones eléctricas, climatización, media tensión y construcción en Escobar y zona norte. Te pasamos el alcance y el costo.',
    keywords:
      'presupuesto electricista escobar, solicitar presupuesto online, cotizar trabajo electrico zona norte, presupuesto sin cargo electricista',
    schemas: [
      LOCAL_BUSINESS,
      breadcrumbs([{ name: 'Inicio', item: '/' }, { name: 'Presupuesto' }], '/presupuesto'),
    ],
  },
  '/noticias': {
    title: 'Noticias y Casos de Éxito | ElectroPower',
    description:
      'Novedades, obras y alianzas de ElectroPower: casos de éxito industriales, mantenimiento y acuerdos que amplían nuestros servicios eléctricos en zona norte.',
    keywords:
      'electropower, noticias, casos de exito, obras electricas industriales, grupos electrógenos, grupo galán, alianza estratégica',
    schemas: [LOCAL_BUSINESS, breadcrumbs([{ name: 'Inicio', item: '/' }, { name: 'Noticias' }], '/noticias')],
  },
  '/consejos': {
    title: 'Consejos Eléctricos | ElectroPower',
    description:
      'Consejos y guías de electricidad para hogares, comercios e industrias: precios, puesta a tierra, potencia y mantenimiento, de profesionales matriculados.',
    keywords:
      'consejos electricidad, guía instalación eléctrica, puesta a tierra, costo instalación eléctrica, seguridad eléctrica hogar, electropower',
    schemas: [LOCAL_BUSINESS, breadcrumbs([{ name: 'Inicio', item: '/' }, { name: 'Consejos' }], '/consejos')],
  },
  ...SERVICIOS.reduce(
    (acc, s) => ({
      ...acc,
      [`/servicios/${s.slug}`]: {
        title: s.title,
        description: s.description,
        keywords: s.keywords,
        schemas: [
          LOCAL_BUSINESS,
          servicioSchema(s),
          breadcrumbs(
            [{ name: 'Inicio', item: '/' }, { name: 'Servicios', item: '/servicios' }, { name: s.nombre }],
            `/servicios/${s.slug}`
          ),
        ],
      },
    }),
    {}
  ),
  ...ZONAS.reduce(
    (acc, z) => ({
      ...acc,
      [`/${z.slug}`]: {
        title: z.title,
        description: z.description,
        keywords: z.keywords,
        schemas: [
          LOCAL_BUSINESS,
          zonaSchema(z),
          faqSchema(z.faq),
          breadcrumbs(
            [
              { name: 'Inicio', item: '/' },
              {
                name:
                  z.tipo === 'provincia'
                    ? `Electricista industrial en ${z.ciudad}`
                    : `Electricista en ${z.ciudad}`,
              },
            ],
            `/${z.slug}`
          ),
        ],
      },
    }),
    {}
  ),
  ...POSTS.reduce(
    (acc, p) => {
      const faq = postFaq(p);
      const esConsejo = p.tipo === 'consejo';
      return {
        ...acc,
        [`/noticias/${p.slug}`]: {
          title: p.seoTitle,
          description: p.seoDescription,
          keywords:
            p.keywords || 'electropower, grupos electrógenos, grupo galán, noticias',
          ogType: 'article',
          schemas: [
            articuloSchema(p),
            ...(faq.length ? [faqSchema(faq)] : []),
            breadcrumbs(
              [
                { name: 'Inicio', item: '/' },
                {
                  name: esConsejo ? 'Consejos' : 'Noticias',
                  item: esConsejo ? '/consejos' : '/noticias',
                },
                { name: p.titulo },
              ],
              `/noticias/${p.slug}`
            ),
          ],
        },
      };
    },
    {}
  ),
  ...VARIANTES.reduce(
    (acc, v) => ({
      ...acc,
      [`/${v.slug}`]: {
        title: v.title,
        description: v.description,
        keywords: v.keywords,
        schemas: [
          LOCAL_BUSINESS,
          servicioVarianteSchema(v),
          faqSchema(v.faq),
          breadcrumbs(
            [{ name: 'Inicio', item: '/' }, { name: v.h1 }],
            `/${v.slug}`
          ),
        ],
      },
    }),
    {}
  ),
  '/terminos': {
    title: 'Términos de Servicio y Política de Privacidad | ElectroPower',
    description: 'Términos de servicio y política de privacidad de ElectroPower.',
    keywords: 'términos y condiciones, política de privacidad, electropower',
    robots: 'noindex, follow',
    schemas: [],
  },
  '/404': {
    title: 'Página no encontrada | ElectroPower',
    description: 'La página que buscás no existe. Volvé al inicio de ElectroPower.',
    keywords: 'error 404, electropower',
    robots: 'noindex, follow',
    schemas: [],
  },
};

const escapeJsonLd = (obj) => JSON.stringify(obj).replace(/</g, '\\u003c');

const buildHeadInjections = (path, route) => {
  const url = `${SITE}${path === '/' ? '/' : path}`;
  const tags = [
    `<link rel="canonical" href="${url}" />`,
    `<meta name="robots" content="${route.robots || 'index, follow'}" />`,
    `<meta property="og:type" content="${route.ogType || 'website'}" />`,
    `<meta property="og:site_name" content="ElectroPower" />`,
    `<meta property="og:locale" content="es_AR" />`,
    `<meta property="og:title" content="${route.title}" />`,
    `<meta property="og:description" content="${route.description}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${OG_IMAGE}" />`,
    `<meta property="og:image:alt" content="${OG_IMAGE_ALT}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${route.title}" />`,
    `<meta name="twitter:description" content="${route.description}" />`,
    `<meta name="twitter:image" content="${OG_IMAGE}" />`,
    ...route.schemas.map(
      (schema) => `<script type="application/ld+json">${escapeJsonLd(schema)}</script>`
    ),
  ];

  if (path === '/') {
    const assets = readdirSync(join(DIST, 'assets'));
    const desktop = assets.find((f) => /^fondohero-.*\.webp$/.test(f));
    const mobile = assets.find((f) => /^fondoheroalt-.*\.webp$/.test(f));
    if (desktop) {
      tags.unshift(
        `<link rel="preload" as="image" href="/assets/${desktop}" media="(min-width: 969px)" fetchpriority="high" />`
      );
    }
    if (mobile) {
      tags.unshift(
        `<link rel="preload" as="image" href="/assets/${mobile}" media="(max-width: 968px)" />`
      );
    }
  }

  return `    ${tags.join('\n    ')}\n`;
};

const buildSitemap = () => {
  const today = new Date().toISOString().slice(0, 10);
  const entries = Object.entries(ROUTES)
    .filter(([, route]) => !(route.robots || '').includes('noindex'))
    .map(([path]) => {
      const loc = `${SITE}${path === '/' ? '/' : path}`;
      const changefreq = path === '/' || path === '/servicios' ? 'weekly' : 'monthly';
      const priority =
        path === '/' ? '1.0' : path === '/servicios' ? '0.9' : path.includes('/servicios/') ? '0.8' : '0.7';
      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
    });

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n\n${entries.join(
    '\n\n'
  )}\n\n</urlset>\n`;
};

const template = readFileSync(join(DIST, 'index.html'), 'utf-8');
const { render } = await import(
  pathToFileURL(join(DIST, 'server', 'entry-server.js')).href
);

for (const [path, route] of Object.entries(ROUTES)) {
  const appHtml = (await render(path)).replace(
    /<link rel="preload" as="image" href="[^"]*"\/?>/g,
    ''
  );

  let html = template.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`
  );
  html = html.replace(/<title>.*<\/title>/, `<title>${route.title}</title>`);
  html = html.replace(
    /(<meta name="description" content=")[^"]*("\s*\/>)/,
    `$1${route.description}$2`
  );
  html = html.replace(
    /(<meta name="keywords" content=").*(")/,
    `$1${route.keywords}$2`
  );
  html = html.replace('</head>', `${buildHeadInjections(path, route)}  </head>`);

  if (path === '/404') {
    writeFileSync(join(DIST, '404.html'), html);
  }

  const outPath =
    path === '/' ? join(DIST, 'index.html') : join(DIST, path.slice(1), 'index.html');
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, html);
  console.log(`Prerenderizado: ${path} -> ${outPath.replace(__dirname, '.')}`);
}

writeFileSync(join(DIST, 'sitemap.xml'), buildSitemap());
const sitemapCount = Object.entries(ROUTES).filter(
  ([, r]) => !(r.robots || '').includes('noindex')
).length;
console.log(`Sitemap generado con ${sitemapCount} URLs en dist/sitemap.xml`);

console.log('\nPrerender completado.');