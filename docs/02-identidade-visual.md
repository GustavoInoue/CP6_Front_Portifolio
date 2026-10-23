# 3.2 Decisões de identidade visual (versão final, v7)

> **De onde veio tudo:** paleta, clima tipográfico e estrutura vêm da **referência usada na última versão — o site da Brittany Chiang** (prints em `references/`). Foi a referência que escolhi no ajuste 14 ("Use de referencia essas imagens e as cores também"). O motivo da escolha: eu queria algo **profissional e sério, mas arriscado no movimento** — e esse tema escuro, técnico e minimalista é muito usado em portfólios de desenvolvedores, o que reforça a ideia de "perfil de engenharia".

## Paleta de cores

| Cor | Hex | Papel | Por que combina com o conceito |
|---|---|---|---|
| Azul-marinho | `#0a192f` | **Fundo** da página | Escuro e profundo → sensação de seriedade e foco; é a cor dominante do print |
| Azul-cartão | `#112240` | **Superfícies**: cartões de skills e de projetos | Um tom acima do fundo: cria camadas sem usar sombra pesada |
| Linha | `#233554` | **Bordas e divisórias**, trilho da linha do tempo | Estrutura a página de forma discreta |
| Lavanda-claro | `#ccd6f6` | **Títulos** e texto de destaque | Alto contraste com o fundo (legibilidade) sem o branco puro, que cansa |
| Cinza-azulado | `#8892b0` | **Texto corrido** | Hierarquia: o texto de apoio recua, o título avança |
| Cinza apagado | `#46526e` | Itens **inativos** da barra lateral, rodapé, palavras ainda "apagadas" no Sobre | Dá o estado "ainda não chegou" nas animações de scroll |
| **Menta** | `#64ffda` | **Destaque/ação**: links, botões, rótulos mono, tags, barra de progresso, pontos da timeline | Única cor viva da página: guia o olhar só onde há ação ou orientação |

**Como as cores foram obtidas (honestidade):** amostrei pixels dos dois prints enviados. Resultado bruto: fundo `#091a2f` / `#101b2f`, texto `#cfd6f3` / `#bec4dd`, cinza `#67718d`, menta `#46978b` / `#52ada6` (varia por compressão da imagem e pelo brilho do degradê). Usei então os **valores "limpos" mais próximos** (`#0a192f`, `#ccd6f6`, `#8892b0`, `#64ffda`), que ficam dentro dessa variação.
**Cores herdadas:** as ilustrações dos projetos foram criadas na paleta laranja (versões 1–5, referência Bruno Simon) e agora são **recoloridas por filtro CSS** para menta/azul — assim o conjunto mantém uma única família de cor.

## Tipografia

| Uso | Fonte | Sensação que queria transmitir |
|---|---|---|
| Títulos e texto | **Inter** (400–700), títulos com espaçamento entre letras levemente apertado | Moderna, neutra e muito legível — profissionalismo sem frieza |
| Rótulos, menu numerado, datas, tags, botões | **JetBrains Mono** | Identidade "dev": lembra código e terminal, em pequenas doses |

- **Por que esse par:** nos prints da referência, o corpo usa uma **sans-serif limpa** e os detalhes (saudação, menu, rótulos, e-mail vertical) usam **fonte monoespaçada**. Reproduzi essa lógica com **fontes gratuitas do Google Fonts** (Inter + JetBrains Mono). ⚠️ Não sei os nomes exatos das fontes do site original; a escolha é uma equivalência de estilo, não uma cópia.
- **Hierarquia:** título gigante (até ~5,2rem) → subtítulos médios → texto corrido de 17px → rótulos mono de ~12–13px em maiúsculas com espaçamento.

## Tom e personalidade
**Técnico, sóbrio e direto — com movimento controlado pelo usuário.**
- *Nos textos:* primeira pessoa, frases curtas ("Eu construo coisas para a web", "Vamos conversar?"), sem exageros nem gírias.
- *No layout:* muito espaço vazio, poucas cores, mono para detalhes. A **única "diversão"** são as animações de scroll e as ilustrações, que aparecem só quando o usuário rola ou passa o mouse.
- *Evolução do tom:* a versão 3 me pareceu "exagerada" e a 4 "infantil" (ver correções 4 e 10); a 7 busca a **seriedade da 6 com mais ousadia no movimento**.

## Estrutura da página e por quê

| # | Seção | Conteúdo | Por que existe |
|---|---|---|---|
| — | **Hero** | Nome, "Eu construo coisas para a web", botão, redes e e-mail | Em 5 segundos, quem recruta sabe quem é e o que faz |
| 01 | **Sobre** | Dois parágrafos curtos + 3 números (5 projetos, 5 áreas, 1º ano) | Contexto humano e evolução (primeiro ano de curso) |
| 02 | **Skills** | 5 grupos de tecnologias (Front-end, Dados e IA, Hardware, Engenharia de software, Fluxo de trabalho) | Seção própria, como combinado; agrupar evita lista solta de siglas |
| 03 | **Experiências** | FIAP Challenge (Jovi), Resolução de Problemas Diferenciada (Prof. Jones Egydio), Checkpoint 6 | Mostra trabalho em contexto real, com datas e tecnologias |
| 04 | **Projetos** | CodeCam (Jovi), FIREWATCH, Café Aroma, Alarme Residencial (Arduino/Wokwi), Diagrama de Casos de Uso | O núcleo do portfólio — o que foi construído |
| 05 | **Contato** | E-mail, LinkedIn, GitHub | Fecha com chamada à ação |

**Ordem** (sobre → skills → experiências → projetos → contato) segue a referência (Sobre → Experiência → Projetos) com Skills antes, conforme combinado: *quem sou → o que sei → onde atuei → o que construí → como falar comigo.*
**Navegação:** menu numerado no topo (no hero) e **barra lateral fixa** no desktop; no celular, menu em gaveta.

## Dados de contato usados
Nome: Gustavo Inoue · E-mail: gugu@gmail.com · GitHub: github.com/GustavoInoue · LinkedIn: linkedin.com/in/GustavoInoue (link **inventado** por mim para o projeto — trocar pelo real antes de entregar).
