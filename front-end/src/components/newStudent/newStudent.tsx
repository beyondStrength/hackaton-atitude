'use client'
import { PlusCircle } from "react-feather";
import styles from "./newStudent.module.css"

export default function NewStudent() {
  return (
    <div className={styles.card}>
      <PlusCircle width={50} height={50} />
      <p className={styles.student}>Novo Aluno</p>
    </div>
  );
}
