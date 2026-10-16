import React, { useEffect, useRef } from 'react';
import { CheckCircle2, ChevronDown, Shield, Crown, BookOpen, Zap, ArrowRight, Star, XCircle, ListChecks, FileText, Quote } from 'lucide-react';

const CHECKOUT_URL = 'https://pay.cakto.com.br/338vipe_980748';
const CTA_TEXT = 'Quero meu acesso por R$ 97';
const PRICE = 'R$ 97';
const ANCHOR = 'R$ 344';
const INSTALLMENTS = '12x de R$ 10,02';

// PROVA SOCIAL (dados informados pelo cliente em 2026-10-16)
const REVIEWS_COUNT = 'mais de 600';
const REVIEWS_SCORE = '5,0';
const TESTIMONIALS = [
  { name: 'Instituto Thomas', text: 'Consegui capital de giro e coloquei pra girar.' },
  { name: 'Dr. Fabio Neto', text: 'Ficava pulando de consultor em consultor e nunca conseguia chegar no crédito, todo mundo só me enrolando. Agora eu entendo como funciona e estou no processo pra chegar no crédito.' },
  { name: 'Maria Fátima, costureira', text: 'Eu não sabia os fundamentos básicos. Depois que comecei a me organizar, naturalmente o banco começou a me oferecer produtos. Hoje tenho cartão de crédito, capital de giro disponível se quiser, mas estou me organizando pra pegar um produto melhor.' }
];

function Stars() {
  return (
    <span className="inline-flex gap-0.5 text-accent" aria-label="5 estrelas">
      {[0, 1, 2, 3, 4].map((i) => <Star key={i} className="w-4 h-4 fill-accent" />)}
    </span>
  );
}

function App() {
  const mainRef = useRef(null);

  useEffect(() => {
    const elems = mainRef.current?.querySelectorAll('.fade-up') ?? [];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -15% 0px' }
    );

    elems.forEach((elem) => observer.observe(elem));
    return () => observer.disconnect();
  }, []);

  const CtaButton = ({ text = CTA_TEXT, className = "" }) => (
    <a
      href={CHECKOUT_URL}
      className={`btn-magnetic inline-flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-[#F9D776] text-[#332200] font-bold uppercase tracking-wide whitespace-nowrap rounded-full shadow-[0_0_30px_rgba(220,164,82,0.4)] hover:shadow-[0_0_40px_rgba(220,164,82,0.65)] transition-all ${className}`}
    >
      {text}
      <ArrowRight className="w-5 h-5 shrink-0" />
    </a>
  );

  const ProofLine = ({ className = "" }) => (
    <p className={`flex items-center justify-center gap-2 text-white/70 text-xs sm:text-sm ${className}`}>
      <Stars /> {REVIEWS_SCORE} estrelas em {REVIEWS_COUNT} avaliações
    </p>
  );

  return (
    <div ref={mainRef} className="w-full bg-background min-h-screen text-white font-sans selection:bg-accent selection:text-dark">
      <div className="noise-overlay"></div>

      {/* HERO: tudo acima da dobra no mobile */}
      <section className="relative w-full min-h-[100svh] flex flex-col bg-primary overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.07] mix-blend-overlay pointer-events-none">
          <img
            src="/assets/chave-hero.webp"
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            width="800"
            height="800"
            className="w-[420px] md:w-[700px] h-auto object-contain animate-float-spin"
          />
        </div>

        <div className="relative z-10 w-full bg-secondary py-2 px-4 text-center">
          <p className="text-[11px] sm:text-xs md:text-sm font-semibold text-white/90 tracking-wider uppercase leading-snug">
            {REVIEWS_SCORE} estrelas · {REVIEWS_COUNT} avaliações · Garantia de 7 dias
          </p>
        </div>

        <div className="relative z-10 flex-1 flex flex-col items-center justify-center w-full max-w-3xl mx-auto px-4 py-6 sm:py-8 text-center">
          <img
            src="/assets/logo-beaba.webp"
            alt="Beabá do Crédito"
            width="300"
            height="300"
            fetchPriority="high"
            decoding="async"
            className="hero-text w-24 sm:w-28 md:w-32 mb-4 drop-shadow-2xl"
          />

          <h1 className="hero-text font-display font-extrabold text-accent uppercase leading-[1.12] text-[1.9rem] sm:text-4xl md:text-[2.8rem] drop-shadow-lg">
            O banco não te nega crédito.<br className="hidden sm:block" />{' '}
            <span className="text-white">Ele nega a forma como você pede.</span>
          </h1>

          <p className="hero-text mt-4 text-white/90 text-base sm:text-lg md:text-xl leading-snug max-w-2xl">
            Em 90 dias sua empresa entra no banco sabendo <strong className="text-white">quanto pedir, em qual linha e o que arrumar antes</strong>. O manual completo da Rainha do Crédito, mais a comunidade, por {PRICE}.
          </p>

          <ul className="hero-text mt-5 w-full max-w-md text-left space-y-2 text-sm sm:text-base">
            {[
              'O cálculo exato de quanto sua empresa pode captar hoje',
              'Os 7 erros que derrubam aprovação e como corrigir cada um',
              'O plano de 90 dias, do diagnóstico à negociação'
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 bg-secondary/40 border border-accent/15 rounded-lg px-3 py-2">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-white/90">{item}</span>
              </li>
            ))}
          </ul>

          <div className="hero-text w-full mt-6">
            <CtaButton className="w-full sm:w-auto text-base sm:text-lg md:text-xl px-6 py-4 md:px-12 md:py-5" />
            <ProofLine className="mt-3" />
            <p className="mt-1 text-white/60 text-xs sm:text-sm">
              De <span className="line-through">{ANCHOR}</span> por {PRICE} ou {INSTALLMENTS} · 7 dias de garantia
            </p>
          </div>
        </div>
      </section>

      {/* MECANISMO */}
      <section className="py-16 md:py-24 px-5 bg-background">
        <div className="max-w-3xl mx-auto fade-up">
          <h2 className="text-2xl md:text-4xl font-display font-bold text-accent uppercase leading-tight text-center mb-8">
            O banco não empresta dinheiro. Ele compra confiança.
          </h2>

          <div className="bg-secondary/40 border border-accent/20 rounded-3xl p-6 md:p-10 shadow-2xl space-y-5 text-white/85 text-base md:text-lg leading-relaxed">
            <p>
              Sua empresa fatura, paga as contas, e mesmo assim o gerente some ou o app recusa em três segundos. Sem explicação. Só o "não".
            </p>
            <p>
              Duas empresas parecidas pedem o mesmo valor e recebem respostas opostas. A diferença não está no negócio. Está em como cada uma chega na mesa. <strong className="text-white">O banco olha sete coisas antes de dizer sim, e quase ninguém sabe quais são.</strong>
            </p>
            <ul className="grid sm:grid-cols-2 gap-2 text-base">
              {[
                'Tempo de CNPJ e histórico',
                'Regularidade do faturamento',
                'Score do sócio e rating do CNPJ',
                'Negativações, mesmo pequenas',
                'Quanto da receita já está comprometida',
                'Relacionamento com um banco principal',
                'Garantias e fundos garantidores'
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              Quem conhece a lista arruma a casa antes de pedir. Quem não conhece descobre o problema na negativa. <strong className="text-white">A maior parte das reprovações acontece antes de o pedido chegar ao banco.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* PROMESSA */}
      <section className="py-16 md:py-24 px-5 bg-primary">
        <div className="max-w-3xl mx-auto fade-up">
          <h2 className="text-2xl md:text-4xl font-display font-bold text-accent uppercase leading-tight text-center mb-3">
            Como você vai entrar no banco da próxima vez
          </h2>
          <p className="text-center text-white/70 mb-8 text-base md:text-lg">
            Com o número na mão, a linha escolhida e a pasta pronta. É assim que empresa aprovada chega.
          </p>
          <div className="grid gap-3">
            {[
              ['Você vai saber quanto pode pedir', 'Um cálculo simples, com exemplo numérico, que mostra o valor e o prazo que cabem no seu caixa. Nunca mais pedir "o máximo que o banco deixar".'],
              ['Você vai saber em qual linha pedir', 'Giro, expansão, investimento, Pronampe ou Procred 360. Qual serve pro seu objetivo e qual tem a menor taxa pro seu faturamento.'],
              ['Você vai saber o que arrumar antes', 'Os 7 erros que derrubam aprovação e o ajuste de cada um. A maioria se resolve em semanas, e ninguém te contou.'],
              ['Você vai chegar com mais de uma proposta', 'Documentação viva, banco principal escolhido, pedido montado. Aí você compara e negocia, em vez de aceitar a primeira taxa.'],
              ['Você vai ter um plano com data', '90 dias em três fases de 30. Diagnóstico, estruturação, captação. Cada semana com a tarefa certa.']
            ].map(([title, sub]) => (
              <div key={title} className="bg-secondary/50 border border-accent/20 rounded-2xl p-5 md:p-6 flex gap-4">
                <Zap className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-white text-lg mb-1">{title}</h3>
                  <p className="text-white/70 leading-relaxed">{sub}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-white/70 text-base leading-relaxed max-w-2xl mx-auto">
            Existe trabalho sério de estruturação de crédito. Nós fazemos isso, e vale cada centavo pra operação grande. Mas ninguém deveria contratar nada sem entender o que está sendo feito. Com o Beabá você <strong className="text-white">decide se faz sozinho ou se chama quem faz</strong>. Escolha, não desespero.
          </p>
          <div className="mt-8 text-center">
            <CtaButton className="w-full md:w-auto text-base sm:text-lg px-6 py-5" />
          </div>
        </div>
      </section>

      {/* AUTORIDADE */}
      <section className="py-16 md:py-24 px-5 bg-background">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 fade-up">
          <div className="w-full md:w-2/5 relative">
            <div className="absolute inset-0 bg-accent rounded-full blur-[100px] opacity-20"></div>
            <img
              src="/assets/eliane.webp"
              alt="Eliane Moreira"
              width="640"
              height="960"
              loading="lazy"
              decoding="async"
              className="relative z-10 w-full max-w-xs mx-auto rounded-3xl border-4 border-accent shadow-2xl object-cover"
            />
          </div>
          <div className="w-full md:w-3/5 text-center md:text-left">
            <p className="text-accent/80 text-sm font-semibold uppercase tracking-widest mb-2">Quem escreveu o manual</p>
            <h2 className="text-2xl md:text-4xl font-display font-bold text-accent uppercase mb-2">Eliane Moreira</h2>
            <h3 className="text-lg font-bold text-white mb-5">A Rainha do Crédito</h3>
            <div className="grid grid-cols-2 gap-3 mb-5 max-w-sm mx-auto md:mx-0">
              <div className="bg-secondary/60 border border-accent/20 rounded-xl p-3">
                <p className="text-accent font-display font-black text-2xl md:text-3xl">16+</p>
                <p className="text-white/70 text-xs md:text-sm">anos no mercado financeiro</p>
              </div>
              <div className="bg-secondary/60 border border-accent/20 rounded-xl p-3">
                <p className="text-accent font-display font-black text-2xl md:text-3xl">R$ 500 mi</p>
                <p className="text-white/70 text-xs md:text-sm">em crédito aprovado</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed">
              Mais de R$ 500 milhões estruturados pra centenas de empresas. O Beabá é o método dela, escrito pra quem vai aplicar sozinho. Sem fórmula mágica. Um caminho testado por dezesseis anos.
            </p>
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section id="oferta" className="py-16 md:py-24 px-5 bg-primary relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full bg-accent opacity-[0.04] blur-[140px] rounded-full"></div>
        <div className="max-w-3xl mx-auto relative z-10 fade-up">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-accent uppercase text-center mb-3">
            Tudo que você recebe
          </h2>
          <p className="text-center text-white/70 mb-8">Acesso imediato. Pagamento único. Garantia de 7 dias.</p>

          <div className="space-y-3">
            {[
              [BookOpen, 'Beabá do Crédito · Volume 1', 'O manual completo em 8 módulos: tipos de crédito, cenário dos bancos, os 7 erros, como o banco avalia, capacidade de captação, engenharia de crédito, capital inteligente e o plano de 90 dias.'],
              [ListChecks, 'Plano de Captação em 90 dias', 'Três fases de 30 dias com checklist. O manual virando agenda.'],
              [FileText, 'Guia Pronampe e Procred 360', 'Quem pode, limite, taxa, prazo, qual pedir primeiro e o passo no e-CAC que trava a maioria dos pedidos.'],
              [Zap, '8 checklists "Coloque em prática"', 'Um por módulo. Fecha o capítulo e já sabe o que fazer na sua empresa naquela semana.'],
              [Crown, 'Comunidade da Rainha', 'Dúvidas respondidas, casos reais de quem está captando, avisos de linhas abertas. Você não age sozinho.'],
              [Shield, 'Garantia Rainha de 7 dias', 'Leia tudo, entre na comunidade. Se não for pra você, devolvemos. Sem pergunta.']
            ].map(([Icon, title, sub]) => (
              <div key={title} className="bg-secondary rounded-2xl p-5 md:p-6 flex gap-4 border border-accent/20">
                <Icon className="w-7 h-7 text-accent shrink-0" />
                <div>
                  <h3 className="font-bold text-white text-lg mb-1">{title}</h3>
                  <p className="text-white/70 leading-relaxed text-sm md:text-base">{sub}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-white/60 text-lg">De <span className="line-through">{ANCHOR}</span> por</p>
            <div className="text-accent font-black text-6xl md:text-8xl leading-none my-3 drop-shadow-lg">{PRICE}</div>
            <p className="text-white/80 text-lg">ou <strong className="text-white">{INSTALLMENTS}</strong></p>
            <p className="text-white/60 text-base mb-6">Pagamento único. Sem recorrência.</p>
            <CtaButton className="w-full md:w-auto text-base sm:text-lg md:text-xl px-6 py-5" />
            <ProofLine className="mt-3" />
            <p className="mt-1 text-white/50 text-sm">Pix ou cartão · Acesso liberado na hora</p>
          </div>
        </div>
      </section>

      {/* PROVA SOCIAL */}
      <section className="py-16 md:py-24 px-5 bg-background">
        <div className="max-w-4xl mx-auto fade-up">
          <div className="text-center mb-8">
            <p className="flex items-center justify-center gap-2 mb-3"><Stars /></p>
            <h2 className="text-2xl md:text-4xl font-display font-bold text-accent uppercase leading-tight">
              {REVIEWS_SCORE} estrelas em {REVIEWS_COUNT} avaliações
            </h2>
            <p className="text-white/60 mt-2">Quem entrou antes de você.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {TESTIMONIALS.map((t, i) => (
              <figure key={i} className="bg-secondary rounded-2xl p-6 border border-accent/20 flex flex-col">
                <Quote className="w-6 h-6 text-accent/60 mb-3" />
                <blockquote className="text-white/85 leading-relaxed flex-1">{t.text}</blockquote>
                <figcaption className="mt-4 pt-4 border-t border-white/10 text-sm">
                  <Stars />
                  <p className="text-white font-semibold mt-1">{t.name}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* PRA QUEM É */}
      <section className="py-16 md:py-24 px-5 bg-primary">
        <div className="max-w-4xl mx-auto fade-up">
          <h2 className="text-2xl md:text-4xl font-display font-bold text-accent uppercase text-center mb-8">
            Pra quem é. E pra quem não é.
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-secondary/40 border border-accent/30 rounded-3xl p-6 md:p-8">
              <h3 className="font-bold text-accent text-lg mb-4">É pra você se</h3>
              <ul className="space-y-3 text-white/85">
                {[
                  'Tem CNPJ, do MEI à empresa que fatura milhões, e já tomou "não" sem explicação',
                  'Precisa de giro, quer expandir ou comprar equipamento e não sabe por onde começar',
                  'Vai contratar uma assessoria e quer entender o que está sendo feito'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-950/20 border border-red-500/20 rounded-3xl p-6 md:p-8">
              <h3 className="font-bold text-red-300 text-lg mb-4">Não é pra você se</h3>
              <ul className="space-y-3 text-white/75">
                {[
                  'Precisa do dinheiro amanhã. Crédito bem estruturado se planeja antes da urgência',
                  'Quer limpar o nome sem pagar a dívida',
                  'Quer "aprovação garantida". Quem aprova é o banco. O manual te prepara pra chegar lá'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* GARANTIA */}
      <section className="py-16 md:py-24 px-5 bg-background">
        <div className="max-w-3xl mx-auto fade-up">
          <div className="bg-secondary/40 border-2 border-accent rounded-[2.5rem] p-8 md:p-12 text-center shadow-[0_0_60px_rgba(220,164,82,0.15)]">
            <Shield className="w-14 h-14 text-accent mx-auto mb-5" />
            <h2 className="text-2xl md:text-4xl font-display font-bold text-accent uppercase mb-4">
              Garantia Rainha de 7 dias
            </h2>
            <p className="text-white/85 text-base md:text-lg leading-relaxed mb-6">
              Entre, leia os 8 módulos, participe da comunidade. Se em 7 dias você achar que não valeu, manda uma mensagem e os {PRICE} voltam. <strong className="text-white">Sem pergunta, sem burocracia.</strong>
            </p>
            <p className="text-accent font-bold text-lg md:text-xl">O risco é todo nosso. Dez reais por mês não deveria ser uma decisão difícil.</p>
            <div className="mt-6">
              <CtaButton className="w-full md:w-auto text-base sm:text-lg px-6 py-5" />
            </div>
          </div>
        </div>
      </section>

      {/* DÚVIDAS */}
      <section className="py-16 md:py-24 px-5 bg-primary">
        <div className="max-w-3xl mx-auto fade-up">
          <h2 className="text-2xl md:text-4xl font-display font-bold text-accent uppercase text-center mb-8">
            Dúvidas antes de entrar
          </h2>
          <div className="space-y-3">
            {[
              {
                q: 'Por que tão barato, se a assessoria custa milhares?',
                a: 'Porque o manual é o método. A assessoria é a Eliane aplicando o método na sua empresa, com a mão dela. Por R$ 97 você aprende a regra do jogo e aplica sozinho. Quem entra, aplica e cresce, um dia volta pra buscar mais. É assim que a casa se sustenta.'
              },
              {
                q: 'Serve pra minha empresa?',
                a: 'MEI, ME, EPP, Simples, Lucro Presumido ou Real. Os critérios do banco valem do MEI à empresa que capta milhões. Muda o tamanho da operação, não a regra.'
              },
              {
                q: 'Meu nome (ou o da empresa) está sujo. Ainda dá?',
                a: 'Dá. O manual mostra o que trava sua aprovação e em que ordem resolver. Muita gente é negada por coisa que se ajusta em semanas e nem sabe. Ele não limpa seu nome; te mostra o caminho.'
              },
              {
                q: 'Vocês garantem a aprovação?',
                a: 'Não, e desconfie de quem garante. Quem aprova é o banco. O que o manual faz é você chegar lá do jeito que o banco quer ver. Não existe aprovação garantida. Existe pedido bem preparado e pedido no escuro.'
              },
              {
                q: 'Preciso entender de finanças?',
                a: 'Não. É escrito em português de gente, com exemplo numérico pra cada conta. É literalmente um beabá.'
              },
              {
                q: 'Como recebo o acesso?',
                a: 'Na hora. Pagamento confirmado, chega no seu e-mail o link do manual e o convite da Comunidade da Rainha.'
              }
            ].map((faq, i) => (
              <details key={i} className="group bg-secondary rounded-2xl p-5 md:p-6 cursor-pointer border border-transparent hover:border-accent/30 transition-colors">
                <summary className="font-bold text-base md:text-lg text-white list-none flex justify-between items-center gap-4">
                  {faq.q}
                  <ChevronDown className="w-5 h-5 text-accent shrink-0 group-open:rotate-180 transition-transform" />
                </summary>
                <p className="mt-3 text-white/70 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-16 md:py-20 bg-dark text-white/40 text-center px-5 border-t border-white/5">
        <div className="max-w-3xl mx-auto mb-12 fade-up">
          <h2 className="text-2xl md:text-4xl font-display font-bold text-white uppercase mb-3">Em 90 dias, sua empresa chega no banco diferente.</h2>
          <h3 className="text-xl md:text-2xl text-accent font-bold mb-3">Não porque o mercado mudou. Porque você mudou a forma de pedir.</h3>
          <p className="text-white/60 mb-8">Manual + plano de 90 dias + comunidade. De {ANCHOR} por {PRICE} ou {INSTALLMENTS}, com 7 dias de garantia.</p>
          <CtaButton className="w-full md:w-auto text-base sm:text-lg px-6 py-5" />
        </div>

        <div className="max-w-3xl mx-auto pt-8 border-t border-white/5">
          <h3 className="font-display font-bold text-lg text-white/60 mb-5 uppercase tracking-widest leading-relaxed">
            Beabá do Crédito
            <br />
            Eliane Moreira
          </h3>
          <p className="text-sm mb-8 max-w-2xl mx-auto leading-relaxed">
            Este site não é afiliado ao Facebook. A compra deste material não garante aprovação de crédito; quem decide é a instituição financeira. O resultado depende da aplicação do conteúdo.
          </p>
          <p className="text-xs">Copyright © 2026 Todos os Direitos Reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
