import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle2, ChevronDown, Shield, Crown, BookOpen, Zap, ArrowRight, Play, Star, XCircle, ListChecks, FileText, Quote } from 'lucide-react';

// Trocar pelo link real do checkout quando estiver pronto
const CHECKOUT_URL = '#oferta';
const VSL_ID = 'kQM8D3em3eU';
const CTA_TEXT = 'Quero entrar por R$ 9,90';

// PROVA SOCIAL (dados informados pelo cliente em 2026-10-16)
const REVIEWS_COUNT = 'mais de 600';
const REVIEWS_SCORE = '5,0';
const TESTIMONIALS = [
  { name: 'Instituto Thomas', text: 'Consegui capital de giro e coloquei pra girar.' },
  { name: 'Dr. Fabio Neto', text: 'Ficava pulando de consultor em consultor e nunca conseguia chegar no crédito, todo mundo só me enrolando. Agora eu entendo como funciona e estou no processo pra chegar no crédito.' },
  { name: 'Maria Fátima, costureira', text: 'Eu não sabia os fundamentos básicos. Depois que comecei a me organizar, naturalmente o banco começou a me oferecer produtos. Hoje tenho cartão de crédito, capital de giro disponível se quiser, mas estou me organizando pra pegar um produto melhor.' }
];

// O player só é carregado no clique. Evita ~1 MB de scripts do YouTube no load.
function VslPlayer() {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <iframe
        className="absolute inset-0 w-full h-full"
        src={`https://www.youtube-nocookie.com/embed/${VSL_ID}?autoplay=1&rel=0&modestbranding=1`}
        title="Beabá do Crédito · Eliane Moreira"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label="Assistir ao vídeo"
      className="group absolute inset-0 w-full h-full flex items-center justify-center"
    >
      <img
        src={`https://i.ytimg.com/vi/${VSL_ID}/hqdefault.jpg`}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <span className="relative z-10 w-16 h-16 md:w-20 md:h-20 rounded-full bg-accent flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
        <Play className="w-7 h-7 md:w-9 md:h-9 text-primary ml-1 fill-primary" />
      </span>
    </button>
  );
}

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
      className={`btn-magnetic inline-flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-[#F9D776] text-[#332200] font-bold uppercase tracking-wide rounded-full shadow-[0_0_30px_rgba(220,164,82,0.4)] hover:shadow-[0_0_40px_rgba(220,164,82,0.65)] transition-all ${className}`}
    >
      {text}
      <ArrowRight className="w-5 h-5 shrink-0" />
    </a>
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

        {/* Barra superior */}
        <div className="relative z-10 w-full bg-secondary py-2 px-4 text-center">
          <p className="text-[11px] sm:text-xs md:text-sm font-semibold text-white/90 tracking-wider uppercase leading-snug">
            {REVIEWS_COUNT} avaliações · Garantia de 7 dias · Acesso imediato
          </p>
        </div>

        <div className="relative z-10 flex-1 flex flex-col items-center justify-center w-full max-w-3xl mx-auto px-4 py-4 sm:py-6 text-center">
          <img
            src="/assets/logo-beaba.webp"
            alt="Beabá do Crédito"
            width="300"
            height="300"
            fetchPriority="high"
            decoding="async"
            className="hero-text w-20 sm:w-24 md:w-32 mb-3 md:mb-4 drop-shadow-2xl"
          />

          <h1 className="hero-text font-display font-extrabold text-accent uppercase leading-[1.12] text-[1.75rem] sm:text-3xl md:text-[2.6rem] drop-shadow-lg">
            O banco não te nega crédito.<br className="hidden sm:block" />{' '}
            <span className="text-white">Ele nega a forma como você pede.</span>
          </h1>

          <p className="hero-text mt-3 md:mt-4 text-white/90 text-base sm:text-base md:text-lg leading-snug max-w-2xl">
            Por <strong className="text-white">R$ 9,90</strong> você entra na <strong className="text-accent">Comunidade da Rainha</strong> e recebe o manual que ensina, em 8 módulos e um plano de 90 dias, a pedir do jeito que o banco aprova. Nunca mais entre no banco no escuro.
          </p>

          {/* VSL */}
          <div className="hero-text w-full mt-4 md:mt-6">
            <p className="text-accent/90 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2">
              ▶ Assista antes de entrar
            </p>
            <div className="relative w-full aspect-video rounded-xl md:rounded-2xl overflow-hidden border-2 border-accent/30 shadow-[0_0_40px_rgba(0,0,0,0.5)] bg-dark">
              <VslPlayer />
            </div>
          </div>

          {/* CTA */}
          <div className="hero-text w-full mt-4 md:mt-6">
            <CtaButton className="w-full sm:w-auto text-base sm:text-lg md:text-xl px-6 py-4 md:px-12 md:py-5" />
            <p className="mt-2 flex items-center justify-center gap-2 text-white/70 text-xs sm:text-sm">
              <Stars /> {REVIEWS_SCORE} estrelas em {REVIEWS_COUNT} avaliações
            </p>
            <p className="mt-1 text-white/60 text-xs sm:text-sm">
              Pagamento único · Garantia de 7 dias · Acesso na hora
            </p>
          </div>

          {/* Entregáveis */}
          <ul className="hero-text mt-4 md:mt-6 w-full grid grid-cols-1 sm:grid-cols-3 gap-1.5 sm:gap-3 text-left">
            {[
              ['Beabá do Crédito · Vol. 1', '8 módulos, do tipo de linha à negociação'],
              ['Plano de Captação em 90 dias', 'checklist em 3 fases, dia 1 ao 90'],
              ['Comunidade da Rainha', 'dúvidas, casos reais, linhas abertas']
            ].map(([title, sub]) => (
              <li key={title} className="flex items-center sm:items-start gap-2 bg-secondary/40 border border-accent/15 rounded-lg px-3 py-2">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                <span className="text-[13px] sm:text-xs leading-tight">
                  <strong className="text-white block">{title}</strong>
                  <span className="text-white/60">{sub}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* DOR + MECANISMO */}
      <section className="py-20 md:py-28 px-5 bg-background">
        <div className="max-w-4xl mx-auto fade-up">
          <h2 className="text-2xl md:text-4xl font-display font-bold text-accent uppercase leading-tight text-center mb-8">
            O banco não empresta dinheiro. Ele compra confiança.
          </h2>

          <div className="bg-secondary/40 border border-accent/20 rounded-3xl p-6 md:p-10 shadow-2xl space-y-5 text-white/85 text-base md:text-lg leading-relaxed">
            <p>
              Você já pediu crédito pra empresa pelo menos uma vez. E ouviu um "não" que veio sem explicação. Só o "não". A empresa fatura, paga as contas, e mesmo assim o gerente some ou o app recusa em três segundos.
            </p>
            <p>
              Duas empresas parecidas, pedindo o mesmo valor, recebem respostas opostas. A diferença quase nunca está no negócio. Está em como cada uma chega na mesa. O empresário pede crédito como quem pede favor, na esperança de que dê certo. <strong className="text-white">O banco, do outro lado, está avaliando dados, não esperanças.</strong>
            </p>
            <p>
              E esses dados são conhecidos. O banco olha sete coisas antes de dizer sim:
            </p>
            <ul className="grid sm:grid-cols-2 gap-2 text-base">
              {[
                'Tempo de CNPJ e histórico',
                'Regularidade do faturamento, mais que o valor',
                'Score do CPF do sócio e rating do CNPJ',
                'Negativações e pendências, mesmo pequenas',
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
              Quem conhece essa lista arruma a casa antes de pedir. Quem não conhece descobre o problema na hora da negativa. <strong className="text-white">A maior parte das reprovações acontece antes mesmo de o pedido chegar ao banco.</strong>
            </p>
          </div>

          <div className="mt-8 grid gap-3">
            {[
              ['Pedir na linha errada, pro objetivo errado', 'Negativa no CNPJ, taxa alta, meses perdidos'],
              ['Misturar conta da empresa com conta da família', 'O primeiro sinal de risco que o analista procura'],
              ['Aceitar a primeira proposta do gerente', 'Você paga anos por uma decisão de 10 minutos']
            ].map(([situacao, consequencia]) => (
              <div key={situacao} className="bg-red-950/20 border border-red-500/20 rounded-2xl p-4 md:p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                <span className="font-semibold text-white/90">{situacao}</span>
                <span className="text-red-300/80 text-sm md:text-base md:text-right">{consequencia}</span>
              </div>
            ))}
            <div className="bg-secondary border-2 border-accent rounded-2xl p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-1">
              <span className="font-bold text-accent">Beabá do Crédito Vol. 1 + Comunidade da Rainha</span>
              <span className="text-white font-bold md:text-right">Você entende, arruma a casa e negocia. Por R$ 9,90</span>
            </div>
          </div>

          <p className="mt-8 text-center text-white/75 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            Existe trabalho sério de estruturação de crédito. Nós fazemos isso, e vale cada centavo pra quem precisa de uma operação grande e bem montada. Mas ninguém deveria contratar nada sem entender o que está sendo feito. O Beabá existe pra isso: você aprende a regra do jogo e <strong className="text-white">decide se faz sozinho ou se chama quem faz</strong>. Escolha, não desespero.
          </p>
        </div>
      </section>

      {/* AUTORIDADE */}
      <section className="py-20 md:py-24 px-5 bg-primary">
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
                <p className="text-white/70 text-xs md:text-sm">em operações de crédito aprovadas</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed mb-4">
              Participou da estruturação de mais de R$ 500 milhões em crédito pra centenas de empresas. Viu de perto por que empresa boa toma "não" e o que muda quando ela chega preparada.
            </p>
            <p className="text-white/80 leading-relaxed">
              O Beabá é o método dela, escrito pra quem vai aplicar sozinho. Sem fórmula mágica, sem promessa de aprovação garantida. Um caminho testado, repetido em centenas de empresas ao longo de dezesseis anos.
            </p>
          </div>
        </div>
      </section>

      {/* O QUE VOCÊ RECEBE */}
      <section id="oferta" className="py-20 md:py-28 px-5 bg-background relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full bg-accent opacity-[0.04] blur-[140px] rounded-full"></div>
        <div className="max-w-3xl mx-auto relative z-10 fade-up">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-accent uppercase text-center mb-3">
            Tudo que você recebe por R$ 9,90
          </h2>
          <p className="text-center text-white/70 mb-10">Acesso imediato. Pagamento único. Garantia de 7 dias.</p>

          <div className="space-y-4">
            <div className="bg-secondary rounded-2xl p-6 border border-accent/20">
              <div className="flex gap-4">
                <BookOpen className="w-8 h-8 text-accent shrink-0" />
                <div>
                  <h3 className="font-bold text-white text-lg mb-1">Beabá do Crédito · Volume 1 <span className="text-accent/70 text-sm font-normal">(valor: R$ 147)</span></h3>
                  <p className="text-white/70 leading-relaxed">O manual completo do acesso independente ao crédito empresarial. 8 módulos, em português de gente:</p>
                </div>
              </div>
              <ol className="mt-4 ml-12 space-y-1.5 text-sm text-white/80">
                {[
                  ['Tipos de crédito empresarial', 'giro, expansão, investimento, antecipação e as linhas do governo'],
                  ['O cenário atual dos bancos', 'por que agora é um momento de captar, e pra quem'],
                  ['Os 7 erros que derrubam aprovações', 'o que faz empresa boa ser recusada'],
                  ['Como bancos avaliam empresas', 'os critérios reais por trás de limite, taxa e aprovação'],
                  ['Capacidade de captação', 'o cálculo pra saber quanto sua empresa pode pedir hoje'],
                  ['Engenharia de crédito', 'como arrumar a casa pra reduzir o risco percebido'],
                  ['Crescimento com capital inteligente', 'usar crédito como alavanca sem sufocar o caixa'],
                  ['Plano de Captação em 90 dias', 'o passo a passo, do diagnóstico à negociação']
                ].map(([title, sub], i) => (
                  <li key={title} className="flex gap-2">
                    <span className="text-accent font-bold shrink-0">{String(i + 1).padStart(2, '0')}</span>
                    <span><strong className="text-white">{title}.</strong> {sub}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="bg-secondary rounded-2xl p-6 flex gap-4 border border-accent/20">
              <ListChecks className="w-8 h-8 text-accent shrink-0" />
              <div>
                <h3 className="font-bold text-white text-lg mb-1">Plano de Captação em 90 dias</h3>
                <p className="text-white/70 leading-relaxed">Três fases de 30 dias com checklist: diagnóstico e organização, estruturação, captação e negociação. É o manual virando agenda.</p>
              </div>
            </div>

            <div className="bg-secondary rounded-2xl p-6 flex gap-4 border border-accent/20">
              <FileText className="w-8 h-8 text-accent shrink-0" />
              <div>
                <h3 className="font-bold text-white text-lg mb-1">Guia Pronampe e Procred 360</h3>
                <p className="text-white/70 leading-relaxed">Quem pode, limite, taxa, prazo e qual escolher primeiro. Inclui o passo no e-CAC que trava a maioria dos pedidos.</p>
              </div>
            </div>

            <div className="bg-secondary rounded-2xl p-6 flex gap-4 border border-accent/20">
              <Zap className="w-8 h-8 text-accent shrink-0" />
              <div>
                <h3 className="font-bold text-white text-lg mb-1">8 checklists "Coloque em prática"</h3>
                <p className="text-white/70 leading-relaxed">Um por módulo. Você fecha o capítulo e já sabe o que fazer na sua empresa naquela semana.</p>
              </div>
            </div>

            <div className="bg-secondary rounded-2xl p-6 flex gap-4 border border-accent/20">
              <Crown className="w-8 h-8 text-accent shrink-0" />
              <div>
                <h3 className="font-bold text-white text-lg mb-1">Comunidade da Rainha <span className="text-accent/70 text-sm font-normal">(valor: R$ 197)</span></h3>
                <p className="text-white/70 leading-relaxed">Onde o crédito deixa de ser teoria. Dúvidas respondidas, casos reais de quem está captando, avisos de linhas abertas e gente andando pelo mesmo caminho que você.</p>
              </div>
            </div>

            <div className="bg-secondary rounded-2xl p-6 flex gap-4 border border-accent/20">
              <Shield className="w-8 h-8 text-accent shrink-0" />
              <div>
                <h3 className="font-bold text-white text-lg mb-1">Garantia Rainha de 7 dias</h3>
                <p className="text-white/70 leading-relaxed">Leia tudo, entre na comunidade. Se não for pra você, devolvemos os R$ 9,90. Sem pergunta.</p>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-white/60 text-lg">Valor real: <span className="line-through">R$ 344</span></p>
            <div className="text-accent font-black text-6xl md:text-8xl leading-none my-3 drop-shadow-lg">R$ 9,90</div>
            <p className="text-white/80 text-lg mb-6">Pagamento único. Sem recorrência.</p>
            <CtaButton className="w-full md:w-auto text-lg md:text-xl px-10 py-5" />
            <p className="mt-3 flex items-center justify-center gap-2 text-white/60 text-sm">
              <Stars /> {REVIEWS_SCORE} · {REVIEWS_COUNT} avaliações · Pix ou cartão
            </p>
          </div>
        </div>
      </section>

      {/* PRA QUEM É */}
      <section className="py-20 md:py-24 px-5 bg-primary">
        <div className="max-w-4xl mx-auto fade-up">
          <h2 className="text-2xl md:text-4xl font-display font-bold text-accent uppercase text-center mb-10">
            Pra quem é. E pra quem não é.
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-secondary/40 border border-accent/30 rounded-3xl p-6 md:p-8">
              <h3 className="font-bold text-accent text-lg mb-4">É pra você se</h3>
              <ul className="space-y-3 text-white/85">
                {[
                  'Tem CNPJ, do MEI à empresa que fatura milhões, e já tomou "não" sem explicação',
                  'Precisa de capital de giro, quer expandir ou comprar equipamento e não sabe por onde começar',
                  'Quer saber quanto sua empresa pode pedir antes de entrar no banco',
                  'Vai contratar uma assessoria e quer entender o que está sendo feito',
                  'Ainda vai abrir o CNPJ e quer começar do jeito certo'
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
                  'Quer limpar o nome sem pagar a dívida. Isso não existe, e o manual não promete',
                  'Procura empréstimo pessoal, não crédito pra empresa',
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

      {/* PROVA SOCIAL */}
      <section className="py-20 md:py-28 px-5 bg-background">
        <div className="max-w-4xl mx-auto fade-up">
          <div className="text-center mb-10">
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
          <div className="mt-8 text-center">
            <CtaButton className="w-full md:w-auto text-lg px-10 py-5" />
          </div>
        </div>
      </section>

      {/* GARANTIA */}
      <section className="py-20 md:py-24 px-5 bg-primary">
        <div className="max-w-3xl mx-auto fade-up">
          <div className="bg-secondary/40 border-2 border-accent rounded-[2.5rem] p-8 md:p-12 text-center shadow-[0_0_60px_rgba(220,164,82,0.15)]">
            <Shield className="w-14 h-14 text-accent mx-auto mb-5" />
            <h2 className="text-2xl md:text-4xl font-display font-bold text-accent uppercase mb-4">
              Garantia Rainha de 7 dias
            </h2>
            <h3 className="text-lg md:text-2xl font-bold text-white mb-6 leading-snug">
              Entre. Leia os 8 módulos. Participe da comunidade. Se não for pra você, devolvemos os R$ 9,90.
            </h3>
            <p className="text-white/75 text-base md:text-lg leading-relaxed mb-6">
              Você tem 7 dias pra usar tudo por dentro. Se achar que não valeu, manda uma mensagem e o valor volta. <strong className="text-white">Sem pergunta, sem burocracia, sem cara feia.</strong>
            </p>
            <p className="text-accent font-bold text-lg md:text-xl">
              O risco é todo nosso. Menos de dez reais não deveria ser uma decisão difícil.
            </p>
            <p className="mt-6 text-white/50 text-sm">Compra 100% segura · Pix ou cartão · Acesso liberado na hora</p>
          </div>
        </div>
      </section>

      {/* DÚVIDAS */}
      <section className="py-20 md:py-28 px-5 bg-background">
        <div className="max-w-3xl mx-auto fade-up">
          <h2 className="text-2xl md:text-4xl font-display font-bold text-accent uppercase text-center mb-10">
            As perguntas que todo mundo faz antes de entrar
          </h2>
          <div className="space-y-3">
            {[
              {
                q: 'R$ 9,90 mesmo? Onde está a pegadinha?',
                a: 'Não tem. O valor é baixo de propósito: a Eliane quer você dentro da comunidade. Quem entra, aplica e cresce, um dia volta pra buscar mais, e é assim que a casa se sustenta. É pagamento único, sem cobrança recorrente e sem letra miúda. E com 7 dias de garantia.'
              },
              {
                q: 'Serve pra mim?',
                a: 'Serve pra qualquer tipo de empresa: MEI, ME, EPP, Simples, Lucro Presumido, Lucro Real, empresa em expansão e até pra quem ainda vai abrir o CNPJ. O Volume 1 é a base do crédito empresarial. Os critérios valem do MEI à empresa que capta milhões. Muda o tamanho da operação, não a regra do jogo.'
              },
              {
                q: 'E se meu nome (ou o da empresa) estiver sujo?',
                a: 'O módulo 3 mostra os 7 erros que travam aprovação e o módulo 6 ensina a resolver pendências antes de pedir. Muita gente é negada por coisas que dariam pra ajustar em semanas e nem sabe disso. O manual não limpa seu nome, mas te mostra o que resolver e em que ordem.'
              },
              {
                q: 'Já me negaram crédito várias vezes. Ainda dá?',
                a: 'Dá. Negativa não é sentença. Na maioria das vezes é sinal de que você pediu na linha errada, no banco errado, do jeito errado. É exatamente isso que o manual ensina a corrigir, com um plano de 90 dias pra chegar diferente da próxima vez.'
              },
              {
                q: 'Vocês garantem a aprovação?',
                a: 'Não, e desconfie de quem garante. Quem aprova é o banco. O que o manual faz é você chegar lá do jeito que o banco quer ver: contas separadas, documentação em dia, pedido no valor e no prazo que cabem no seu caixa, na linha certa pro seu objetivo. Não existe aprovação garantida. Existe pedido bem preparado e pedido no escuro.'
              },
              {
                q: 'Preciso entender de finanças pra acompanhar?',
                a: 'Não. É escrito em português de gente, do zero, com um exemplo numérico pra cada conta. É literalmente um beabá.'
              },
              {
                q: 'Como recebo o acesso?',
                a: 'Na hora. Assim que o pagamento é confirmado, chega no seu e-mail o link do manual e o convite da Comunidade da Rainha.'
              },
              {
                q: 'O que exatamente é a Comunidade da Rainha?',
                a: 'É o grupo onde você tira dúvidas, acompanha casos reais de quem está captando, recebe avisos quando linhas boas abrem e não fica sozinho na hora de agir. O manual te ensina; a comunidade te sustenta.'
              },
              {
                q: 'Isso substitui uma assessoria de crédito?',
                a: 'Não, e nem deveria. Estruturação profissional é um trabalho sério, feito por gente experiente, e continua sendo o melhor caminho pra operações maiores e mais complexas. O que o Beabá faz é te dar critério: você para de contratar às cegas, entende o que está sendo feito com a sua empresa e decide com consciência o que faz sozinho e o que vale delegar.'
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
          <p className="text-white/60 mb-8">Manual + plano de 90 dias + comunidade. R$ 9,90, pagamento único, 7 dias de garantia.</p>
          <CtaButton className="w-full md:w-auto text-lg px-10 py-5" />
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
