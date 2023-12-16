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
} from "@chakra-ui/react";
import styles from "./studentView.module.css";
import { FC } from "react";
import { institution } from "@/app/school/student/[id]/page";

interface StudentViewProps {
  intitutions: institution[];
}

const StudentView: FC<StudentViewProps> = ({ intitutions }) => {
  return (
    <>
      <Providers>
        <div>
          <p className={styles.schoolType}>Instituições</p>
        </div>
        {intitutions.map((data) => {
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
};

export default StudentView;