import { useEffect } from 'react';

export function useCanonical(href) {
  useEffect(() => {
    if (!href) return;
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', href);
  }, [href]);
}
