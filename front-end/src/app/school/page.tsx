"use-client";
import Image from "next/image";
import styles from "./page.module.css";
import { Stepper, Switch } from "@chakra-ui/react";
import Header from "@/components/header/header";
import { Providers } from "../providers";
import UserPage from "../student/page";

const students = [
  {
    name: 'Enzo Turano',
    id: 1
  }
]

export default function Home() {
  ``
  return (
    <>
      <Providers>
        <Header name="test"></Header>
        <div>
          
        </div>
      </Providers>
    </>
  );
}
