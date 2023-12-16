"use-client";
import Image from "next/image";
import styles from "./page.module.css";
import { Stepper, Switch } from "@chakra-ui/react";
import Header from "@/components/header/header";
import { Providers } from "../providers";
import UserPage from "../student/page";
import { User } from "react-feather";
import Student from "@/components/student/student";
import { getAllStudents } from "../services/student";
import { useRouter } from "next/router";
import Link from "next/link";

const students = [
  {
    name: "Enzo Turano",
    id: 1,
  },
];

export default function Home() {
  const students = getAllStudents();
  return (
    <>
      <Providers>
        <Header name="NAVE Rio"></Header>
        <div className={styles.content}>
          {students.map((student) => {
            return (
              <>
                <Link href={"/school/student/" + student.id}>
                  <Student name={student.name}></Student>
                </Link>
              </>
            );
          })}
        </div>
      </Providers>
    </>
  );
}
