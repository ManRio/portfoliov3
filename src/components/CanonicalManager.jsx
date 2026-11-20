import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { SITE_URL, seoPages } from '../data/seo-pages';

function setMeta(attribute, key, content) {
  let element = document.querySelector(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function CanonicalManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const normalizedPath =
      pathname === '/' ? '/' : pathname.replace(/\/+$/, '');

    const page = seoPages[normalizedPath];

    if (!page) return;

    const canonical = `${SITE_URL}${normalizedPath}`;
    const image = new URL(page.image, SITE_URL).href;

    document.title = page.title;

    let link = document.querySelector('link[rel="canonical"]');

    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }

    link.href = canonical;

    setMeta('name', 'description', page.description);

    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:url', canonical);
    setMeta('property', 'og:title', page.title);
    setMeta('property', 'og:description', page.description);
    setMeta('property', 'og:image', image);
    setMeta('property', 'og:image:alt', page.title);

    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', page.title);
    setMeta('name', 'twitter:description', page.description);
    setMeta('name', 'twitter:image', image);
  }, [pathname]);

  return null;
}

export default CanonicalManager;
