import './ServicioDetalle.css';
import Navbar from '../../componentes/navbar/Navbar.jsx';
import Footer from '../../componentes/footer/Footer.jsx';
import WhatsAppButton from '../../componentes/whatsappbutton/WhatsAppButton.jsx';
import { getServicio, SERVICIOS } from '../../data/servicios';
import { ZONAS } from '../../data/zonas';
import { ICONOS_SERVICIO, BADGE_SERVICIO } from './servicioAssets';
import { Link } from 'react-router-dom';
import { FaClipboardList, FaPhoneAlt } from 'react-icons/fa';

const ServicioDetalle = ({ slug }) => {
  const servicio = getServicio(slug);

  if (!servicio) return null;

  const relacionados = (servicio.relacionados || [])
    .map((s) => SERVICIOS.find((x) => x.slug === s))
    .filter(Boolean);

  return (
    <>
      <Navbar />

      <main className="servicio">
        <section className="servicio-hero">
          <div className="servicio-hero-container">
            <nav className="servicio-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Inicio</Link>
              <span className="breadcrumb-sep">/</span>
              <Link to="/servicios">Servicios</Link>
              <span className="breadcrumb-sep">/</span>
              <span className="breadcrumb-current">{servicio.nombre}</span>
            </nav>
            <span className="servicio-badge">
              {BADGE_SERVICIO[slug] || 'Servicio'}
            </span>
            <h1 className="servicio-hero-title">{servicio.nombre}</h1>
            <div className="servicio-divider">
              <span></span>
            </div>
            <p className="servicio-hero-text">{servicio.intro}</p>
          </div>
        </section>

        <section className="servicio-contenido">
          <div className="servicio-contenido-container">
            <span className="servicio-section-badge">EL SERVICIO</span>
            <div className="servicio-contenido-grid">
              <div className="servicio-lista">
                <h2>¿Qué incluye nuestra área de {servicio.nombre.toLowerCase()}?</h2>
                <ul>
                  {servicio.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="servicio-beneficiarios">
                <h2>¿Para quién es este servicio?</h2>
                <p>{servicio.beneficiarios}</p>
              </div>
            </div>
          </div>
        </section>

        {servicio.proceso && (
          <section className="servicio-proceso">
            <div className="servicio-proceso-container">
              <span className="servicio-section-badge">PROCESO</span>
              <h2>¿Cómo trabajamos este servicio?</h2>
              <p className="servicio-proceso-texto">
                Un proceso ordenado para que sepas qué va a pasar y cuándo.
              </p>
              <div className="servicio-pasos">
                {servicio.proceso.map((paso, idx) => (
                  <div className="servicio-paso" key={idx}>
                    <span className="servicio-paso-numero">{idx + 1}</span>
                    <h3>{paso.titulo}</h3>
                    <p>{paso.texto}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {(servicio.incluye || servicio.noIncluye) && (
          <section className="servicio-alcance">
            <div className="servicio-alcance-container">
              <span className="servicio-section-badge">ALCANCE</span>
              <h2>Alcance del servicio</h2>
              <div className="servicio-alcance-columns">
                {servicio.incluye && (
                  <div className="servicio-alcance-col servicio-incluye">
                    <h3>Lo que incluye</h3>
                    <ul>
                      {servicio.incluye.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {servicio.noIncluye && (
                  <div className="servicio-alcance-col servicio-no-incluye">
                    <h3>Lo que no incluye</h3>
                    <ul>
                      {servicio.noIncluye.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {servicio.faq && (
          <section className="servicio-faq">
            <div className="servicio-faq-container">
              <span className="servicio-section-badge">FAQ</span>
              <h2>Preguntas frecuentes</h2>
              <div className="servicio-faq-list">
                {servicio.faq.map((item, idx) => (
                  <details className="servicio-faq-item" key={idx}>
                    <summary>{item.q}</summary>
                    <p>{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        {relacionados.length > 0 && (
          <section className="servicio-relacionados">
            <div className="servicio-relacionados-container">
              <span className="servicio-section-badge">RELACIONADOS</span>
              <h2>Servicios relacionados</h2>
              <div className="servicio-relacionados-grid">
                {relacionados.map((rel) => (
                  <Link
                    to={`/servicios/${rel.slug}`}
                    className="servicio-relacionado-card"
                    key={rel.slug}
                  >
                    <div className="servicio-relacionado-icon">
                      {ICONOS_SERVICIO[rel.slug]}
                    </div>
                    <span className="servicio-relacionado-badge">
                      {BADGE_SERVICIO[rel.slug]}
                    </span>
                    <h3>{rel.nombre}</h3>
                    <p>{rel.description}</p>
                    <span className="servicio-relacionado-link">
                      Ver servicio →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="servicio-zonas">
          <div className="servicio-zonas-container">
            <span className="servicio-section-badge">COBERTURA</span>
            <h2>Zonas donde trabajamos</h2>
            <p className="servicio-zonas-text">
              Realizamos {servicio.nombre.toLowerCase()} en las localidades del
              corredor norte de Buenos Aires y, para obras industriales, con
              desplazamiento a las provincias limítrofes. Elegí tu zona para
              más información:
            </p>
            <h3 className="servicio-zonas-subtitle">Zona norte de Buenos Aires</h3>
            <div className="servicio-zonas-grid">
              {ZONAS.filter((z) => z.tipo !== 'provincia').map((z) => (
                <Link
                  to={`/${z.slug}`}
                  className="servicio-zona-link"
                  key={z.slug}
                >
                  {z.ciudad}
                </Link>
              ))}
            </div>
            <h3 className="servicio-zonas-subtitle">
              Obras industriales en provincias limítrofes
            </h3>
            <div className="servicio-zonas-grid">
              {ZONAS.filter((z) => z.tipo === 'provincia').map((z) => (
                <Link
                  to={`/${z.slug}`}
                  className="servicio-zona-link"
                  key={z.slug}
                >
                  {z.ciudad}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="servicio-cta">
          <div className="servicio-cta-container">
            <h2>{servicio.banner}</h2>
            <div className="servicio-cta-buttons">
              <Link to="/presupuesto" className="btn-servicio-whatsapp">
                <FaClipboardList /> Solicitar mi presupuesto
              </Link>
              <a className="btn-servicio-telefono" href="tel:+5491163521258">
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

export default ServicioDetalle;