import { useState } from 'react';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#tracks', label: 'Tracks' },
  { href: '#work', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' }
];

export function Nav() {
  return (
    <header className="nav">
      <a href="#top" className="nav__mark cursor-target">
        VP
      </a>
      <nav className="nav__links">
        {NAV_LINKS.map(link => (
          <a key={link.href} href={link.href} className="nav__link cursor-target">
            {link.label}
          </a>
        ))}
      </nav>
      <a
        href="https://github.com/vi-c-ky"
        target="_blank"
        rel="noreferrer"
        className="nav__cta cursor-target"
      >
        GitHub ↗
      </a>
    </header>
  );
}

export function Hero() {
  return (
    <section id="top" className="hero">
      <p className="eyebrow">Computer Science &amp; AI — University of Edinburgh</p>
      <h1 className="hero__name">Vicky Paterson</h1>
      <p className="hero__role">
        Final-year student specialising in software and systems engineering — distributed
        training, limit-order-book simulation, real-time anomaly detection — alongside ML
        research in cancer genomics and drug discovery. Applying across big tech, quant/fintech
        and biotech grad schemes.
      </p>
      <div className="hero__actions">
        <a href="#work" className="button button--primary cursor-target">
          See the work
        </a>
        <a
          href="https://openreview.net/profile?id=~Victoria_Paterson1"
          target="_blank"
          rel="noreferrer"
          className="button button--ghost cursor-target"
        >
          OpenReview ↗
        </a>
      </div>
    </section>
  );
}

export function About({ photoUrl }) {
  return (
    <section id="about" className="about">
      <div className="about__frame cursor-target">
        {photoUrl ? (
          <img src={photoUrl} alt="Portrait of Vicky Paterson" />
        ) : (
          <div className="about__placeholder">
            <span>Add photo.jpg to</span>
            <code>src/assets/</code>
          </div>
        )}
      </div>
      <div className="about__text">
        <p className="eyebrow">About</p>
        <p>
          I'm a final-year Computer Science &amp; AI student at Edinburgh. I build production-grade
          systems from first principles — distributed training on raw sockets, limit-order-book
          simulators with multi-agent RL, real-time anomaly detection ensembles — and carry out ML
          research at the intersection of AI and oncology: property prediction, generative molecular
          design, pan-cancer genomic analysis, mostly sole-author and written up for peer review.
        </p>
        <p>
          I'd rather report a negative result honestly than quietly drop it, and I write methods
          sections that admit the bugs I found along the way — that's the standard I hold my own
          work to, wherever it ends up applied. Dual UK–German national, based in Edinburgh, open
          to relocating internationally for the right role.
        </p>
      </div>
    </section>
  );
}

const TRACKS = [
  {
    key: 'engineering',
    id: '01',
    title: 'Software Engineering',
    body: 'Production-grade systems built from first principles — distributed training, limit-order-book simulation with multi-agent RL, real-time anomaly detection, portfolio optimisation — the CS fundamentals behind big-tech and quant applications.',
    items: ['touchstream — distributed training', 'orderflow — limit-order-book RL', 'bayesport — portfolio optimisation']
  },
  {
    key: 'research',
    id: '02',
    title: 'Research',
    body: 'Machine learning applied to cancer genomics and drug discovery: property prediction, generative molecular design, and pan-cancer genomic analysis, mostly sole-author and submitted for peer review.',
    items: ['SideGen — molecular generation', 'TumorEvo — tumour resistance simulation', 'esm-interp — protein LM interpretability']
  }
];

const WORK = [
  {
    name: 'touchstream',
    tag: 'Distributed systems',
    track: 'engineering',
    body: 'Distributed ML training built from first principles: ring AllReduce, gradient compression and fault-tolerant training implemented directly on Python sockets, without torch.distributed.',
    href: 'https://github.com/vi-c-ky/touchstream'
  },
  {
    name: 'SideGen',
    tag: 'Molecular generation',
    track: 'research',
    body: 'Conditional GNN-VAE for SMILES generation over a five-stage DrugCentral pipeline. Diagnosed and fixed a zero-latent-cache bug affecting 292 of 1,794 molecules; Moses-pretrained grammar pretraining lifted de novo validity from 3% to 45% in a controlled ablation. Final checkpoint: 40% de novo validity, 88% reconstruction.',
    href: null
  },
  {
    name: 'orderflow',
    tag: 'Market microstructure',
    track: 'engineering',
    body: 'Limit order book simulator with multi-agent reinforcement learning for studying market microstructure — a full L2 price-time priority book with multiple trader archetypes.',
    href: 'https://github.com/vi-c-ky/orderflow'
  },
  {
    name: 'Pan-cancer immune exclusion',
    tag: 'Cancer genomics',
    track: 'research',
    body: 'MOFA2 factor analysis across 11,060 samples and 31 cancer types. Factor 12 associated with survival (HR 1.18, p=0.003) and SKCM checkpoint resistance, with a CEACAM5 finding that lines up with an active ADC pipeline. The METABRIC validation came back negative — reported as such, not dropped.',
    href: null
  },
  {
    name: 'bayesport',
    tag: 'Portfolio optimisation',
    track: 'engineering',
    body: 'Bayesian portfolio optimisation library: Markowitz, Black-Litterman, full Bayesian MCMC and robust optimisation, with walk-forward backtesting and CVaR/stress testing.',
    href: 'https://github.com/vi-c-ky/bayesport'
  },
  {
    name: 'TumorEvo',
    tag: 'Systems biology',
    track: 'research',
    body: 'Two-drug tumour resistance simulator (ODE + RK4) with a virtual clinical trial engine — Kaplan-Meier survival curves and log-rank tests over synthetic patient cohorts.',
    href: 'https://github.com/vi-c-ky/TumorEvo'
  },
  {
    name: 'driftgaurd',
    tag: 'Fraud detection',
    track: 'engineering',
    body: 'Fraud detection system with automated concept-drift detection (ADWIN, Page-Hinkley, KS test) and shadow-deployment retraining, using XGBoost and SHAP.',
    href: 'https://github.com/vi-c-ky/driftgaurd'
  },
  {
    name: 'Genetic evidence for target–disease pairs',
    tag: 'Target discovery',
    track: 'research',
    body: 'XGBoost + SHAP over 26,278 Open Targets/ChEMBL target–disease pairs (OR 3.25). Submitted to PLOS Genetics; preprint on arXiv.',
    href: 'https://github.com/vi-c-ky/Human-genetic-evidence-associated-with-drug-approval'
  },
  {
    name: 'streamwatch',
    tag: 'Infra / monitoring',
    track: 'engineering',
    body: 'Real-time streaming anomaly detection for network and infrastructure monitoring, with an ensemble of detectors — CUSUM, EWMA, Isolation Forest, LSTM autoencoder, Anomaly Transformer.',
    href: 'https://github.com/vi-c-ky/streamwatch'
  },
  {
    name: 'esm-interp',
    tag: 'Interpretability',
    track: 'research',
    body: 'Mechanistic interpretability toolkit applying NLP-style analysis — attention-head classification, linear probing, activation patching, sparse autoencoders — to ESM2 protein language models.',
    href: 'https://github.com/vi-c-ky/esm-interp'
  }
];

export function TracksAndWork() {
  const [filter, setFilter] = useState(null);
  const activeTrack = TRACKS.find(t => t.key === filter);
  const visibleWork = filter ? WORK.filter(item => item.track === filter) : WORK;

  const toggleFilter = key => {
    setFilter(current => (current === key ? null : key));
  };

  return (
    <>
      <section id="tracks" className="tracks">
        <p className="eyebrow">Two disciplines</p>
        <h2 className="section-title">Software engineering first, research alongside it</h2>
        <p className="tracks__hint">Click a track to filter the work list below.</p>
        <div className="tracks__grid">
          {TRACKS.map(track => (
            <button
              key={track.key}
              type="button"
              aria-pressed={filter === track.key}
              onClick={() => toggleFilter(track.key)}
              className={`tracks__item cursor-target ${filter === track.key ? 'is-active' : ''}`}
            >
              <span className="tracks__id">{track.id}</span>
              <h3>{track.title}</h3>
              <p>{track.body}</p>
              <ul>
                {track.items.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </button>
          ))}
        </div>
      </section>

      <section id="work" className="work">
        <div className="work__header">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="section-title">
              {activeTrack ? `${activeTrack.title} projects` : 'All projects'}
            </h2>
          </div>
          {activeTrack && (
            <button type="button" className="work__clear cursor-target" onClick={() => setFilter(null)}>
              Show all ✕
            </button>
          )}
        </div>
        <ol className="work__list">
          {visibleWork.map((item, idx) => {
            const Wrapper = item.href ? 'a' : 'div';
            const wrapperProps = item.href
              ? { href: item.href, target: '_blank', rel: 'noreferrer' }
              : {};
            return (
              <Wrapper key={item.name} className="work__row cursor-target" {...wrapperProps}>
                <span className="work__index">{String(idx + 1).padStart(2, '0')}</span>
                <div className="work__main">
                  <div className="work__heading">
                    <h3>{item.name}</h3>
                    <span className="work__tag">{item.tag}</span>
                  </div>
                  <p>{item.body}</p>
                </div>
                <span className="work__arrow">{item.href ? '↗' : ''}</span>
              </Wrapper>
            );
          })}
        </ol>
      </section>
    </>
  );
}

const SKILL_GROUPS = [
  {
    title: 'Languages & frameworks',
    items: ['Python', 'PyTorch', 'scikit-learn', 'XGBoost', 'NumPy / pandas', 'RDKit', 'JavaScript / React', 'Flask']
  },
  {
    title: 'Systems & infrastructure',
    items: ['Distributed training', 'Ring AllReduce', 'Python sockets', 'Multi-agent RL', 'Real-time streaming', 'Concept-drift monitoring', 'LOB simulation', 'Shadow deployment']
  },
  {
    title: 'Methods',
    items: ['Bayesian MCMC', 'VAEs / GNNs', 'Reinforcement learning', 'Factor analysis', 'Survival analysis', 'ODEs / RK4', 'NLP / transformers', 'Mechanistic interpretability', 'SHAP / explainability', 'Portfolio optimisation']
  },
  {
    title: 'Datasets',
    items: ['ChEMBL', 'TCGA', 'Open Targets', 'cBioPortal', 'SIDER', 'ClinicalTrials.gov', 'CCLE', 'Respeck']
  }
];

export function Skills() {
  return (
    <section id="skills" className="skills">
      <p className="eyebrow">Toolkit</p>
      <h2 className="section-title">Languages, methods &amp; datasets</h2>
      <div className="skills__groups">
        {SKILL_GROUPS.map(group => (
          <div key={group.title} className="skills__group">
            <h3>{group.title}</h3>
            <ul className="skills__tags">
              {group.items.map(item => (
                <li key={item} className="cursor-target">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="contact">
      <p className="eyebrow">Get in touch</p>
      <h2 className="section-title">Open to research and industry roles, worldwide</h2>
      <div className="contact__links">
        <a
          href="https://github.com/vi-c-ky"
          target="_blank"
          rel="noreferrer"
          className="button button--primary cursor-target"
        >
          GitHub ↗
        </a>
        <a
          href="https://openreview.net/profile?id=~Victoria_Paterson1"
          target="_blank"
          rel="noreferrer"
          className="button button--ghost cursor-target"
        >
          OpenReview ↗
        </a>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <p>Vicky Paterson — Edinburgh, Scotland</p>
      <p>Built with Lanyard, Threads &amp; TargetCursor from React Bits.</p>
    </footer>
  );
}
