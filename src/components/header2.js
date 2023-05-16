import { useEffect } from "react";
import Link from "next/link";
import Image from 'next/image';
import { useRouter } from "next/router";

import styles from './header2.module.css';
import utilStyles from '../styles/utils.module.css';

const Header = (home) => {
  const router = useRouter();
  const currentRoute = router.pathname;

  useEffect(() => {
    window.addEventListener('scroll', () => {
      document.body.style.setProperty('--scroll', (window.scrollY) / (document.body.offsetHeight - window.innerHeight));
    }, false);
  }, []);

  return (
    <header className={[styles.header, styles.fullBleed, utilStyles.cluster, utilStyles.spaceBetween].join(" ")}>
      {home ? (
        <Image
          priority
          src="/images/logo-transparente.png"
          height={50}
          width={100}
          alt="Logo de Stereo 97"
        />
      ) : (
        <Link href="/">
          <Image
            priority
            src="/images/logo-transparente.png"
            height={50}
            width={100}
            alt="Logo de Stereo 97"
          />
        </Link>
      )}
      <nav className={[styles.mainNav, utilStyles.cluster].join(" ")}>
        <Link
          href="/"
          // className={currentRoute === '/' && styles.active}
        >INICIO</Link>
        <Link
          href="#shows"
          // className={currentRoute === '/#shows' && styles.active}
        >SHOWS</Link>
        <Link
          href="#programacion"
          // className={currentRoute === '/#shows' && styles.active}
        >PROGRAMACIÓN</Link>
        {/* <Link href="#shows" className={[currentRoute === '/#programacion' && styles.active, styles.dropdown].join(" ")}>
          <p className={styles.dropdownHeader}>SHOWS</p>
          <div className={styles.dropdownContent}>
            <Link href="#">ShowTime</Link>
            <Link href="#">Day By Day</Link>
            <Link href="#">StereoGrafía</Link>
            <Link href="#">Gravedad Zero</Link>
          </div>
        </Link> */}
      </nav>
      <nav className={styles.social}>
        <Link href="/">
          <Image
            priority
            src="/images/svg-icons/facebook.svg"
            height={24}
            width={24}
            alt="Enlace para perfil de Facebook"
            className={styles.filterInvert}
          />
        </Link>
        <Link href="/">
          <Image
            priority
            src="/images/svg-icons/instagram.svg"
            height={24}
            width={24}
            alt="Enlace para perfil de Instagram"
            className={styles.filterInvert}
          />
        </Link>
        {/* <Link href="/">
          <Image
            priority
            src="/images/svg-icons/youtube.svg"
            height={24}
            width={24}
            alt="Enlace para canal de YouTube"
            className={styles.filterInvert}
          />
        </Link> */}
        {/* <Link href="/">
          <Image
            priority
            src="/images/svg-icons/twitter.svg"
            height={24}
            width={24}
            alt="Enlace para perfil de Twitter"
            className={styles.filterInvert}
          />
        </Link> */}
        <Link href="/">
          <Image
            priority
            src="/images/svg-icons/whatsapp.svg"
            height={24}
            width={24}
            alt="Enlace para escribirnos por WhatsApp"
            className={styles.filterInvert}
          />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
