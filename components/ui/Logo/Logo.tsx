import Link from 'next/link';
import Image from 'next/image';
import css from './Logo.module.css';

interface LogoProps {
  className?: string;
}

const Logo = function ({ className }: LogoProps) {
  return (
    <Link className={`${css.logoLink} ${className || ''}`} href="/">
      <Image
        className={css.logoIcon}
        src="/icon-logo.svg"
        alt="Logo Relax Map"
        width={24}
        height={24}
      />
      <span className={css.logoText}>Relax Map</span>
    </Link>
  );
};

export default Logo;
