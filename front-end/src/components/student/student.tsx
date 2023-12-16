'use client'
import { User } from "react-feather";
import styles from "./student.module.css";

export default function Student({ name }: { name: string }) {
  return (
    <div className={styles.card}>
      <User width={50} height={50} />
      <p className={styles.student}>{name}</p>
    </div>
  );
}
