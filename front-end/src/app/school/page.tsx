"use client";
import Image from "next/image";
import styles from "./page.module.css";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stepper,
  Switch,
  useDisclosure,
} from "@chakra-ui/react";
import Header from "@/components/header/header";
import { Providers } from "../providers";
import UserPage from "../student/page";
import { User } from "react-feather";
import Student from "@/components/student/student";
import { getAllStudents } from "../services/student";
import { useRouter } from "next/router";
import Link from "next/link";
import NewStudent from "@/components/newStudent/newStudent";
import { useState } from "react";

const students = [
  {
    name: "Enzo Turano",
    id: 1,
  },
];

export default function Home() {
  const students = getAllStudents();
  const [isOpen, setIsOpen] = useState<boolean>(false);
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
          <div onClick={() => setIsOpen(true)}>
            <NewStudent />
          </div>

          <Modal isOpen={isOpen} onClose={() => console.log("close Modal")}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Adicionar Aluno</ModalHeader>
              <ModalCloseButton onClick={() => setIsOpen(false)} />
              <ModalBody>
                <div className={styles.modal}>
                  <Input placeholder="Nome"></Input>
                  <Input placeholder="Wallet"></Input>
                  <Button onClick={() => setIsOpen(false)} colorScheme="blue">Adicionar</Button>
                </div>
              </ModalBody>
            </ModalContent>
          </Modal>
        </div>
      </Providers>
    </>
  );
}
