import { Link } from 'react-router-dom';
import { POSTS } from '../../data/posts';
import './BlogPreview.css';

const featured = [...POSTS]
  .filter((p) => p.tipo === 'consejo')
  .sort((a, b) => new Date(b.fecha) - new Date(a.fecha))
  .slice(0, 3);

const formatDate = (fecha) => {
  const [y, m, d] = fecha.split('-');
  const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
  return `${d} de ${months[+m - 1]} de ${y}`;
};

const speedLinks = [
  {
    to: '/electricista-24-horas',
    label: 'Electricista 24 horas',
    text: 'Urgencias eléctricas de día y de noche en toda la zona norte.',
  },
  {
    to: '/electricista-matriculado',
    label: 'Electricista matriculado',
    text: 'Trabajos certificados y en regla, con documentación para habilitaciones.',
  },
];

const BlogPreview = () => {
  return (
    <section className="blogpreview" id="consejos">
      <div className="blogpreview-container">
        <div className="blogpreview-header">
          <span className="blogpreview-badge">Consejos eléctricos</span>
          <h2 className="blogpreview-title">Aprendé sobre electricidad con nuestros especialistas</h2>
          <p className="blogpreview-intro">
            Guías, precios y recomendaciones para hogares, comercios e industrias, escritas por nuestro
            equipo de electricistas matriculados.
          </p>
        </div>

        <div className="blogpreview-grid">
          {featured.map((post) => (
            <Link key={post.slug} to={`/noticias/${post.slug}`} className="blogpreview-card">
              <div className="blogpreview-card-top">
                <span className="blogpreview-categoria">{post.categoria}</span>
                <span className="blogpreview-fecha">{formatDate(post.fecha)}</span>
              </div>
              <h3 className="blogpreview-card-title">{post.titulo}</h3>
              <p className="blogpreview-card-text">{post.extracto}</p>
              <span className="blogpreview-card-link">Leer artículo</span>
            </Link>
          ))}
        </div>

        <div className="blogpreview-speed">
          {speedLinks.map((s) => (
            <Link key={s.to} to={s.to} className="blogpreview-speed-card">
              <div className="blogpreview-speed-body">
                <h4 className="blogpreview-speed-title">{s.label}</h4>
                <p className="blogpreview-speed-text">{s.text}</p>
              </div>
              <span className="blogpreview-speed-arrow">→</span>
            </Link>
          ))}
        </div>

        <div className="blogpreview-more">
          <Link to="/consejos" className="blogpreview-more-link">Ver todos los consejos</Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;