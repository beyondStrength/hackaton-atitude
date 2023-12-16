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

enum Organization {
  AFONSO = 1,
  NAVE = 2,
}

interface level {
  institutions: institution[];
}

interface institution {
  name: string;
  Series: Array<serie>;
}

interface serie {
  title: string;
  status: string;
}

export default function UserPage() {
  const level: level = {
    institutions: [
      {
        name: "Afonso Pena",
        Series: [
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
        Series: [
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
    ],
  };
  return (
    <>
      <Providers>
        <div>
          <p className={styles.schoolType}>Instituições</p>
        </div>
        {level.institutions.map((data) => {
          return (
            <>
              <Accordion allowMultiple allowToggle>
                <AccordionItem>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      {data.name}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>

                  <AccordionPanel>
                    <Stepper
                      index={4}
                      orientation="vertical"
                      height="400px"
                      gap={0}
                      marginLeft={6}
                    >
                      {data.Series.map((step, index) => (
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
                            <StepDescription>{step.status}</StepDescription>
                          </Box>
                          <StepSeparator />
                        </Step>
                      ))}
                    </Stepper>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </>
          );
        })}
      </Providers>
    </>
  );
}
