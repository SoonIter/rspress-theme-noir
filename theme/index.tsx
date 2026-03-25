import './index.css';
import { Layout as OriginalLayout } from '@rspress/core/theme-original';
export * from '@rspress/core/theme-original';
export { HomeLayout } from './components/HomeLayout';

function DocFooterSlot() {
  return (
    <div className="doc-footer-custom">
      <span className="doc-footer-custom__text">
        Built with Rspress
      </span>
      <a
        href="https://github.com/web-infra-dev/rspress"
        className="doc-footer-custom__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Star on GitHub
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 10L10 2M10 2H4M10 2v6" />
        </svg>
      </a>
    </div>
  );
}

export function Layout() {
  return (
    <OriginalLayout
      afterDocFooter={<DocFooterSlot />}
    />
  );
}
