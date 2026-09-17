import './Reviews.css';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      nombre: 'Martín Sosa',
      rol: 'Encargado de planta · Parque Industrial OKS, Garín',
      rating: 5,
      texto:
        'Nos renovaron la media tensión completa y el tablero general sin detener la producción más de un día. Trabajo prolijo, documentado y a tiempo. Desde entonces somos parte de su plan de mantenimiento.',
    },
    {
      id: 2,
      nombre: 'Carla Benítez',
      rol: 'Arquitecta · Escobar',
      rating: 5,
      texto:
        'Los sumé a una obra de construcción y se adaptaron perfecto a los plazos. Buena comunicación del equipo y presupuesto claro, sin sorpresas al momento del cierre.',
    },
    {
      id: 3,
      nombre: 'Diego Roldán',
      rol: 'Administrador de local · Pilar',
      rating: 4,
      texto:
        'Rehicieron la instalación completa del local y nos acompañaron con la habilitación municipal. Tardaron un poco más de lo pactado, pero el resultado quedó impecable.',
    },
    {
      id: 4,
      nombre: 'Noelia Ferreyra',
      rol: 'Gerente de operaciones · Depósito, Campana',
      rating: 5,
      texto:
        'Tuvimos una falla un sábado a la noche y respondieron en menos de una hora. Excelente atención en urgencias y muy serios con el mantenimiento preventivo.',
    },
    {
      id: 5,
      nombre: 'Gustavo Marchetti',
      rol: 'Propietario · Countries Loma Verde, Escobar',
      rating: 5,
      texto:
        'Instalación completa de la casa con certificación AEA y una muy buena explicación del proyecto antes de empezar. Precio acorde y equipo respetuoso.',
    },
  ];

  return (
    <section className="reviews" id="reviews">
      <div className="reviews-container">
        <div className="reviews-header">
          <span className="reviews-badge">Testimonios</span>
          <h2 className="reviews-title">Lo que dicen nuestros clientes</h2>
          <h3 className="reviews-subtitle">Confianza que se construye en cada obra</h3>
          <div className="reviews-divider"></div>
        </div>
        <div className="reviews-grid">
          {reviews.map((review) => (
            <article className="review-card" key={review.id}>
              <div className="review-stars">
                {Array.from({ length: 5 }, (_, i) => (
                  <FaStar
                    key={i}
                    aria-hidden="true"
                    className={i < review.rating ? 'review-star filled' : 'review-star'}
                  />
                ))}
              </div>
              <FaQuoteLeft className="review-quote" aria-hidden="true" />
              <p className="review-text">{review.texto}</p>
              <div className="review-author">
                <span className="review-avatar" aria-hidden="true">
                  {review.nombre.charAt(0)}
                </span>
                <div className="review-author-info">
                  <span className="review-name">{review.nombre}</span>
                  <span className="review-rol">{review.rol}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;