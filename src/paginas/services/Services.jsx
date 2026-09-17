import "./Services.css";
import rayito from "../../assets/rayito.png";
import { Link } from "react-router-dom";
import Navbar from "../../componentes/navbar/Navbar";
import Footer from "../../componentes/footer/Footer";
import WhatsAppButton from "../../componentes/whatsappbutton/WhatsAppButton";
import { SERVICIOS } from "../../data/servicios";
import { ICONOS_SERVICIO, BADGE_SERVICIO } from "../servicio/servicioAssets";
import { IMAGENES_SERVICIO } from "./serviceImagenes";
import { CONFIG } from "../../config";
import { getWhatsAppURL } from "../../lib/analytics";
import { FaWhatsapp, FaClipboardList } from "react-icons/fa";

const Services = () => {
  const openWhatsApp = () => {
    window.open(
      getWhatsAppURL(
        "Hola! Me gustaría solicitar información sobre los servicios de ElectroPower."
      ),
      "_blank",
      "noopener,noreferrer"
    );
  };

  const consultarWhatsApp = (serviceTitle, serviceDescription) => {
    const msg = `Hola! Quisiera saber más información sobre ${serviceTitle}. ${serviceDescription}`;
    window.open(getWhatsAppURL(msg), "_blank", "noopener,noreferrer");
  };

  return (
    <section className="services" id="services">
      <div className="services-container">
        <div className="services-header">
          <span className="services-badge">Servicios Profesionales</span>
          <h1 className="services-title">Nuestros Servicios Especializados</h1>
          <div className="services-divider"></div>
          <p className="services-subtitle">
            En <strong>ElectroPower</strong> ofrecemos soluciones eléctricas
            completas para proyectos{" "}
            <strong>residenciales, comerciales e industriales.</strong>
            Con experiencia desde 2019, nuestro equipo de profesionales
            certificados garantiza calidad, seguridad y eficiencia en cada
            trabajo.
          </p>
          <p className="services-subtitle-secondary">
            Tocá cada servicio para ver la información completa de alcance,
            proceso de trabajo y a quién está dirigido.
          </p>
        </div>

        <div className="services-grid">
          {SERVICIOS.map((service, index) => (
            <Link
              key={service.slug}
              to={`/servicios/${service.slug}`}
              className="service-card"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="service-cover">
                <img
                  src={IMAGENES_SERVICIO[service.slug].src}
                  alt={IMAGENES_SERVICIO[service.slug].alt}
                  loading="lazy"
                  width="800"
                  height="533"
                />
              </div>
              <div className="service-badge">{BADGE_SERVICIO[service.slug]}</div>
              <div className="service-icon">{ICONOS_SERVICIO[service.slug]}</div>
              <h2 className="service-title">{service.nombre}</h2>
              <p className="service-description">{service.description}</p>
              <ul className="service-list">
                {service.items.slice(0, 5).map((item, idx) => (
                  <li key={idx}>
                    <img src={rayito} alt="" className="item-rayito" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="service-card-actions">
                <span className="service-link-detalle">
                  Ver información completa →
                </span>
                <button
                  className="btn-service-whatsapp"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    consultarWhatsApp(service.nombre, service.description);
                  }}
                >
                  <FaWhatsapp /> Consultar por WhatsApp
                </button>
              </div>
            </Link>
          ))}
        </div>

        <div className="services-footer-dos">
          <div className="services-cta-dos urgency-banner">
            <h3 className="cta-title-dos">
              ATENDEMOS URGENCIAS ELÉCTRICAS LAS 24 HORAS
            </h3>
          </div>
        </div>

        <div className="services-container">
          <div className="services-header">
            <p className="services-subtitle">
              <strong>
                Los trabajos que realizamos incluyen de ser necesario:
              </strong>
              <u className="listado-servicios">
                <li> Asesoramiento en cualquier Proyecto de Construcción</li>
                <li>Elaboración de Presupuestos</li>
                <li>
                  Construcción y Remodelación de Obras Civiles, Comerciales e
                  Industriales
                </li>
                <li>
                  Abarcamos todo lo que dicho Proceso pueda incluir.
                  (Albañilería, Plomería, Gasista).
                </li>
                <li>Construcciones en Seco (Durlock)</li>
                <li>
                  Realización de sistema de Aire Acondicionado Centralizado
                  (Sistema con conductos Climaver)
                </li>
              </u>
            </p>
          </div>
        </div>

        <div className="services-footer">
          <div className="services-cta-tres">
            <h3 className="cta-title-tres">
              ¿Listo para comenzar tu proyecto con nosotros?
            </h3>
            <p className="cta-description-tres">
              Contanos tu caso y te orientamos sin cargo. Te ayudamos a
              encontrar la mejor solución para tus necesidades.
            </p>
            <div className="cta-buttons-tres">
              <Link to="/presupuesto" className="btn-cta-primary-tres">
                <FaClipboardList /> Solicitar mi presupuesto
              </Link>
              <button className="btn-cta-secondary-tres" onClick={openWhatsApp}>
                <FaWhatsapp /> Consultar por WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesPage = () => {
  return (
    <>
      <Navbar />
      <Services />
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default ServicesPage;