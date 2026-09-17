import './Industria.css';
import Navbar from '../../componentes/navbar/Navbar.jsx';
import Footer from '../../componentes/footer/Footer.jsx';
import WhatsAppButton from '../../componentes/whatsappbutton/WhatsAppButton.jsx';
import { Link } from 'react-router-dom';
import {
  FaCogs,
  FaSnowflake,
  FaFlask,
  FaBoxes,
  FaPrint,
  FaCity,
  FaShieldAlt,
  FaBolt,
  FaTruck,
  FaPlug,
  FaClipboardList,
  FaWhatsapp,
  FaPhoneAlt,
} from 'react-icons/fa';
import { CASOS } from '../../data/casos';
import { getWhatsAppURL, trackEvent } from '../../lib/analytics';

const RUBROS = [
  {
    icon: <FaCogs />,
    titulo: 'Metalmecánica',
    texto:
      'Tableros de fuerza motriz, alimentación de CNC y soldadoras, y corrección de factor de potencia para líneas exigentes.',
  },
  {
    icon: <FaSnowflake />,
    titulo: 'Alimentos y frigoríficos',
    texto:
      'Alimentación de cámaras frigoríficas, sistemas de frío y equipos de producción con continuidad crítica de frío.',
  },
  {
    icon: <FaFlask />,
    titulo: 'Plásticos e inyección',
    texto:
      'Instalación de inyectoras y extrusoras, compensación de picos de arranque y estabilidad de tensión en planta.',
  },
  {
    icon: <FaBoxes />,
    titulo: 'Logística y depósitos',
    texto:
      'Montacargas, bandas, iluminación de nave y respaldo ante cortes para operaciones que no pueden frenar.',
  },
  {
    icon: <FaPrint />,
    titulo: 'Gráfica y packaging',
    texto:
      'Instalaciones de imprentas, troqueladoras y líneas de packaging con demanda de potencia media y media tensión.',
  },
  {
    icon: <FaCity />,
    titulo: 'Countries y barrios cerrados',
    texto:
      'Redes eléctricas y alumbrado para barrios cerrados y countries, con criterio de expansión y estética.',
  },
];

const ESTRUCTURA = [
  {
    icon: <FaShieldAlt />,
    titulo: 'Materiales y documentación',
    texto:
      'Materiales certificados IRAM/AEA, planos, mediciones y protocolos listos para auditorías, seguros y habilitaciones.',
  },
  {
    icon: <FaBolt />,
    titulo: 'Personal certificado en MT',
    texto:
      'Operadores habilitados para media tensión que trabajan sobre líneas de 13,2 kV y 33 kV con procedimientos estrictos.',
  },
  {
    icon: <FaTruck />,
    titulo: 'Flota propia',
    texto:
      'Equipos y vehículos propios, con el utillaje necesario para responder rápido en obras y urgencias en planta.',
  },
  {
    icon: <FaPlug />,
    titulo: 'Coordinación de cortes',
    texto:
      'Gestionamos operativos de corte con la distribuidora para minimizar el impacto en tu producción.',
  },
];

const FAQ_INDUSTRIA = [
  {
    q: '¿Trabajan dentro de parques industriales?',
    a: 'Sí. Ejecutamos obras en el Parque Industrial OKS/CIPO de Garín, la Plaza Industrial Escobar y otros parques de la zona, cumpliendo los requisitos administrativos que se exigen en cada predio.',
  },
  {
    q: '¿Pueden responder ante un corte o falla en planta?',
    a: 'Contamos con guardia para urgencias. Ante una falla o corte enviamos personal y equipamiento para restablecer el servicio lo antes posible.',
  },
  {
    q: '¿Qué documentación entregan al cierre de la obra?',
    a: 'Planos, protocolos de medición, certificados de puesta a tierra y un informe técnico del trabajo, listos para presentar ante gerencia, auditorías y compañías de seguros.',
  },
  {
    q: '¿Hacen mantenimiento preventivo anual?',
    a: 'Sí, diseñamos planes a medida: termografía, torque de conexiones, verificación de protecciones, análisis de puesta a tierra y mediciones, con informes periódicos.',
  },
];

const CASOS_INDUSTRIALES = CASOS.filter((c) => c.sector === 'Industrial');

const Industria = () => {
  const whatsappMessage = (contexto) =>
    `Hola ElectroPower, les escribo por ${contexto} para una industria/empresa. Que alguien me contacte.`;

  const handleWhatsApp = (contexto) => {
    trackEvent('Contact', 'whatsapp', contexto);
    window.open(
      getWhatsAppURL(whatsappMessage(contexto)),
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <>
      <Navbar />

      <main className="industria">
        <section className="industria-hero">
          <div className="industria-container">
            <span className="industria-badge">Soluciones B2B</span>
            <h1 className="industria-hero-title">
              Energía confiable para plantas que no pueden detenerse
            </h1>
            <div className="industria-divider">
              <span></span>
            </div>
            <p className="industria-hero-text">
              Instalaciones eléctricas, media tensión y mantenimiento programado
              para plantas industriales, parques industriales y grandes comercios
              del corredor norte de Buenos Aires y, con desplazamiento coordinado,
              en las provincias limítrofes. Un solo contratista eléctrico
              responsable de tu operación continua.
            </p>
            <div className="industria-hero-badges">
              <span className="industria-badge-item">✓ Media tensión 13,2 kV y 33 kV</span>
              <span className="industria-badge-item">✓ Mantenimiento programado</span>
              <span className="industria-badge-item">✓ Respuesta ante urgencias</span>
              <span className="industria-badge-item">✓ Documentación y certificaciones</span>
            </div>
          </div>
        </section>

        <section className="industria-rubros">
          <div className="industria-container">
            <span className="industria-section-badge">SECTORES</span>
            <h2>Rubros que atendemos</h2>
            <p className="industria-section-texto">
              Trabajamos con industria pesada, plantas de proceso y operaciones
              logísticas, adaptando cada instalación a sus cargas y criticidad.
            </p>
            <div className="industria-rubros-grid">
              {RUBROS.map((rubro) => (
                <div className="industria-rubro-card" key={rubro.titulo}>
                  <span className="industria-rubro-emoji">{rubro.icon}</span>
                  <h3>{rubro.titulo}</h3>
                  <p>{rubro.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="industria-estructura">
          <div className="industria-container">
            <span className="industria-section-badge">POR QUÉ ELECTROPOWER</span>
            <h2>Un contratista con estructura, no un electricista suelto</h2>
            <p className="industria-section-texto">
              Cuando en tu planta se detiene la producción, las consecuencias se
              multiplican. Operamos como empresa contratista con los recursos y
              respaldos que tu operación necesita.
            </p>
            <div className="industria-estructura-grid">
              {ESTRUCTURA.map((item) => (
                <div className="industria-estructura-card" key={item.titulo}>
                  <span className="industria-estructura-emoji">{item.icon}</span>
                  <h3>{item.titulo}</h3>
                  <p>{item.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {CASOS_INDUSTRIALES.length > 0 && (
          <section className="industria-casos">
            <div className="industria-container">
              <span className="industria-section-badge">RESULTADOS</span>
              <h2>Casos reales en industria</h2>
              <div className="industria-casos-grid">
                {CASOS_INDUSTRIALES.map((caso) => (
                  <div className="industria-caso-card" key={caso.id}>
                    <div className="industria-caso-head">
                      <h3>{caso.cliente}</h3>
                      <span className="industria-caso-zona">
                        {caso.zona} · {caso.anio}
                      </span>
                    </div>
                    <h4>{caso.titulo}</h4>
                    <p>{caso.descripcion}</p>
                    <div className="industria-caso-servicios">
                      {caso.servicios.map((s) => (
                        <span key={s}>{s}</span>
                      ))}
                    </div>
                    <div className="industria-caso-resultado">
                      <strong>Resultado:</strong> {caso.resultado}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="industria-trabajamos">
          <div className="industria-container">
            <h2>¿Cómo trabajamos con industrias?</h2>
            <div className="industria-pasos">
              <div className="industria-paso">
                <span className="paso-numero">1</span>
                <h3>Relevamiento y diagnóstico</h3>
                <p>Visitamos tu planta, medimos la carga y detectamos riesgos.</p>
              </div>
              <div className="industria-paso">
                <span className="paso-numero">2</span>
                <h3>Propuesta técnica y presupuesto</h3>
                <p>Documentamos el alcance, los plazos y el costo sin sorpresas.</p>
              </div>
              <div className="industria-paso">
                <span className="paso-numero">3</span>
                <h3>Ejecución y puesta en marcha</h3>
                <p>Obra coordinada para minimizar el corte de operación.</p>
              </div>
              <div className="industria-paso">
                <span className="paso-numero">4</span>
                <h3>Mantenimiento y control</h3>
                <p>Plan preventivo continuo con informes y certificaciones.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="industria-faq">
          <div className="industria-container">
            <h2>Preguntas frecuentes de industria</h2>
            <div className="industria-faq-list">
              {FAQ_INDUSTRIA.map((item) => (
                <details className="industria-faq-item" key={item.q}>
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="industria-cta">
          <div className="industria-cta-container">
            <h2>Conversemos sobre la energía de tu planta</h2>
            <p>
              Dejanos el detalle de tu proyecto o situación y un responsable
              técnico te contacta para coordinar un relevamiento sin cargo.
            </p>
            <div className="industria-cta-buttons">
              <Link to="/presupuesto" className="btn-industria-presupuesto">
                <FaClipboardList /> Solicitar mi presupuesto
              </Link>
              <button
                className="btn-industria-whatsapp"
                onClick={() => handleWhatsApp('industria')}
              >
                <FaWhatsapp /> Contactar por WhatsApp
              </button>
              <a className="btn-industria-telefono" href="tel:+5491163521258">
                <FaPhoneAlt /> +54 9 11 6352-1258
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

export default Industria;