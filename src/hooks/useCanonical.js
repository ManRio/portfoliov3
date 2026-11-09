import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://manrio.dev';

export function useCanonical() {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');

    const canonicalUrl = `${SITE_URL}${path}`;

    let link = document.querySelector('link[rel="canonical"]');

    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }

    link.setAttribute('href', canonicalUrl);
  }, [pathname]);
}
