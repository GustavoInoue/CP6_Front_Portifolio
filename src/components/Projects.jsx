import Reveal from './Reveal';
import Art from './Art';
import { projects } from '../data/projects';

// No desktop os cartões "empilham" (position: sticky) conforme você rola.
export default function Projects() {
  return (
    <section className="section" id="projetos">
      <Reveal as="h2" className="sh"><span>04.</span> Projetos</Reveal>
      <div className="cases">
        {projects.map((p, i) => (
          <article key={p.name} className="case" style={{ '--i': i }}>
            <div className="case__thumb"><Art name={p.art} /></div>
            <div className="case__body">
              <div className="case__meta"><span>{p.index}</span><span>{p.tag}</span></div>
              <h3>{p.name}</h3>
              <p>{p.description}</p>
              <ul className="tags">{p.stack.map((t) => <li key={t}>{t}</li>)}</ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
