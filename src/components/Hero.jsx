import Socials from './Socials';
import { contact } from '../data/projects';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__inner">
        <p className="hero__hi">Olá, meu nome é</p>
        <h1>
          <span>Gustavo Inoue.</span>
          <span className="hero__tag">Eu construo coisas para a web.</span>
        </h1>
        <p className="hero__lead">
          Sou estudante de Engenharia de Software na FIAP, focado em criar (e às vezes desenhar) experiências
          digitais, sistemas com dados e protótipos de hardware. Hoje, trabalhando no{' '}
          <a href="#experiencias">FIAP Challenge com a Jovi</a>.
        </p>
        <a className="btn" href="#projetos">Ver meus projetos</a>
      </div>
      <Socials className="hero__rail hero__rail--left" />
      <a className="hero__rail hero__rail--right" href={`mailto:${contact.email}`}>{contact.email}</a>
      <div className="hero__scroll" aria-hidden="true"><span>role</span></div>
    </section>
  );
}
