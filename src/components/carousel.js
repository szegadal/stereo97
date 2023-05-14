import { useMemo, Children, useLayoutEffect, useState } from "react";

import Image from 'next/image';

import styles from './carousel.module.css';


const Carousel = ({children}) => {

  const [carousel, setCarousel] = useState(0)
  const [carouselChildrens, setCarouselChildrens] = useState([])
  const [scrollStyle, setScrollStyle] = useState(styles.scrollBehaviorSmooth)
  const [startX, setStartX] = useState(0)
  const [startScrollLeft, setStartScrollLeft] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const carouselRef = useRef(0);
  const cardRef = useRef(0)

  const [translateX, setTranslateX] = useState(0)

  const slides = useMemo(() => {
    if (children.length === 1) {
      return <li>{children[0]}</li>
    }

    let items = Children.map(children, (child, index) =>  <li key={index}>{child}</li>)

    return [
      <li key={children.length-1}>
        {children[children.length - 1]}
      </li>,
      ...items,
      <li key={children.length + 2}>
        {children[0]}
      </li>
    ]
  },[children])

  useLayoutEffect(() => {
    setTranslateX(carouselRef.current.clientWidth * current )
  }, [])

  useEffect(() => {
    window.addEventListener('mouseup', () => {
      setIsDragging(false)
      setScrollStyle(styles.scrollBehaviorSmooth)
    }, false);
  }, []);

  return (
    <>
      <div className={[styles.sectionHeader, utilStyles.cluster].join(" ")}>
        <h2>Programación</h2>
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
        style={{ transform: `translate3d(${-translateX}px, 0, 0)` }}
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
      >{slides}</ul>
    </>

  )
}