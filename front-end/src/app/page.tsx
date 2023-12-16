"use-client";
import Image from "next/image";
import styles from "./page.module.css";
import { Providers } from "./providers";
import { Button, Link, Stepper, Switch } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Providers>
        <div className={styles.container}>
        <div className={styles.content}>
          <Link href="./student" width="100%"><Button className={styles.button} colorScheme='blue'>Estudante</Button></Link>
          <Link href="./school" width="100%"><Button className={styles.button} colorScheme='blue'>Organização</Button></Link>
        </div>
        </div>
      </Providers>
    </>
  );
}
