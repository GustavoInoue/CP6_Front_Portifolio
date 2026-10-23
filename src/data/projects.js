export const projects = [
  {
    index: '01',
    art: 'codecam',
    featured: true,
    name: 'CodeCam',
    tag: 'FIAP Challenge · Jovi',
    description:
      'App mobile que transforma fotos de quadros e anotações em flashcards e resumos gerados por IA. Fiz a landing page em React, com flip cards 3D, e a integração com a API do Gemini.',
    stack: ['React', 'Tailwind', 'Gemini API', 'Vite'],
  },
  {
    index: '02',
    art: 'firewatch',
    name: 'FIREWATCH',
    tag: 'Modelagem Matemática',
    description:
      'Previsão e monitoramento inteligente de queimadas a partir de dados de satélite. Módulo em Python com cinco funções matemáticas, notebook Jupyter e relatório técnico em PDF.',
    stack: ['Python', 'SymPy', 'Jupyter', 'ReportLab'],
  },
  {
    index: '03',
    art: 'cafe',
    name: 'Café Aroma',
    tag: 'Trabalho em grupo',
    description:
      'Site institucional de uma cafeteria fictícia, feito em equipe. Fiquei responsável pelas seções de Serviços e Depoimentos, em HTML e CSS puros.',
    stack: ['HTML', 'CSS', 'Trabalho em equipe'],
  },
  {
    index: '04',
    art: 'alarm',
    name: 'Alarme Residencial',
    tag: 'Sistemas Embarcados',
    description:
      'Alarme simulado no Wokwi com sensor PIR, teclado 4x4, display LCD I2C, LED e buzzer — lógica de ativação por senha e disparo de alerta ao detectar movimento.',
    stack: ['Arduino', 'Wokwi', 'C++'],
  },
  {
    index: '05',
    art: 'uml',
    name: 'Diagrama de Casos de Uso',
    tag: 'Engenharia de Requisitos',
    description:
      'Escopo, backlog priorizado (26 histórias de usuário com MoSCoW e Fibonacci) e diagrama com 16 casos de uso para um sistema de software.',
    stack: ['UML', 'Backlog', 'MoSCoW'],
  },
];

export const skillGroups = [
  { title: 'Front-end', desc: 'Interfaces responsivas e componentizadas.', items: ['React', 'Tailwind CSS', 'HTML', 'CSS', 'JavaScript'] },
  { title: 'Dados e IA', desc: 'Modelagem matemática e uso de APIs de IA.', items: ['Python', 'Jupyter', 'SymPy', 'Streamlit', 'Gemini API'] },
  { title: 'Hardware', desc: 'Sensores, atuadores e lógica de automação.', items: ['Arduino', 'Wokwi', 'C++'] },
  { title: 'Engenharia de software', desc: 'Requisitos, backlog e modelagem.', items: ['UML', 'User stories', 'MoSCoW', 'Casos de uso'] },
  { title: 'Fluxo de trabalho', desc: 'Versionamento e entrega.', items: ['Git', 'GitHub', 'Vercel'] },
];

export const experiences = [
  {
    when: '2026',
    place: 'FIAP',
    title: 'FIAP Challenge — Jovi',
    tags: ['React', 'Tailwind', 'Gemini API'],
    desc: 'Desafio real com empresa parceira: desenvolvi o CodeCam em equipe, ao longo de várias sprints, com entregas incrementais e apresentação para avaliadores externos.',
  },
  {
    when: '2026',
    place: 'FIAP',
    title: 'Resolução de Problemas Diferenciada',
    tags: ['Python', 'Cálculo', 'Streamlit'],
    desc: 'Modelagem matemática do desempenho de uma API usando limites, com o Prof. Jones Egydio — cálculo e engenharia de software juntos em um app interativo.',
  },
  {
    when: '2026',
    place: 'FIAP',
    title: 'Checkpoint 6 — Vibecoding',
    tags: ['React', 'Vite', 'IA generativa'],
    desc: 'Este portfólio: construído com IA generativa, com todo o processo documentado — referências, identidade visual, prompts e correções.',
  },
];

export const contact = {
  name: 'Gustavo Inoue',
  email: 'gugu@gmail.com',
  github: 'https://github.com/GustavoInoue',
  githubLabel: '@GustavoInoue',
  linkedin: 'https://linkedin.com/in/GustavoInoue',
  linkedinLabel: '/in/GustavoInoue',
};
