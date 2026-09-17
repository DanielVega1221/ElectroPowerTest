import { useEffect, useRef } from 'react';
import './Contact.css';
import { CONFIG } from '../../config';
import { trackEvent, getWhatsAppURL } from '../../lib/analytics';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaClipboardList } from 'react-icons/fa';

const isPrerendered =
  typeof document !== 'undefined' &&
  document.getElementById('root')?.childElementCount > 0;

const Contact = () => {
  const sectionRef = useRef(null);
  const ctaRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    if (isPrerendered) return;

    let ctx;
    let cancelled = false;

    Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(
      ([{ gsap }, { ScrollTrigger }]) => {
        if (cancelled) return;

        gsap.registerPlugin(ScrollTrigger);

        ctx = gsap.context(() => {
          gsap.from(ctaRef.current, {
            x: -50,
            opacity: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%',
            }
          });

          gsap.from(infoRef.current, {
            x: 50,
            opacity: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%',
            }
          });
        }, sectionRef);
      }
    );

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  const handleWhatsAppClick = () => {
    trackEvent('whatsapp_click', { source: 'seccion_contacto' });
  };

  return (
    <section className="contact" id="contact" ref={sectionRef}>
      <div className="contact-container">
        <div className="contact-header">
          <span className="contact-badge">
            <svg
              className="badge-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            Contactanos
          </span>

          <h2 className="contact-title">Hablemos de tu proyecto</h2>

          <div className="contact-divider"></div>

          <p className="contact-subtitle">
            ¿Tenés un proyecto en mente o necesitás asistencia eléctrica? <br />
            Solicitá tu presupuesto sin cargo y te contactamos en menos de 24 hs.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-cta" ref={ctaRef}>
            <h3>Solicitá tu presupuesto sin cargo</h3>
            <p>
              Contanos qué necesitás, en qué zona estás y cuándo lo querés. Tu
              consulta queda armada para enviar por WhatsApp o email en un
              toque, y te pasamos el alcance y el costo de tu proyecto.
            </p>
            <Link to="/presupuesto" className="contact-cta-btn" onClick={() => trackEvent('presupuesto_click', { source: 'seccion_contacto' })}>
              <FaClipboardList /> Ir al formulario de presupuesto
            </Link>
            <a
              href={getWhatsAppURL('Hola! Me gustaría solicitar información sobre los servicios de ElectroPower.')}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-cta-whatsapp"
              onClick={handleWhatsAppClick}
            >
              <FaWhatsapp /> WhatsApp directo
            </a>
          </div>

          <div className="contact-info" ref={infoRef}>
            <div className="info-box">
              <div className="info-item">
                <div className="info-icon-wrapper">
                  <svg
                    className="info-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="info-details">
                  <h4>WhatsApp / Teléfono</h4>
                  <p>+54 9 11 6352-1258</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-wrapper">
                  <svg
                    className="info-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="info-details">
                  <h4>Email</h4>
                  <p>{CONFIG.CONTACT_EMAIL}</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-wrapper">
                  <svg
                    className="info-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="info-details">
                  <h4>Ubicación</h4>
                  <p>Hipólito Yrigoyen 450, Matheu, Buenos Aires</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-wrapper">
                  <svg
                    className="info-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div className="info-details">
                  <h4>Horario de atención</h4>
                  <p>
                    Lun - Vie: 8:00 - 18:00 hs
                    <br />
                    Sáb: 9:00 - 13:00 hs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;