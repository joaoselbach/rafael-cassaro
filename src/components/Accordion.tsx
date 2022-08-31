import {
  Accordion as ChakraAccordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box
} from '@chakra-ui/react'
import { ReactNode } from 'react'

interface FrequentQuestionsProps {
  title: string
  children: ReactNode
}

export const Accordion = ({ title, children }: FrequentQuestionsProps) => {
  return (
    <ChakraAccordion allowToggle minWidth={[0, 0, 0, 0, 0, 600]} w="100%">
      <AccordionItem
        w="100%"
        bgColor="gray.700"
        borderTop="0"
        borderBottom="0"
        minW={[0, 382, 500, 800]}
      >
        <AccordionButton w="100%">
          <Box
            w="100%"
            minWidth={[0, 400, 450, 450, 500]}
            flex="1"
            py=".75rem"
            textAlign="left"
            fontWeight={500}
            color="gray.300"
            fontSize={['.9rem', '1rem']}
          >
            {title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel fontSize={[".9rem", "1rem"]} color="gray.500" pb={4} maxW={[400, 500, 800]}>
          {children}
        </AccordionPanel>
      </AccordionItem>
    </ChakraAccordion>
  )
}
