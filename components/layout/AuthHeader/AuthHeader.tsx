import Link from 'next/link';
import css from './AuthHeader.module.css';

export default function AuthHeader() {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <Link href="/" className={css.logo} aria-label="Relax Map — На головну">
          <svg className={css.logoIcon} width="129" height="36" viewBox="0 0 133 32">
            <use href="/icons.svg#icon-logo" />
          </svg>
        </Link>
      </nav>
    </header>
  );
}
