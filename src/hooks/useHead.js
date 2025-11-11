import { useEffect } from 'react';

export function useTitle(title) {
  useEffect(() => {
    if (title) document.title = title;
  }, [title]);
}

export function useMeta(name, content) {
  useEffect(() => {
    if (!name || !content) return;
    let meta = document.querySelector(`meta[name="${name}"]`);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', name);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
  }, [name, content]);
}