# 3.1 Referências visuais

> O PDF pede **no mínimo 5 referências**, cada uma com (a) o que quis aproveitar e (b) em qual seção serviu. Abaixo estão as **7 referências analisadas** ao longo do projeto: **4 sustentam a versão final (v7)**, e 3 pertenceram a versões anteriores (marcadas). A versão final segue principalmente o site da **Brittany Chiang** (prints que eu enviei).

| # | Referência | Tipo | Na versão final? |
|---|---|---|---|
| 1 | Brittany Chiang — hero (print) | Layout / tipografia / clima | ✅ |
| 2 | Brittany Chiang — Sobre + Experiência com barra lateral (print) | Layout / navegação | ✅ |
| 3 | Brittany Chiang — interações (brilho do mouse, menu numerado, tags) | Animação / interação | ✅ |
| 4 | Scroll-driven animations (técnica CSS) | Animação / transição | ✅ |
| 5 | Lynn Fisher — ilustração com personalidade | Ilustração / clima | ✅ (ilustrações dos projetos) |
| 6 | Bruno Simon — mundo laranja com carrinho (print) | Conceito / paleta | ❌ só v1–v5 |
| 7 | "mytechexpertise" (via Pinterest) | Layout corporativo | ❌ só v6 (e **não verificada**) |

---

## 1. Brittany Chiang — hero
📁 `references/ref-brittany-chiang-hero.png` · 🔗 https://brittanychiang.com/
- **O que quis aproveitar:** o clima do primeiro quadro — fundo azul-marinho profundo, frase de apresentação em fonte **mono** na cor de acento ("Hi, my name is"), nome gigante em duas linhas (a segunda em cinza-azulado), parágrafo curto, **botão só com contorno**, ícones sociais na esquerda e **e-mail na vertical** à direita, com linhas finas.
- **Onde usei:** **Hero** (`Hero.jsx`): "Olá, meu nome é / Gustavo Inoue. / Eu construo coisas para a web.", botão "Ver meus projetos", trilhos laterais com ícones e e-mail vertical.

## 2. Brittany Chiang — Sobre e Experiência com barra lateral
📁 `references/ref-brittany-chiang-sobre.png`
- **O que quis aproveitar:** a **coluna fixa à esquerda** (nome, cargo, frase, índice com linhas e redes sociais) enquanto o conteúdo rola à direita; a lista de **experiências com datas à esquerda** e **tags em pílulas** (JavaScript, React…).
- **Onde usei:** **Barra lateral** (`Sidebar.jsx`, aparece depois do hero no desktop) e **Experiências** (`Experience.jsx`: data/instituição + título + descrição + tags).

## 3. Brittany Chiang — interações
🔗 https://brittanychiang.com/ ⚠️ sem print salvo (comportamentos lembrados da navegação no site; confirmar abrindo o site).
- **O que quis aproveitar:** menu superior **numerado** ("01. Sobre"), **scroll-spy** (a seção atual fica destacada — na barra lateral, a linha do item cresce) e o **brilho suave que acompanha o mouse**.
- **Onde usei:** **Menu** (`Nav.jsx`), **barra lateral** (linha que aumenta) e o **fundo da página** (`App.jsx`, gradiente que segue o ponteiro).

## 4. Scroll-driven animations (animação e transição)
🔗 Documentação: *MDN — "CSS scroll-driven animations"* (propriedades `animation-timeline`, `scroll()`, `view()`).
- **Comportamento que gostei:** a animação **não dispara e toca sozinha**; ela é **ligada à posição do scroll** — quanto mais você rola, mais ela avança, e você controla o ritmo. Foi o que pedi desde o ajuste 10 ("totalmente interativo com o scroll do mouse").
- **Onde usei:** (1) **Hero** se dissolve ao rolar; (2) **Sobre**: palavras acendem uma a uma; (3) **blocos** de todas as seções surgem conforme entram na tela; (4) **Experiências**: linha do tempo se preenche; (5) **Projetos**: cartões empilham (`position: sticky`) e as ilustrações fazem parallax; (6) barra de progresso no topo.

## 5. Lynn Fisher (lynnandtonic.com) — ilustração com personalidade
🔗 https://lynnandtonic.com/ ⚠️ sem print salvo.
- **O que quis aproveitar:** ilustrações próprias e cuidadosas para dar personalidade a um site técnico.
- **Onde usei:** **Projetos** — cinco ilustrações SVG desenhadas para este portfólio (`Art.jsx`: celular com flashcards, chama e satélite, xícara, sensor e teclado, diagrama UML), animadas só no hover para manter a página leve e **tingidas de menta por CSS** (`hue-rotate`) para combinar com o tema.

## 6. Bruno Simon (bruno-simon.com) — *versões v1–v5*
📁 `references/ref-bruno-simon-threejs.png`
- **O que aproveitei na época:** mundo laranja visto de cima com trilha, carrinho, placas e quadros; paleta laranja/marrom amostrada do print.
- **Por que saiu:** Eu pedi algo **mais profissional e leve** (ajuste 13); o conceito do carro foi abandonado. Ficou como **referência analisada e descartada** — e é o motivo da lição "conceito lúdico conflita com 'sério'".

## 7. "mytechexpertise" (via Pinterest) — *versão v6*
⚠️ **Não verificada.** O anexo trouxe só o texto "pinterest / mytechexpertise". A IA **não conseguiu ver a imagem nem abrir o link**; seguiu uma direção "corporativa, clara e limpa" (hero dividido, cartão de perfil, grade de cartões, linha do tempo).
- **Onde usou (v6):** hero, skills, projetos e timeline. Na v7 essa direção foi substituída pelos prints da Brittany Chiang.
- **Pendência minha:** se eu quiser manter esta referência na entrega, preciso anexar o print/link original.

---

### Observações de transparência
- Somente as referências **1, 2 e 6** têm imagem salva em `docs/references/`. Para as demais, preciso tirar um print do site e salvar na mesma pasta antes de entregar (isso fortalece o critério "Pesquisa e repertório", 20%).
- Os nomes das fontes e outros detalhes do site da Brittany Chiang **não foram verificados no código do site** (a IA não consegue acessá-lo); as decisões de tipografia partiram do que se vê nos prints.
