import Reveal from './Reveal';
import { projects, skillGroups } from '../data/projects';

// Cada palavra acende conforme o texto sobe na tela (scroll-driven).
const words = (t) => t.split(' ').map((w, i) => <span key={i} className="w" style={{ '--k': i }}>{w} </span>);

export default function About() {
  const stats = [[projects.length, 'Projetos'], [skillGroups.length, 'Áreas'], ['1º', 'Ano na FIAP']];
  return (
    <section className="section" id="sobre">
      <Reveal as="h2" className="sh"><span>01.</span> Sobre</Reveal>
      <p className="about__text">
        {words('Sou estudante do primeiro ano de Engenharia de Software na FIAP. Gosto de transformar ideias em interfaces, dados em decisões e circuitos em soluções.')}
      </p>
      <p className="about__text">
        {words('Em poucos meses passei por React, modelagem matemática, Arduino e UML — e é no atrito entre essas áreas que eu mais aprendo. Este portfólio reúne o que construí e o raciocínio por trás de cada decisão.')}
      </p>
      <ul className="stats">
        {stats.map(([n, l], i) => (
          <Reveal as="li" key={l} delay={i * 0.1}><strong>{n}</strong><span>{l}</span></Reveal>
        ))}
      </ul>
    </section>
  );
}
