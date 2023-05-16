import { useEffect } from "react";
import Link from "next/link";
import Image from 'next/image';
import { useRouter } from "next/router";

import styles from './header.module.css';
import utilStyles from '../styles/utils.module.css';

export default function Card (props) {

  return (
    <div className={[utilStyles.whiteText, utilStyles.stack].join(" ")}>
      <Image
        src={props.src}
        height={200}
        width={200}
        alt={props.alt}
        draggable={props.draggable}
      />
      <h3>{props.title}</h3>
      <p>{props.dayOnAir}</p>
      <p>{props.hourOnAir}</p>
    </div>
  );
};
