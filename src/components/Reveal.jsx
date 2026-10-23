import { useEffect, useRef } from 'react';

// Fallback para navegadores sem "scroll-driven animations": revela com IntersectionObserver.
// Onde há suporte, o CSS troca isso por uma animação ligada diretamente à posição do scroll.
export default function Reveal({ children, delay = 0, as: Tag = 'div', className = '', style }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) { el?.classList.add('is-in'); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('is-in'); io.disconnect(); } }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref} className={`reveal ${className}`} style={{ '--d': `${delay}s`, '--i': Math.round(delay * 10), ...style }}>
      {children}
    </Tag>
  );
}
