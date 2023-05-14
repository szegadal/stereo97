import { useState, useEffect, useRef } from 'react';

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';

import Header from './header';

const name = 'Your Name'
export const siteTitle = 'Radio emisora Stereo97'

export default function Layout({ children, home }) {

  const [carousel, setCarousel] = useState(0)
  const [carouselChildrens, setCarouselChildrens] = useState([])
  const [scrollStyle, setScrollStyle] = useState(styles.scrollBehaviorSmooth)
  const [startX, setStartX] = useState(0)
  const [startScrollLeft, setStartScrollLeft] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const carouselRef = useRef(0);
  const cardRef = useRef(0)

  useEffect(() => {
    window.addEventListener('mouseup', (event) => {
      setIsDragging(false)
      setScrollStyle(styles.scrollBehaviorSmooth)
    }, false);
  }, []);

  // useEffect(() => {
  //   let cardPerView = Math.round(carouselRef.current.offsetWidth / cardRef.current.offsetWidth)
  //   setCarouselChildrens(Object.entries(carouselRef.current.children))
  //   setCarouselChildrens(Object.entries(carouselRef.current.children).slice(-cardPerView).reverse().forEach(card => {
  //     carouselRef.current.insertAdhacentHTML("afterbegin", card.outerHTML)
  //   }))

  //   // setCarouselChildrens(Object.entries(carouselRef.current.children).slice(cardPerView).forEach(card => {
  //   //   carouselRef.insertAdhacentHTML("beforeend", card.outerHTML)
  //   // }))
  // }, [])

  useEffect(() => {
    console.log(carouselChildrens)
    console.log(carouselRef)
  },[carouselChildrens, carouselRef])

  return (
    <main className={ home? styles.homeLayout : styles.container}>
      <Head>
        <link rel="icon" href="/images/favicon/favicon.png" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* favicons */}
        {/* TODO: Mejorar el favicon */}
        {/* <link rel="apple-touch-icon" sizes="57x57" href="/images/favicon/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/images/favicon/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/images/favicon/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/images/favicon/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/images/favicon/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/images/favicon/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/images/favicon/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/images/favicon/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192"  href="/images/favicon/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/images/favicon/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/images/favicon/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" /> */}
      </Head>
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

      <section id="shows" className={[styles.section,styles.shows].join(" ")}>
        <div className={[styles.sectionHeader, utilStyles.cluster].join(" ")}>
          <h2>Shows</h2>
          <Image
            src="/images/svg-icons/caret-circle-left-thin-svgrepo-com.svg"
            height={48}
            width={48}
            alt=""
            id="carouselCaretLeft"
            onClick={() => {
              carouselRef.current.scrollLeft = -cardRef.current.offsetWidth
            }}
          />
          <Image
            src="/images/svg-icons/caret-circle-right-thin-svgrepo-com.svg"
            height={48}
            width={48}
            alt=""
            id="carouselCaretRight"
            onClick={() => {
              carouselRef.current.scrollLeft = cardRef.current.offsetWidth
            }}
          />
        </div>

        <ul className={[styles.carousel, scrollStyle].join(" ")}
          ref={carouselRef}
          onMouseEnter={() => setScrollStyle(styles.scrollBehaviorAuto)}
          onMouseMove={(event) => {
            setScrollStyle(styles.scrollBehaviorAuto)
            if (!isDragging) return
            carouselRef.current.scrollLeft = carousel
            setCarousel(startScrollLeft - (event.clientX - startX))
          }}
          onMouseDown={(event) => {
            setIsDragging(true)
            setStartX(event.clientX)
            setStartScrollLeft(carouselRef.current.scrollLeft)
          }}
        >
          <li className={styles.card} ref={cardRef}>
            <Image
              src="/images/day-by-day.jpg"
              height={200}
              width={200}
              alt="Portada de Day by Day"
              draggable="false"
            />
            <h3>Day By Day</h3>
            <p>Lunes a viernes</p>
            <p>De <time dateTime="8:00">8:00</time> a <time dateTime="11:00">11:00</time></p>
          </li>
          <li className={styles.card}>
            <Image
              src="/images/stereografia.jpg"
              height={200}
              width={200}
              alt="Portada de Stereografía"
              draggable="false"
            />
            <h3>StereoGrafía</h3>
            <p>Lunes a viernes</p>
            <p>De <time dateTime="11:00">11:00</time> a <time dateTime="15:00">15:00</time></p>
          </li>
          <li className={styles.card}>
            <Image
              src="/images/showtime.jpg"
              height={200}
              width={200}
              alt="Portada de ShowTime"
              draggable="false"
            />
            <h3>El ShowTime</h3>
            <p>Lunes a viernes</p>
            <p>De <time dateTime="15:00">15:00</time> a <time dateTime="18:00">18:00</time></p>
          </li>
          <li className={styles.card}>
            <Image
              src="/images/gravedad-zero.jpeg"
              height={200}
              width={200}
              alt="Portada de ShowTime"
              draggable="false"
            />
            <h3>Gravedad Zero</h3>
            <p>Domingos</p>
            <p><time dateTime="20:00">20:00</time></p>
          </li>
        </ul>
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
      {/* <main> */}
        {/* {children} */}
      {/* </main> */}
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
  );
}