"use-client";
import Image from "next/image";
import styles from "./page.module.css";
import { Providers } from "./providers";
import { Stepper, Switch } from "@chakra-ui/react";
import Header from "../components/header/header";
import UserPage from "./student/page";

export default function Home() {
  return (
    <>
      <Providers>
        <Header name="Enzo Turano"></Header>
        <div>
          <UserPage>
            
          </UserPage>
        </div>
      </Providers>
    </>
  );
}
