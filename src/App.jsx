import "./App.css";
import { Suspense, lazy, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { trackPageView } from "./lib/analytics";

const Home = lazy(() => import("./paginas/home/Home"));
const Services = lazy(() => import("./paginas/services/Services"));
const AboutUs = lazy(() => import("./paginas/aboutus/AboutUs"));
const Pagina404 = lazy(() => import("./paginas/pagina404/Pagina404"));
const Terms = lazy(() => import("./paginas/terms/Terms"));
const Noticias = lazy(() => import("./paginas/noticias/Noticias.jsx"));
const NoticiaDetalle = lazy(() => import("./paginas/noticias/NoticiaDetalle.jsx"));
const Consejos = lazy(() => import("./paginas/consejos/Consejos.jsx"));
const Industria = lazy(() => import("./paginas/industria/Industria"));
const ServicioDetalle = lazy(() => import("./paginas/servicio/ServicioDetalle"));
const ZonaLanding = lazy(() => import("./paginas/zona/ZonaLanding"));
const VarianteLanding = lazy(() => import("./paginas/variante/VarianteLanding"));
const Presupuesto = lazy(() => import("./paginas/presupuesto/Presupuesto"));
import { SERVICIOS } from "./data/servicios";
import { ZONAS } from "./data/zonas";
import { POSTS } from "./data/posts";

const EXTRA_TITLES = {
  "/industria": "Soluciones Eléctricas Industriales en Zona Norte | ElectroPower",
  "/presupuesto": "Solicitá tu Presupuesto | ElectroPower",
  "/electricista-24-horas": "Electricista 24 Horas en Escobar y Zona Norte | ElectroPower",
  "/electricista-matriculado": "Electricista Matriculado en Escobar y Zona Norte | ElectroPower",
};

const PAGE_TITLES = {
  "/": "Electricista en Escobar y Zona Norte | Instalaciones Eléctricas",
  "/servicios": "Servicios Eléctricos en Zona Norte | ElectroPower",
  "/nosotros": "ElectroPower | Electricistas en Escobar y Zona Norte",
  "/noticias": "Noticias | ElectroPower",
  "/consejos": "Consejos Eléctricos | ElectroPower",
  "/terminos": "Términos de Servicio y Política de Privacidad | ElectroPower",
  ...SERVICIOS.reduce((acc, s) => ({ ...acc, [`/servicios/${s.slug}`]: s.title }), {}),
  ...ZONAS.reduce((acc, z) => ({ ...acc, [`/${z.slug}`]: z.title }), {}),
  ...POSTS.reduce((acc, p) => ({ ...acc, [`/noticias/${p.slug}`]: p.seoTitle }), {}),
  ...EXTRA_TITLES,
};

const TITLE_FALLBACK = (pathname) => {
  if (pathname.startsWith("/servicios/")) {
    const slug = pathname.split("/")[2];
    const s = SERVICIOS.find((x) => x.slug === slug);
    return s ? s.title : "Servicios Eléctricos | ElectroPower";
  }
  return "ElectroPower | Electricista en Buenos Aires | Servicios Eléctricos";
};

function App() {
  
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = PAGE_TITLES[location.pathname] ?? TITLE_FALLBACK(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    trackPageView(location.pathname + location.search + location.hash);
  }, [location.pathname, location.search, location.hash]);
  

  

  useEffect(() => {
    // Manejo de hash en la URL 
    if (location.hash) {
      const targetId = location.hash.substring(1);

      // Reintenta hasta que la sección exista (Home se monta con lazy load
      // al venir desde otra página).
      let attempts = 0;

      const attemptScroll = () => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
        attempts += 1;
        if (attempts < 50) {
          setTimeout(attemptScroll, 100);
        }
      };

      // Si venimos de otra página, ir al top y luego scroll suave
      if (location.pathname !== "/") {
        window.scrollTo(0, 0);
        setTimeout(attemptScroll, 150);
      } else {
        attemptScroll();
      }
    }
    // Manejo de state (para navegación desde otras páginas a sección específica)
    else if (location.state?.sectionId) {
      const targetId = location.state.sectionId;
      // Redirigir con hash para que funcione correctamente
      navigate(`${location.pathname}#${targetId}`, { replace: true });
    }
    // Scroll al top cuando cambia la ruta (sin hash ni state)
    else {
      window.scrollTo(0, 0);
    }
  }, [location, navigate]);

  return (
    <div className="app">
      <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/industria" element={<Industria />} />
        <Route path="/electricista-24-horas" element={<VarianteLanding slug="electricista-24-horas" />} />
        <Route path="/electricista-matriculado" element={<VarianteLanding slug="electricista-matriculado" />} />
        {SERVICIOS.map((s) => (
          <Route
            key={s.slug}
            path={`/servicios/${s.slug}`}
            element={<ServicioDetalle slug={s.slug} />}
          />
        ))}
        {ZONAS.map((z) => (
          <Route
            key={z.slug}
            path={`/${z.slug}`}
            element={<ZonaLanding slug={z.slug} />}
          />
        ))}
        <Route path="/nosotros" element={<AboutUs />} />
        <Route path="/presupuesto" element={<Presupuesto />} />
        <Route path="/404" element={<Pagina404 />} />
        <Route path="*" element={<Pagina404 />} />
        <Route path="/terminos" element={<Terms />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/consejos" element={<Consejos />} />
        <Route path="/noticias/:slug" element={<NoticiaDetalle />} />
      </Routes>
      </Suspense>
    </div>
  );
}

export default App;
