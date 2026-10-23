import { useEffect, useState } from 'react';
import useActiveSection from '../hooks/useActiveSection';

export const sections = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'skills', label: 'Skills' },
  { id: 'experiencias', label: 'Experiências' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'contato', label: 'Contato' },
];
const ids = sections.map((s) => s.id);

// Barra superior (aparece no hero; no desktop passa o bastão para a barra lateral).
export default function Nav() {
  const active = useActiveSection(ids);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('top');
    const io = new IntersectionObserver(
      ([e]) => document.documentElement.classList.toggle('past-hero', !e.isIntersecting),
      { rootMargin: '-40% 0px 0px 0px' }
    );
    if (hero) io.observe(hero);

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        document.documentElement.style.setProperty('--p', max > 0 ? window.scrollY / max : 0);
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { io.disconnect(); window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf); };
  }, []);

  return (
    <>
      <div className="progress" aria-hidden="true" />
      <header className="nav">
        <a href="#top" className="nav__logo" aria-label="Início"><span>G</span></a>
        <nav className={`nav__links ${open ? 'is-open' : ''}`} aria-label="Principal">
          {sections.map((s, i) => (
            <a key={s.id} href={`#${s.id}`} className={active === s.id ? 'is-active' : ''} onClick={() => setOpen(false)}>
              <em>0{i + 1}.</em> {s.label}
            </a>
          ))}
        </nav>
        <button className="nav__toggle" aria-label="Abrir menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
          <span /><span />
        </button>
      </header>
    </>
  );
}
