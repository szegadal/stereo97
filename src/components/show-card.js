import Image from "next/image"
import styles from "../components/layout.module.css"

export function ShowCard(props) {
  return (
    <div className={[styles.whiteText, styles.card].join(" ")}>
      
      <Image
        src={props.imageUrl}
        height={200}
        width={200}
        alt={props.imageText}
        draggable={props.isDraggable}
      />
      <h3>{props.title}</h3>
      <p>{props.dayOnAir}</p>
      <p>{props.hourOnAir}</p>
    </div>
  )
}