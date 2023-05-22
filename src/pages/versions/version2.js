import { useEffect, useState } from "react";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";

import Header from "../../components/header2";
import Carousel from "../../components/carousel";

import styles from "../../components/layout.module.css";
import utilStyles from "../../styles/utils.module.css";
import { images } from "../../../next.config";

const greatLakesShadowNF = localFont({
  src: "../Great-Lakes-Shadow-NF/GreatLakesShadowNF.ttf",
});

const siteTitle = "Radio emisora Stereo97";
const siteDescription =
  "Sintoniza Stereo97 para disfrutar de la mejor música rock nacional e internacional y las últimas tendencias en rock pop, house y electrónica. Stereo97, la número uno.";

export default function Layout2({ children, home }) {
  const images = [
    'url("/images/octavia.jpg")',
    'url("/images/the-weeknd-2016.jpg")',
    'url("/images/vero-perez.png")',
  ];
  const messages = [
    "Artistas nacionales",
    "Artistas internacionales",
    "Últimas tendencias",
  ];

  const [background, setBackground] = useState("");
  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      function changeBg() {
        return images[counter];
      }
      function changeMessage() {
        return messages[counter];
      }
      setBackground(changeBg());
      setMessage(changeMessage());
      if (images && counter === images.length - 1) {
        setCounter(0);
      } else {
        setCounter(counter + 1);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [counter]);

  return (
    <>
      <Head>
        <link rel="icon" href="/images/favicon/favicon.png" />
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
        <meta name="og:title" content={siteTitle} />
        {/* TODO: trabajar twitter cards */}
        {/* Nota: es una por página */}
        {/* <meta name="twitter:card" content="summary_large_image" /> */}
      </Head>
      <div className={styles.fullPage}>
        <Header home />
        <main className={styles.layout}>
          <div
            className={[
              styles.aboveThefold2,
              greatLakesShadowNF.className,
            ].join(" ")}
            id="home"
            style={{ backgroundImage: background }}
          >
            <h1>{message}</h1>
          </div>

          <section className={[styles.section, styles.shows].join(" ")}>
            <Carousel>
              <div className={[styles.whiteText, styles.card].join(" ")}>
                <Image
                  src="/images/day-by-day.jpeg"
                  height={200}
                  width={200}
                  alt="Portada de Day by Day"
                  draggable="false"
                />
                <h3>Day by Day</h3>
                <p>Lunes a viernes</p>
                <p>De 7:00 a 11:00</p>
              </div>
              <div className={[styles.whiteText, styles.card].join(" ")}>
                <Image
                  src="/images/stereografia.jpg"
                  height={200}
                  width={200}
                  alt="Portada de Stereografía"
                  draggable="false"
                />
                <h3>Stereografía</h3>
                <p>Lunes a viernes</p>
                <p>De 11:00 a 15:00</p>
              </div>
              <div className={[styles.whiteText, styles.card].join(" ")}>
                <Image
                  src="/images/showtime.jpg"
                  height={200}
                  width={200}
                  alt="Portada de El Showtime"
                  draggable="false"
                />
                <h3>El ShowTime</h3>
                <p>Lunes a viernes</p>
                <p>De 15:00 a 18:00</p>
              </div>
              <div className={[styles.whiteText, styles.card].join(" ")}>
                <Image
                  src="/images/gravedad-zero.jpeg"
                  height={200}
                  width={200}
                  alt="Portada de Gravedad Zero"
                  draggable="false"
                />
                <h3>Gravedad Zero</h3>
                <p>Domingos</p>
                <p>A las 20:00</p>
              </div>
            </Carousel>
          </section>

          <section id="programacion" className={styles.section}>
            <div
              className={[
                styles.sectionHeader,
                styles.invertColor,
                utilStyles.cluster,
              ].join(" ")}
            >
              <h2>Programación</h2>
            </div>
            <div className={styles.schedule}>
              <div className={styles.scheduleItem}>
                <div>7pm</div>
                <div>The Ace Chart</div>
              </div>
              <div className={styles.scheduleItem}>
                <div>8pm</div>
                <div>EDM</div>
              </div>
              <div className={styles.scheduleItem}>
                <div>9pm</div>
                <div>Los 7 a las 7</div>
              </div>
              <div className={styles.scheduleItem}>
                <div>10pm</div>
                <div>Up Beat</div>
              </div>
            </div>
          </section>
          {/* <section>
          {children}
        </section> */}
          <div className={styles.player}>
            <div className={styles.playerCover}>
              <iframe
                src="https://stream.consultoradas.com/cp/widgets/player/single/?p=8104"
                height="115"
                width="100%"
                frameBorder="no"
              ></iframe>
            </div>
            <div className={styles.playerControls}>
              <iframe
                src="https://stream.consultoradas.com/cp/widgets/player/single/?p=8104"
                height="115"
                width="100%"
                frameBorder="no"
              ></iframe>
            </div>
          </div>
          {!home && (
            <div className={styles.backToHome}>
              <Link href="/">← Back to home</Link>
            </div>
          )}
        </main>
      </div>
    </>
  );
}
