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
  ModalHeader,
  ModalOverlay,
  Stepper,
  Switch,
} from "@chakra-ui/react";
import Header from "@/components/header/header";
import UserPage from "./page";
import { Providers } from "@/app/providers";
import { getStudentById } from "@/app/services/student";
import StudentView from "@/components/studentView/studentView";
import { useState } from "react";

export default function Home({ params }: { params: { id: string } }) {
  const id = params.id;
  const student = getStudentById(parseInt(id as string));
  const [isOpen, setIsOpen] = useState<boolean>(false);
  console.log(student);
  return (
    <>
      <Providers>
        <Header backButton name={student.name}></Header>
        <StudentView intitutions={student?.institutions}></StudentView>
        <div
          onClick={() => setIsOpen(true)}
          className={styles.addCertification}
        >
          <Button>Nova Certificação</Button>
        </div>

        <Modal isOpen={isOpen} onClose={() => console.log("close Modal")}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Adicionar Certificação</ModalHeader>
            <ModalCloseButton onClick={() => setIsOpen(false)} />
            <ModalBody>
              <div className={styles.modal}>
                <Input placeholder="Certificação"></Input>
                <Input placeholder="Situação"></Input>
                <Button onClick={() => setIsOpen(false)} colorScheme="blue">
                  Adicionar
                </Button>
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Providers>
    </>
  );
}
