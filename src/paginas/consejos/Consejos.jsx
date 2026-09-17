// src/paginas/consejos/Consejos.jsx
import "../noticias/Noticias.css";
import Navbar from "../../componentes/navbar/Navbar.jsx";
import Footer from "../../componentes/footer/Footer.jsx";
import { Link } from "react-router-dom";
import WhatsAppButton from "../../componentes/whatsappbutton/WhatsAppButton.jsx";
import { POSTS } from "../../data/posts";

const formatFecha = (iso) => {
  try {
    return new Date(iso + "T00:00:00").toLocaleDateString("es-AR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return iso;
  }
};

const Consejos = () => {
  const ordenados = [...POSTS]
    .filter((p) => p.tipo === "consejo")
    .sort((a, b) => b.fecha.localeCompare(a.fecha));

  const destacado = ordenados[0];
  const resto = ordenados.slice(1);

  return (
    <>
      <Navbar />

      <section className="noticias">
        <div className="noticias-hero">
          <div className="noticias-container">
            <div className="noticias-header">
              <div className="fusion-badge">Consejos ElectroPower</div>

              <h1 className="title fade-in-up delay-1">Consejos y guías</h1>

              <div className="news-divider fade-in-up delay-2">
                <span className="ndot ndot-left"></span>
                <span className="nline"></span>
                <span className="ndot ndot-right"></span>
              </div>

              <p className="subtitle fade-in-up delay-3">
                Guías, precios y recomendaciones prácticas sobre el mundo
                eléctrico para hogares, comercios e industrias, escritas por
                nuestros electricistas matriculados.
              </p>
            </div>
          </div>
        </div>

        <div className="noticias-container">
          {destacado && (
            <div className="blog-featured fade-in-up delay-4">
              <div className="blog-featured-content">
                <div className="blog-card-meta">
                  <span className="blog-card-categoria">{destacado.categoria}</span>
                  <span className="blog-card-fecha">
                    {formatFecha(destacado.fecha)}
                  </span>
                </div>
                <h2 className="blog-featured-title">{destacado.titulo}</h2>
                <p className="blog-featured-extracto">{destacado.extracto}</p>
                <Link to={`/noticias/${destacado.slug}`} className="blog-leer-mas">
                  Leer artículo completo →
                </Link>
              </div>
            </div>
          )}

          {resto.length > 0 && (
            <div className="blog-grid">
              {resto.map((post) => (
                <Link
                  to={`/noticias/${post.slug}`}
                  className="blog-card"
                  key={post.slug}
                >
                  <div className="blog-card-meta">
                    <span className="blog-card-categoria">{post.categoria}</span>
                    <span className="blog-card-fecha">{formatFecha(post.fecha)}</span>
                  </div>
                  <h3 className="blog-card-title">{post.titulo}</h3>
                  <p className="blog-card-extracto">{post.extracto}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <WhatsAppButton />

      <Footer />
    </>
  );
};

export default Consejos;