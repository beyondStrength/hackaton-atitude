'use client'
import { Providers } from "@/app/providers";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
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
  border,
} from "@chakra-ui/react";
import styles from "./studentView.module.css";
import { FC } from "react";
import { institution } from "@/app/services/student";
interface StudentViewProps {
  intitutions: institution[];
}

const StudentView: FC<StudentViewProps> = ({ intitutions }) => {
  return (
    <>
      <Providers>
        <div className={styles.content}>
          <div>
            <p className={styles.institution}>Instituições</p>
          </div>
          {intitutions.map((data) => {
            const stepIndex = data.Certification.filter(x => x.status == 'Aprovado').length
            return (
              <>
                <Box borderWidth={2} borderRadius={15} marginBottom={5}>
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
                          index={stepIndex}
                          orientation="vertical"
                          height="400px"
                          gap={0}
                          marginLeft={6}
                        >
                          {data.Certification.map((step, index) => (
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
                </Box>
              </>
            );
          })}
        </div>
      </Providers>
    </>
  );
};

export default StudentView;