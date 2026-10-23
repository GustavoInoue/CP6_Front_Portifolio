import { sections } from './Nav';
import useActiveSection from '../hooks/useActiveSection';
import Socials from './Socials';

const ids = sections.map((s) => s.id);

// Coluna fixa à esquerda (desktop), como no layout de referência: nome, cargo, índice e redes.
export default function Sidebar() {
  const active = useActiveSection(ids);
  return (
    <aside className="side">
      <div>
        <p className="side__name">Gustavo Inoue</p>
        <p className="side__role">Estudante de Engenharia de Software</p>
        <p className="side__tag">Construo interfaces, sistemas e soluções com dados e hardware.</p>
        <nav className="side__nav" aria-label="Seções">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className={active === s.id ? 'is-active' : ''}>
              <i /> <span>{s.label}</span>
            </a>
          ))}
        </nav>
      </div>
      <Socials />
    </aside>
  );
}
