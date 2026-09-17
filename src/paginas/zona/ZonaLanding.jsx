import './ZonaLanding.css';
import Navbar from '../../componentes/navbar/Navbar.jsx';
import Footer from '../../componentes/footer/Footer.jsx';
import WhatsAppButton from '../../componentes/whatsappbutton/WhatsAppButton.jsx';
import { getZona } from '../../data/zonas';
import { Link } from 'react-router-dom';
import {
  FaClipboardList,
  FaClipboardCheck,
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import { ICONOS_SERVICIO } from '../servicio/servicioAssets';
import { getWhatsAppURL } from '../../lib/analytics';

const ZONA_BADGES_DEFAULT = [
  'Urgencias 24 hs',
  'Presupuesto sin cargo',
  'Media tensión certificada',
];

const SERVICIOS_PROVINCIA = [
  {
    href: '/servicios/instalaciones-electricas',
    nombre: 'Instalaciones eléctricas industriales',
    descripcion: 'Plantas, tableros y distribuciones con normativa AEA.',
  },
  {
    href: '/servicios/media-tension',
    nombre: 'Media tensión',
    descripcion: 'Líneas 13,2 kV y 33 kV, subestaciones y mantenimiento.',
  },
  {
    href: '/servicios/transformadores',
    nombre: 'Transformadores',
    descripcion: 'Instalación, mantenimiento y pruebas de rigidez dieléctrica.',
  },
  {
    href: '/servicios/instalaciones-electricas',
    nombre: 'Tableros y comando',
    descripcion: 'Tableros de distribución y fuerza motriz para industria.',
  },
];

const SERVICIOS_ZONA = [
  {
    href: '/servicios/instalaciones-electricas',
    nombre: 'Instalaciones eléctricas',
    descripcion: 'Domiciliarias, comerciales e industriales con normativa AEA.',
  },
  {
    href: '/servicios/media-tension',
    nombre: 'Media tensión',
    descripcion: 'Líneas 13,2 kV y 33 kV, subestaciones y mantenimiento.',
  },
  {
    href: '/servicios/transformadores',
    nombre: 'Transformadores',
    descripcion: 'Instalación, mantenimiento y pruebas de rigidez dieléctrica.',
  },
  {
    href: '/servicios/climatizacion',
    nombre: 'Climatización',
    descripcion: 'Split, multisplit y refrigeración industrial.',
  },
  {
    href: '/servicios/construccion',
    nombre: 'Construcción',
    descripcion: 'Remodelaciones y obras con eléctrica integrada.',
  },
  {
    href: '/servicios/venta-materiales',
    nombre: 'Venta de materiales',
    descripcion: 'Cables, protecciones y accesorios de primeras marcas.',
  },
];

const ZonaLanding = ({ slug }) => {
  const zona = getZona(slug);

  if (!zona) return null;

  const esProvincia = zona.tipo === 'provincia';
  const titulo = esProvincia
    ? `Electricista industrial en ${zona.ciudad}`
    : `Electricista en ${zona.ciudad}`;
  const badges = zona.badges || ZONA_BADGES_DEFAULT;
  const servicios = esProvincia ? SERVICIOS_PROVINCIA : SERVICIOS_ZONA;
  const sinSufijo = ['Zona Norte', 'Capital Federal'].includes(zona.ciudad);
  const intro = `${zona.intro.replace(/[.\s]+$/, '')}.`;
  const whatsappURL = getWhatsAppURL(
    `Hola ElectroPower, necesito un electricista en ${zona.ciudad}.`
  );
  const iconoServicio = (href) =>
    ICONOS_SERVICIO[href.split('/').pop()] ||
    ICONOS_SERVICIO['instalaciones-electricas'];

  return (
    <>
      <Navbar />

      <main className="zona">
        <section className="zona-hero">
          <div className="zona-hero-container">
            <nav className="zona-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Inicio</Link>
              <span className="breadcrumb-sep">/</span>
              <span className="breadcrumb-current">{titulo}</span>
            </nav>
            <span className="zona-badge-pill">
              {esProvincia ? 'OBRAS EN PROVINCIA' : 'ZONA NORTE'}
            </span>
            <h1 className="zona-hero-title">
              {titulo}
              {!esProvincia && !sinSufijo && ' y alrededores'}
            </h1>
            <div className="zona-divider">
              <span></span>
            </div>
            <p className="zona-hero-text">{intro}</p>
            <div className="zona-hero-badges">
              {badges.map((badge) => (
                <span className="zona-badge" key={badge}>
                  ✓ {badge}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="zona-areas">
          <div className="zona-areas-container">
            <span className="zona-section-badge">COBERTURA</span>
            <h2>Cobertura en {zona.ciudad}</h2>
            <ul className="zona-areas-grid">
              {zona.areas.map((area, idx) => (
                <li key={idx}>
                  <FaMapMarkerAlt className="zona-area-pin" aria-hidden="true" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
            <div className="zona-puntos-card">
              <span className="zona-puntos-icon">
                <FaClipboardCheck aria-hidden="true" />
              </span>
              <p>{zona.puntos}</p>
            </div>
          </div>
        </section>

        <section className="zona-servicios">
          <div className="zona-servicios-container">
            <span className="zona-section-badge">SERVICIOS</span>
            <h2>Servicios disponibles en {zona.ciudad}</h2>
            <div className="zona-servicios-grid">
              {servicios.map((servicio) => (
                <Link
                  className="zona-servicio-card"
                  to={servicio.href}
                  key={servicio.nombre}
                >
                  <span className="zona-servicio-icon">
                    {iconoServicio(servicio.href)}
                  </span>
                  <h3>{servicio.nombre}</h3>
                  <p>{servicio.descripcion}</p>
                  <span className="zona-servicio-link">Ver servicio →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="zona-faq">
          <div className="zona-faq-container">
            <span className="zona-section-badge">FAQ</span>
            <h2>Preguntas frecuentes en {zona.ciudad}</h2>
            <div className="zona-faq-list">
              {zona.faq.map((item, idx) => (
                <details className="zona-faq-item" key={idx}>
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="zona-cta">
          <div className="zona-cta-container">
            <h2>¿Necesitás un electricista{esProvincia ? ' industrial' : ''} en {zona.ciudad}?</h2>
            <div className="zona-cta-buttons">
              <Link to="/presupuesto" className="btn-zona-presupuesto">
                <FaClipboardList /> Solicitar mi presupuesto
              </Link>
              <a
                className="btn-zona-whatsapp"
                href={whatsappURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp /> Consultar por WhatsApp
              </a>
              <a className="btn-zona-telefono" href="tel:+5491163521258">
                <FaPhoneAlt /> Llamar ahora
              </a>
            </div>
          </div>
        </section>
      </main>

      <WhatsAppButton />
      <Footer />
    </>
  );
};

export default ZonaLanding;