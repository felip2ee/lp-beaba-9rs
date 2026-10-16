# LP — Beabá do Crédito / Comunidade da Rainha

## Oferta atual
- **Preço:** R$ 97 à vista ou 12x de R$ 10,02 (confirmado em 2026-10-16). Âncora riscada: **de R$ 344** (147 manual + 197 comunidade). Confirmado em 2026-10-16. Não exibir valor por item.
- **Sem VSL.** A página vende só com texto. Copy curta, com promessa concreta (o que a pessoa vai saber fazer em 90 dias), nunca promessa de aprovação.
- **Entregáveis (pilha da LP, tudo existe no PDF do Volume 1):**
  - Beabá do Crédito · Volume 1: manual de 34 páginas, 8 módulos: tipos de crédito, cenário dos bancos, 7 erros que derrubam aprovações, como bancos avaliam (7 critérios), capacidade de captação, engenharia de crédito, capital inteligente, plano de 90 dias.
  - Plano de Captação em 90 dias (módulo 8, 3 fases de 30 dias com checklist)
  - Guia Pronampe e Procred 360 (tabela no módulo 1; ref. julho 2026, Selic 14,25%, pós-fixado)
  - 8 checklists "Coloque em prática" (um por módulo)
  - Comunidade da Rainha
  - Garantia Rainha de 7 dias (reembolso sem pergunta)
- **Upsell dentro do PDF:** "Consulta Direta com a Rainha", R$ 497 (reunião individual ao vivo + pesquisa de CPF/CNPJ + parecer + plano de ação). A LP não vende isso; não citar.
- **Regra:** só citar bônus/entregável que exista no PDF. Não inventar.
- **Ideia central:** independência de crédito. Vilão = **o desconhecimento** (pedir crédito sem entender a regra do jogo), não o intermediário.

## ⚠️ Regra de copy — NUNCA atacar assessoria
A própria Eliane **presta e cobra por serviço de assessoria/estruturação** (na faixa dos milhares de reais, com qualidade e experiência). A LP de R$ 97 é **porta de entrada** para esse serviço, não concorrente dele.
- ❌ Não usar como vilão: "assessoria que cobra R$ 3 mil", "pare de pagar assessoria", "não precisa de consultoria".
- ✅ Enquadrar assim: quem entende do assunto **decide** se faz sozinho ou contrata — e, se contratar, contrata bem. O manual dá autonomia e critério; a assessoria continua sendo um caminho legítimo (e o nosso).
- O ataque, quando houver, é ao **amadorismo** (promessa fácil, "despachante" que garante aprovação, gerente que some), nunca ao serviço profissional.
- **Prioridade de layout:** mobile-first, hero completo acima da dobra (headline + sub com promessa + 3 bullets + CTA + prova, sem rolagem). Botões de CTA sempre em uma linha só (`whitespace-nowrap`, texto curto).

## Autoridade
Eliane Moreira, "a Rainha do Crédito". 16+ anos no mercado financeiro, participação na estruturação de mais de R$ 500 milhões em operações de crédito aprovadas, "centenas de empresas". Número oficial é **R$ 500 milhões** (confirmado em 2026-10-16; versões antigas diziam R$ 400 milhões).

## Prova social (dados reais, informados em 2026-10-16)
- Nota média **5,0 estrelas** em **mais de 600 avaliações**. Plataforma ainda não informada (a LP não cita).
- Depoimentos autorizados (constante `TESTIMONIALS` no topo de `src/App.jsx`):
  - Instituto Thomas: "Consegui capital de giro e coloquei pra girar."
  - Dr. Fabio Neto: pulava de consultor em consultor, só enrolação; agora entende como funciona e está no processo.
  - Maria Fátima, costureira: não sabia os fundamentos; depois de se organizar o banco passou a oferecer produtos; hoje tem cartão e giro disponível.
- Onde aparece: barra do topo, abaixo do CTA do hero, abaixo do preço na oferta e seção própria "5,0 estrelas em mais de 600 avaliações".
- Nunca inventar depoimento, nome, cidade ou número. Faltou prova: placeholder `[PROVA: ...]`.

## Estrutura da LP (ordem das seções em `src/App.jsx`)
1. Hero (barra de prova, headline B, sub com promessa de 90 dias, 3 bullets, CTA, nota, "de R$ 344 por R$ 97")
2. Mecanismo ("O banco não empresta dinheiro. Ele compra confiança."), 7 critérios do banco
3. Promessa ("Como você vai entrar no banco da próxima vez"): 5 resultados concretos + parágrafo de posicionamento da assessoria + CTA
4. Autoridade (foto, 16+ anos, R$ 500 mi)
5. Oferta `#oferta`: pilha de 6 itens, "de R$ 344 por R$ 97", CTA, nota
6. Prova social (3 depoimentos)
7. Pra quem é / pra quem não é
8. Garantia de 7 dias + CTA
9. FAQ (6 perguntas; inclui "Vocês garantem a aprovação?": não, quem aprova é o banco)
10. Fechamento ("Em 90 dias, sua empresa chega no banco diferente.") + CTA + disclaimer

## O que a copy nunca promete
Aprovação garantida, limpar nome, "sem consulta ao SPC", taxa/prazo/limite fora do que o PDF cita. O disclaimer do rodapé diz que quem decide é a instituição financeira.

## Identidade visual (tailwind.config.js)
- primary `#063A29` · secondary `#105B41` · accent (dourado) `#DCA452` · background `#04281C` · dark `#02150E`
- Display: Montserrat · Sans: Open Sans

## Regra de estilo: sem travessões
Toda a copy da LP é escrita **sem travessão** (`—` ou `–`). Onde apareceria um, usar ponto final, dois-pontos, vírgula ou `·`.

## Headlines para teste A/B

Headline em produção: **B**.

### A. Comando / independência
> **PARE DE PEDIR CRÉDITO. APRENDA A PUXAR.**
> Sub: Por R$ 9,90 você entra na Comunidade da Rainha e recebe o manual que ensina, passo a passo, a acessar crédito por conta própria. Sem pedir no escuro e sem ouvir "negado" mais uma vez.

### B. Reframe da negativa (atual)
> **O BANCO NÃO TE NEGA CRÉDITO. ELE NEGA A FORMA COMO VOCÊ PEDE.**
> Sub (atual): Em 90 dias sua empresa entra no banco sabendo quanto pedir, em qual linha e o que arrumar antes. O manual completo da Rainha do Crédito, mais a comunidade, por R$ 97.

### C. Posse do conhecimento / status
> **QUEM SABE A REGRA DO JOGO NÃO IMPLORA CRÉDITO.**
> Sub: Entre na Comunidade da Rainha por R$ 9,90 e receba o manual completo pra acessar crédito com as próprias mãos.

### D. Direta / preço como gancho
> **R$ 9,90 PARA NUNCA MAIS OUVIR "CRÉDITO NEGADO".**
> Sub: Comunidade da Rainha + o manual que destrava seu acesso ao crédito. Acesso imediato.

### Variações de CTA para teste
- QUERO MEU ACESSO POR R$ 97 (atual)
- ENTRAR NA COMUNIDADE DA RAINHA
- QUERO ENTRAR AGORA
- As subs de A, C e D ainda citam R$ 9,90; ajustar pra R$ 97 antes de testar.

## Pendências
- Link de checkout (`CHECKOUT_URL` em `src/App.jsx` ainda é `#oferta`)
- Plataforma das avaliações (Hotmart, Kiwify, outra) pra citar na seção de prova
- Acesso à comunidade: vitalício ou por tempo? A LP não afirma.
- VSL removida em 2026-10-16 (era YouTube `kQM8D3em3eU`). Se voltar, entra entre a sub e os bullets do hero.
