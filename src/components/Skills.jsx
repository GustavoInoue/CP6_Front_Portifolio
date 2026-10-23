import Reveal from './Reveal';
import { skillGroups } from '../data/projects';

export default function Skills() {
  return (
    <section className="section" id="skills">
      <Reveal as="h2" className="sh"><span>02.</span> Skills</Reveal>
      <div className="skills">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={(i % 2) * 0.1} className="skill">
            <h3>{g.title}</h3>
            <p>{g.desc}</p>
            <ul className="tags">{g.items.map((it) => <li key={it}>{it}</li>)}</ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
