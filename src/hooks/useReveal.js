import { useEffect } from 'react';

export default function useReveal(key) {
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;

    const id = requestAnimationFrame(() => {
      const io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              e.target.classList.add('is-in');
              io.unobserve(e.target);
            }
          }
        },
        { threshold: 0.14, rootMargin: '0px 0px -60px 0px' }
      );

      document
        .querySelectorAll('.reveal:not(.is-in)')
        .forEach((el) => io.observe(el));

      // expose for cleanup
      io._cleanup = () => io.disconnect();
      useReveal._io = io;
    });

    return () => {
      cancelAnimationFrame(id);
      if (useReveal._io) useReveal._io._cleanup();
    };
  }, [key]);
}
