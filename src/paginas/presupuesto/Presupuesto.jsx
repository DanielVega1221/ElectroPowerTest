import { useState } from 'react';
import './Presupuesto.css';
import Navbar from '../../componentes/navbar/Navbar.jsx';
import Footer from '../../componentes/footer/Footer.jsx';
import WhatsAppButton from '../../componentes/whatsappbutton/WhatsAppButton.jsx';
import { ZONAS } from '../../data/zonas';
import { SERVICIOS } from '../../data/servicios';
import { CONFIG } from '../../config';
import { trackEvent, getWhatsAppURL } from '../../lib/analytics';
import { FaWhatsapp, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const TOTAL_STEPS = 5;

const Presupuesto = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({
    tipo: '',
    zona: '',
    trabajo: '',
    plazo: '',
    nombre: '',
    telefono: '',
    email: '',
    descripcion: '',
  });
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState('idle');

  const zonas = ZONAS.map((z) => z.ciudad).filter(
    (c) => c !== 'Zona Norte' && c !== 'Escobar'
  );
  const opcionesZona = ['Escobar', 'Zona Norte', ...zonas, 'Otra'];

  const tipos = ['Residencial', 'Comercial', 'Industrial', 'Urgencia eléctrica'];
  const trabajos = [...SERVICIOS.map((s) => s.nombre), 'Otro / No sé exactamente'];
  const plazos = ['Urgente (hoy)', 'Esta semana', 'Próximas 2 semanas', 'Planificado'];

  const setAnswer = (field, value) => {
    setAnswers((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validateContact = () => {
    const next = {};
    if (!answers.nombre.trim()) next.nombre = 'Ingresá tu nombre.';
    if (!answers.telefono.trim()) next.telefono = 'Ingresá tu teléfono.';
    if (!answers.email.trim()) {
      next.email = 'Ingresá tu email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(answers.email.trim())) {
      next.email = 'Ingresá un email válido.';
    }
    return next;
  };

  const nextStep = () => {
    if (step === 4) {
      const next = validateContact();
      setErrors(next);
      if (Object.keys(next).length > 0) return;
    }
    trackEvent('presupuesto_step', { paso: String(step + 1) });
    setStep((s) => Math.min(s + 1, TOTAL_STEPS - 1));
  };

  const prevStep = () => {
    setStep((s) => Math.max(s - 1, 0));
  };

  const buildMessage = () => {
    return [
      'Hola! Quiero pedir un presupuesto desde el sitio web de ElectroPower.',
      `• Tipo de proyecto: ${answers.tipo}`,
      `• Zona: ${answers.zona}`,
      `• Trabajo: ${answers.trabajo}`,
      `• Plazo: ${answers.plazo}`,
      answers.descripcion.trim()
        ? `• Contexto: ${answers.descripcion.trim()}`
        : null,
      `• Nombre: ${answers.nombre}`,
      `• Teléfono: ${answers.telefono}`,
      `• Email: ${answers.email}`,
    ]
      .filter(Boolean)
      .join('\n');
  };

  const enviarWhatsApp = () => {
    const next = validateContact();
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    window.open(getWhatsAppURL(buildMessage()), '_blank', 'noopener,noreferrer');
    trackEvent('presupuesto_submit', { metodo: 'whatsapp', tipo: answers.tipo });
    setSubmitStatus('whatsapp');
  };

  const enviarEmail = async () => {
    const next = validateContact();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSubmitStatus('sending');
    try {
      const payload = {
        nombre: answers.nombre,
        tipo_proyecto: answers.tipo,
        zona: answers.zona,
        trabajo: answers.trabajo,
        plazo: answers.plazo,
        telefono: answers.telefono,
        email: answers.email,
        descripcion: answers.descripcion,
        _subject: `Presupuesto web de ${answers.nombre} - ${answers.tipo} en ${answers.zona}`,
        _captcha: 'false',
      };
      const response = await fetch(
        `https://formsubmit.co/ajax/${CONFIG.CONTACT_EMAIL}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(payload),
        }
      );
      const data = await response.json();
      if (response.ok && data.success !== 'false') {
        trackEvent('presupuesto_submit', { metodo: 'email', tipo: answers.tipo });
        setSubmitStatus('email-success');
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    }
  };

  const resetQuiz = () => {
    setAnswers({
      tipo: '',
      zona: '',
      trabajo: '',
      plazo: '',
      nombre: '',
      telefono: '',
      email: '',
      descripcion: '',
    });
    setErrors({});
    setSubmitStatus('idle');
    setStep(0);
  };

  const opcionesPorPaso = [tipos, opcionesZona, trabajos, plazos];
  const preguntas = [
    '¿Qué necesitás?',
    '¿En qué zona?',
    '¿Qué tipo de trabajo?',
    '¿Cuándo lo necesitás?',
  ];
  const camposContacto = [
    { field: 'nombre', label: 'Nombre *', type: 'text', placeholder: 'Tu nombre' },
    { field: 'telefono', label: 'Teléfono *', type: 'tel', placeholder: '+54 9 11 XXXX-XXXX' },
    { field: 'email', label: 'Email *', type: 'email', placeholder: 'tu@email.com' },
  ];

  return (
    <>
      <Navbar />

      <main className="presupuesto">
        <section className="presupuesto-hero">
          <div className="presupuesto-hero-container">
            <span className="presupuesto-badge">Presupuesto sin cargo</span>
            <h1 className="presupuesto-hero-title">Solicitá tu presupuesto</h1>
            <div className="presupuesto-divider">
              <span></span>
            </div>
            <p className="presupuesto-hero-text">
              Contanos qué necesitás, en qué zona estás y cuándo lo querés, y
              tu consulta queda armada para enviar por WhatsApp o email en un
              toque. Te pasamos el alcance y el costo: para obras con
              relevamiento coordinamos una visita y ahí sí te cerramos el
              número definitivo.
            </p>
          </div>
        </section>

        <section className="presupuesto-wizard">
          <div className="presupuesto-wizard-container">
            <div className="presupuesto-progress" aria-hidden="true">
              <div
                className="presupuesto-progress-bar"
                style={{ width: `${((step + 1) / TOTAL_STEPS) * 100}%` }}
              ></div>
            </div>
            <div className="presupuesto-progress-label">
              Paso {step + 1} de {TOTAL_STEPS}
            </div>

            {submitStatus === 'whatsapp' || submitStatus === 'email-success' ? (
              <div className="presupuesto-exito" role="status">
                <h2>¡Listo!</h2>
                <p>
                  {submitStatus === 'whatsapp'
                    ? 'Se abrió WhatsApp con tu consulta armada. Enviala para que la recibamos.'
                    : 'Recibimos tu consulta. Te vamos a contactar para avanzar.'}
                </p>
                <button className="btn-presupuesto-repetir" onClick={resetQuiz}>
                  Hacer otra consulta
                </button>
              </div>
            ) : submitStatus === 'error' ? (
              <div className="presupuesto-error" role="alert">
                <h2>No pudimos enviar tu consulta</h2>
                <p>
                  Probá de nuevo o escribinos directo a nuestro WhatsApp.
                </p>
                <div className="presupuesto-exito-buttons">
                  <button className="btn-presupuesto-whatsapp" onClick={enviarWhatsApp}>
                    <FaWhatsapp /> Reintentar por WhatsApp
                  </button>
                  <button className="btn-presupuesto-repetir" onClick={resetQuiz}>
                    Empezar de nuevo
                  </button>
                </div>
              </div>
            ) : (
              <>
                {step < 4 && (
                  <div className="presupuesto-pregunta">
                    <span className="presupuesto-categoria">
                      {['Proyecto', 'Ubicación', 'Servicio', 'Plazos'][step]}
                    </span>
                    <h2>{preguntas[step]}</h2>
                    <div className="presupuesto-opciones">
                      {opcionesPorPaso[step].map((opcion) => (
                        <button
                          key={opcion}
                          type="button"
                          className={`presupuesto-opcion ${
                            answers[
                              ['tipo', 'zona', 'trabajo', 'plazo'][step]
                            ] === opcion
                              ? 'selected'
                              : ''
                          }`}
                          onClick={() => setAnswer(['tipo', 'zona', 'trabajo', 'plazo'][step], opcion)}
                        >
                          {opcion}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div className="presupuesto-pregunta">
                    <span className="presupuesto-categoria">Contacto</span>
                    <h2>Tus datos para recibir la propuesta</h2>
                    <div className="presupuesto-resumen">
                      <strong>Resumen:</strong> {answers.tipo} · {answers.zona} ·{' '}
                      {answers.trabajo} · {answers.plazo}
                    </div>
                    <div className="presupuesto-form">
                      {camposContacto.map(({ field, label, type, placeholder }) => (
                        <div className="presupuesto-form-group" key={field}>
                          <label htmlFor={`pq-${field}`}>{label}</label>
                          <input
                            type={type}
                            id={`pq-${field}`}
                            name={field}
                            value={answers[field]}
                            onChange={(e) => setAnswer(field, e.target.value)}
                            aria-invalid={!!errors[field]}
                            placeholder={placeholder}
                          />
                          {errors[field] && (
                            <span className="field-error">{errors[field]}</span>
                          )}
                        </div>
                      ))}
                      <div className="presupuesto-form-group">
                        <label htmlFor="pq-descripcion">
                          Contanos un poco más (opcional)
                        </label>
                        <textarea
                          id="pq-descripcion"
                          name="descripcion"
                          rows="3"
                          value={answers.descripcion}
                          onChange={(e) => setAnswer('descripcion', e.target.value)}
                          placeholder="Por ejemplo: necesito pasar a trifásico, es un local de 80 m², el pilar ya está..."
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div className="presupuesto-navegacion">
                  {step > 0 && (
                    <button className="btn-presupuesto-volver" onClick={prevStep}>
                      ← Volver
                    </button>
                  )}
                  {step < 4 ? (
                    <button className="btn-presupuesto-siguiente" onClick={nextStep}>
                      Siguiente →
                    </button>
                  ) : (
                    <>
                      <button
                        className="btn-presupuesto-whatsapp"
                        onClick={enviarWhatsApp}
                        disabled={submitStatus === 'sending'}
                      >
                        <FaWhatsapp /> Enviar por WhatsApp
                      </button>
                      <button
                        className="btn-presupuesto-email"
                        onClick={enviarEmail}
                        disabled={submitStatus === 'sending'}
                      >
                        {submitStatus === 'sending' ? 'Enviando...' : (
                          <>
                            <FaEnvelope /> Enviar por Email
                          </>
                        )}
                      </button>
                    </>
                  )}
                </div>
              </>
            )}
          </div>
        </section>

        <section className="presupuesto-info">
          <div className="presupuesto-info-container">
            <h2>¿Cómo funciona la solicitud de presupuesto?</h2>
            <div className="presupuesto-info-grid">
              <div className="presupuesto-info-card">
                <h3>1. Consulta tus opciones</h3>
                <p>
                  Elegí el tipo de proyecto, la zona y el trabajo. No hace falta
                  saber la potencia exacta: eso lo determinamos en el
                  relevamiento.
                </p>
              </div>
              <div className="presupuesto-info-card">
<h3>2. Recibí tu propuesta</h3>
                <p>
                  Envianos la consulta y armamos una propuesta con alcance y
                  costo. Si incluye relevamiento, coordinamos la visita y te
                  cerramos el número definitivo.
                </p>
              </div>
              <div className="presupuesto-info-card">
                <h3>3. Coordinamos una visita</h3>
                <p>
                  Para obras y presupuestos definitivos visitamos el lugar,
                  verificamos la instalación y ajustamos la oferta final.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="presupuesto-cta">
          <div className="presupuesto-cta-container">
            <h2>¿Preferís hablar directo?</h2>
            <div className="presupuesto-cta-buttons">
              <a className="presupuesto-cta-whatsapp" href="https://wa.me/5491163521258" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp /> WhatsApp directo
              </a>
              <a className="presupuesto-cta-telefono" href="tel:+5491163521258">
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

export default Presupuesto;