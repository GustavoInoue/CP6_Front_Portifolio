import Reveal from './Reveal';
import { experiences } from '../data/projects';

export default function Experience() {
  return (
    <section className="section" id="experiencias">
      <Reveal as="h2" className="sh"><span>03.</span> Experiências</Reveal>
      <ol className="timeline">
        <span className="timeline__rail" aria-hidden="true" />
        {experiences.map((e, i) => (
          <Reveal as="li" key={e.title} delay={(i % 2) * 0.1} className="job">
            <div className="job__when">{e.when} · {e.place}</div>
            <div>
              <h3>{e.title}</h3>
              <p>{e.desc}</p>
              <ul className="tags">{e.tags.map((t) => <li key={t}>{t}</li>)}</ul>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
