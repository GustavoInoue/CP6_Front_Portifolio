import Reveal from './Reveal';
import Socials from './Socials';

export default function Contact() {
  return (
    <section className="section section--contact" id="contato">
      <Reveal>
        <p className="hero__hi">05. Próximo passo</p>
        <h2 className="big">Vamos conversar?</h2>
        <p className="contact__lead">
          Aberto a trocar ideia sobre projetos, oportunidades ou só sobre tecnologia. Minha caixa de entrada está sempre aberta.
        </p>
        <span className="btn btn--static">Dizer olá</span>
        <Socials className="contact__socials" />
      </Reveal>
    </section>
  );
}
