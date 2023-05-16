import { useState, useEffect, useMemo, useRef, useLayoutEffect, Children } from "react";

import Image from 'next/image';

import styles from './carousel.module.css';
import utilStyles from '../styles/utils.module.css';


export default function Carousel({ children }) {

  const [startScrollLeft, setStartScrollLeft] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [carousel, setCarousel] = useState(0);


  const [scrollStyle, setScrollStyle] = useState(styles.scrollBehaviorSmooth);
  const [current, setCurrent] = useState(1)
  const carouselRef = useRef(0);
  const childRef = useRef(0);

  // Constants
  const slideDirectionForward = true;
  let itemsPerView = carouselRef.current.offsetWidth / childRef.current.offsetWidth

  const changeSlide = (slideDirectionForward) => {
    carouselRef.current.style.transitionDuration = "400ms"
    if (slideDirectionForward) {
      carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth / itemsPerView
    } else {
      carouselRef.current.scrollLeft += carouselRef.current.offsetWidth / itemsPerView
    }
  };

  const handleScroll = (event) => {
    console.log(carouselRef.current.width)
  }

  const slides = useMemo(() => {
    // Si solo es un elemento, renderizamos sin más
    if (children.length === 1) {
      return <li>{children[0]}</li>;
    }

    // Creamos la lista de slides
    const items = Children.map(children, (child, index) => {
      // Creamos un ref para el primer ítem. Así accederemos a su tamaño
      if (index === 0) {
        return <li key={index} ref={childRef}>{child}</li>
      }
      return <li key={index}>{child}</li>
    })

    // Creamos los slides que irán a la izquierda del primer slide
    const lastItems = Children.map(children, (child, index) => {
      if (index > children.length - itemsPerView - 1) {
        return <li key={index + itemsPerView}>{child}</li>
      }
    })

    const firstItems = Children.map(children, (child, index) => {
      if (index < itemsPerView) {
        return <li key={index + children.length + itemsPerView}>{child}</li>
      }
    })

    return [
      // Renderizamos los últimos slides. Key es +index para que sea única.
      ...lastItems,
      // Renderizamos todos los slides
      ...items,
      // Renderizamos el primer slide. Key es +2 para que no choque con el +1 del primer slide renderizado.
      ...firstItems
    ];
  }, [children, itemsPerView]);

  // Para posicionar el primer slide a la vista
  useLayoutEffect(() => {
    carouselRef.current.scrollLeft = carouselRef.current.offsetWidth
    setCurrent(itemsPerView)
  }, [itemsPerView]);

  useEffect(() => {
    window.addEventListener('mouseup', () => {
      setIsDragging(false);
      setScrollStyle(styles.scrollBehaviorSmooth);
    }, false);
  }, []);


  return (
    <>
      <div className={[styles.carouselHeader, utilStyles.cluster].join(" ")}>
        <h2>Programación</h2>
        <Image
          src="/images/svg-icons/caret-circle-left-thin-svgrepo-com.svg"
          height={48}
          width={48}
          alt=""
          id="carouselCaretLeft"
          onClick={() => {
            changeSlide(slideDirectionForward);
          } } />
        <Image
          src="/images/svg-icons/caret-circle-right-thin-svgrepo-com.svg"
          height={48}
          width={48}
          alt=""
          id="carouselCaretRight"
          onClick={() => {
            changeSlide(!slideDirectionForward);
          } } />
      </div>
      <ul
        className={[styles.carousel, scrollStyle].join(" ")}
        ref={carouselRef}
        onScroll={() => {
          if (carouselRef.current.scrollLeft < (carouselRef.current.offsetWidth / itemsPerView)*0.1) {
            console.log('first')
            carouselRef.current.scrollLeft = carouselRef.current.offsetWidth + carouselRef.current.offsetWidth / itemsPerView
            setScrollStyle(styles.scrollBehaviorAuto)
          }
          if (carouselRef.current.scrollLeft >= (carouselRef.current.scrollWidth - carouselRef.current.offsetWidth)*0.99) {
            carouselRef.current.scrollLeft = carouselRef.current.offsetWidth
            setScrollStyle(styles.scrollBehaviorAuto)
          }
        }}
        onMouseEnter={() => setScrollStyle(styles.scrollBehaviorAuto)}
        onMouseMove={(event) => {
          setScrollStyle(styles.scrollBehaviorAuto);
          if (!isDragging) return;
          carouselRef.current.scrollLeft = carousel;
          setCarousel(startScrollLeft - (event.clientX - startX));
        } }
        onMouseDown={(event) => {
          setIsDragging(true);
          setStartX(event.clientX);
          setStartScrollLeft(carouselRef.current.scrollLeft);
        } }
      >{slides}</ul>
    </>

  );
}