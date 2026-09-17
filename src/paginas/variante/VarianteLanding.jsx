import '../zona/ZonaLanding.css';
import Navbar from '../../componentes/navbar/Navbar.jsx';
import Footer from '../../componentes/footer/Footer.jsx';
import WhatsAppButton from '../../componentes/whatsappbutton/WhatsAppButton.jsx';
import { getVariante } from '../../data/variantes';
import { Link } from 'react-router-dom';
import {
  FaClipboardList,
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import { ICONOS_SERVICIO } from '../servicio/servicioAssets';
import { getWhatsAppURL } from '../../lib/analytics';

const VarianteLanding = ({ slug }) => {
  const variante = getVariante(slug);

  if (!variante) return null;

  const whatsappURL = getWhatsAppURL(
    `Hola ElectroPower, quería consultar por: ${variante.h1}.`
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
              <span className="breadcrumb-current">{variante.h1}</span>
            </nav>
            <span className="zona-badge-pill">{variante.badge}</span>
            <h1 className="zona-hero-title">{variante.h1}</h1>
            <div className="zona-divider">
              <span></span>
            </div>
            <p className="zona-hero-text">{variante.intro}</p>
            <div className="zona-hero-badges">
              {variante.bullets.map((badge) => (
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
            <h2 className="zona-variante-h2">Zonas que cubrimos</h2>
            <p className="zona-variante-areas-text">
              Atendemos toda la zona norte de Buenos Aires. Tocá tu localidad
              para ver los servicios disponibles:
            </p>
            <ul className="zona-areas-grid">
              {variante.areas.map((area, idx) => (
                <li key={idx}>
                  <FaMapMarkerAlt className="zona-area-pin" aria-hidden="true" />
                  <Link to={`/${area.slug}`}>{area.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="zona-servicios">
          <div className="zona-servicios-container">
            <span className="zona-section-badge">SERVICIOS</span>
            <h2 className="zona-variante-h2">Cómo trabajamos</h2>
            <div className="zona-servicios-grid">
              {variante.servicios.map((servicio) => (
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
            <h2 className="zona-variante-h2">Preguntas frecuentes</h2>
            <div className="zona-faq-list">
              {variante.faq.map((item, idx) => (
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
            <h2>{variante.cta}</h2>
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

export default VarianteLanding;