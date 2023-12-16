import Image from "next/image";
import styles from "./header.module.css";
import { User } from "react-feather";
import { Divider, Stepper } from "@chakra-ui/react";
import { Providers } from "@/app/providers";

export default function Header() {
  return (
    <>
      <Providers>
        <div className={styles.container}>
          <div className={styles.userPicture}>
            <User width={50} height={50} />
          </div>
          <p className={styles.userName}>Enzo Turano</p>
        </div>
        <Divider />
      </Providers>
    </>
  );
}
