// src/paginas/noticias/NoticiaDetalle.jsx
import "./Noticias.css";
import Navbar from "../../componentes/navbar/Navbar.jsx";
import Footer from "../../componentes/footer/Footer.jsx";
import { Link, useParams } from "react-router-dom";
import WhatsAppButton from "../../componentes/whatsappbutton/WhatsAppButton.jsx";
import { getPost, POSTS } from "../../data/posts";
import rayito from "../../assets/rayito.png";

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

const renderBloque = (bloque, idx) => {
  switch (bloque.tipo) {
    case "parrafo":
      return (
        <p key={idx} className="fade-in-up">
          {bloque.fuerte ? <strong>{bloque.texto}</strong> : bloque.texto}
        </p>
      );
    case "listado":
      return (
        <div className="lista-bloque fade-in-up" key={idx}>
          <h2>{bloque.titulo}</h2>
          <ul>
            {bloque.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      );
    case "faq":
      return (
        <div className="faq-bloque fade-in-up" key={idx}>
          <h2>{bloque.titulo || "Preguntas frecuentes"}</h2>
          {bloque.items.map((item, i) => (
            <details className="faq-item" key={i} open={i === 0}>
              <summary>
                <h3>{item.pregunta}</h3>
              </summary>
              <p>{item.respuesta}</p>
            </details>
          ))}
        </div>
      );
    case "enlace":
      return (
        <div className="noticias-link fade-in-up" key={idx}>
          {bloque.url.startsWith("/") ? (
            <Link to={bloque.url} className="link-galan">
              {bloque.texto} →
            </Link>
          ) : (
            <a
              href={bloque.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-galan"
            >
              {bloque.texto} →
            </a>
          )}
        </div>
      );
    default:
      return null;
  }
};

const NoticiaDetalle = ({ slug: slugProp }) => {
  const urlParam = useParams();
  const slug = slugProp || urlParam.slug;
  const post = getPost(slug);

  const volverA = post?.tipo === 'consejo' ? '/consejos' : '/noticias';
  const tituloRelacionados =
    post?.tipo === 'consejo' ? 'Otros consejos' : 'Otras novedades';

  if (!post) {
    return (
      <>
        <Navbar />
        <section className="noticias">
          <div className="noticias-hero">
            <div className="noticias-container">
              <div className="noticias-header">
                <h1 className="title">Noticia no encontrada</h1>
                <p className="subtitle">
                  El contenido que buscás no existe.{" "}
                  <Link to={volverA} className="noticias-link-volver">
                    Volver
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
        <WhatsAppButton />
        <Footer />
      </>
    );
  }

  const otras = [...POSTS]
    .filter((p) => p.tipo === post.tipo && p.slug !== post.slug)
    .sort((a, b) => b.fecha.localeCompare(a.fecha))
    .slice(0, 3);

  const mencionaGalan = post.contenido
    .map((b) => {
      if (b.tipo === "listado") {
        return [(b.titulo || ""), ...(b.items || [])].join(" ");
      }
      if (b.tipo === "faq") {
        return (b.items || [])
          .map((it) => `${it.pregunta || ""} ${it.respuesta || ""}`)
          .join(" ");
      }
      return b.texto || "";
    })
    .join(" ")
    .toLowerCase()
    .includes("grupo galán");

  return (
    <>
      <Navbar />

      <section className="noticias">
        <div className="noticias-hero">
          <div className="noticias-container">
            <div className="noticias-header">
              <div className="fusion-badge">{post.categoria.toUpperCase()}</div>

              <h1 className="title fade-in-up delay-1">{post.titulo}</h1>

              <div className="news-divider fade-in-up delay-2">
                <span className="ndot ndot-left"></span>
                <span className="nline"></span>
                <span className="ndot ndot-right"></span>
              </div>

              <p className="subtitle fade-in-up delay-3">{post.subtitulo}</p>

              <div className="blog-card-fecha">
                Publicado el {formatFecha(post.fecha)}
              </div>
            </div>
          </div>
        </div>

        <div className="noticias-container">
          <div className="noticias-content">
            {post.contenido.map((bloque, idx) => renderBloque(bloque, idx))}

            {/* Logos de marcas */}
            <div className="noticias-link fade-in-up">
              <div className="partners-logos">
                <Link
                  to="/"
                  className="logo-card"
                  aria-label="ElectroPower"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  <img
                    src="/logos/electropower.png"
                    alt="Logo de ElectroPower"
                    loading="lazy"
                    decoding="async"
                  />
                </Link>

                {mencionaGalan && (
                  <a
                    href="https://grupogalan.com.ar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="logo-card"
                    aria-label="Grupo Galan"
                  >
                    <img
                      src="/logos/galan.png"
                      alt="Logo de Grupo Galan"
                      loading="lazy"
                      decoding="async"
                    />
                  </a>
                )}
              </div>
            </div>
          </div>

          {post.tarjetas && (
            <>
              <div className="noticias-galeria">
                <h2 className="title fade-in-up delay-1">
                  {post.tarjetas.titulo}
                </h2>

                <div className="news-divider fade-in-up delay-2">
                  <span className="ndot ndot-left"></span>
                  <span className="nline"></span>
                  <span className="ndot ndot-right"></span>
                </div>
              </div>

              <div className="noticias-grid">
                {post.tarjetas.cards.map((card, index) => (
                  <div
                    key={index}
                    className="noticias-card"
                    style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                  >
                    <div className="noticias-badge">{card.badge}</div>
                    <div className="noticias-icon">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="noticias-title">{card.title}</h3>
                    <p className="noticias-description">{card.description}</p>
                    <ul className="noticias-list">
                      {card.items.map((item, idx) => (
                        <li key={idx}>
                          <img src={rayito} alt="" className="item-rayito" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </>
          )}

          {post.banners && (
            <div className="noticias-banners">
              {post.banners.map((banner, idx) => (
                <div className="noticias-banner" key={idx}>
                  <img
                    src={banner.src}
                    alt={banner.alt}
                    width={banner.width}
                    height={banner.height}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
          )}

          {otras.length > 0 && (
            <div className="otras-noticias">
              <h2 className="title fade-in-up delay-1">{tituloRelacionados}</h2>
              <div className="news-divider fade-in-up delay-2">
                <span className="ndot ndot-left"></span>
                <span className="nline"></span>
                <span className="ndot ndot-right"></span>
              </div>
              <div className="otras-noticias-grid">
                {otras.map((p) => (
                  <Link to={`/noticias/${p.slug}`} className="otra-noticia" key={p.slug}>
                    <span className="otra-noticia-categoria">
                      {p.categoria.toUpperCase()}
                    </span>
                    <h3>{p.titulo}</h3>
                    <span className="otra-noticia-fecha">
                      {formatFecha(p.fecha)}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <WhatsAppButton />

      <Footer />
    </>
  );
};

export default NoticiaDetalle;