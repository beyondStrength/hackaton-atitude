'use client'
import Image from "next/image";
import styles from "./header.module.css";
import { User } from "react-feather";
import { Divider, Stepper } from "@chakra-ui/react";
import { Providers } from "@/app/providers";

interface HeaderProps {
  name: string;
  img: boolean;
}

export default function Header({
  name,
  img = false,
}: {
  name: string;
  img?: boolean;
}) {
  return (
    <>
      <Providers>
        <div className={styles.container}>
          {img && (
            <div className={styles.userPicture}>
              <User width={50} height={50} />
            </div>
          )}
          <p className={styles.userName}>{name}</p>
        </div>
        <Divider borderWidth={2} />
      </Providers>
    </>
  );
}
