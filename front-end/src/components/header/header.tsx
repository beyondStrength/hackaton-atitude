import Image from "next/image";
import styles from "./header.module.css";
import { ArrowLeft, User } from "react-feather";
import { Divider, Stepper } from "@chakra-ui/react";
import { Providers } from "@/app/providers";
import Link from "next/link";

interface HeaderProps {
  name: string;
  img?: boolean;
  backButton?: boolean
}

export default function Header({
  name,
  img = false,
  backButton = false
}: HeaderProps) {
  return (
    <>
      <Providers>
        <div className={styles.container}>
          {backButton && <Link className={styles.backButton} href={"../"}><ArrowLeft></ArrowLeft></Link>}
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
