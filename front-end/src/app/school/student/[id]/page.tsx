"use-client";
import Image from "next/image";
import styles from "./page.module.css";
import { Stepper, Switch } from "@chakra-ui/react";
import Header from "@/components/header/header";
import UserPage from "./page";
import { Providers } from "@/app/providers";
import { getStudentById } from "@/app/services/student";
import StudentView from "@/components/studentView/studentView";


export default function Home({ params }: { params: { id: string } }) {
  const id = params.id;
  const student = getStudentById(parseInt(id as string));
  console.log(student);
  return (
    <>
      <Providers>
        <Header name={student.name}></Header>
        <StudentView intitutions={student?.institutions}></StudentView>
      </Providers>
    </>
  );
}
