"use-client";
import Image from "next/image";
import styles from "./page.module.css";
import { Stepper, Switch } from "@chakra-ui/react";
import Header from "@/components/header/header";
import { Providers } from "../providers";
import UserPage from "../student/page";

export default function Home() {
  return (
    <>
      <Providers>
        <Header></Header>
        <div>
          
        </div>
      </Providers>
    </>
  );
}
