# 3.5 Resultado final

## Links de entrega
- **Repositório (GitHub):** *(preencher — ex.: https://github.com/GustavoInoue/gv-portfolio)*
- **Deploy (Vercel):** *(preencher — ex.: https://gv-portfolio.vercel.app)*

> ⚠️ Ainda não existem links: meu projeto está só na pasta local `C:\Users\Familia\Desktop\gv-portfolio`. Passos: criar o repositório no GitHub, `git push`, importar na Vercel (framework: Vite). Depois cole os dois links acima.

## Reflexão

> *Rascunho em primeira pessoa, montado a partir do que aconteceu no processo — vou ajustar com minhas próprias palavras antes de entregar.*

**O que ficou como eu imaginava:** o movimento ligado ao scroll, que eu pedia desde o início e só consegui na última versão: o hero que se dissolve, o texto do Sobre que acende palavra por palavra, a linha do tempo que se preenche e os cartões de projeto que empilham. Também ficou como eu queria o visual sério e leve (JS de 240 kB, sem Framer Motion) e a organização com barra lateral, inspirada no site da Brittany Chiang.

**O que eu ainda mudaria:** as ilustrações dos projetos são as mesmas das versões antigas, apenas recoloridas; faltam os links reais de repositório, deploy e LinkedIn; e as animações de scroll não funcionam igual em todos os navegadores (no Firefox cai num efeito mais simples).

**O que aprendi:** levei 7 versões e duas trocas completas de layout até chegar aqui. Aprendi que anexar uma imagem de referência resolve mais do que descrever, que preciso escrever as restrições ("leve", "sério") já no primeiro prompt e que pedir uma coisa por vez evita retrabalho.

---

# QA (testes) realizado

A dica do PDF: *"abra a página, clique em todos os botões, links e interações, teste tudo em todas as telas"*.

| Item testado | Como | Resultado |
|---|---|---|
| Hero: botões "Ver meus projetos", ícones (GitHub, LinkedIn, e-mail), e-mail vertical | Navegador automatizado + screenshot | ✅ |
| Menu superior numerado (5 links) e scroll-spy | Clique + leitura do item ativo | ✅ ("04. Projetos" ao clicar em Projetos) |
| Barra lateral (desktop) aparece depois do hero e marca a seção atual | Screenshots em cada seção | ✅ |
| Animações de scroll: hero dissolve, palavras acendem, timeline enche, cartões empilham | Screenshots em vários pontos de scroll (inclusive no meio) | ✅ |
| Cartões de projeto: hover (ilustração anima), tags | Inspeção visual | ✅ |
| Datas de Experiências | Leitura do texto da página | ✅ (3× "2026"; sem "Out 2026") |
| Links de contato (Gmail, LinkedIn, GitHub) | Conferência dos `href` no código | ✅ *(links reais ainda a confirmar)* |
| Celular 390 px: sem scroll lateral, menu em gaveta abre/fecha e leva à seção | Navegador em 390×800 | ✅ |
| Console do navegador | Captura de erros de página | ✅ sem erros |
| `prefers-reduced-motion` | Regra CSS que desliga animações | ✅ implementado, **não testado visualmente** |
| **Firefox e Safari** | — | ⚠️ **Pendente (preciso testar):** `animation-timeline` não é suportado em todos; deve cair no fallback (revelação simples) |
| **Deploy publicado** | — | ⚠️ Pendente |
| Tablet (≈768 px) | — | ⚠️ Pendente (testados desktop 1280 e celular 390) |
| Fontes do Google no navegador real | — | ⚠️ O teste automatizado rodou sem internet: preciso conferir Inter e JetBrains Mono no meu navegador |

---

# Autoavaliação pelos critérios do PDF

| Critério (peso) | Onde está comprovado |
|---|---|
| Pesquisa e repertório (20%) | `01-referencias.md` — 7 referências, 4 na versão final, com o que aproveitei e onde |
| Coerência de IDV (15%) | `02-identidade-visual.md` — paleta com hex, papel e motivo; tipografia; tom; estrutura |
| Qualidade dos prompts (20%) | `03-prompts.md` — todos os prompts, na ordem, sem edição + autoanálise + proposta de prompt inicial melhor |
| Análise crítica (20%) | `04-registro-de-correcoes.md` — 19 fichas + análise de padrões |
| Evolução no processo (15%) | `06-evolucao-das-versoes.md` — 7 versões, 2 trocas de layout, comparação de peso |
| Apresentação (10%) | Roteiro abaixo + `screenshots/` |

# Roteiro sugerido para apresentar (≈5 min)
1. **Conceito final** (30 s) — mostrar o site: hero → rolar pelas seções.
2. **Referências** (1 min) — Brittany Chiang (2 prints) + técnica scroll-driven; mencionar as descartadas.
3. **IDV** (1 min) — paleta de 7 cores com papéis, Inter + JetBrains Mono, tom sério.
4. **Processo** (1,5 min) — as 7 versões e *por que troquei o layout inteiro duas vezes*; mostrar `screenshots/v6` vs `v7`.
5. **Aprendizados** (1 min) — imagem + restrição + um pedido por vez; mostrar o "prompt inicial reescrito".
