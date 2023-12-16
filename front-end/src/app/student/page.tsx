"use-client";
import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/header/header";
import { Providers } from "../providers";
import {
  Accordion,
  AccordionItem,
  AccordionIcon,
  AccordionButton,
  AccordionPanel,
  Stepper,
  Step,
  StepIndicator,
  StepStatus,
  StepIcon,
  StepNumber,
  StepTitle,
  StepDescription,
  StepSeparator,
  Box,
} from "@chakra-ui/react";
import StudentView from "@/components/studentView/studentView";
import { getStudentById } from "../services/student";

export default function UserPage() {
  const student = getStudentById(2);
  return (
    <>
      <Header img name={student.name}></Header>
      <StudentView intitutions={student.institutions} />
    </>
  );
}
