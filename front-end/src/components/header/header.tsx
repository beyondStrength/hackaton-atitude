import Image from "next/image";
import styles from "./header.module.css";
import { User } from "react-feather";
import { Divider, Stepper } from "@chakra-ui/react";
import { Providers } from "@/app/providers";

interface HeaderProps {
  name: string;
}

export default function Header({name}: {name: string}) {
  return (
    <>
      <Providers>
        <div className={styles.container}>
          <div className={styles.userPicture}>
            <User width={50} height={50} />
          </div>
          <p className={styles.userName}>{name}</p>
        </div>
        <Divider />
      </Providers>
    </>
  );
}
