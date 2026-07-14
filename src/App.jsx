import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle2, ChevronDown, Shield, Crown, BookOpen, Zap, ArrowRight, Play } from 'lucide-react';

// Trocar pelo link real do checkout quando estiver pronto
const CHECKOUT_URL = '#oferta';
const VSL_ID = 'kQM8D3em3eU';

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

  const CtaButton = ({ text, className = "" }) => (
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
            Acesso imediato · O mesmo caminho que já estruturou mais de R$ 400 milhões em crédito
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
            Por <strong className="text-white">R$ 9,90</strong> você entra na <strong className="text-accent">Comunidade da Rainha</strong> e recebe o manual que ensina, passo a passo, a pedir do jeito certo. Nunca mais entre no banco no escuro.
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
            <CtaButton text="Quero entrar agora" className="w-full sm:w-auto text-lg md:text-xl px-8 py-4 md:px-12 md:py-5" />
            <p className="mt-2 text-white/60 text-xs sm:text-sm">
              Acesso imediato · Comunidade + Manual Vol. 1 · Pagamento único
            </p>
          </div>

          {/* Entregáveis */}
          <ul className="hero-text mt-4 md:mt-6 w-full grid grid-cols-1 sm:grid-cols-3 gap-1.5 sm:gap-3 text-left">
            {[
              ['Comunidade da Rainha', 'onde o crédito vira prática'],
              ['Beabá do Crédito · Vol. 1', 'o manual do acesso independente'],
              ['Acesso imediato', 'na hora, pagamento único']
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

      {/* POR QUE R$ 9,90 */}
      <section className="py-20 md:py-28 px-5 bg-background">
        <div className="max-w-4xl mx-auto fade-up">
          <h2 className="text-2xl md:text-4xl font-display font-bold text-accent uppercase leading-tight text-center mb-8">
            Você não está pagando R$ 9,90 por um manual. Está pagando para parar de pedir crédito no escuro.
          </h2>

          <div className="bg-secondary/40 border border-accent/20 rounded-3xl p-6 md:p-10 shadow-2xl space-y-5 text-white/85 text-base md:text-lg leading-relaxed">
            <p>
              A maioria dos empresários chega no banco sem saber o que pedir, quanto pedir, nem o que o banco vai olhar. Aí aceita a primeira taxa, assina o que colocam na frente e ainda acha que foi azar.
              <strong className="text-white"> Não foi azar. Foi falta de mapa.</strong>
            </p>
            <p>
              Existe trabalho sério de estruturação. Nós fazemos isso, e vale cada centavo para quem precisa de uma operação grande e bem montada. <strong className="text-white">Mas ninguém deveria contratar nada sem entender o que está sendo feito.</strong> É para isso que existe o Beabá do Crédito: para você saber a regra do jogo antes de entrar em campo. Depois você escolhe se faz sozinho ou se chama quem faz. Escolha, não desespero.
            </p>
          </div>

          <div className="mt-8 grid gap-3">
            {[
              ['Pedir crédito sem entender a regra', 'Negativa no CNPJ, taxa alta, meses perdidos'],
              ['Aprender errando, sozinho', 'Cada erro custa dinheiro e histórico com o banco'],
              ['Aceitar a primeira proposta do gerente', 'Você paga anos por uma decisão de 10 minutos']
            ].map(([situacao, consequencia]) => (
              <div key={situacao} className="bg-red-950/20 border border-red-500/20 rounded-2xl p-4 md:p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                <span className="font-semibold text-white/90">{situacao}</span>
                <span className="text-red-300/80 text-sm md:text-base md:text-right">{consequencia}</span>
              </div>
            ))}
            <div className="bg-secondary border-2 border-accent rounded-2xl p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-1">
              <span className="font-bold text-accent">Beabá do Crédito Vol. 1 + Comunidade da Rainha</span>
              <span className="text-white font-bold md:text-right">Você entende, decide e negocia. Por R$ 9,90</span>
            </div>
          </div>

          <p className="mt-8 text-center text-xl md:text-2xl font-display font-bold text-white">
            Uma única taxa negociada do jeito certo paga isso <span className="text-accent">dez mil vezes</span>.
          </p>
        </div>
      </section>

      {/* O QUE VOCÊ RECEBE */}
      <section id="oferta" className="py-20 md:py-28 px-5 bg-primary relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full bg-accent opacity-[0.04] blur-[140px] rounded-full"></div>
        <div className="max-w-3xl mx-auto relative z-10 fade-up">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-accent uppercase text-center mb-10">
            Acesso imediato a tudo isso
          </h2>

          <div className="space-y-4">
            <div className="bg-secondary rounded-2xl p-6 flex gap-4 border border-accent/20">
              <BookOpen className="w-8 h-8 text-accent shrink-0" />
              <div>
                <h3 className="font-bold text-white text-lg mb-1">Beabá do Crédito · Volume 1 <span className="text-accent/70 text-sm font-normal">(valor: R$ 147)</span></h3>
                <p className="text-white/70 leading-relaxed">O manual completo do acesso independente ao crédito: quais linhas existem, qual serve para você, o que o banco realmente olha, o que derruba sua aprovação e como se apresentar para ser aprovado.</p>
              </div>
            </div>

            <div className="bg-secondary rounded-2xl p-6 flex gap-4 border border-accent/20">
              <Crown className="w-8 h-8 text-accent shrink-0" />
              <div>
                <h3 className="font-bold text-white text-lg mb-1">Comunidade da Rainha <span className="text-accent/70 text-sm font-normal">(valor: R$ 197)</span></h3>
                <p className="text-white/70 leading-relaxed">O lugar onde o crédito deixa de ser teoria. Dúvidas respondidas, casos reais, avisos de linhas abertas e gente andando pelo mesmo caminho que você.</p>
              </div>
            </div>

            <div className="bg-secondary rounded-2xl p-6 flex gap-4 border border-accent/20">
              <Zap className="w-8 h-8 text-accent shrink-0" />
              <div>
                <h3 className="font-bold text-white text-lg mb-1">Acesso imediato e vitalício ao Volume 1</h3>
                <p className="text-white/70 leading-relaxed">Cai no seu e-mail em minutos. Quando o dinheiro é urgente, tempo vale mais que desconto.</p>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-white/60 text-lg">Valor real: <span className="line-through">R$ 344</span></p>
            <div className="text-accent font-black text-6xl md:text-8xl leading-none my-3 drop-shadow-lg">R$ 9,90</div>
            <p className="text-white/80 text-lg mb-8">Pagamento único. Sem recorrência.</p>
            <CtaButton text="Quero entrar agora" className="w-full md:w-auto text-lg md:text-xl px-10 py-5" />
          </div>
        </div>
      </section>

      {/* GARANTIA */}
      <section className="py-20 md:py-24 px-5 bg-background">
        <div className="max-w-3xl mx-auto fade-up">
          <div className="bg-secondary/40 border-2 border-accent rounded-[2.5rem] p-8 md:p-12 text-center shadow-[0_0_60px_rgba(220,164,82,0.15)]">
            <Shield className="w-14 h-14 text-accent mx-auto mb-5" />
            <h2 className="text-2xl md:text-4xl font-display font-bold text-accent uppercase mb-4">
              Garantia Rainha de 7 dias
            </h2>
            <h3 className="text-lg md:text-2xl font-bold text-white mb-6 leading-snug">
              Entre. Leia tudo. Participe da comunidade. Se não for para você, devolvemos os R$ 9,90.
            </h3>
            <p className="text-white/75 text-base md:text-lg leading-relaxed mb-6">
              Você tem 7 dias para usar tudo por dentro. Se achar que não valeu, manda uma mensagem e o valor volta. <strong className="text-white">Sem pergunta, sem burocracia, sem cara feia.</strong>
            </p>
            <p className="text-accent font-bold text-lg md:text-xl">
              O risco é todo nosso. Menos de dez reais não deveria ser uma decisão difícil.
            </p>
            <p className="mt-6 text-white/50 text-sm">Compra 100% segura · Pix ou cartão · Acesso liberado na hora</p>
          </div>
        </div>
      </section>

      {/* DÚVIDAS */}
      <section className="py-20 md:py-28 px-5 bg-primary">
        <div className="max-w-3xl mx-auto fade-up">
          <h2 className="text-2xl md:text-4xl font-display font-bold text-accent uppercase text-center mb-10">
            As perguntas que todo mundo faz antes de entrar
          </h2>
          <div className="space-y-3">
            {[
              {
                q: 'R$ 9,90 mesmo? Onde está a pegadinha?',
                a: 'Não tem. O valor é baixo de propósito: a Eliane quer você dentro da comunidade. Quem entra, aplica e cresce, um dia volta para buscar mais, e é assim que a casa se sustenta. É pagamento único, sem cobrança recorrente e sem letra miúda.'
              },
              {
                q: 'Serve pra mim?',
                a: 'Serve para qualquer tipo de empresa: MEI, ME, EPP, Simples, Lucro Presumido, Lucro Real, empresa em expansão e até para quem ainda vai abrir o CNPJ. O Volume 1 é a base do crédito empresarial. Os princípios valem do MEI à empresa que capta milhões. Muda o tamanho da operação, não a regra do jogo.'
              },
              {
                q: 'E se meu nome (ou o da empresa) estiver sujo?',
                a: 'O manual mostra exatamente o que trava sua aprovação e o que dá para resolver antes de pedir. Muita gente é negada por coisas que dariam para ajustar em semanas e nem sabe disso.'
              },
              {
                q: 'Já me negaram crédito várias vezes. Ainda dá?',
                a: 'Dá. Negativa não é sentença. Na maioria das vezes é sinal de que você pediu na linha errada, no banco errado, do jeito errado. É exatamente isso que você vai aprender a corrigir.'
              },
              {
                q: 'Preciso entender de finanças para acompanhar?',
                a: 'Não. É escrito em português de gente, do zero. É literalmente um beabá.'
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
                a: 'Não, e nem deveria. Estruturação profissional é um trabalho sério, feito por gente experiente, e continua sendo o melhor caminho para operações maiores e mais complexas. O que o Beabá faz é te dar critério: você para de contratar às cegas, entende o que está sendo feito com a sua empresa e decide com consciência o que faz sozinho e o que vale delegar.'
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

      {/* AUTORIDADE + FECHAMENTO */}
      <section className="py-20 md:py-24 px-5 bg-background">
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
            <h2 className="text-2xl md:text-4xl font-display font-bold text-accent uppercase mb-2">Eliane Moreira</h2>
            <h3 className="text-lg font-bold text-white mb-5">Especialista em crédito empresarial</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              Mais de 16 anos no mercado financeiro e participação na estruturação de mais de R$ 400 milhões em operações de crédito aprovadas.
            </p>
            <p className="text-white/80 leading-relaxed">
              Hoje ela ensina o que aprendeu na prática: como uma empresa se torna financiável e como o empresário para de depender da sorte para acessar capital.
            </p>
          </div>
        </div>
      </section>

      <footer className="py-16 md:py-20 bg-dark text-white/40 text-center px-5 border-t border-white/5">
        <div className="max-w-3xl mx-auto mb-12 fade-up">
          <h2 className="text-2xl md:text-4xl font-display font-bold text-white uppercase mb-3">O banco não aprova empresas por sorte.</h2>
          <h3 className="text-xl md:text-2xl text-accent font-bold mb-8">Aprova quem sabe o que está fazendo.</h3>
          <CtaButton text="Quero entrar agora" className="w-full md:w-auto text-lg px-10 py-5" />
        </div>

        <div className="max-w-3xl mx-auto pt-8 border-t border-white/5">
          <h3 className="font-display font-bold text-lg text-white/60 mb-5 uppercase tracking-widest leading-relaxed">
            Beabá do Crédito
            <br />
            Eliane Moreira
          </h3>
          <p className="text-sm mb-8 max-w-2xl mx-auto leading-relaxed">
            Este site não é afiliado ao Facebook. A compra deste material não garante resultados automáticos; o sucesso depende da aplicação correta do conteúdo.
          </p>
          <p className="text-xs">Copyright © 2026 Todos os Direitos Reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
