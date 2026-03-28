import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import css from './Footer.module.css';
import Logo from '@/components/ui/Logo/Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <div className={css.content}>
          <Logo className={css.logoCustom} />
          <div className={css.socials}>
            <a href="https://facebook.com" target="_blank">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank">
              <FaInstagram />
            </a>
            <a href="https://x.com" target="_blank">
              <FaXTwitter />
            </a>
            <a href="https://youtube.com" target="_blank">
              <FaYoutube />
            </a>
          </div>
          <nav className={css.nav}>
            <Link href="/" className={css.navLink}>
              Головна
            </Link>
            <Link href="/locations" className={css.navLink}>
              Місця відпочинку
            </Link>
          </nav>
        </div>
        <hr className={css.line} />
        <p className={css.copyright}>© {currentYear} Природні Мандри. Усі права захищені.</p>
      </div>
    </footer>
  );
}
