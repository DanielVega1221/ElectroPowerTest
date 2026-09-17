import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate, Link } from "react-router-dom";
import { FaChevronDown, FaClipboardList } from 'react-icons/fa';
import './Navbar.css';
import logo from '../../assets/logo.png';

const PRIMARY_LINKS = [
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/industria', label: 'Industria' },
  { to: '/consejos', label: 'Consejos' },
  { to: '/noticias', label: 'Noticias' },
];

const SECTION_LINKS = [
  { to: '/#howwework', label: '¿Cómo Trabajamos?' },
  { to: '/#whychoose', label: '¿Por Qué Elegirnos?' },
  { to: '/#gallery', label: 'Galería' },
  { to: '/#location', label: 'Ubicación' },
  { to: '/#contact', label: 'Contacto' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSectionsOpen, setIsSectionsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsSectionsOpen(false);
    setIsMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsSectionsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  const goHomeTop = () => {
    closeMenu();
    setIsSectionsOpen(false);
    if (location.pathname === "/" && !location.hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/", { replace: true });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-brand" onClick={goHomeTop}>
          <img src={logo} alt="ElectroPower Logo" className="brand-logo" />
          <span className="brand-name">ElectroPower</span>
        </Link>

        <button
          className={`mobile-menu-toggle ${isMobileMenuOpen ? "active" : ""}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${isMobileMenuOpen ? "active" : ""}`}>
          <div className="mobile-menu-header">
            <img
              src={logo}
              alt="ElectroPower Logo"
              className="mobile-menu-logo"
            />
            <span className="mobile-menu-brand">ElectroPower</span>
          </div>

          <li className="mobile-menu-label">
            <span>Navegación</span>
          </li>

          {/* Dropdown de secciones (solo desktop) */}
          <li
            className="nav-dropdown desktop-only"
            ref={dropdownRef}
            onMouseEnter={() => setIsSectionsOpen(true)}
            onMouseLeave={() => setIsSectionsOpen(false)}
          >
            <button
              type="button"
              className="nav-dropdown-toggle"
              aria-expanded={isSectionsOpen}
              aria-haspopup="true"
              onClick={goHomeTop}
            >
              Home
              <FaChevronDown
                className={`nav-dropdown-chevron ${isSectionsOpen ? 'open' : ''}`}
                aria-hidden="true"
              />
            </button>
            <ul className={`nav-dropdown-menu ${isSectionsOpen ? 'open' : ''}`}>
              {SECTION_LINKS.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} onClick={() => setIsSectionsOpen(false)}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {PRIMARY_LINKS.map((link) => (
            <li key={link.to}>
              <Link to={link.to} onClick={closeMenu}>
                {link.label}
              </Link>
            </li>
          ))}

          {/* Anclas visibles solo en el menú móvil */}
          <li className="mobile-menu-label mobile-only">
            <span>Secciones de la página principal</span>
          </li>

          {SECTION_LINKS.map((link) => (
            <li key={link.to} className="mobile-only">
              <Link to={link.to} onClick={closeMenu}>
                {link.label}
              </Link>
            </li>
          ))}

          <li>
            <Link
              to="/presupuesto"
              onClick={closeMenu}
              className="btn-contact"
            >
              <FaClipboardList aria-hidden="true" />
              Pedir presupuesto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
