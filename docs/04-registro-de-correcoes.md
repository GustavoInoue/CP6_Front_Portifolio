# 3.4 Registro de correções

> Uma ficha por rodada, no formato pedido (Problema · Prompt de correção · Resultado · Aprendizado). As rodadas **12 e 14** são as duas vezes em que **o layout inteiro foi trocado** (ver [06-evolucao-das-versoes.md](06-evolucao-das-versoes.md)). As rodadas de *QA* são erros que **a própria IA encontrou testando** a página (console, screenshots, celular) e corrigiu sem um novo prompt meu — por isso o "prompt de correção" aparece como correção da IA.

| Rodada | Versão | Título | Resultado |
|---|---|---|---|
| 1 | Planejamento | Paleta sem referência laranja | Resolveu totalmente |
| 2 | v1→v2 | 1ª entrega (HTML estático) ignorou nome, stack e referências | Resolveu em parte |
| 3 | v2→v3 | 2ª entrega: feia e sem scroll-driven de verdade | Resolveu em parte |
| 4 | v3→v4 | 3ª entrega: exagerada, conceito perdido | Resolveu totalmente |
| 5 | QA da v3 | Página em branco (Framer Motion: faixas fora de [0,1]) | Resolveu totalmente |
| 6 | QA da v3 | Palavras coladas no Sobre | Resolveu totalmente |
| 7 | QA da v3 | Zona morta entre hero e Sobre | Resolveu totalmente |
| 8 | QA da v3 | Overflow horizontal no celular | Resolveu totalmente |
| 9 | QA da v4 | Painéis sobrepostos durante a viagem | Resolveu totalmente |
| 10 | v4→v5 | 4ª entrega: visual infantil e carro "feio" | Resolveu totalmente |
| 11 | QA da v5 | Faces 3D desalinhadas nos prédios | Resolveu totalmente |
| 12 | v5→v6 (mudança total de layout nº 1) | 5ª entrega: pesada e conceito do carro rejeitado → layout refeito do zero | Resolveu totalmente |
| 13 | v6 | Referência "mytechexpertise" chegou só como texto | Em aberto |
| 14 | v6→v7 (mudança total de layout nº 2) | v6 leve e profissional, mas sem scroll-driven → layout refeito de novo | Resolveu totalmente |
| 15 | v7 | Ilustrações laranja destoando no tema azul/menta | Resolveu totalmente |
| 16 | v7 | Data inconsistente em Experiências | Resolveu totalmente |
| 17 | v7 | Ícone de e-mail abria o programa de e-mail, não o Gmail | Resolveu totalmente |
| 18 | v7 | Botão "Dizer olá" parecia clicável, mas não fazia nada | Resolveu em parte (ajustada na rodada 19) |
| 19 | v7 | "Dizer olá" perdeu a animação de levantar ao passar o mouse | Resolveu totalmente |

---

## Rodada 1 — Paleta sem referência laranja
*Planejamento*

| Campo | Registro |
|---|---|
| **Problema** | A IA propôs paleta laranja, mas nenhuma das referências iniciais era laranja |
| **Prompt de correção** | "esse é laranja ué" (com imagem) |
| **Resultado** | Resolveu totalmente — hex extraídos do próprio print |
| **Aprendizado** | Anexar a imagem de referência logo no início economiza um ciclo inteiro |

## Rodada 2 — 1ª entrega (HTML estático) ignorou nome, stack e referências
*v1→v2*

| Campo | Registro |
|---|---|
| **Problema** | 1ª entrega era HTML estático, com nome "GV", contatos de exemplo e sem as imagens de referência no projeto |
| **Prompt de correção** | Ajuste 9 — "Não foi isso que te pedi. Primeiro, meu nome é Gustavo Inoue, arrume isso…" (nome, contatos, React/JS/HTML/CSS, scroll animado, referências) *(texto completo em [03-prompts.md](03-prompts.md))* |
| **Resultado** | Resolveu em parte — virou React e dados corretos, mas o resultado ainda era simples |
| **Aprendizado** | O prompt inicial deve fixar stack (React), dados pessoais exatos e o *tipo* de animação desejada |

## Rodada 3 — 2ª entrega: feia e sem scroll-driven de verdade
*v2→v3*

| Campo | Registro |
|---|---|
| **Problema** | 2ª entrega: visual "feio" e só tinha *reveal* ao rolar + parallax discreto — não era scroll-driven de verdade |
| **Prompt de correção** | Ajuste 10 — "…quero que seja Scroll-driven animations… totalmente interativo com o scroll do mouse… Mude a estetica, está muito feio" *(texto completo em [03-prompts.md](03-prompts.md))* |
| **Resultado** | Resolveu em parte — passou a ser scroll-driven (hero em camadas, palavras acendendo, projetos em scroll horizontal), mas ficou com efeitos demais |
| **Aprendizado** | Dizer o nome da técnica ("scroll-driven", "pinned/sticky") + exemplos de comportamento é mais preciso que "animação de scroll" |

## Rodada 4 — 3ª entrega: exagerada, conceito perdido
*v3→v4*

| Campo | Registro |
|---|---|
| **Problema** | 3ª entrega: **exagerada** — muitos efeitos ao mesmo tempo (cursor, grão, faixas gigantes, texto em contorno, cortinas) e nada lembrava a referência escolhida |
| **Prompt de correção** | Ajuste 11 — "Está muito exagerado. Faça algo legal como este exemplo da imagem, faça como um carrinho que vai andando ao rolar o scrool…" *(texto completo em [03-prompts.md](03-prompts.md))* (com o print do Bruno Simon anexado) |
| **Resultado** | Resolveu totalmente — conceito único: um carrinho que anda pela trilha conforme o scroll e para em cada seção |
| **Aprendizado** | Mostrar **a imagem exata** do que quero (e dizer "menos é mais") evita a IA acumular efeitos. O conceito precisa vir antes dos efeitos |

## Rodada 5 — Página em branco (Framer Motion: faixas fora de [0,1])
*QA da v3*

| Campo | Registro |
|---|---|
| **Problema** | *(QA, v3)* Página em branco: o Framer Motion v14 rejeita faixas de entrada fora de [0,1] (`center ± span`) ao acelerar por scroll nativo |
| **Prompt de correção** | Pedido de correção da IA após ver o erro no console |
| **Resultado** | Resolveu totalmente — hook `useRange` interpola em JS |
| **Aprendizado** | Abrir o console cedo; erro de runtime não aparece em screenshot "bonito" |

## Rodada 6 — Palavras coladas no Sobre
*QA da v3*

| Campo | Registro |
|---|---|
| **Problema** | *(QA, v3)* Palavras do Sobre coladas ("SouoGustavo") — espaços colapsam em `inline-block` |
| **Prompt de correção** | Correção com `margin-right` |
| **Resultado** | Resolveu totalmente |
| **Aprendizado** | Testar a leitura do texto, não só o movimento |

## Rodada 7 — Zona morta entre hero e Sobre
*QA da v3*

| Campo | Registro |
|---|---|
| **Problema** | *(QA, v3)* "Zona morta" escura entre o hero e o Sobre |
| **Prompt de correção** | Sobre passou a deslizar por cima do hero (`margin-top:-100vh`) com borda ondulada |
| **Resultado** | Resolveu totalmente |
| **Aprendizado** | Pensar na **transição** entre seções, não só em cada seção |

## Rodada 8 — Overflow horizontal no celular
*QA da v3*

| Campo | Registro |
|---|---|
| **Problema** | *(QA, v3)* Overflow horizontal de 10px no celular |
| **Prompt de correção** | `overflow-x: clip` no `html` |
| **Resultado** | Resolveu totalmente (scrollWidth 390 em tela 390) |
| **Aprendizado** | Testar em celular logo no começo |

## Rodada 9 — Painéis sobrepostos durante a viagem
*QA da v4*

| Campo | Registro |
|---|---|
| **Problema** | *(QA, v4)* Durante a viagem, dois painéis apareciam semi-transparentes ao mesmo tempo |
| **Prompt de correção** | Janelas de fade mais curtas: o painel só existe com o carro parado |
| **Resultado** | Resolveu totalmente (testado com screenshot no meio do trecho) |
| **Aprendizado** | Testar o estado *entre* as paradas, não só as paradas |

## Rodada 10 — 4ª entrega: visual infantil e carro "feio"
*v4→v5*

| Campo | Registro |
|---|---|
| **Problema** | 4ª entrega (carrinho claro): visual **infantil** para um portfólio profissional; carro era um desenho plano "feio" |
| **Prompt de correção** | Ajuste 12 — "…deixar com uma cara mais séria? Melhore aquele carrinho, está muito feio… Algo que demonstre movimento e evolução." *(texto completo em [03-prompts.md](03-prompts.md))* |
| **Resultado** | Resolveu totalmente — tema escuro, vista isométrica, carro 3D low-poly, trilha que acende, prédios que crescem e HUD de evolução |
| **Aprendizado** | Pedir **"profissional"** junto com o conceito, e dizer o que significa evolução (o que deve mudar ao longo da página) |

## Rodada 11 — Faces 3D desalinhadas nos prédios
*QA da v5*

| Campo | Registro |
|---|---|
| **Problema** | *(QA, v5)* Prédios 3D com faces soltas/desalinhadas |
| **Prompt de correção** | Correção da IA: `transform-origin: 0 0` nas faces das caixas |
| **Resultado** | Resolveu totalmente (conferido em screenshot) |
| **Aprendizado** | Ao criar objetos 3D em CSS, testar um cubo isolado antes de repetir 150 vezes |

## Rodada 12 — 5ª entrega: pesada e conceito do carro rejeitado → layout refeito do zero
*v5→v6 (mudança total de layout nº 1)*

| Campo | Registro |
|---|---|
| **Problema** | 5ª entrega (carro isométrico escuro): eu **não gostei da ideia do carro** e achei a página **pesada** e pouco séria |
| **Prompt de correção** | Ajuste 13 — "Decidi que quero abonar esse portifolio já pronto. Não gostei da ideia desse carro e também ficou muito pesado. Quero algo mais profissional… refazer este projeto com outra cara do 0?" *(texto completo em [03-prompts.md](03-prompts.md))* |
| **Resultado** | Resolveu totalmente — refeito do zero: layout editorial claro, sem 3D e sem Framer Motion. JS 389 kB → 238 kB (gzip 125 → 75 kB) |
| **Aprendizado** | Pedir "leve" e "sério" desde o primeiro prompt e testar o conceito em uma só tela antes de construir a página inteira. Um conceito lúdico (jogo) conflita com "profissional" |

## Rodada 13 — Referência "mytechexpertise" chegou só como texto
*v6*

| Campo | Registro |
|---|---|
| **Problema** | A referência nova ("mytechexpertise", via Pinterest) chegou só como texto — a imagem/link não veio no anexo |
| **Prompt de correção** | Pendente: eu enviar o print ou link |
| **Resultado** | Em aberto — a IA seguiu um layout editorial clássico e herdou a paleta laranja do Bruno Simon |
| **Aprendizado** | Anexar a **imagem** (print), não só o nome; a IA não consegue abrir o Pinterest |

## Rodada 14 — v6 leve e profissional, mas sem scroll-driven → layout refeito de novo
*v6→v7 (mudança total de layout nº 2)*

| Campo | Registro |
|---|---|
| **Problema** | v6 (editorial claro) ficou leve e profissional, mas sem a interação de scroll pedida desde o início |
| **Prompt de correção** | Ajuste 14 — "Mas pode fazer algo legal, com a ideia da transição do scroll do mouse ainda, Scroll-driven animations? Ficou bom, leve e profissional. Mas quero arriscar mais um pouco. Use de referencia essas imagens e as cores também…" *(texto completo em [03-prompts.md](03-prompts.md))* (com 2 prints da Brittany Chiang) |
| **Resultado** | Resolveu totalmente (v7) — tema azul-marinho com acento menta, barra lateral fixa e animações ligadas ao scroll **em CSS puro** (`animation-timeline`), mantendo o peso baixo (JS 240 kB / gzip 75 kB) |
| **Aprendizado** | Pedir o efeito *junto com* a restrição ("leve", "sério") e anexar o print do que se quer: a v6 acertou o tom, a v7 acertou o tom **e** o movimento |

## Rodada 15 — Ilustrações laranja destoando no tema azul/menta
*v7*

| Campo | Registro |
|---|---|
| **Problema** | *(decisão, v7)* As ilustrações dos projetos eram laranja; no tema azul/menta destoavam |
| **Prompt de correção** | Correção da IA: `filter: hue-rotate(150deg)` nos SVGs, sem redesenhar |
| **Resultado** | Resolveu totalmente — mesmas ilustrações, agora em tons de menta/azul |
| **Aprendizado** | Um filtro CSS resolve troca de paleta de ilustrações vetoriais sem refazê-las |

## Rodada 16 — Data inconsistente em Experiências
*v7*

| Campo | Registro |
|---|---|
| **Problema** | *(v7)* Na seção Experiências, a data do Checkpoint 6 estava como "Out 2026" e as outras duas como "2026" — formato inconsistente (a IA inventou o mês sem eu ter pedido) |
| **Prompt de correção** | Ajuste 15: "Na parte de experiencias, so mude a data checkpoint 6 que está escrito OUT, deixe somente 2026 igual os outros" |
| **Resultado** | Resolveu totalmente — as três experiências mostram "2026 · FIAP" (conferido no navegador) |
| **Aprendizado** | Padronizar formato de datas/dados no prompt inicial e conferir o conteúdo texto por texto no QA, não só o visual |

## Rodada 17 — Ícone de e-mail abria o programa de e-mail, não o Gmail
*v7*

| Campo | Registro |
|---|---|
| **Problema** | O ícone de e-mail usava `mailto:`, que abre o aplicativo de e-mail padrão do computador (ou nada, se não houver um configurado) — não a página do Gmail que eu queria |
| **Prompt de correção** | Ajuste 17 — "Ao clicar no icone do email, faça direcionar para pagina do gmail geral do google" *(texto completo em [03-prompts.md](03-prompts.md))* |
| **Resultado** | Resolveu totalmente — o ícone (hero, barra lateral e Contato) agora abre `https://mail.google.com/` em nova aba. Conferido no código e no navegador |
| **Aprendizado** | Dizer no prompt inicial **para onde** cada link deve levar (nova aba? Gmail? `mailto`?). Observação: o e-mail em texto vertical do hero continua com `mailto:` — só o ícone foi alterado, como pedido |

## Rodada 18 — Botão "Dizer olá" parecia clicável, mas não fazia nada
*v7*

| Campo | Registro |
|---|---|
| **Problema** | O "Dizer olá" no Contato tinha aparência de botão (contorno, efeito ao passar o mouse, cursor de mão), mas dependia de `mailto:` e, sem programa de e-mail configurado, não acontecia nada ao clicar — passava a impressão de página quebrada |
| **Prompt de correção** | Ajuste 18 — "O botão dizer olá no final, ele aparece como um botão clicavel mas ao clicar não acontece nada, deixe ele como um quadro mas sem mudar a forma da seta do mouse, para que as pessoas não pensem que é clicavel" *(texto completo em [03-prompts.md](03-prompts.md))* |
| **Resultado** | Resolveu em parte — virou um quadro (`<span>`, sem link) com cursor normal (seta), mas a IA também removeu a animação de levantar ao passar o mouse, que eu queria manter (corrigido na rodada 19). Os ícones e links reais do Contato seguem clicáveis |
| **Aprendizado** | **Elemento que parece botão precisa funcionar como botão** (e o contrário). No QA, clicar em *cada* elemento de aparência interativa — foi exatamente a dica do PDF — e conferir o que acontece sem programa de e-mail instalado |

## Rodada 19 — "Dizer olá" perdeu a animação de levantar
*v7*

| Campo | Registro |
|---|---|
| **Problema** | Na rodada 18 a IA removeu **também** o efeito de levantar ao passar o mouse, indo além do que foi pedido (eu só queria tirar a aparência de "clicável" do cursor) |
| **Prompt de correção** | Ajuste 19 — "Mas podia deixar ele daquela forma de ao passar em cima, ele tem uma animação de levantar" *(texto completo em [03-prompts.md](03-prompts.md))* |
| **Resultado** | Resolveu totalmente — voltou o efeito de levantar com sombra ao passar o mouse, mantendo o cursor de seta normal e sem link. Conferido no navegador |
| **Aprendizado** | A IA interpretou "não parecer clicável" de forma mais ampla do que o pedido. Pedidos de comportamento devem listar **o que mudar e o que manter** (ex.: "tire só o cursor de mão, mantenha a animação") |

---

## Análise crítica do conjunto
- **Padrão 1 — conceito antes de efeito:** as rodadas 3, 4, 10 e 12 mostram que a IA acumula efeitos quando o conceito não está claro. Só melhorou quando eu anexei **imagem de referência** (rodadas 1, 4 e 14).
- **Padrão 2 — restrições não ditas:** "leve" e "sério" não haviam sido escritas até a rodada 12, e a IA otimizou para "criativo". Cada restrição omitida custou uma versão.
- **Padrão 3 — erros de QA são previsíveis:** as rodadas 5–9 e 11 foram encontradas olhando o **console, o celular e os estados intermediários** (entre as paradas). Daí vem o checklist de QA da seção 3.5.
- **Evolução:** nas versões 6 e 7 houve menos retrabalho (uma rodada de estética/layout cada + um ajuste de conteúdo) porque o prompt passou a trazer imagem + técnica + restrição.
