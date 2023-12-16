"use-client";
import Image from "next/image";
import styles from "./page.module.css";
import {
  Switch,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
  Box,
  chakra,
  Accordion,
} from "@chakra-ui/react";
import Header from "@/components/header/header";
import { Providers } from "../providers";

enum Organization {
  AFONSO = 1,
  NAVE = 2,
}

const series = [
  {
    title: "Sexto",
    description: "Aprovado",
    organization: Organization.AFONSO,
  },
  {
    title: "Sétimo",
    description: "Aprovado",
    organization: Organization.AFONSO,
  },
  {
    title: "Oitavo",
    description: "Aprovado",
    organization: Organization.AFONSO,
  },
  { title: "Nono", description: "Aprovado", organization: Organization.AFONSO },
  {
    title: "Primeiro",
    description: "Aprovado",
    organization: Organization.NAVE,
  },
  {
    title: "Segundo",
    description: "Aprovado",
    organization: Organization.NAVE,
  },
  {
    title: "Terceiro",
    description: "Cursando",
    organization: Organization.NAVE,
  },
];

export default function UserPage() {
  return (
    <>
      <Providers>
        <div>
          <p className={styles.schoolType}>Ensino Fundamental</p>
        </div>
        <div>
          <Accordion>
            <p className={styles.school}>Afonso Pena</p>
            <Stepper
              index={4}
              orientation="vertical"
              height="400px"
              gap={0}
              marginLeft={6}
              marginTop={20}
            >
              {series.map((step, index) => (
                <Step key={index}>
                  <StepIndicator>
                    <StepStatus
                      complete={<StepIcon />}
                      incomplete={<StepNumber />}
                      active={<StepNumber />}
                    />
                  </StepIndicator>

                  <Box flexShrink="0">
                    <StepTitle>{step.title}</StepTitle>
                    <StepDescription>{step.description}</StepDescription>
                  </Box>

                  <StepSeparator />
                </Step>
              ))}
            </Stepper>
          </Accordion>
        </div>
        <div>
          <p className={styles.schoolType}>Ensino Médio</p>
        </div>
        <div>
          <p className={styles.school}>NAVE Rio</p>
        </div>
        <Stepper
          index={0}
          orientation="vertical"
          height="400px"
          gap={0}
          marginLeft={6}
          marginTop={20}
        >
          {series.map((step, index) => (
            <Step key={index}>
              <StepIndicator>
                <StepStatus
                  complete={<StepIcon />}
                  incomplete={<StepNumber />}
                  active={<StepNumber />}
                />
              </StepIndicator>

              <Box flexShrink="0">
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </Box>

              <StepSeparator />
            </Step>
          ))}
        </Stepper>
      </Providers>
    </>
  );
}
