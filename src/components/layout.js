import { useState, useEffect, useRef } from 'react';

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';

import Header from './header'
import Carousel from './carousel'
import Card from './card'

const siteTitle = 'Radio emisora Stereo97'
const siteDescription = "Sintoniza Stereo97 para disfrutar de la mejor música rock nacional e internacional y las últimas tendencias en rock pop, house y electrónica. Stereo97, la número uno."
const shows = [
  {
    id: 91,
    title: "Day By Day",
    dayOnAir: "Lunes a viernes",
    hourOnAir: "De 8:00 a 11:00",
    imageText: "Portada de Day by Day",
    imageUrl: "/images/day-by-day.jpg",
    isDraggable: false
  },
  {
    id: 92,
    title: "StereoGrafía",
    dayOnAir: "Lunes a viernes",
    hourOnAir: "De 11:00 a 15:00",
    imageText: "Portada de Stereografía",
    imageUrl: "/images/stereografia.jpg",
    isDraggable: false
  },
  {
    id: 93,
    title: "El ShowTime",
    dayOnAir: "Lunes a viernes",
    hourOnAir: "De 15:00 a 18:00",
    imageText: "Portada de ShowTime",
    imageUrl: "/images/showtime.jpg",
    isDraggable: false
  },
  {
    id: 94,
    title: "Gravedad Zero",
    dayOnAir: "Domingos",
    hourOnAir: "A las 20:00",
    imageText: "Portada de Gravedad Zero",
    imageUrl: "/images/gravedad-zero.jpeg",
    isDraggable: false
  }
]

export default function Layout({ children, home }) {

  return (
    <>
      {children}
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
        <meta name="og:title" content={siteTitle} />
        {/* TODO: trabajar twitter cards */}
        {/* Nota: es una por página */}
        {/* <meta name="twitter:card" content="summary_large_image" /> */}
      </Head>
      <main className={styles.layout}>
        <Header home/>
        <div className={styles.aboveThefold} id="home">
          <div className={[styles.heroContent, utilStyles.stack].join(" ")}>
            <hgroup className={utilStyles.stack}>
              <h1>
                Tus artistas favoritos <span>en un solo lugar</span>
              </h1>
              {/* <h2>
                Sólo en la número 1
              </h2> */}
            </hgroup>
          </div>
          <Image
            priority
            src="/images/logo-transparente.png"
            height={150}
            width={300}
            alt="Logo de Stereo 97"
            // className={utilStyles.filterGrayscale}
          />
          {/* <div className={styles.heroCallToAction}>Sintoniza FM 97.3</div> */}

        </div>

        <section className={[styles.section, styles.shows].join(" ")} >
            <Carousel>
              <div className={[styles.whiteText,styles.card].join(" ")}>
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
          <div className={[styles.sectionHeader, styles.invertColor, utilStyles.cluster].join(" ")}>
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
            <iframe src="https://stream.consultoradas.com/cp/widgets/player/single/?p=8104" height="115" width="100%" frameBorder="no"></iframe>
          </div>
          <div className={styles.playerControls}>
            <iframe src="https://stream.consultoradas.com/cp/widgets/player/single/?p=8104" height="115" width="100%" frameBorder="no"></iframe>
          </div>
        </div>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">← Back to home</Link>
          </div>
        )}
      </main>
    </>
  );
}