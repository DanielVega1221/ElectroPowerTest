import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Hero.css';
import { useNavigate } from "react-router-dom";
import { trackEvent } from '../../lib/analytics';
import { FaBolt, FaFileInvoiceDollar } from 'react-icons/fa';
import logoAkapol from '../../assets/logoakapol.png';
import logoEdenor from '../../assets/logoedenor.png';
import logoEdesur from '../../assets/logoedesur.png';
import logoElena from '../../assets/logoelena.webp';
import logoGrundfos from '../../assets/logoGrundfos.webp';
import logoNovapaking from '../../assets/logonovapaking.webp';
import logoPraga from '../../assets/logopraga.webp';
import logoQuest from '../../assets/logoquest.webp';
import logoSmata from '../../assets/logosmata.png';
import logoTerranova from '../../assets/logoterranova.webp';
import logoWoodbridge from '../../assets/logowoodbridge.webp';
import logoYpg from '../../assets/logoypg.webp';
import logoDilegno from '../../assets/logodilegno.webp';
import logoCampagnoni from '../../assets/CAMPAGNONI.webp';

const clientLogos = [
  { src: logoAkapol, alt: 'Akapol' },
  { src: logoEdenor, alt: 'Edenor' },
  { src: logoEdesur, alt: 'Edesur' },
  { src: logoElena, alt: 'Elena Dardas Administraciones', grayscale: true },
  { src: logoGrundfos, alt: 'Grundfos', invert: true },
  { src: logoNovapaking, alt: 'Novapaking' },
  { src: logoPraga, alt: 'Praga' },
  { src: logoQuest, alt: 'Quest School' },
  { src: logoSmata, alt: 'SMATA' },
  { src: logoTerranova, alt: 'Terranova' },
  { src: logoWoodbridge, alt: 'Woodbridge' },
  { src: logoYpg, alt: 'YPG' },
  { src: logoDilegno, alt: 'Dilegno' },
  { src: logoCampagnoni, alt: 'Campagnoni' },
];

const isPrerendered =
  typeof document !== 'undefined' &&
  document.getElementById('root')?.childElementCount > 0;

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const urgenciasRef = useRef(null);
  const phraseRef = useRef(null);
  const buttonsRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isPrerendered) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(titleRef.current, {
        y: 60,
        opacity: 0,
        duration: 0.8,
      })
        .from(
          subtitleRef.current,
          {
            y: 40,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.4"
        )
        .from(
          urgenciasRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.35"
        )
        .from(
          [phraseRef.current, buttonsRef.current],
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
          },
          "-=0.3"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToContact = () => {
    trackEvent('cta_click', { cta: 'cotizacion_sin_cargo', page: 'home' });
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const goToServices = () => {
    trackEvent('cta_click', { cta: 'ver_servicios', page: 'home' });
    navigate("/servicios");
  };

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title" ref={titleRef}>
          Electricista en Escobar y Zona Norte <br />
          <span className="hero-title-highlight">Energía, potencia y confianza para tu proyecto</span>
        </h1>

        <p className="hero-subtitle" ref={subtitleRef}>
          En ElectroPower brindamos soluciones integrales en electricidad,
          refrigeración y construcción, acompañando a particulares y empresas
          con tecnología, seguridad y compromiso.
        </p>

        <div className="hero-urgencias" ref={urgenciasRef}>
          <span className="hero-urgencias-icon" aria-hidden="true"><FaBolt /></span>
          Urgencias eléctricas 24 hs · Escobar y Zona Norte
        </div>

        <div className="hero-clients" ref={phraseRef}>
          <p className="hero-clients-label">Empresas que confían en nosotros</p>
          <div className="hero-clients-track-wrapper">
            <div className="hero-clients-track">
              {clientLogos.map((logo, i) => (
                <img key={i} src={logo.src} alt={logo.alt} loading="lazy" decoding="async" className={logo.invert ? 'logo-invert' : logo.grayscale ? 'logo-grayscale' : ''} />
              ))}
              {clientLogos.map((logo, i) => (
                <img key={`dup-${i}`} src={logo.src} alt="" aria-hidden="true" loading="lazy" decoding="async" className={logo.invert ? 'logo-invert' : logo.grayscale ? 'logo-grayscale' : ''} />
              ))}
            </div>
          </div>
        </div>

        <div className="hero-buttons" ref={buttonsRef}>
          <button className="btn btn-primary" onClick={scrollToContact}>
            <FaFileInvoiceDollar /> Solicitá tu cotización sin cargo
          </button>
          <button className="btn btn-secondary" onClick={goToServices}>
            <FaBolt /> Ver nuestros servicios
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
