# Evolução do projeto — e a mudança total de layout

> Esta página existe porque **o layout inteiro foi trocado no meio do caminho — duas vezes**. A professora avalia "evolução no processo": aqui está o porquê de cada troca.

## Linha do tempo das versões

| Versão | Conceito | Stack | Motivo da próxima troca |
|---|---|---|---|
| v1 | Site estático, "GV", contatos de exemplo | HTML/CSS/JS | Nome, contatos e stack errados; sem as referências → rejeitada |
| v2 | Hero em camadas, palavras acendendo, projetos em scroll horizontal | React + Framer Motion | "Muito feio"; efeitos de scroll limitados a *reveal* |
| v3 | Scroll-driven com muitos efeitos (cursor, grão, faixas gigantes) | React + Framer Motion | "Muito exagerado" → pedi algo como o print do **Bruno Simon** |
| v4 | **Carrinho** que anda por uma trilha laranja, claro/colorido | React + Framer Motion | "Muito infantil"; carro "feio" → pedi algo sério |
| v5 | Carro low-poly 3D em vista isométrica, tema escuro, HUD de "evolução" | React + Framer Motion + CSS 3D | "Pesado" e "não gostei da ideia do carro" → **recomeçar do zero** |
| **v6** | **Layout 1 (mudança total):** editorial claro, hero dividido, cartões | React + CSS | Ficou "bom, leve e profissional", mas **sem o scroll-driven** pedido desde o início |
| **v7 (final)** | **Layout 2 (mudança total):** azul-marinho + menta, barra lateral fixa, scroll-driven em CSS | React + CSS puro | — |

## Por que mudei o layout inteiro
1. **v1→v5 foram a mesma ideia refinada** (o mundo laranja com carrinho, inspirado no Bruno Simon). Eu insisti nela porque queria algo memorável e com movimento, mas a cada rodada ela ficava **mais pesada** (CSS 3D com centenas de faces, Framer Motion) e **menos profissional** para um portfólio.
2. **Na rodada 12 (ajuste 13)** percebi que o problema não era detalhe, era o **conceito**: "jogo" e "sério" não combinam. Pedi para refazer **do zero**, com uma referência nova. O resultado foi a **v6**: clara, leve (JS 389 kB → 238 kB) e profissional.
3. **Na rodada 14 (ajuste 14)** a v6 estava correta, mas **faltava o que eu queria desde o início: animações guiadas pelo scroll**. Em vez de voltar ao 3D, mudei o **visual e a interação** juntos usando as imagens da **Brittany Chiang**, e pedi a técnica pelo nome (*scroll-driven animations*). Foi a **v7**.

## O que foi mantido entre as trocas (para não perder trabalho)
- **Conteúdo** (`src/data/projects.js`): nome, contatos, 5 projetos, skills, experiências.
- **Ilustrações SVG** dos projetos (`Art.jsx`) — recoloridas por CSS.
- **Documentação** do processo (referências, prompts, correções).

## O que foi descartado
Framer Motion; CSS 3D; carro; trilha; HUD; paleta laranja como cor principal.

## Números (peso do bundle de produção)
| Versão | JS (gzip) | CSS (gzip) |
|---|---|---|
| v5 — carro 3D + Framer Motion | 388,87 kB (125,03 kB) | 8,83 kB (2,76 kB) |
| v6 — editorial claro | 238,30 kB (74,55 kB) | 9,91 kB (3,01 kB) |
| v7 — marinho + scroll-driven CSS | 239,88 kB (75,15 kB) | 12,44 kB (3,63 kB) |

## Capturas de tela
- v6 (descartada): `screenshots/v6-editorial-claro.png`
- v7 (final): `screenshots/v7-01-hero.png` … `v7-10-mobile-menu.png`
