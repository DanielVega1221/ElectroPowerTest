import { CONFIG } from '../config';

let initialized = false;

export function initAnalytics() {
  if (initialized || typeof window === 'undefined' || !CONFIG.GA4_MEASUREMENT_ID) {
    return;
  }
  initialized = true;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${CONFIG.GA4_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', CONFIG.GA4_MEASUREMENT_ID, { send_page_view: false });
}

export function trackPageView(path) {
  if (!initialized || typeof window === 'undefined') return;
  window.gtag('event', 'page_view', {
    page_title: document.title,
    page_location: window.location.href,
    page_path: path,
  });
}

export function trackEvent(name, params = {}) {
  if (!initialized || typeof window === 'undefined') return;
  window.gtag('event', name, params);
}

export function getWhatsAppURL(message) {
  const base = CONFIG.WHATSAPP_NUMBER;
  return `https://wa.me/${base}?text=${encodeURIComponent(message)}`;
}

let trackersReady = false;

export function initTrackers() {
  if (trackersReady || typeof window === 'undefined' || !CONFIG.GA4_MEASUREMENT_ID) {
    return;
  }
  trackersReady = true;

  const trackedDepths = new Set();

  const onScroll = () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    if (total <= 0) return;
    const scrolled = window.scrollY;
    [25, 50, 75, 100].forEach((percent) => {
      if (!trackedDepths.has(percent) && scrolled >= (total * percent) / 100) {
        trackedDepths.add(percent);
        trackEvent('scroll_depth', { percent });
      }
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });

  const sections = [
    'howwework',
    'whychoose',
    'gallery',
    'location',
    'contact',
  ];

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          trackEvent('section_view', { section: entry.target.id });
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  sections.forEach((id) => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });

  document.addEventListener(
    'click',
    (e) => {
      const anchor = e.target.closest
        ? e.target.closest('a[href]')
        : null;
      if (!anchor) return;
      const href = anchor.getAttribute('href') || '';
      const isExternal =
        /^https?:\/\//i.test(href) &&
        !href.startsWith('https://www.electropowerok.com.ar') &&
        !href.startsWith(window.location.origin);
      if (isExternal) {
        trackEvent('outbound_click', { url: href, text: anchor.textContent.trim() });
      }
    },
    true
  );
}