import { useId, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Droplets,
  Leaf,
  Menu,
  Mountain,
  Sun,
  X,
} from "lucide-react";
import { outcomes, principles, strategicAxes, timeline } from "@/data/plan";

const priorityPrograms = [
  {
    title: "Saúde preventiva e longevidade",
    text: "Preparar a rede de saúde para o envelhecimento da população, com prevenção e cuidado geriátrico.",
    axis: "Eixo 6 · Segurança e bem-estar",
    href: "#eixo-06",
  },
  {
    title: "Cidades acessíveis a todas as idades",
    text: "Planejar calçadas, travessias, moradia e transporte para que mais pessoas circulem com autonomia.",
    axis: "Eixo 3 · Território e mobilidade",
    href: "#eixo-03",
  },
  {
    title: "Trabalho e produtividade",
    text: "Ampliar a qualificação profissional e criar empregos a partir das atividades que Alvaria já conhece.",
    axis: "Eixo 2 · Trabalho e economia",
    href: "#eixo-02",
  },
];

function Emblem({ small = false }: { small?: boolean }) {
  return (
    <span className={`emblem${small ? " emblem-small" : ""}`} aria-hidden="true">
      <img src="/manus-storage/ppla-emblem_f156a935.png" alt="" />
    </span>
  );
}

function Flag() {
  return (
    <svg className="flag" viewBox="0 0 66 44" role="img" aria-label="Bandeira ilustrativa de Alvaria, inspirada nas cores e no símbolo do PPLA">
      <rect x="1" y="1" width="64" height="42" rx="5" fill="#17366B" />
      <path d="M1 12h64v20H1z" fill="#F7F8F5" />
      <path d="M1 32h64v6a5 5 0 0 1-5 5H6a5 5 0 0 1-5-5v-6Z" fill="#237247" />
      <image href="/manus-storage/ppla-emblem_f156a935.png" x="27" y="4" width="12" height="36" preserveAspectRatio="xMidYMid meet" />
      <rect x="1" y="1" width="64" height="42" rx="5" fill="none" stroke="#D2D7D4" />
    </svg>
  );
}

function CountryMap() {
  const mapId = useId().replace(/:/g, "");
  return (
    <div className="map-art" aria-label="Mapa esquemático de Alvaria: montanhas no norte, rios, planícies centrais e planalto ao sul">
      <svg className="country-svg" viewBox="0 0 520 500" role="img" aria-labelledby={`${mapId}-mapTitle ${mapId}-mapDesc`}>
        <title id={`${mapId}-mapTitle`}>Mapa esquemático de Alvaria</title>
        <desc id={`${mapId}-mapDesc`}>Um território fictício com cadeia montanhosa ao norte, dois rios que atravessam as planícies centrais e um planalto ao sul.</desc>
        <defs>
          <clipPath id={`${mapId}-countryClip`}>
            <path d="M184 39 230 23l33 15 37-8 31 27 42-4 30 34-7 40 28 33-10 43 17 34-24 36-1 44-29 23-15 44-38 18-40 42-41-12-24-31-47-9-17-35-34-16-11-43-31-28 14-42-12-36 26-30-3-38 34-26 1-37 36-20Z" />
          </clipPath>
          <pattern id={`${mapId}-mapGrid`} width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M24 0H0V24" fill="none" stroke="#65786a" strokeOpacity=".08" strokeWidth=".7" />
          </pattern>
        </defs>
        <g opacity=".6">
          <path d="M53 70c75-33 155-41 245-18M27 124c113-45 262-44 363-3M42 344c100 45 212 52 336 1M74 402c86 36 181 39 261 9" fill="none" stroke="#C8BFA9" strokeWidth="1" strokeDasharray="3 7" />
          <path d="M70 90c80-31 169-31 251-6M76 370c84 37 174 39 269 3" fill="none" stroke="#C8BFA9" strokeWidth="1" />
        </g>
        <path d="M184 39 230 23l33 15 37-8 31 27 42-4 30 34-7 40 28 33-10 43 17 34-24 36-1 44-29 23-15 44-38 18-40 42-41-12-24-31-47-9-17-35-34-16-11-43-31-28 14-42-12-36 26-30-3-38 34-26 1-37 36-20Z" fill="#E7EDE9" stroke="#17366B" strokeWidth="2.2" />
        <g clipPath={`url(#${mapId}-countryClip)`}>
          <path d="M130 17h300v128H130z" fill="#D7DFD0" />
          <path d="M125 143h310v179H125z" fill="#E6E9D9" />
          <path d="M117 322h310v155H117z" fill="#E2D8C3" />
          <rect x="120" y="18" width="320" height="450" fill={`url(#${mapId}-mapGrid)`} />
          <path d="m176 98 30-24 19 19 24-36 24 29 24-22 25 37 25-14 37 35" fill="none" stroke="#A49A86" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="m192 110 19-15 12 12 22-32 22 23 26-18 23 34 18-10 23 23" fill="none" stroke="#B8AC94" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M172 104c36 40 57 53 70 81 20 41 43 71 42 112-1 27 8 62 41 105" fill="none" stroke="#8DB8B5" strokeWidth="5" strokeLinecap="round" />
          <path d="M345 119c-28 37-36 64-30 100 7 41 18 75 5 108-11 28-7 50 14 72" fill="none" stroke="#6A9E9E" strokeWidth="4" strokeLinecap="round" />
          <path d="M174 104c36 40 57 53 70 81 20 41 43 71 42 112-1 27 8 62 41 105M345 119c-28 37-36 64-30 100 7 41 18 75 5 108-11 28-7 50 14 72" fill="none" stroke="#F7F8F5" strokeWidth="1" strokeLinecap="round" strokeDasharray="2 7" />
          <path d="M186 256c21-10 44-10 64 0M201 269c20-9 39-8 56 1M265 213c24-8 42-4 61 9M272 228c18-5 33-2 47 7" fill="none" stroke="#9EAF7E" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M215 359c40-12 75-9 110 8M208 370c36-9 67-6 96 7" fill="none" stroke="#AA9A78" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 5" />
        </g>
        <g className="map-point" transform="translate(285 177)"><circle r="13" fill="#F7F8F5" stroke="#237247" strokeWidth="2" /><path d="M-5 3h10M-3 3v-7h6v7M-5-4l5-4 5 4" stroke="#17366B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></g>
        <g className="map-point" transform="translate(245 300)"><circle r="13" fill="#F7F8F5" stroke="#237247" strokeWidth="2" /><path d="M-5 1c2-2 4-2 6 0s4 2 6 0M-5 4c2-2 4-2 6 0s4 2 6 0" stroke="#2B8290" strokeWidth="1.4" strokeLinecap="round" /></g>
        <g className="map-point" transform="translate(317 350)"><circle r="13" fill="#F7F8F5" stroke="#237247" strokeWidth="2" /><circle cx="0" cy="0" r="3" fill="#237247" /><path d="M0-7v2M0 5v2M-7 0h2M5 0h2" stroke="#237247" strokeWidth="1.5" strokeLinecap="round" /></g>
      </svg>
      <span className="map-label map-label-north"><Mountain size={13} /> Norte · montanhas</span>
      <span className="map-label map-label-river"><Droplets size={13} /> Dois grandes rios</span>
      <span className="map-label map-label-south"><Sun size={13} /> Planalto do sul</span>
      <span className="map-compass" aria-hidden="true">N <span>↑</span></span>
      <div className="map-caption"><span className="caption-dot" /> Mapa ilustrativo · distribuição esquemática</div>
    </div>
  );
}

function ProposalRow({ proposal }: { proposal: (typeof strategicAxes)[number]["proposals"][number] }) {
  return (
    <details className="proposal-row">
      <summary>
        <span className="proposal-code">{proposal.code}</span>
        <span className="proposal-summary">
          <strong>{proposal.title}</strong>
          <span className="proposal-problem">{proposal.problem}</span>
        </span>
        <span className="proposal-toggle" aria-label="Expandir proposta"><ChevronDown size={18} /></span>
      </summary>
      <div className="proposal-details">
        <div className="proposal-detail proposal-evidence"><span>O dado</span><p>{proposal.evidence}</p></div>
        <div className="proposal-detail proposal-action"><span>A medida</span><p>{proposal.action}</p></div>
        <div className="proposal-detail"><span>Para quem</span><p>{proposal.beneficiaries}</p></div>
        <div className="proposal-detail proposal-target"><span>Meta em dez anos</span><p>{proposal.target}</p></div>
      </div>
    </details>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="alvaria-site">
      <a className="skip-link" href="#conteudo">Pular para o conteúdo principal</a>
      <div className="utility-bar">
        <div className="site-container utility-inner">
          <span>REPÚBLICA FICTÍCIA DE ALVARIA</span>
          <span className="utility-divider" />
          <span>PLANO ESTRATÉGICO DECENAL <b>2026—2036</b></span>
          <span className="utility-right">PROJETO ESCOLAR · SIMULAÇÃO DE GOVERNO</span>
        </div>
      </div>

      <header className="site-header">
        <div className="site-container header-inner">
          <a className="brand" href="#inicio" aria-label="Alvaria — início" onClick={closeMenu}>
            <Emblem />
            <span className="brand-copy"><strong>ALVARIA</strong><small>PPLA · GOVERNO 2026—2036</small></span>
          </a>
          <button className="menu-toggle" type="button" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <nav className={`primary-nav${menuOpen ? " nav-open" : ""}`} aria-label="Navegação principal">
            <a href="#prioridades" onClick={closeMenu}>Prioridades</a>
            <a href="#diagnostico" onClick={closeMenu}>O país</a>
            <a href="#eixos" onClick={closeMenu}>Sete eixos</a>
            <a href="#cronograma" onClick={closeMenu}>Cronograma</a>
            <a className="nav-cta" href="#eixos" onClick={closeMenu}>Conheça o plano <ArrowUpRight size={15} /></a>
          </nav>
        </div>
      </header>

      <main id="conteudo">
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <div className="site-container hero-inner">
            <div className="hero-meta"><span>Alvaria <i>/</i> carta de governo</span><span>2026 <b>→</b> 2036</span></div>
            <h1 id="hero-title"><span>Planejar o presente</span><span><em>para garantir</em> o futuro.</span></h1>
            <div className="hero-bottomline">
              <p className="hero-lede">Um plano para que as pessoas possam viver melhor, encontrar trabalho e contar com serviços preparados para o que vem pela frente.</p>
              <div className="hero-actions">
                <a className="button-primary" href="#prioridades">Conheça as prioridades <ArrowDown size={16} /></a>
                <a className="button-text" href="#diagnostico">O país por dentro <ArrowRight size={16} /></a>
              </div>
            </div>
            <div className="hero-signature">
              <div className="hero-party"><Flag /><span><small>Partido do Planejamento e Longevidade Ativa</small><strong>PPLA</strong></span></div>
              <p>“Planejar o presente para garantir o futuro.”</p>
              <span className="flag-note">Proposta ilustrativa de bandeira</span>
            </div>
          </div>
        </section>

        <section className="facts-strip" aria-label="Alvaria em números">
          <div className="site-container facts-grid">
            <div className="fact-item"><span className="fact-number">200<span> mi</span></span><span className="fact-label">habitantes</span></div>
            <div className="fact-item"><span className="fact-number">3,3<span> mi</span></span><span className="fact-label">km² de território</span></div>
            <div className="fact-item"><span className="fact-number">69<span> anos</span></span><span className="fact-label">expectativa de vida</span></div>
            <div className="fact-item"><span className="fact-number">12<span>%</span></span><span className="fact-label">de analfabetismo hoje</span></div>
            <p className="facts-source">Números de partida.<br />Escolhas que vêm deles.</p>
          </div>
        </section>

        <section className="priorities-section section-space" id="prioridades" aria-labelledby="priorities-title">
          <div className="site-container">
            <div className="section-intro priority-intro">
              <div><span className="section-index">01 <i>/ prioridade</i></span><h2 id="priorities-title">Cuidar de hoje.<br /><em>Preparar o amanhã.</em></h2></div>
              <p>A longevidade e a acessibilidade dão o norte ao PPLA. Em Alvaria, o trabalho começa antes: educação e qualificação para uma população ainda jovem, sem perder de vista os cuidados de que precisaremos no futuro.</p>
            </div>
            <ol className="priority-list">
              {priorityPrograms.map((item, index) => <li key={item.title}>
                <span className="priority-number">0{index + 1}</span>
                <div className="priority-copy"><h3>{item.title}</h3><p>{item.text}</p></div>
                <a href={item.href}>{item.axis} <ArrowUpRight size={16} /></a>
              </li>)}
            </ol>
            <div className="principles-line">
              <span>O que orienta o plano</span>
              {principles.map((principle) => <p key={principle.number}><b>{principle.title}</b>{principle.text}</p>)}
            </div>
          </div>
        </section>

        <section className="territory-section section-space" id="diagnostico" aria-labelledby="territory-title">
          <div className="site-container">
            <div className="section-intro territory-intro">
              <div><span className="section-index">02 <i>/ território</i></span><h2 id="territory-title">O país também<br />escreve o <em>plano.</em></h2></div>
              <p>Rios, monções, cidades em crescimento e montanhas sujeitas a terremotos mudam o que cada região precisa. O mapa resume esse ponto de partida.</p>
            </div>
            <div className="territory-spread">
              <div className="territory-map">
                <div className="map-header"><div><span>LEITURA TERRITORIAL</span><strong>Um país, muitas paisagens</strong></div><span className="map-stamp">ALV<br />26</span></div>
                <CountryMap />
                <div className="map-legend"><span><i className="legend-river" /> Rios</span><span><i className="legend-mountain" /> Regiões montanhosas</span><span><i className="legend-project" /> Infraestrutura proposta</span></div>
                <p className="map-method">Esquema baseado nas descrições geográficas do projeto. Posições ilustrativas, não cartográficas.</p>
              </div>
              <aside className="territory-notes" aria-label="Leitura regional">
                <p className="territory-quote">As políticas mudam conforme o lugar.</p>
                <div className="regional-note"><Mountain size={18} /><div><h3>Norte montanhoso</h3><p>Normas antissísmicas, rotas seguras e abrigos.</p></div></div>
                <div className="regional-note"><Droplets size={18} /><div><h3>Planícies centrais e do leste</h3><p>Reservatórios sazonais, polos têxteis e parques solares.</p></div></div>
                <div className="regional-note"><Leaf size={18} /><div><h3>Paisagens naturais</h3><p>Parques ecoturísticos e recuperação das áreas mineradas.</p></div></div>
                <div className="diagnostic-stats">
                  <div><span>População</span><b>+25 mi</b><small>na última década</small></div>
                  <div><span>Densidade</span><b>61 hab/km²</b><small>no território</small></div>
                  <div><span>Escolaridade</span><b>8 anos</b><small>média de estudo</small></div>
                  <div><span>Analfabetismo</span><b>12%</b><small>ponto de partida</small></div>
                  <div><span>Desemprego</span><b>9%</b><small>taxa geral</small></div>
                  <div><span>Mulheres / homens</span><b>12 / 6%</b><small>desemprego</small></div>
                  <div><span>IDH</span><b>0,620</b><small>ponto de partida</small></div>
                  <div><span>Gini</span><b>0,360</b><small>desigualdade de renda</small></div>
                </div>
              </aside>
            </div>
            <div className="country-profile">
              <article><span>01 <i>/ pessoas</i></span><h3>Uma sociedade jovem e em movimento</h3><p>Alvaria tem 200 milhões de habitantes, crescimento anual de 1,2% e expectativa de vida de 69 anos. Muita gente deixa o campo pelas cidades; profissionais qualificados também saem do país.</p></article>
              <article><span>02 <i>/ trabalho</i></span><h3>Uma economia pronta para dar o próximo passo</h3><p>Arroz, trigo e algodão dividem espaço com a indústria têxtil, tecnologia e serviços terceirizados. O desemprego feminino é de 12%, o dobro do masculino.</p></article>
              <article><span>03 <i>/ ambiente</i></span><h3>Riqueza natural, estações extremas</h3><p>As monções se alternam com meses secos. Florestas, savanas e grandes reservas de carvão, ferro e bauxita pedem decisões que levem o longo prazo em conta.</p></article>
            </div>
          </div>
        </section>

        <section className="axes-section section-space" id="eixos" aria-labelledby="axes-title">
          <div className="site-container">
            <div className="section-intro axes-intro">
              <div><span className="section-index">03 <i>/ plano de governo</i></span><h2 id="axes-title">Sete frentes.<br /><em>Quatorze propostas.</em></h2></div>
              <p>Abra cada proposta para ver o problema, o dado que lhe dá contexto, a ação prevista, quem se beneficia e a meta para os próximos dez anos.</p>
            </div>
            <div className="axes-list">{strategicAxes.map((axis) => {
              const Icon = axis.icon;
              return <section className="axis-section" id={`eixo-${axis.number}`} key={axis.number} aria-labelledby={`axis-title-${axis.number}`}>
                <div className="axis-section-heading">
                  <span className="axis-number">{axis.number}</span>
                  <span className="axis-icon"><Icon size={20} strokeWidth={1.6} /></span>
                  <div><h3 id={`axis-title-${axis.number}`}>{axis.title}</h3><p>{axis.question}</p></div>
                  <span className="axis-count">02 propostas</span>
                </div>
                <div className="proposal-list">{axis.proposals.map((proposal) => <ProposalRow proposal={proposal} key={proposal.code} />)}</div>
              </section>;
            })}</div>
          </div>
        </section>

        <section className="outcomes-section" aria-labelledby="outcomes-title">
          <div className="site-container outcomes-inner">
            <div className="outcomes-heading"><span className="section-index">04 <i>/ horizonte 2036</i></span><h2 id="outcomes-title">O que queremos<br /><em>ver mudar.</em></h2><p>São metas do projeto de governo, não previsões. Cada uma vai depender das escolhas e do trabalho ao longo do caminho.</p></div>
            <div className="outcomes-list">{outcomes.map((outcome, index) => <div className="outcome-item" key={outcome.label}><span>0{index + 1}</span><strong>{outcome.value}</strong><p>{outcome.label}</p></div>)}</div>
          </div>
        </section>

        <section className="timeline-section section-space" id="cronograma" aria-labelledby="timeline-title">
          <div className="site-container">
            <div className="section-intro timeline-intro">
              <div><span className="section-index">05 <i>/ implementação</i></span><h2 id="timeline-title">O tempo do plano,<br /><em>passo a passo.</em></h2></div>
              <p>As medidas começam pelo que precisa de base, ganham escala no meio do caminho e chegam às metas em 2036.</p>
            </div>
            <ol className="timeline-rail">{timeline.map((stage, index) => <li className="timeline-stage" key={stage.period}>
              <span className="timeline-marker">0{index + 1}</span>
              <div className="timeline-stage-heading"><span>{stage.marker}</span><h3>{stage.period}</h3><small>{stage.years}</small></div>
              <p className="timeline-stage-intro">{stage.intro}</p>
              <ul>{stage.actions.map((action) => <li key={action}>{action}</li>)}</ul>
            </li>)}</ol>
          </div>
        </section>

        <section className="team-section" aria-labelledby="team-title">
          <div className="site-container team-inner">
            <div className="team-heading"><span className="section-index">06 <i>/ equipe do PPLA</i></span><h2 id="team-title">Um projeto feito<br />em <em>conjunto.</em></h2><p>As responsabilidades estão agrupadas conforme a distribuição registrada na Parte 1.</p></div>
            <ol className="team-list">
              <li><span>01</span><div><b>Lucas de Souza Vanzella</b><small>Presidente · Economia e Trabalho</small></div></li>
              <li><span>02</span><div><b>Vagner Arthur Sander da Silva</b><small>Vice-presidente · Educação e Desenvolvimento Social</small></div></li>
              <li><span>03</span><div><b>Nicholas Ritter Ledesma</b><small>Planejamento e Demografia · Meio Ambiente e Recursos Naturais</small></div></li>
              <li><span>04</span><div><b>Victor César Schwendler</b><small>Território, Cidades e Infraestrutura · Relações Exteriores</small></div></li>
              <li><span>05</span><div><b>Saimon Ferreira</b><small>Migrações e Integração · Cultura e Comunicação</small></div></li>
            </ol>
            <p className="team-note">Partido fictício · projeto escolar · equipe conforme a Parte 1.</p>
          </div>
        </section>
      </main>

      <footer className="site-footer"><div className="site-container footer-main"><a className="brand footer-brand" href="#inicio"><Emblem small /><span className="brand-copy"><strong>ALVARIA</strong><small>PPLA · GOVERNO 2026—2036</small></span></a><p>Partido do Planejamento<br />e Longevidade Ativa</p><a className="back-top" href="#inicio">Voltar ao início <ArrowUpRight size={15} /></a></div><div className="site-container footer-bottom"><span>PARTIDO DO PLANEJAMENTO E LONGEVIDADE ATIVA · PPLA</span><span>SIMULAÇÃO ESCOLAR · CONTEÚDO ACADÊMICO</span></div></footer>
    </div>
  );
}
