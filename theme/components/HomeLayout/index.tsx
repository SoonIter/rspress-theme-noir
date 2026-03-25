import { useSite } from '@rspress/core/runtime';

const features = [
  {
    icon: '\u26A1',
    title: 'Blazing Fast',
    desc: 'Rust-powered compilation delivers near-instant builds. Your development flow stays uninterrupted.',
    link: '/guide/start/introduction',
  },
  {
    icon: '\u270F\uFE0F',
    title: 'MDX Native',
    desc: 'Write content in MDX — blend Markdown simplicity with the full power of React components.',
    link: '/guide/use-mdx/components',
  },
  {
    icon: '\uD83D\uDD0D',
    title: 'Full-Text Search',
    desc: 'Built-in search index generated at build time. Zero configuration, instant results.',
    link: 'https://rspress.rs/guide/advanced/custom-search',
  },
  {
    icon: '\uD83E\uDD16',
    title: 'AI-Friendly',
    desc: 'Generates llms.txt compliant output so large language models can understand your documentation.',
    link: 'https://rspress.rs/guide/basic/ssg-md',
  },
  {
    icon: '\uD83D\uDE80',
    title: 'Static Generation',
    desc: 'Outputs pure static HTML. Deploy anywhere — Vercel, Netlify, GitHub Pages, or your own server.',
    link: 'https://rspress.rs/guide/basic/ssg',
  },
  {
    icon: '\uD83D\uDD27',
    title: 'Deeply Extensible',
    desc: 'Customize themes, extend the build pipeline, and shape every layer of your documentation site.',
    link: 'https://rspress.rs/guide/basic/custom-theme',
  },
];

export function HomeLayout() {
  const site = useSite();
  const title = site?.siteData?.title ?? 'My Site';

  return (
    <div className="custom-home">
      {/* Atmospheric background */}
      <div className="custom-home__bg">
        <div className="custom-home__bg-orb custom-home__bg-orb--1" />
        <div className="custom-home__bg-orb custom-home__bg-orb--2" />
        <div className="custom-home__bg-orb custom-home__bg-orb--3" />
      </div>
      <div className="custom-home__grain" />

      {/* Hero */}
      <section className="custom-home__hero">
        <div className="custom-home__hero-content">
          <div className="custom-home__hero-badge">Rspress v2</div>
          <h1 className="custom-home__hero-title">
            Build <em>beautiful</em> docs at the speed of thought
          </h1>
          <p className="custom-home__hero-desc">
            A static site generator powered by Rust toolchains,
            designed for creating elegant documentation with MDX,
            full-text search, and effortless customization.
          </p>
          <div className="custom-home__hero-actions">
            <a href="/guide/start/introduction" className="custom-home__btn custom-home__btn--primary">
              Get Started
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
            <a href="https://github.com/web-infra-dev/rspress" className="custom-home__btn custom-home__btn--secondary">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>

        <div className="custom-home__hero-visual">
          <div className="custom-home__code-window">
            <div className="custom-home__code-titlebar">
              <div className="custom-home__code-dot custom-home__code-dot--red" />
              <div className="custom-home__code-dot custom-home__code-dot--yellow" />
              <div className="custom-home__code-dot custom-home__code-dot--green" />
              <span>rspress.config.ts</span>
            </div>
            <div className="custom-home__code-body">
              <div><span className="code-keyword">import</span> {'{ defineConfig }'} <span className="code-keyword">from</span> <span className="code-string">'@rspress/core'</span>;</div>
              <br />
              <div><span className="code-keyword">export default</span> <span className="code-function">defineConfig</span>({'{'}</div>
              <div>&nbsp;&nbsp;title: <span className="code-string">'{title}'</span>,</div>
              <div>&nbsp;&nbsp;themeConfig: {'{'}</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;socialLinks: [</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'{ '}icon: <span className="code-string">'github'</span>{' }'},</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;],</div>
              <div>&nbsp;&nbsp;{'}'},</div>
              <div>{'}'});</div>
              <br />
              <div><span className="code-comment">// That's it. Start writing docs.</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="custom-home__features">
        <div className="custom-home__features-header">
          <div className="custom-home__features-label">Why Rspress</div>
          <h2 className="custom-home__features-title">
            Everything you need, nothing you don't
          </h2>
        </div>

        <div className="custom-home__features-grid">
          {features.map((f, i) => (
            <a key={i} href={f.link} className="custom-home__feature-card">
              <span className="custom-home__feature-icon">{f.icon}</span>
              <h3 className="custom-home__feature-title">{f.title}</h3>
              <p className="custom-home__feature-desc">{f.desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="custom-home__footer">
        <div className="custom-home__footer-inner">
          <div className="custom-home__footer-text">
            Built with Rspress &middot; Powered by Rust
          </div>
          <div className="custom-home__footer-links">
            <a href="https://rspress.rs" className="custom-home__footer-link">Documentation</a>
            <a href="https://github.com/web-infra-dev/rspress" className="custom-home__footer-link">GitHub</a>
            <a href="https://github.com/web-infra-dev/rspress/issues" className="custom-home__footer-link">Issues</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
