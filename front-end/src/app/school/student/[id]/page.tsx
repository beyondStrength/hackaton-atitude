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
import { addCertification, getStudentById } from "@/app/services/student";
import StudentView from "@/components/studentView/studentView";
import { SetStateAction, useState } from "react";

export default function Home({ params }: { params: { id: string } }) {
  const id = params.id;
  const student = getStudentById(parseInt(id as string));
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [certification, setCertification] = useState('')
  const [status, setStatus] = useState('')
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
                <Input value={certification} onChange={(event) => setCertification(event.target.value)} placeholder="Certificação"></Input>
                <Input value={status} onChange={(event) => setStatus(event.target.value)} placeholder="Situação"></Input>
                <Button onClick={() => {
                  addCertification({title: certification, status: status}, 1, 'Nave Rio')
                  setIsOpen(false)
                }} colorScheme="blue">
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
