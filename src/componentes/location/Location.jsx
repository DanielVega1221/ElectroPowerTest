import './Location.css';
import { Link } from 'react-router-dom';
import { ZONAS } from '../../data/zonas';

const Location = () => {
  const localidades = ZONAS.filter((z) => z.tipo !== 'provincia');
  const provincias = ZONAS.filter((z) => z.tipo === 'provincia');

  return (
    <section className="location" id="location">
      <div className="location-container">
        <div className="location-header">
          <h2 className="location-title">Dónde estamos</h2>

          <div className="location-divider"></div>

          <p className="location-subtitle">
            Estratégicamente ubicados en Matheu para brindarte un servicio
            rápido y eficiente en toda la zona norte de Buenos Aires y CABA.
            Además realizamos obras industriales con desplazamiento a las
            provincias limítrofes.
          </p>
        </div>

        <div className="location-content">
          <div className="location-info">
            <div className="info-card">
              <h3 className="info-title">Nuestra Dirección</h3>
              <p className="info-text">
                <strong>ElectroPower</strong> tiene su base operativa en{" "}
                <strong>Hipólito Yrigoyen 450, Matheu, Buenos Aires</strong>.
              </p>
              <div className="info-highlights">
                <div className="highlight-item">
                  <svg
                    className="highlight-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                  <div className="highlight-content">
                    <span className="highlight-title">
                      Hipólito Yrigoyen 450, Matheu, Buenos Aires
                    </span>
                    <span className="highlight-desc">
                      Base operativa y taller central en el corazón de la zona norte.
                    </span>
                  </div>
                </div>
                <div className="highlight-item">
                  <svg
                    className="highlight-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                    <circle cx="7" cy="17" r="2" />
                    <circle cx="17" cy="17" r="2" />
                  </svg>
                  <div className="highlight-content">
                    <span className="highlight-title">
                      Obras industriales en las provincias limítrofes
                    </span>
                    <span className="highlight-desc">
                      Córdoba, Santa Fe, Entre Ríos, La Pampa y Río Negro.
                    </span>
                  </div>
                </div>
                <div className="highlight-item">
                  <svg
                    className="highlight-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                  <div className="highlight-content">
                    <span className="highlight-title">
                      Desplazamiento programado para proyectos industriales
                    </span>
                    <span className="highlight-desc">
                      Coordinamos visitas y relevamientos para obras fuera del GBA.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="info-card coverage-card">
              <h3 className="info-title">Zona de Cobertura</h3>
              <p className="info-text">
                Atendemos urgencias y obras en toda la{" "}
                <strong>zona norte de Buenos Aires</strong>:
              </p>
              <ul className="coverage-list">
                {localidades.map((z) => (
                  <li key={z.ciudad}>
                    <Link to={`/${z.slug}`} className="coverage-item">
                      <svg
                        className="coverage-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {z.ciudad}
                    </Link>
                  </li>
                ))}
              </ul>
              {provincias.length > 0 && (
                <p className="info-text coverage-provincias">
                  Obras industriales con desplazamiento en:
                </p>
              )}
              {provincias.length > 0 && (
                <ul className="coverage-list">
                  {provincias.map((z) => (
                    <li key={z.ciudad}>
                      <Link to={`/${z.slug}`} className="coverage-item">
                        <svg
                          className="coverage-icon"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        {z.ciudad}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="location-map">
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3294.1227840624188!2d-58.79170486551942!3d-34.34735305866982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bb61b0fe0941e1%3A0x7a0856796bc167fc!2sHip%C3%B3lito%20Yrigoyen%20450%2C%20B1627%20Matheu%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1762909568440!5m2!1ses!2sar"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "16px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación ElectroPower - Escobar, Buenos Aires"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="location-bottom-divider"></div>
    </section>
  );
};

export default Location;
