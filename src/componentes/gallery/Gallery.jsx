import { useState } from 'react';
import { createPortal } from 'react-dom';
import './Gallery.css';
import img1 from '../../assets/imagenGaleria(1).webp';
import img2 from '../../assets/imagenGaleria(2).webp';
import img3 from '../../assets/imagenGaleria(3).webp';
import img4 from '../../assets/imagenGaleria(4).webp';
import img5 from '../../assets/imagenGaleria(5).webp';
import img6 from '../../assets/imagenGaleria(6).webp';
import img7 from '../../assets/imagenGaleria(7).webp';
import img8 from '../../assets/imagenGaleria(8).webp';
import img9 from '../../assets/imagenGaleria(9).webp';
import img10 from '../../assets/imagenGaleria(10).webp';
import img11 from '../../assets/imagenGaleria(11).webp';
import img12 from '../../assets/imagenGaleria(12).webp';
import img13 from '../../assets/imagenGaleria(13).webp';
import img14 from '../../assets/imagenGaleria(14).webp';
import img15 from '../../assets/imagenGaleria(15).webp';
import img16 from '../../assets/imagenGaleria(16).webp';
import img17 from '../../assets/imagenGaleria(17).webp';
import img18 from '../../assets/imagenGaleria(18).webp';
import img19 from '../../assets/imagenGaleria(19).webp';
import img20 from '../../assets/imagenGaleria(20).webp';
import img22 from '../../assets/imagenGaleria(22).webp';
import img23 from '../../assets/imagenGaleria(23).webp';
import img24 from '../../assets/imagenGaleria(24).webp';
import img25 from '../../assets/imagenGaleria(25).webp';

const GALLERY_DIMS = {
  1: [384, 517], 2: [530, 776], 3: [663, 882], 4: [680, 492],
  5: [588, 795], 6: [1204, 923], 7: [1214, 903], 8: [416, 953],
  9: [869, 685], 10: [884, 660], 11: [662, 894], 12: [591, 582],
  13: [494, 834], 14: [719, 461], 15: [717, 523], 16: [1400, 622],
  17: [904, 1392], 18: [960, 1280], 19: [227, 505], 20: [233, 517],
  22: [1400, 1867], 23: [720, 1600], 24: [960, 1280], 25: [960, 1280],
};

const IMAGE_ALTS = {
  1: 'Instalaciones eléctricas industriales en zona norte de Escobar',
  2: 'Mantenimiento de tableros eléctricos industriales en Escobar',
  3: 'Cableado y tendido eléctrico en zona norte',
  4: 'Electricista comercial: proyectos eléctricos para locales en zona norte',
  5: 'Instalación de luminarias LED por electricistas en Escobar',
  6: 'Montaje de tableros eléctricos trifásicos en zona norte',
  7: 'Electricista industrial trabajos en altura en plantas de zona norte',
  8: 'Medición de puesta a tierra en instalaciones eléctricas de Escobar',
  9: 'Automatización y tableros de control industriales en zona norte',
  10: 'Instalaciones eléctricas residenciales en Escobar y zona norte',
  11: 'Mantenimiento preventivo eléctrico de industrias en zona norte',
  12: 'Tendido de cableado de potencia para industrias en Escobar',
  13: 'Instalación de transformadores eléctricos en zona norte',
  14: 'Grupos electrógenos y sistemas de emergencia eléctrica',
  15: 'Conexiones y empalmes de instalaciones eléctricas',
  16: 'Inspección de instalaciones eléctricas industriales en zona norte',
  17: 'Obra eléctrica desde cero en construcción, Escobar',
  18: 'Armado de gabinetes de control eléctrico industrial',
  19: 'Iluminación exterior con electricistas en Escobar y zona norte',
  20: 'Medición de calidad de energía en instalaciones eléctricas',
  21: 'Electricista instalación industrial en altura en zona norte',
  22: 'Equipo de electricistas ElectroPower en obra en zona norte',
  23: 'Instalación de transformador trifásico con grúa en zona norte',
  24: 'Montaje de tablero eléctrico trifásico en Escobar',
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      src: img1,
      title: 'Instalaciones Eléctricas Industriales',
      description: 'Trabajos especializados en plantas industriales',
      category: 'industrial'
    },
    {
      id: 2,
      src: img2,
      title: 'Mantenimiento de Tableros',
      description: 'Revisión y mantenimiento preventivo',
      category: 'mantenimiento'
    },
    {
      id: 3,
      src: img3,
      title: 'Cableado Estructurado',
      description: 'Instalación de redes eléctricas',
      category: 'instalación'
    },
    {
      id: 4,
      src: img4,
      title: 'Proyectos Comerciales',
      description: 'Soluciones para locales y comercios',
      category: 'comercial'
    },
    {
      id: 5,
      src: img5,
      title: 'Instalación de Luminarias',
      description: 'Iluminación LED y sistemas eficientes',
      category: 'iluminación'
    },
    {
      id: 6,
      src: img6,
      title: 'Tableros Eléctricos',
      description: 'Montaje y puesta en marcha',
      category: 'instalación'
    },
    {
      id: 7,
      src: img7,
      title: 'Trabajos en Altura',
      description: 'Instalaciones de alta complejidad',
      category: 'industrial'
    },
    {
      id: 8,
      src: img8,
      title: 'Puesta a Tierra',
      description: 'Sistemas de protección eléctrica',
      category: 'seguridad'
    },
    {
      id: 9,
      src: img9,
      title: 'Automatización Industrial',
      description: 'Control y monitoreo de procesos',
      category: 'industrial'
    },
    {
      id: 10,
      src: img10,
      title: 'Instalaciones Residenciales',
      description: 'Proyectos para hogares y edificios',
      category: 'residencial'
    },
    {
      id: 11,
      src: img11,
      title: 'Mantenimiento Preventivo',
      description: 'Inspección y control de equipos',
      category: 'mantenimiento'
    },
    {
      id: 12,
      src: img12,
      title: 'Cableado Industrial',
      description: 'Tendido de cables de potencia',
      category: 'industrial'
    },
    {
      id: 13,
      src: img13,
      title: 'Instalación de Transformadores',
      description: 'Equipos de media y baja tensión',
      category: 'instalación'
    },
    {
      id: 14,
      src: img14,
      title: 'Sistemas de Emergencia',
      description: 'Grupos electrógenos y UPS',
      category: 'seguridad'
    },
    {
      id: 15,
      src: img15,
      title: 'Conexiones Eléctricas',
      description: 'Empalmes y terminaciones',
      category: 'instalación'
    },
    {
      id: 16,
      src: img16,
      title: 'Inspección de Instalaciones',
      description: 'Control de calidad y seguridad',
      category: 'mantenimiento'
    },
    {
      id: 17,
      src: img17,
      title: 'Obras en Construcción',
      description: 'Instalaciones desde cero',
      category: 'comercial'
    },
    {
      id: 18,
      src: img18,
      title: 'Gabinetes de Control',
      description: 'Armado e instalación',
      category: 'industrial'
    },
    {
      id: 19,
      src: img19,
      title: 'Iluminación Exterior',
      description: 'Alumbrado público y privado',
      category: 'iluminación'
    },
    {
      id: 20,
      src: img20,
      title: 'Medición y Análisis',
      description: 'Estudios de calidad de energía',
      category: 'mantenimiento'
    },
    {
      id: 21,
      src: img22,
      title: 'Instalación Industrial en Altura',
      description: 'Trabajo en espacios industriales con máxima seguridad',
      category: 'industrial'
    },
    {
      id: 22,
      src: img23,
      title: 'Equipo ElectroPower en Acción',
      description: 'Nuestro equipo trabajando en instalaciones deportivas',
      category: 'comercial'
    },
    {
      id: 23,
      src: img24,
      title: 'Instalación de Transformador en Altura',
      description: 'Montaje de transformador trifásico con grúa hidráulica',
      category: 'industrial'
    },
    {
      id: 24,
      src: img25,
      title: 'Instalación de Tablero Eléctrico Trifásico',
      description: 'Montaje de transformador de distribución en campo',
      category: 'instalación'
    },

  ];

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="gallery" id="gallery">
      <div className="gallery-container">
        
        {/* Header */}
        <div className="gallery-header">
          <div className="gallery-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <polyline points="21 15 16 10 5 21"/>
            </svg>
            Nuestra Galería
          </div>
          <h2 className="gallery-title">Más que Electricidad, Somos Pasión</h2>
          <p className="gallery-subtitle">
            Cada imagen cuenta una historia de <strong>dedicación, trabajo en equipo y compromiso</strong> con nuestros clientes. 
            Conocé el lado humano detrás de cada instalación eléctrica.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <div 
              key={image.id}
              className="gallery-item"
              onClick={() => openModal(image)}
            >
              <div className="gallery-image-wrapper">
                <img 
                  src={image.src} 
                  alt={IMAGE_ALTS[image.id] || image.title}
                  width={GALLERY_DIMS[image.id]?.[0]}
                  height={GALLERY_DIMS[image.id]?.[1]}
                  loading="lazy"
                  decoding="async"
                />
                <div className="gallery-expand-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="15 3 21 3 21 9"/>
                    <polyline points="9 21 3 21 3 15"/>
                    <line x1="21" y1="3" x2="14" y2="10"/>
                    <line x1="3" y1="21" x2="10" y2="14"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="gallery-cta">
          <p>¿Querés ser parte de nuestra próxima historia de éxito?</p>
          <button className="gallery-cta-button" onClick={() => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            Contactanos Ahora
          </button>
        </div>

      </div>

      {/* Modal para imagen ampliada — portaled to body to avoid fixed containing-block issue */}
      {selectedImage && createPortal(
        <div className="gallery-modal" onClick={closeModal}>
          <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="gallery-modal-close" onClick={closeModal}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
            <img src={selectedImage.src} alt={IMAGE_ALTS[selectedImage.id] || selectedImage.title} />
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};

export default Gallery;
