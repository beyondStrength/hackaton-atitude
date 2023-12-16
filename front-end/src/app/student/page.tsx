"use client";
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

export default function UserPage() {
  const institutions = [
    {
      name: "Afonso Pena",
      Certification: [
        {
          title: "Sexto",
          status: "Aprovado",
        },
        {
          title: "Sétimo",
          status: "Aprovado",
        },
        {
          title: "Oitavo",
          status: "Aprovado",
        },
        {
          title: "Nono",
          status: "Aprovado",
        },
      ],
    },
    {
      name: "Nave Rio",
      Certification: [
        {
          title: "Primeiro",
          status: "Aprovado",
        },
        {
          title: "Segundo",
          status: "Cursando",
        },
        {
          title: "Terceiro",
          status: "A seguir",
        },
      ],
    },
  ];
  return (
    <>
      <StudentView intitutions={institutions}/>
    </>
  );
}
